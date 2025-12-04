import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSettings, saveSettings } from '@/lib/use-cases/settings';
import { SettingsSchema } from '@/lib/validators/settings';

export function useSettings() {
    return useQuery({
        queryKey: ['settings'],
        queryFn: getSettings,
    });
}

export function useSaveSettings() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: SettingsSchema) => saveSettings(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['settings'] });
        },
    });
}

