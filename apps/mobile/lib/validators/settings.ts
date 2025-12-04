import { z } from 'zod';

export const settingsSchema = z.object({
    companyName: z.string().optional().nullable(),
    siret: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    email: z.string().email('Email invalide').optional().or(z.literal('')).nullable(),
    logoUrl: z.string().optional().nullable(),
    legalMentions: z.string().optional().nullable(),
});

export type SettingsSchema = z.infer<typeof settingsSchema>;

