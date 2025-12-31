import { z } from 'zod';

export const devisItemSchema = z.object({
    id: z.string().optional(),
    description: z.string().min(1, 'La description est requise'),
    quantity: z.number().min(0.01, 'La quantité doit être positive'),
    price: z.number().min(0, 'Le prix doit être positif'),
});

export const devisSchema = z.object({
    clientId: z.string().min(1, 'Le client est requis'),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), 'Date invalide'),
    validUntil: z.string().optional().nullable(),
    status: z.enum(['draft', 'sent', 'accepted', 'rejected']).default('draft').nonoptional(),
    items: z.array(devisItemSchema).min(1, 'Au moins un article est requis'),

    // Project Details
    projectDescription: z.string().optional().nullable(),
    specificationReference: z.string().optional().nullable(),

    // General Conditions (optional)
    deliveryTimeWeeks: z.number().positive().optional().nullable(),
    deliverables: z.string().optional().nullable(),
    revisionCycles: z.number().int().positive().optional().nullable(),
    exclusions: z.string().optional().nullable(),

    // Payment & Support
    paymentSchedule: z.string().optional().nullable(),
    postDeliverySupport: z.string().optional().nullable(),
});



export type DevisItemSchema = z.infer<typeof devisItemSchema>;
export type DevisSchema = z.infer<typeof devisSchema>;
