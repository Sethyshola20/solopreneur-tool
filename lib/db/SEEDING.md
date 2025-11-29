# Database Seeding Guide

This guide explains how to populate your database with mock data for testing and development.

## Prerequisites

Before running the seed script, you need to:

1. **Get your user ID** from the database
2. **Update the MOCK_USER_ID** in `lib/db/mock-data.ts`

### How to get your user ID:

1. Sign up/login to your application
2. Check your database's `user` table to find your user ID
3. Copy the ID (it should look something like: `user_2pjQoXXXXXXXXXXXXXXXXXXXXX`)

### Update MOCK_USER_ID:

Open `lib/db/mock-data.ts` and replace the placeholder:

```typescript
export const MOCK_USER_ID = 'your_actual_user_id_here';
```

## Running the Seed Script

Once you've updated the `MOCK_USER_ID`, run:

```bash
bun run db:seed
```

## What Gets Seeded

The script will populate your database with:

- **5 Clients** - Various French businesses (Acme Corporation, TechStart SAS, etc.)
- **4 Devis** - Quotes with different statuses (accepted, sent, draft)
- **8 Devis Items** - Line items for each quote
- **5 Factures** - Invoices with different statuses (paid, pending)
- **7 Factures Items** - Line items for each invoice
- **4 Recettes** - Revenue entries with different payment methods
- **1 Settings** - Company settings entry

## Mock Data Details

### Clients
- Realistic French business names and addresses
- Email addresses and phone numbers
- Notes about each client

### Devis (Quotes)
- Sequential numbering (DEV-2024-001, DEV-2024-002, etc.)
- Various statuses: draft, sent, accepted, rejected
- Dates spanning from June to October 2024
- Totals ranging from €3,200 to €7,800

### Factures (Invoices)
- Sequential numbering (FAC-2024-001, FAC-2024-002, etc.)
- Statuses: pending, paid, cancelled
- Some linked to devis, some standalone
- Due dates 30 days after invoice date

### Recettes (Revenue)
- Payment methods: virement (bank transfer), cheque, especes (cash)
- Linked to paid invoices
- Dates matching payment dates

## Clearing the Database

If you want to clear the seeded data and start fresh, you'll need to manually delete the records from your database or use a migration tool.

## Troubleshooting

### Error: Foreign key constraint violation
- Make sure you've updated `MOCK_USER_ID` with a valid user ID from your database
- Ensure the user exists in the `user` table

### Error: Unique constraint violation
- The seed script has already been run
- Clear existing data before running again

## Customizing Mock Data

You can customize the mock data by editing `lib/db/mock-data.ts`:

- Add more clients, devis, factures, etc.
- Change dates, amounts, or statuses
- Modify company names and addresses
- Add different payment methods

After making changes, run `bun run db:seed` again to populate with your custom data.
