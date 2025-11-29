CREATE TABLE "monthly_analytics" (
	"id" serial NOT NULL,
	"account_id" varchar NOT NULL,
	"month_key" varchar(7) NOT NULL,
	"starting_mrr" real NOT NULL,
	"ending_mrr" real NOT NULL,
	"new_mrr" real NOT NULL,
	"churned_mrr" real NOT NULL,
	"starting_customers" integer NOT NULL,
	"ending_customers" integer NOT NULL,
	"new_customers" integer NOT NULL,
	"churned_customers" integer NOT NULL,
	"customer_churn_rate" real NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "monthly_analytics_account_id_month_key_pk" PRIMARY KEY("account_id","month_key"),
	CONSTRAINT "monthly_analytics_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "monthly_analytics" ADD CONSTRAINT "monthly_analytics_account_id_stripe_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."stripe_accounts"("id") ON DELETE cascade ON UPDATE no action;