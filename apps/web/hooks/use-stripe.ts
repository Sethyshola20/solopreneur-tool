import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getStripeAccounts,
    getStripeAccount,
    createStripeAccount,
    updateStripeAccount,
    deleteStripeAccount,
    getProducts,
    syncProducts,
    getStripeSubscriptions,
    getStripeStats,
} from '@/lib/use-cases/stripe';
import { StripeAccountSchema } from '@/lib/validators/stripe';

export function useStripeAccounts() {
    return useQuery({
        queryKey: ['stripe-accounts'],
        queryFn: getStripeAccounts,
    });
}

export function useStripeAccount(id: string) {
    return useQuery({
        queryKey: ['stripe-account', id],
        queryFn: () => getStripeAccount(id),
        enabled: !!id,
    });
}

export function useStripeStats() {
    return useQuery({
        queryKey: ['stripe-stats'],
        queryFn: () => getStripeStats(),
    });
}

export function useCreateStripeAccount() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: StripeAccountSchema) => createStripeAccount(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['stripe-accounts'] });
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
}

export function useUpdateStripeAccount(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<StripeAccountSchema>) => updateStripeAccount(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['stripe-accounts'] });
            queryClient.invalidateQueries({ queryKey: ['stripe-account', id] });
        },
    });
}

export function useDeleteStripeAccount() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteStripeAccount(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['stripe-accounts'] });
        },
    });
}

export function useStripeSubscriptions(accountId?: string) {
    return useQuery({
        queryKey: ['stripe-subscriptions', accountId],
        queryFn: () => getStripeSubscriptions(accountId!),
        enabled: !!accountId,
    });
}


export function useProducts(accountId?: string) {
    return useQuery({
        queryKey: accountId ? ['products', accountId] : ['products'],
        queryFn: () => getProducts(accountId),
    });
}

export function useSyncProducts() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (accountId: string) => syncProducts(accountId),
        onSuccess: (_, accountId) => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['products', accountId] });
            queryClient.invalidateQueries({ queryKey: ['stripe-accounts'] });
        },
    });
}
