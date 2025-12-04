import { pgTable, text, timestamp, boolean, decimal, integer } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';
import { clients } from './schema';

// Stripe Accounts - supports multiple Stripe accounts per user
export const stripeAccounts = pgTable('stripe_accounts', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    name: text('name').notNull(), // e.g., "SaaS Product A", "Consulting"
    description: text('description'),
    stripeAccountId: text('stripe_account_id'), // For Stripe Connect (optional)
    apiKey: text('api_key').notNull(), // Encrypted
    webhookSecret: text('webhook_secret'), // Encrypted
    isActive: boolean('is_active').default(true).notNull(),
    lastSyncAt: timestamp('last_sync_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Products - synced from Stripe
export const products = pgTable('products', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    stripeAccountId: text('stripe_account_id').notNull().references(() => stripeAccounts.id, { onDelete: 'cascade' }),
    stripeProductId: text('stripe_product_id').notNull(),
    stripePriceId: text('stripe_price_id'), // Default price
    name: text('name').notNull(),
    description: text('description'),
    price: decimal('price', { precision: 10, scale: 2 }),
    currency: text('currency').default('EUR').notNull(),
    isRecurring: boolean('is_recurring').default(false).notNull(),
    billingPeriod: text('billing_period'), // 'month', 'year', 'week', 'day'
    isActive: boolean('is_active').default(true).notNull(),
    metadata: text('metadata'), // JSON string for additional Stripe metadata
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Subscriptions - track recurring revenue
export const subscriptions = pgTable('subscriptions', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    stripeAccountId: text('stripe_account_id').notNull().references(() => stripeAccounts.id, { onDelete: 'cascade' }),
    clientId: text('client_id').references(() => clients.id, { onDelete: 'set null' }),
    productId: text('product_id').references(() => products.id, { onDelete: 'set null' }),
    stripeSubscriptionId: text('stripe_subscription_id').notNull().unique(),
    stripeCustomerId: text('stripe_customer_id'),
    status: text('status').notNull(), // 'active', 'canceled', 'past_due', 'unpaid', 'trialing'
    currentPeriodStart: timestamp('current_period_start'),
    currentPeriodEnd: timestamp('current_period_end'),
    cancelAtPeriodEnd: boolean('cancel_at_period_end').default(false).notNull(),
    canceledAt: timestamp('canceled_at'),
    amount: decimal('amount', { precision: 10, scale: 2 }),
    currency: text('currency').default('EUR'),
    metadata: text('metadata'), // JSON string
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Stripe Events Log - for debugging and audit trail
export const stripeEvents = pgTable('stripe_events', {
    id: text('id').primaryKey(),
    stripeAccountId: text('stripe_account_id').references(() => stripeAccounts.id, { onDelete: 'cascade' }),
    stripeEventId: text('stripe_event_id').notNull().unique(),
    eventType: text('event_type').notNull(),
    processed: boolean('processed').default(false).notNull(),
    error: text('error'),
    payload: text('payload'), // JSON string of full event
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const stripeSchema = {
    stripeAccounts,
    products,
    subscriptions,
    stripeEvents,
};
