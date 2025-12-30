import { z } from 'zod';

export const stripeAccountSchema = z.object({
    name: z.string().min(1, 'Le nom est requis'),
    description: z.string().optional().nullable(),
    apiKey: z.string().min(1, 'La clé API est requise'),
    webhookSecret: z.string().optional().nullable(),
    isActive: z.boolean().default(true).nonoptional(),
});

export type StripeAccountSchema = z.infer<typeof stripeAccountSchema>;

export const productSchema = z.object({
    stripeAccountId: z.string().min(1, 'Le compte Stripe est requis'),
    stripeProductId: z.string().min(1, 'L\'ID produit Stripe est requis'),
    stripePriceId: z.string().optional().nullable(),
    name: z.string().min(1, 'Le nom est requis'),
    description: z.string().optional().nullable(),
    price: z.string().optional().nullable(),
    currency: z.string().default('EUR'),
    isRecurring: z.boolean().default(false),
    billingPeriod: z.string().optional().nullable(),
    isActive: z.boolean().default(true).nonoptional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
