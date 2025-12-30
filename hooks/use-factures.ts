import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFacturesList, getFacture, createFacture, updateFacture, deleteFacture } from '@/lib/use-cases/factures';
import { FactureSchema } from '@/lib/validators/factures';
import { useRouter } from 'next/navigation';

export function useFacturesList() {
    return useQuery({
        queryKey: ['factures'],
        queryFn: getFacturesList,
    });
}

export function useFacture(id: string) {
    return useQuery({
        queryKey: ['facture', id],
        queryFn: () => getFacture(id),
        enabled: !!id,
    });
}

export function useCreateFacture() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: FactureSchema) => createFacture(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['factures'] });
        },
    });
}

export function useUpdateFacture(id: string) {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: FactureSchema) => updateFacture(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['factures'] });
            queryClient.invalidateQueries({ queryKey: ['facture', id] });
        },
    });
}

export function useDeleteFacture() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteFacture(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['factures'] });
        },
    });
}
