
import { DevisTable } from '@/components/devis/devis-table';

export default function DevisPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Devis</h1>
            </div>
            <DevisTable />
        </div>
    );
}
