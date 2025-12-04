import { DevisSchema } from "@/lib/validators/devis";
import { type InferSelectModel } from 'drizzle-orm';
import { devis, devisItems } from '@/lib/db/schema';
import { request } from '@/api_service';

export type Devis = InferSelectModel<typeof devis>;
export type DevisItem = InferSelectModel<typeof devisItems>;

export type DevisWithItems = Devis & { items: DevisItem[]; clientName: string | null };

export async function getDevisList(): Promise<DevisWithItems[]> {
    const res = await request<DevisWithItems[]>('/devis');
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Devis not found');
    }
    return res.data;
}

export async function getDevis(id: string): Promise<Devis> {
    const res = await request<Devis>(`/devis/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Devis not found');
    }
    return res.data;
}

export async function createDevis(data: DevisSchema): Promise<Devis> {
    const res = await request<Devis>('/devis', {
        method: 'POST',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create devis');
    }
    return res.data;
}

export async function updateDevis(id: string, data: DevisSchema): Promise<Devis> {
    const res = await request<Devis>(`/devis/${id}`, {
        method: 'PATCH',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update devis');
    }
    return res.data;
}

export async function deleteDevis(id: string): Promise<void> {
    const res = await request<null>(`/devis/${id}`, {
        method: 'DELETE',
    });

    if (res.error) {
        throw new Error(res.error);
    }
}
