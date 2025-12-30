import { z } from 'zod';

export const clientSchema = z.object({
    name: z.string().min(1, 'Le nom est requis'),
    email: z.string().email('Email invalide').optional().or(z.literal('')).nullable(),
    phone: z.string().optional().nullable(),
    siret: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
});

export type ClientSchema = z.infer<typeof clientSchema>;
