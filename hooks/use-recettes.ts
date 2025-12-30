import { useQuery } from '@tanstack/react-query';
import { getRecettesList } from '@/lib/use-cases/recettes';

export function useRecettesList() {
    return useQuery({
        queryKey: ['recettes'],
        queryFn: getRecettesList,
    });
}
