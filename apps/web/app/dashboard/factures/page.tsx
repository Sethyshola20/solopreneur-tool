
import { FactureTable } from '@/components/factures/facture-table';

export default function FacturesPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Factures</h1>
            </div>
            <FactureTable />
        </div>
    );
}
