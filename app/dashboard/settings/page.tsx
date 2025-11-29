'use client';

import { SettingsForm } from '@/components/settings/settings-form';
import { useSettings } from '@/hooks/use-settings';

export default function SettingsPage() {
    const { data: settings, isLoading } = useSettings();

    if (isLoading) return <div>Chargement...</div>;

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Paramètres</h1>
            </div>
            <SettingsForm initialData={settings || undefined} />
        </div>
    );
}
