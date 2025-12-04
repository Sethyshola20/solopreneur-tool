
import { ClientTable } from '@/components/clients/client-table';


export default function ClientsPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Clients</h1>
            </div>
            <ClientTable />
        </div>
    );
}
