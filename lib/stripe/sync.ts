import { db } from '@/lib/db/drizzle';
import { products, subscriptions, stripeAccounts } from '@/lib/db/schema';
import { getStripeClient } from './client';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export async function syncProducts(accountId: string, userId: string) {
    const stripe = await getStripeClient(accountId);

    // Fetch products from Stripe
    const stripeProducts = await stripe.products.list({ limit: 100, active: true });

    const syncedProducts = [];

    for (const product of stripeProducts.data) {
        // Get default price
        const defaultPrice = product.default_price
            ? await stripe.prices.retrieve(product.default_price as string)
            : null;

        // Upsert product
        const [existingProduct] = await db.select()
            .from(products)
            .where(eq(products.stripeProductId, product.id))
            .limit(1);

        if (existingProduct) {
            // Update
            const [updated] = await db.update(products)
                .set({
                    name: product.name,
                    description: product.description,
                    price: defaultPrice ? (defaultPrice.unit_amount! / 100).toString() : null,
                    currency: defaultPrice?.currency?.toUpperCase() || 'EUR',
                    isRecurring: defaultPrice?.type === 'recurring',
                    billingPeriod: defaultPrice?.recurring?.interval || null,
                    stripePriceId: defaultPrice?.id || null,
                    isActive: product.active,
                    metadata: JSON.stringify(product.metadata),
                    updatedAt: new Date(),
                })
                .where(eq(products.id, existingProduct.id))
                .returning();

            syncedProducts.push(updated);
        } else {
            // Insert
            const [created] = await db.insert(products).values({
                id: nanoid(),
                userId,
                stripeAccountId: accountId,
                stripeProductId: product.id,
                stripePriceId: defaultPrice?.id || null,
                name: product.name,
                description: product.description,
                price: defaultPrice ? (defaultPrice.unit_amount! / 100).toString() : null,
                currency: defaultPrice?.currency?.toUpperCase() || 'EUR',
                isRecurring: defaultPrice?.type === 'recurring',
                billingPeriod: defaultPrice?.recurring?.interval || null,
                isActive: product.active,
                metadata: JSON.stringify(product.metadata),
            }).returning();

            syncedProducts.push(created);
        }
    }

    // Update last sync time
    await db.update(stripeAccounts)
        .set({ lastSyncAt: new Date() })
        .where(eq(stripeAccounts.id, accountId));

    return syncedProducts;
}

export async function syncSubscriptions(accountId: string, userId: string) {
    const stripe = await getStripeClient(accountId);

    // Fetch subscriptions from Stripe
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
