import { z } from 'zod';

export const settingsSchema = z.object({
    companyName: z.string().optional(),
    siret: z.string().optional(),
    address: z.string().optional(),
    email: z.string().email('Email invalide').optional().or(z.literal('')),
    logoUrl: z.string().optional(),
    legalMentions: z.string().optional(),
});

export type SettingsSchema = z.infer<typeof settingsSchema>;

