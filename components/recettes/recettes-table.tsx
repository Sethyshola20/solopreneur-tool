'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { useRecettesList } from '@/hooks/use-recettes';

export function RecettesTable() {
    const { data: recettesList, isLoading, error } = useRecettesList();

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur lors du chargement des recettes</div>;

    const exportToCSV = () => {
        if (!recettesList || recettesList?.length === 0) return;

        const headers = ['Date', 'Numéro Facture', 'Client', 'Montant', 'Mode de Paiement'];
        const rows = recettesList.map(item => [
            format(new Date(item.date), 'dd/MM/yyyy'),
            item.factureNumber || '-',
            item.clientName || '-',
            Number(item.amount).toFixed(2),
            item.paymentMethod || '-'
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `livre-recettes-${format(new Date(), 'yyyy-MM-dd')}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const total = recettesList?.reduce((acc, item) => acc + Number(item.amount), 0) || 0;

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle></CardTitle>
                <Button onClick={exportToCSV} disabled={!recettesList || recettesList.length === 0}>
                    <Download className="mr-2 h-4 w-4" /> Exporter CSV
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Numéro Facture</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Montant</TableHead>
                            <TableHead>Mode de Paiement</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recettesList?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{format(new Date(item.date), 'dd/MM/yyyy')}</TableCell>
                                <TableCell>{item.factureNumber || '-'}</TableCell>
                                <TableCell>{item.clientName || '-'}</TableCell>
                                <TableCell className="font-medium">{Number(item.amount).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</TableCell>
                                <TableCell>{item.paymentMethod || '-'}</TableCell>
                            </TableRow>
                        ))}
                        {recettesList?.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground">
                                    Aucune recette trouvée.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {recettesList && recettesList.length > 0 && (
                    <div className="mt-4 flex justify-end">
                        <div className="text-right">
                            <span className="text-muted-foreground mr-4">Total:</span>
                            <span className="text-xl font-bold">{total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
