import { FactureSchema } from "@/lib/validators/factures";
import { request } from '@/api_service';

export type Facture = {
    id: string;
    userId: string;
    clientId: string;
    devisId: string | null;
    stripeInvoiceId: string | null;
    stripeCustomerId: string | null;
    stripeAccountId: string | null;
    number: string;
    status: string;
    date: string;
    dueDate: string | null;
    total: string;
    createdAt: Date | string;
    updatedAt: Date | string;
};

export type FactureItem = {
    id: string;
    factureId: string;
    description: string;
    quantity: string;
    price: string;
    total: string;
};

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

