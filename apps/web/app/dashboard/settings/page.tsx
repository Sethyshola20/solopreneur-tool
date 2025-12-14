import { SettingsForm } from '@/components/settings/settings-form';

export default function SettingsPage() {

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Paramètres</h1>
            </div>
            <SettingsForm />
        </div>
    );
}
