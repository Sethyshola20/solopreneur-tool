import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/db/drizzle';
import { factures, facturesItems, clients, stripeAccounts } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { nanoid } from 'nanoid';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-11-17.clover",
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('stripe-signature');

    if (!signature) {
        return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    try {
        switch (event.type) {
            case 'invoice.created':
            case 'invoice.updated':
            case 'invoice.finalized':
                await handleInvoiceEvent(event.data.object as Stripe.Invoice);
                break;

            case 'invoice.paid':
                await handleInvoicePaid(event.data.object as Stripe.Invoice);
                break;

            case 'invoice.payment_failed':
                await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}

async function handleInvoiceEvent(invoice: Stripe.Invoice) {
    // Find the Stripe account this invoice belongs to
    const stripeAccount = await db
        .select()
        .from(stripeAccounts)
        .where(eq(stripeAccounts.stripeAccountId, invoice.account as string))
        .limit(1);

    if (!stripeAccount.length) {
        console.log('Stripe account not found for invoice:', invoice.id);
        return;
    }

    const account = stripeAccount[0];

    // Find or create client based on Stripe customer
    let client = await db
        .select()
        .from(clients)
        .where(
            and(
                eq(clients.userId, account.userId),
                eq(clients.email, invoice.customer_email || '')
            )
        )
        .limit(1);

    let clientId: string;

    if (!client.length && invoice.customer_email) {
        // Create new client from Stripe customer
        const [newClient] = await db
            .insert(clients)
            .values({
                id: nanoid(),
                userId: account.userId,
                name: invoice.customer_name || invoice.customer_email,
                email: invoice.customer_email,
                notes: `Auto-created from Stripe invoice ${invoice.id}`,
            })
            .returning();
        clientId = newClient.id;
    } else {
        clientId = client[0]?.id || '';
    }

    if (!clientId) {
        console.log('Could not determine client for invoice:', invoice.id);
        return;
    }

    // Check if facture already exists
    const existingFacture = await db
        .select()
        .from(factures)
        .where(eq(factures.stripeInvoiceId, invoice.id))
        .limit(1);

    const factureData = {
        userId: account.userId,
        clientId,
        stripeInvoiceId: invoice.id,
        stripeCustomerId: invoice.customer as string,
        stripeAccountId: account.id,
        number: invoice.number || `STRIPE-${invoice.id.slice(-8)}`,
        status: mapStripeStatus(invoice.status),
        date: new Date(invoice.created * 1000).toISOString().split('T')[0],
        dueDate: invoice.due_date
            ? new Date(invoice.due_date * 1000).toISOString().split('T')[0]
            : null,
        total: ((invoice.total || 0) / 100).toString(),
        updatedAt: new Date(),
    };

    if (existingFacture.length) {
        // Update existing facture
        await db
            .update(factures)
            .set(factureData)
            .where(eq(factures.id, existingFacture[0].id));

        // Delete old items and insert new ones
        await db
            .delete(facturesItems)
            .where(eq(facturesItems.factureId, existingFacture[0].id));

        if (invoice.lines.data.length > 0) {
            await db.insert(facturesItems).values(
                invoice.lines.data.map((line) => ({
                    id: nanoid(),
                    factureId: existingFacture[0].id,
                    description: line.description || 'No description',
                    quantity: (line.quantity || 1).toString(),
                    price: ((line.price?.unit_amount || 0) / 100).toString(),
                    total: ((line.amount || 0) / 100).toString(),
                }))
            );
        }
    } else {
        // Create new facture
        const [newFacture] = await db
            .insert(factures)
            .values({
                id: nanoid(),
                ...factureData,
                createdAt: new Date(),
            })
            .returning();

        // Insert items
        if (invoice.lines.data.length > 0) {
            await db.insert(facturesItems).values(
                invoice.lines.data.map((line) => ({
                    id: nanoid(),
                    factureId: newFacture.id,
                    description: line.description || 'No description',
                    quantity: (line.quantity || 1).toString(),
                    price: ((line.price?.unit_amount || 0) / 100).toString(),
                    total: ((line.amount || 0) / 100).toString(),
                }))
            );
        }
    }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
    await db
        .update(factures)
        .set({
            status: 'paid',
            updatedAt: new Date(),
        })
        .where(eq(factures.stripeInvoiceId, invoice.id));
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
    await db
        .update(factures)
        .set({
            status: 'pending',
            updatedAt: new Date(),
        })
        .where(eq(factures.stripeInvoiceId, invoice.id));
}

function mapStripeStatus(
    status: string | null
): 'pending' | 'paid' | 'cancelled' {
    switch (status) {
        case 'paid':
            return 'paid';
        case 'void':
        case 'uncollectible':
            return 'cancelled';
        default:
            return 'pending';
    }
}
