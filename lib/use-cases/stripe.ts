import { type InferSelectModel } from 'drizzle-orm';
import { stripeAccounts, products } from '@/lib/db/schema';
import { StripeAccountSchema } from '@/lib/validators/stripe';
import { APIResponse, request } from '@/api_service';
import { StripeStats } from '@/types/stripe';

export type StripeAccount = InferSelectModel<typeof stripeAccounts>;
export type Product = InferSelectModel<typeof products>;

export async function getStripeAccounts() {
    const { data, error } = await request<StripeAccount[]>('/stripe/accounts', {
        method: "GET"
    })
    if (error) throw new Error(error)
    return data;
}

export async function getStripeAccount(id: string): Promise<StripeAccount> {
    const { data, error } = await request<StripeAccount>(`/stripe/accounts/${id}`, {
        method: "GET"
    })
    if (error) throw new Error(error)
    if (!data) throw new Error('Account not found')
    return data;
}

export async function getStripeStats() {
    const { data, error } = await request<StripeStats>(`/stripe/stats`, {
        method: "GET",
    });
    if (error) throw new Error(error)
    if (!data) throw new Error('Stats not found')
    return data;
}

export async function createStripeAccount(data: StripeAccountSchema): Promise<StripeAccount> {
    const { data: res, error } = await request<StripeAccount>(`/stripe/accounts`, {
        method: 'POST',
        data
    });
    if (error) throw new Error(error)
    if (!res) throw new Error('Failed to create account')
    return res;
}

export async function updateStripeAccount(id: string, data: Partial<StripeAccountSchema>): Promise<StripeAccount> {
    const { data: res, error } = await request<StripeAccount>(`/stripe/accounts/${id}`, {
        method: 'PATCH',
        data
    });
    if (error) throw new Error(error)
    if (!res) throw new Error('Failed to update account')
    return res;
}

export async function getStripeSubscriptions(accountId: string) {
    const { data, error } = await request(`/stripe/${accountId}/subscriptions`)
    if (error) throw new Error(error)
    return data
}


export async function deleteStripeAccount(id: string): Promise<void> {
    const { error } = await request<null>(`/stripe/accounts/${id}`, {
        method: "DELETE"
    })
    if (error) throw new Error(error)
}

export async function getProducts(accountId?: string): Promise<Product[]> {
    const url = accountId ? `/stripe/products?accountId=${accountId}` : '/stripe/products';
    const { data, error } = await request<Product[]>(url)
    if (error) throw new Error(error)
    return data || []
}

export async function syncProducts(accountId: string): Promise<{ success: boolean; count: number; products: Product[] }> {

    const { data, error } = await request<{ success: boolean; count: number; products: Product[] }>('/stripe/products', {
        method: 'POST',
        data: { accountId }
    })

    if (error) throw new Error(error)
    if (!data) throw new Error('Failed to sync products')
    return data
}
