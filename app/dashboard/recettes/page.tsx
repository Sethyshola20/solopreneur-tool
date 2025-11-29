import { RecettesTable } from '@/components/recettes/recettes-table';

export default function RecettesPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Livre des Recettes</h1>
            </div>
            <RecettesTable />
        </div>
    );
}
