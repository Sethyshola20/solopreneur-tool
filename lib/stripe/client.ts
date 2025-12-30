import Stripe from 'stripe';
import { db } from '@/lib/db/drizzle';
import { stripeAccounts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { decrypt } from './encryption';

const stripeClients = new Map<string, Stripe>();

export async function getStripeClient(accountId: string): Promise<Stripe> {
    // Check cache first
    if (stripeClients.has(accountId)) {
        return stripeClients.get(accountId)!;
    }

    // Fetch account from database
    const account = await db.query.stripeAccounts.findFirst({
        where: eq(stripeAccounts.id, accountId),
    });

    if (!account) {
        throw new Error(`Stripe account not found: ${accountId}`);
    }

    if (!account.isActive) {
        throw new Error(`Stripe account is inactive: ${accountId}`);
    }

    // Decrypt API key and create client
    const apiKey = decrypt(account.apiKey);
    const client = new Stripe(apiKey, {
        apiVersion: '2025-12-15.clover',
    });

    // Cache the client
    stripeClients.set(accountId, client);

    return client;
}

export function clearStripeClientCache(accountId?: string) {
    if (accountId) {
        stripeClients.delete(accountId);
    } else {
        stripeClients.clear();
    }
}
