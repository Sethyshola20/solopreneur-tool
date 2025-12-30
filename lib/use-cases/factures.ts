import { FactureSchema } from "@/lib/validators/factures";
import { type InferSelectModel } from 'drizzle-orm';
import { factures, facturesItems } from '@/lib/db/schema';
import { request } from '@/api_service';

export type Facture = InferSelectModel<typeof factures>;
export type FactureItem = InferSelectModel<typeof facturesItems>;
export type FactureWithItems = Facture & { items: FactureItem[]; clientName: string | null, devisId: string | null };

export async function getFacturesList(): Promise<FactureWithItems[]> {
    const res = await request<FactureWithItems[]>('/factures');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

export async function getFacture(id: string): Promise<Facture> {
    const res = await request<Facture>(`/factures/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Facture not found');
    }
    return res.data;
}

export async function createFacture(data: FactureSchema): Promise<Facture> {
    const res = await request<Facture>('/factures', {
        method: 'POST',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create facture');
    }
    return res.data;
}

export async function updateFacture(id: string, data: FactureSchema): Promise<Facture> {
    const res = await request<Facture>(`/factures/${id}`, {
        method: 'PATCH',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update facture');
    }
    return res.data;
}

export async function deleteFacture(id: string): Promise<void> {
    const res = await request<null>(`/factures/${id}`, {
        method: 'DELETE',
    });

    if (res.error) {
        throw new Error(res.error);
    }
}
