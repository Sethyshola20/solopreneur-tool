import { ClientSchema } from "@/lib/validators/clients";
import { request } from '@/api_service';

export type Client = {
    id: string;
    userId: string;
    name: string;
    email: string | null;
    phone: string | null;
    address: string | null;
    notes: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
};

export async function getClients(): Promise<Client[]> {
    const res = await request<Client[]>('/clients');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

export async function getClient(id: string): Promise<Client> {
    const res = await request<Client>(`/clients/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Client not found');
    }
    return res.data;
}

export async function createClient(data: ClientSchema): Promise<Client> {
    const res = await request<Client>('/clients', {
        method: 'POST',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create client');
    }
    return res.data;
}

export async function updateClient(id: string, data: ClientSchema): Promise<Client> {
    const res = await request<Client>(`/clients/${id}`, {
        method: 'PATCH',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update client');
    }
    return res.data;
}

export async function deleteClient(id?: string): Promise<void> {
    if (!id) return;
    const res = await request<null>(`/clients/${id}`, {
        method: 'DELETE',
    });

    if (res.error) {
        throw new Error(res.error);
    }
}

