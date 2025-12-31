ALTER TABLE "clients" ADD COLUMN "siret" text;--> statement-breakpoint
ALTER TABLE "devis" ADD COLUMN "delivery_time_weeks" integer;--> statement-breakpoint
ALTER TABLE "devis" ADD COLUMN "deliverables" text;--> statement-breakpoint
ALTER TABLE "devis" ADD COLUMN "revision_cycles" integer;--> statement-breakpoint
ALTER TABLE "devis" ADD COLUMN "exclusions" text;--> statement-breakpoint
ALTER TABLE "factures" ADD COLUMN "service_start_date" date;--> statement-breakpoint
ALTER TABLE "factures" ADD COLUMN "service_end_date" date;--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "ape" text;--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "payment_terms" text;--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "late_payment_penalty" numeric(10, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "recovery_fee" numeric(10, 2) DEFAULT '0';