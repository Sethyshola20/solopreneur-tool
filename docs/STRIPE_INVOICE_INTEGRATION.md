# Stripe Invoice Integration

This guide explains how to integrate Stripe invoices with your factures table.

## Overview

When a Stripe invoice is created (e.g., from a SaaS subscription), it will automatically be synced to your `factures` table via webhooks.

## Setup Steps

### 1. Database Migration

Run a migration to add the new Stripe fields to your `factures` table:

```sql
ALTER TABLE factures 
ADD COLUMN stripe_invoice_id TEXT UNIQUE,
ADD COLUMN stripe_customer_id TEXT,
ADD COLUMN stripe_account_id TEXT REFERENCES stripe_accounts(id);
```

### 2. Environment Variables

Add these to your `.env` file:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Configure Stripe Webhook

1. Go to your Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select these events to listen to:
   - `invoice.created`
   - `invoice.updated`
   - `invoice.finalized`
   - `invoice.paid`
   - `invoice.payment_failed`
5. Copy the webhook signing secret and add it to your `.env` as `STRIPE_WEBHOOK_SECRET`

### 4. Test the Integration

You can test the webhook locally using Stripe CLI:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to your local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Trigger a test invoice event
stripe trigger invoice.created
```

## How It Works

### Invoice Events

The webhook handles these Stripe invoice events:

1. **`invoice.created`** / **`invoice.updated`** / **`invoice.finalized`**
   - Creates or updates a facture in your database
   - Auto-creates a client if the customer doesn't exist
   - Syncs all invoice line items to `factures_items`

2. **`invoice.paid`**
   - Updates the facture status to `paid`

3. **`invoice.payment_failed`**
   - Updates the facture status to `pending`

### Data Mapping

| Stripe Invoice | Factures Table |
|----------------|----------------|
| `invoice.id` | `stripeInvoiceId` |
| `invoice.customer` | `stripeCustomerId` |
| `invoice.account` | `stripeAccountId` (via `stripe_accounts` table) |
| `invoice.number` | `number` |
| `invoice.status` | `status` (mapped: paid/void/uncollectible → paid/cancelled/pending) |
| `invoice.created` | `date` |
| `invoice.due_date` | `dueDate` |
| `invoice.total` | `total` (converted from cents to euros) |
| `invoice.lines.data` | `factures_items` rows |

### Client Auto-Creation

If a Stripe invoice comes in for a customer that doesn't exist in your `clients` table:

1. The webhook searches for a client with matching email
2. If not found, it creates a new client with:
   - Name: from `customer_name` or `customer_email`
   - Email: from `customer_email`
   - Notes: "Auto-created from Stripe invoice {invoice_id}"

## Viewing Stripe Invoices

Factures synced from Stripe will have:
- `stripeInvoiceId`: The Stripe invoice ID (e.g., `in_1234567890`)
- `stripeCustomerId`: The Stripe customer ID (e.g., `cus_1234567890`)
- `stripeAccountId`: Reference to which Stripe account it came from

You can filter factures to show only Stripe-synced invoices:

```typescript
const stripeFactures = await db
  .select()
  .from(factures)
  .where(isNotNull(factures.stripeInvoiceId));
```

## Manual Sync

If you need to manually sync existing Stripe invoices, you can create a script:

```typescript
// scripts/sync-stripe-invoices.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function syncInvoices() {
  const invoices = await stripe.invoices.list({ limit: 100 });
  
  for (const invoice of invoices.data) {
    // Trigger webhook handler manually
    await handleInvoiceEvent(invoice);
  }
}

syncInvoices();
```

## Troubleshooting

### Webhook Not Receiving Events

1. Check that your webhook URL is correct in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` is set correctly
3. Check server logs for webhook errors
4. Use Stripe CLI to test locally: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

### Duplicate Factures

The webhook checks for existing factures using `stripeInvoiceId` before creating new ones. If you see duplicates:

1. Check that `stripe_invoice_id` column has a UNIQUE constraint
2. Verify the webhook isn't being called multiple times

### Status Not Updating

Make sure you're listening to all invoice events in your Stripe webhook configuration:
- `invoice.paid`
- `invoice.payment_failed`
- `invoice.updated`

## Security

The webhook verifies the Stripe signature using `stripe.webhooks.constructEvent()` to ensure requests are coming from Stripe. Never skip this verification in production!
