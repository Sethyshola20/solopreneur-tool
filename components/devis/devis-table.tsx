'use client';

import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Plus, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDevisList, useDeleteDevis } from '@/hooks/use-devis';
import { DevisDialog } from './devis-dialog';
import { format } from 'date-fns';
import { DevisWithItems } from '@/lib/use-cases/devis';
import { toast } from 'sonner';
import { DeleteDialiog } from '../delete-dialog';
import { DevisPDFDownloadButton } from '../pdf/PDFDownloadButton';
import { Skeleton } from '@/components/ui/skeleton';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty';


export function DevisTable() {
    const { data: devisList, isLoading, error } = useDevisList();
    const deleteMutation = useDeleteDevis();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedDevis, setSelectedDevis] = useState<DevisWithItems | null>(null);

    const displayData = devisList || [];

    const handleEdit = (devis: DevisWithItems) => {
        setSelectedDevis(devis);
        setDialogOpen(true);
    };

    const handleCreate = () => {
        setSelectedDevis(null);
        setDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        toast.promise(deleteMutation.mutateAsync(id), {
            loading: `Suppression du devis...`,
            success: "Devis supprimé",
            error: (error: Error) => 'Erreur de suppression du devis : ' + error.message,
        }
        )
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'draft': return 'bg-gray-100 text-gray-800';
            case 'sent': return 'bg-blue-100 text-blue-800';
            case 'accepted': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'draft': return 'Brouillon';
            case 'sent': return 'Envoyé';
            case 'accepted': return 'Accepté';
            case 'rejected': return 'Refusé';
            default: return status;
        }
    };

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className='px-4'><CreditCard /></CardTitle>
                    <Button onClick={handleCreate}>
                        <Plus className="mr-2 h-4 w-4" /> Nouveau Devis
                    </Button>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <Skeleton className="h-12 w-full" />
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 p-6">
                            Erreur lors du chargement des devis
                        </div>
                    ) : displayData.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Numéro</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead>Statut</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {displayData.map((devis, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{devis.number}</TableCell>
                                        <TableCell>{devis.clientName}</TableCell>
                                        <TableCell>{format(new Date(devis.date), 'dd/MM/yyyy')}</TableCell>
                                        <TableCell>{Number(devis.total).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(devis.status)}`}>
                                                {getStatusLabel(devis.status)}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <DevisPDFDownloadButton devis={devis} />
                                                <Button variant="ghost" size="icon" onClick={() => handleEdit(devis)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <DeleteDialiog handleDelete={handleDelete} id={devis.id} ressource='devis' />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <CreditCard />
                                </EmptyMedia>
                                <EmptyTitle>Aucun devis</EmptyTitle>
                                <EmptyDescription>
                                    Vous n'avez pas encore créé de devis. Commencez par créer votre premier devis.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button onClick={handleCreate}>
                                    <Plus className="mr-2 h-4 w-4" /> Créer un devis
                                </Button>
                            </EmptyContent>
                        </Empty>
                    )}
                </CardContent>
            </Card>
            <DevisDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                devisId={selectedDevis?.id}
                initialData={selectedDevis || undefined}
            />
        </>
    );
}

