import { pgTable, text, timestamp, boolean, integer, serial, date, decimal, pgEnum, varchar, real, primaryKey } from 'drizzle-orm/pg-core';
import { user } from "./auth-schema";
import { relations } from 'drizzle-orm';

// --- Business Logic ---

export const clients = pgTable('clients', {
    id: text('id').primaryKey(), // uuid
    userId: text('user_id').notNull().references(() => user.id),
    name: text('name').notNull(),
    siret: text('siret'),
    email: text('email'),
    phone: text('phone'),
    address: text('address'),
    notes: text('notes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const devis = pgTable('devis', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    clientId: text('client_id').notNull().references(() => clients.id),
    number: text('number').notNull(), // DEV-YYYY-NNN
    status: text('status').notNull().default('draft'), // draft, sent, accepted, rejected
    date: date('date').notNull(),
    validUntil: date('valid_until'),
    total: decimal('total', { precision: 10, scale: 2 }).notNull().default('0'),

    // Project Details
    projectDescription: text('project_description'),
    specificationReference: text('specification_reference'),

    // General Conditions
    deliveryTimeWeeks: integer('delivery_time_weeks'),
    deliverables: text('deliverables'),
    revisionCycles: integer('revision_cycles'),
    exclusions: text('exclusions'),

    // Payment & Support
    paymentSchedule: text('payment_schedule'),
    postDeliverySupport: text('post_delivery_support'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const devisItems = pgTable('devis_items', {
    id: text('id').primaryKey(),
    devisId: text('devis_id').notNull().references(() => devis.id, { onDelete: 'cascade' }),
    description: text('description').notNull(),
    quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull().default('1'),
    price: decimal('price', { precision: 10, scale: 2 }).notNull().default('0'),
    total: decimal('total', { precision: 10, scale: 2 }).notNull().default('0'),
});

export const factures = pgTable('factures', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    clientId: text('client_id').notNull().references(() => clients.id),
    devisId: text('devis_id').references(() => devis.id),

    // Stripe Integration
    stripeInvoiceId: text('stripe_invoice_id').unique(), // Stripe invoice ID
    stripeCustomerId: text('stripe_customer_id'), // Stripe customer ID
    stripeAccountId: text('stripe_account_id').references(() => stripeAccounts.id), // Which Stripe account this invoice belongs to

    // Facture Information
    serviceStartDate: date('service_start_date'), // Date de début de prestation
    serviceEndDate: date('service_end_date'), // Date de fin de prestation
    number: text('number').notNull(), // FAC-YYYY-NNN
    status: text('status').notNull().default('pending'), // pending, paid, cancelled
    date: date('date').notNull(),
    dueDate: date('due_date'),
    total: decimal('total', { precision: 10, scale: 2 }).notNull().default('0'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const facturesItems = pgTable('factures_items', {
    id: text('id').primaryKey(),
    factureId: text('facture_id').notNull().references(() => factures.id, { onDelete: 'cascade' }),
    description: text('description').notNull(),
    quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull().default('1'),
    price: decimal('price', { precision: 10, scale: 2 }).notNull().default('0'),
    total: decimal('total', { precision: 10, scale: 2 }).notNull().default('0'),
});

export const recettes = pgTable('recettes', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    factureId: text('facture_id').references(() => factures.id),
    clientId: text('client_id').references(() => clients.id),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    date: date('date').notNull(),
    paymentMethod: text('payment_method'), // virement, cheque, especes, etc.
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const settings = pgTable('settings', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id).unique(),
    companyName: text('company_name'),
    siret: text('siret'),
    address: text('address'),
    email: text('email'),
    logoUrl: text('logo_url'),
    legalMentions: text('legal_mentions'),
    ape: text('ape'),
    paymentTerms: text('payment_terms'),
    latePaymentPenalty: decimal('late_payment_penalty', { precision: 10, scale: 2 }).default('0'),
    recoveryFee: decimal('recovery_fee', { precision: 10, scale: 2 }).default('0'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

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


export const monthlyAnalytics = pgTable('monthly_analytics', {
    // Primary Key
    id: serial('id').notNull().unique(),

    // Foreign Key to link to the Stripe Account
    accountId: varchar('account_id')
        .notNull()
        .references(() => stripeAccounts.id, { onDelete: 'cascade' }), // If the account is deleted, delete its stats

    // Time Dimension
    // Store the month as a standardized key (e.g., '2025-11') for easy querying
    monthKey: varchar('month_key', { length: 7 }).notNull(),

    // --- MRR Metrics (use 'real' for floating-point currency) ---
    startingMRR: real('starting_mrr').notNull(),
    endingMRR: real('ending_mrr').notNull(),
    newMRR: real('new_mrr').notNull(),
    churnedMRR: real('churned_mrr').notNull(),

    // --- Customer Metrics (use 'integer' for counts) ---
    startingCustomers: integer('starting_customers').notNull(),
    endingCustomers: integer('ending_customers').notNull(),
    newCustomers: integer('new_customers').notNull(),
    churnedCustomers: integer('churned_customers').notNull(),
    customerChurnRate: real('customer_churn_rate').notNull(), // Percentage value (e.g., 1.5 for 1.5%)

    // Metadata
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => {
    return {
        // Enforce uniqueness for a specific month for a specific account
        pk: primaryKey({ columns: [table.accountId, table.monthKey] }),
    }
});

// --- Table Relations (for Drizzle relations API) ---

export const monthlyAnalyticsRelations = relations(monthlyAnalytics, ({ one }) => ({
    // Defines the one-to-many relationship back to the parent Stripe Account
    stripeAccount: one(stripeAccounts, {
        fields: [monthlyAnalytics.accountId],
        references: [stripeAccounts.id],
    }),
}));