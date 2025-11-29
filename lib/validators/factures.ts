import { z } from 'zod';

export const factureItemSchema = z.object({
    id: z.string().optional(),
    description: z.string().min(1, 'La description est requise'),
    quantity: z.number().min(0.01, 'La quantité doit être positive'),
    price: z.number().min(0, 'Le prix doit être positif'),
});

export const factureSchema = z.object({
    clientId: z.string().min(1, 'Le client est requis'),
    devisId: z.string().optional().nullable(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), 'Date invalide'),
    dueDate: z.string().optional().nullable(),
    status: z.enum(['pending', 'paid', 'cancelled']).default('pending').nonoptional(),
    items: z.array(factureItemSchema).min(1, 'Au moins un article est requis'),
});

export type FactureItemSchema = z.infer<typeof factureItemSchema>;
export type FactureSchema = z.infer<typeof factureSchema>;
