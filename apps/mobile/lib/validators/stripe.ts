import { z } from 'zod';

export const stripeAccountSchema = z.object({
    name: z.string().min(1, 'Le nom est requis'),
    description: z.string().optional().nullable(),
    apiKey: z.string().min(1, 'La clé API est requise'),
    stripeAccountId: z.string().optional().nullable(),
});

export type StripeAccountSchema = z.infer<typeof stripeAccountSchema>;

