'use client';

import { SettingsForm } from '@/components/settings/settings-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useSettings } from '@/hooks/use-settings';


export default function SettingsPage() {
    const { data: settings, isLoading } = useSettings();

    if (isLoading) return (
        <div className="space-y-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Paramètres</h1>
            </div>
            <Card className="w-full max-w-2xl mx-auto">
                <Skeleton className="w-full max-w-2xl mx-auto h-[80vh]" />
            </Card>

        </div>
    )

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Paramètres</h1>
            </div>
            <SettingsForm initialData={settings || undefined} />
        </div>
    );
}
