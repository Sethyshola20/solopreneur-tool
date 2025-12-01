'use client';

import { SettingsForm } from '@/components/settings/settings-form';
import { useSettings } from '@/hooks/use-settings';


export default function SettingsPage() {
    const { data: settings, isLoading, error } = useSettings();
    if (isLoading) return <div>Chargement...</div>;
    if (error || !settings) return <div>Erreur lors du chargement des paramètres</div>;

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Paramètres</h1>
            </div>
            <SettingsForm initialData={settings} />
        </div>
    );
}
