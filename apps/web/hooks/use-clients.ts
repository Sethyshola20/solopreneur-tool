import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getClients, getClient, createClient, updateClient, deleteClient } from '@/lib/use-cases/clients';
import { ClientSchema } from '@/lib/validators/clients';

export function useClients() {
    return useQuery({
        queryKey: ['clients'],
        queryFn: getClients,
    });
}

export function useClient(id: string) {
    return useQuery({
        queryKey: ['client', id],
        queryFn: () => getClient(id),
        enabled: !!id,
    });
}

export function useCreateClient() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ClientSchema) => createClient(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] });
        },
    });
}

export function useUpdateClient(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ClientSchema) => updateClient(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] });
            queryClient.invalidateQueries({ queryKey: ['client', id] });
        },
    });
}

export function useDeleteClient(id?: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => deleteClient(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] });
            queryClient.invalidateQueries({ queryKey: ['client', id] });
        },
    });
}