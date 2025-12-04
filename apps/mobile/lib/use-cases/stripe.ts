import { StripeAccountSchema } from "@/lib/validators/stripe";
import { request } from '@/api_service';

export type StripeAccount = {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    stripeAccountId: string | null;
    apiKey: string;
    isActive: boolean;
    lastSyncAt: Date | string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
};

export type StripeProduct = {
    id: string;
    stripeAccountId: string;
    stripeProductId: string;
    name: string;
    price: string | null;
    currency: string;
    createdAt: Date | string;
};

export type StripeStats = {
    accountId: string;
    accountName: string;
    monthlyAnalytics: Array<{
        monthKey: string;
        endingMRR: number;
        customerChurnRate: number;
    }>;
    currentSnapshot: {
        mrr: number;
        arr: number;
        activeCustomers: number;
    };
};

export async function getStripeAccounts(): Promise<StripeAccount[]> {
    const res = await request<StripeAccount[]>('/stripe/accounts');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

export async function getStripeAccount(id: string): Promise<StripeAccount> {
    const res = await request<StripeAccount>(`/stripe/accounts/${id}`);
    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Stripe account not found');
    }
    return res.data;
}

export async function createStripeAccount(data: StripeAccountSchema): Promise<StripeAccount> {
    const res = await request<StripeAccount>('/stripe/accounts', {
        method: 'POST',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to create Stripe account');
    }
    return res.data;
}

export async function updateStripeAccount(id: string, data: Partial<StripeAccountSchema>): Promise<StripeAccount> {
    const res = await request<StripeAccount>(`/stripe/accounts/${id}`, {
        method: 'PATCH',
        data,
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to update Stripe account');
    }
    return res.data;
}

export async function deleteStripeAccount(id: string): Promise<void> {
    const res = await request<null>(`/stripe/accounts/${id}`, {
        method: 'DELETE',
    });

    if (res.error) {
        throw new Error(res.error);
    }
}

export async function getProducts(accountId?: string): Promise<StripeProduct[]> {
    const endpoint = accountId ? `/stripe/products?accountId=${accountId}` : '/stripe/products';
    const res = await request<StripeProduct[]>(endpoint);
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

export async function syncProducts(accountId: string): Promise<{ count: number; products: StripeProduct[] }> {
    const res = await request<{ count: number; products: StripeProduct[] }>('/stripe/products', {
        method: 'POST',
        data: { accountId },
    });

    if (res.error) {
        throw new Error(res.error);
    }
    if (!res.data) {
        throw new Error('Failed to sync products');
    }
    return res.data;
}

export async function getStripeStats(): Promise<StripeStats[]> {
    const res = await request<StripeStats[]>('/stripe/stats');
    if (res.error) {
        throw new Error(res.error);
    }
    return res.data || [];
}

