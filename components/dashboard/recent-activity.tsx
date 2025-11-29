'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facture } from '@/lib/use-cases/factures';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface RecentActivityProps {
    factures: Facture[];
}

export function RecentActivity({ factures }: RecentActivityProps) {
    const recentFactures = factures.slice(0, 5);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'paid': return 'bg-green-100 text-green-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'pending': return 'En attente';
            case 'paid': return 'Payée';
            case 'cancelled': return 'Annulée';
            default: return status;
        }
    };

    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Factures Récentes</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentFactures.map((facture) => (
                        <div key={facture.id} className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium">{facture.number}</p>
                                <p className="text-xs text-muted-foreground">
                                    {format(new Date(facture.date), 'dd MMMM yyyy', { locale: fr })}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium">
                                    {Number(facture.total).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(facture.status)}`}>
                                    {getStatusLabel(facture.status)}
                                </span>
                            </div>
                        </div>
                    ))}
                    {recentFactures.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-4">
                            Aucune facture récente
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
