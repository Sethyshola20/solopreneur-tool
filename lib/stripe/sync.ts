import { db } from '@/lib/db/drizzle';
import { products, subscriptions, stripeAccounts } from '@/lib/db/schema';
import { getStripeClient } from './client';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export async function syncProducts(accountId: string, userId: string) {
    const stripe = await getStripeClient(accountId);

    // Fetch products and prices in parallel (a product may have several prices,
    // e.g. monthly + yearly, and often has no `default_price` set).
    const [stripeProducts, stripePrices] = await Promise.all([
        stripe.products.list({ limit: 100, active: true }),
        stripe.prices.list({ limit: 100, active: true }),
    ]);

    const pricesByProduct = new Map<string, typeof stripePrices.data>();
    for (const price of stripePrices.data) {
        const productId = typeof price.product === 'string' ? price.product : price.product.id;
        const bucket = pricesByProduct.get(productId);
        if (bucket) bucket.push(price);
        else pricesByProduct.set(productId, [price]);
    }

    // Build one row per active price so every tier is represented. Products with
    // no active price still get a single row (price left null).
    const rows = stripeProducts.data.flatMap((product) => {
        const prices = (pricesByProduct.get(product.id) ?? []).sort(
            (a, b) => (a.unit_amount ?? 0) - (b.unit_amount ?? 0)
        );

        const build = (price: (typeof stripePrices.data)[number] | null) => ({
            id: nanoid(),
            userId,
            stripeAccountId: accountId,
            stripeProductId: product.id,
            stripePriceId: price?.id ?? null,
            // Prefer the price nickname (e.g. "Cockpit Yearly") so multi-price
            // products stay distinguishable; fall back to the product name.
            name: price?.nickname || product.name,
            description: product.description,
            price: price?.unit_amount != null ? (price.unit_amount / 100).toString() : null,
            currency: (price?.currency ?? 'eur').toUpperCase(),
            isRecurring: price?.type === 'recurring',
            billingPeriod: price?.recurring?.interval ?? null,
            isActive: product.active,
            metadata: JSON.stringify(product.metadata),
        });

        return prices.length > 0 ? prices.map(build) : [build(null)];
    });

    // Replace the account's product rows with a fresh snapshot from Stripe in a
    // single atomic batch (the neon-http driver has no interactive transactions).
    // `subscriptions.productId` is `set null` on delete and is not populated by
    // the sync, so replacing rows is safe.
    const deleteQuery = db.delete(products).where(eq(products.stripeAccountId, accountId));
    const touchQuery = db.update(stripeAccounts)
        .set({ lastSyncAt: new Date() })
        .where(eq(stripeAccounts.id, accountId));

    if (rows.length === 0) {
        await db.batch([deleteQuery, touchQuery]);
        return [];
    }

    const insertQuery = db.insert(products).values(rows).returning();
    const [, inserted] = await db.batch([deleteQuery, insertQuery, touchQuery]);
    return inserted;
}

export async function syncSubscriptions(accountId: string, userId: string) {
    const stripe = await getStripeClient(accountId);

    const stripeSubscriptions = await stripe.subscriptions.list({ limit: 100 });

    const syncedSubscriptions = [];

    for (const sub of stripeSubscriptions.data) {
        const [existingSub] = await db.select()
            .from(subscriptions)
            .where(eq(subscriptions.stripeSubscriptionId, sub.id))
            .limit(1);

        const subData = {
            userId,
            stripeAccountId: accountId,
            stripeSubscriptionId: sub.id,
            stripeCustomerId: sub.customer as string,
            status: sub.status,
            currentPeriodStart: new Date(sub.start_date * 1000),
            currentPeriodEnd: sub.ended_at ? new Date(sub.ended_at * 1000) : null,
            cancelAtPeriodEnd: sub.cancel_at_period_end,
            canceledAt: sub.canceled_at ? new Date(sub.canceled_at * 1000) : null,
            amount: sub.items.data[0]?.price.unit_amount
                ? (sub.items.data[0].price.unit_amount / 100).toString()
                : null,
            currency: sub.currency.toUpperCase(),
            metadata: JSON.stringify(sub.metadata),
            updatedAt: new Date(),
        };

        if (existingSub) {
            const [updated] = await db.update(subscriptions)
                .set(subData)
                .where(eq(subscriptions.id, existingSub.id))
                .returning();

            syncedSubscriptions.push(updated);
        } else {
            const [created] = await db.insert(subscriptions).values({
                id: nanoid(),
                ...subData,
            }).returning();

            syncedSubscriptions.push(created);
        }
    }

    return syncedSubscriptions;
}
