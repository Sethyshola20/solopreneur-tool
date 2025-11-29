ALTER TABLE "factures" ADD COLUMN "stripe_invoice_id" text;--> statement-breakpoint
ALTER TABLE "factures" ADD COLUMN "stripe_customer_id" text;--> statement-breakpoint
ALTER TABLE "factures" ADD COLUMN "stripe_account_id" text;--> statement-breakpoint
ALTER TABLE "factures" ADD CONSTRAINT "factures_stripe_account_id_stripe_accounts_id_fk" FOREIGN KEY ("stripe_account_id") REFERENCES "public"."stripe_accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "factures" ADD CONSTRAINT "factures_stripe_invoice_id_unique" UNIQUE("stripe_invoice_id");