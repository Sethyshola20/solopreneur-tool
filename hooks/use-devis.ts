import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getDevisList, getDevis, createDevis, updateDevis, deleteDevis } from '@/lib/use-cases/devis';
import { DevisSchema } from '@/lib/validators/devis';

export function useDevisList() {
    return useQuery({
        queryKey: ['devis'],
        queryFn: getDevisList,
    });
}

export function useDevis(id: string) {
    return useQuery({
        queryKey: ['devis', id],
        queryFn: () => getDevis(id),
        enabled: !!id,
    });
}

export function useCreateDevis() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: DevisSchema) => createDevis(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['devis'] });
        },
    });
}

export function useUpdateDevis(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: DevisSchema) => updateDevis(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['devis'] });
            queryClient.invalidateQueries({ queryKey: ['devis', id] });
        },
    });
}

export function useDeleteDevis() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteDevis(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['devis'] });
        },
    });
}
