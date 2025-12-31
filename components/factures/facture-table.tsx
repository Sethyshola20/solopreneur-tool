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
import { Edit, Trash2, Plus, Receipt } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDeleteFacture, useFacturesList } from '@/hooks/use-factures';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { Facture, FactureWithItems } from '@/lib/use-cases/factures';
import { useState } from 'react';
import { DeleteDialiog } from '../delete-dialog';
import { FactureDialog } from './facture-dialog';
import { FacturePDFDownloadButton } from '../pdf/PDFDownloadButton';
import { Skeleton } from '@/components/ui/skeleton';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty';


export function FactureTable() {
    const { data: facturesList, isLoading, error } = useFacturesList();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFacture, setSelectedFacture] = useState<FactureWithItems | null>(null);

    const deleteMutation = useDeleteFacture()

    const handleDelete = async (id: string) => {
        toast.promise(deleteMutation.mutateAsync(id), {
            loading: "Suppression de la facture...",
            success: "Facture supprimée",
            error: (error: Error) => 'Erreur de suppression de la facture : ' + error.message,
        })
    };


    const handleEdit = (facture: FactureWithItems) => {
        setSelectedFacture(facture);
        setDialogOpen(true);
    };

    const handleCreate = () => {
        setSelectedFacture(null);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedFacture(null);
    };

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
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className='px-4'><Receipt /></CardTitle>
                    <Button onClick={handleCreate}>
                        <Plus className="mr-2 h-4 w-4" /> Nouvelle Facture
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
                            Erreur lors du chargement des factures
                        </div>
                    ) : facturesList && facturesList.length > 0 ? (
                        <>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Numéro</TableHead>
                                        <TableHead>Client</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Échéance</TableHead>
                                        <TableHead>Periode de prestation</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead>Statut</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {facturesList?.map((facture, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{facture.number}</TableCell>
                                            <TableCell>{facture.clientName || 'Client inconnu'}</TableCell>
                                            <TableCell>{format(new Date(facture.date), 'dd/MM/yyyy')}</TableCell>
                                            <TableCell>{facture.dueDate ? format(new Date(facture.dueDate), 'dd/MM/yyyy') : '-'}</TableCell>
                                            <TableCell>{facture.serviceStartDate && facture.serviceEndDate ? format(new Date(facture.serviceStartDate), 'dd/MM/yyyy') + ' au ' + format(new Date(facture.serviceEndDate), 'dd/MM/yyyy') : '-'}</TableCell>
                                            <TableCell>{Number(facture.total).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</TableCell>
                                            <TableCell>
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(facture.status)}`}>
                                                    {getStatusLabel(facture.status)}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <FacturePDFDownloadButton facture={facture} />
                                                <Button variant="ghost" size="icon" onClick={() => handleEdit(facture)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <DeleteDialiog handleDelete={handleDelete} id={facture.id} ressource={'facture'} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="mt-4 text-sm text-muted-foreground">
                                <p>* TVA non applicable – art. 293 B du CGI</p>
                            </div>
                        </>
                    ) : (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Receipt />
                                </EmptyMedia>
                                <EmptyTitle>Aucune facture</EmptyTitle>
                                <EmptyDescription>
                                    Vous n'avez pas encore créé de factures. Commencez par créer votre première facture.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button onClick={handleCreate}>
                                    <Plus className="mr-2 h-4 w-4" /> Créer une facture
                                </Button>
                            </EmptyContent>
                        </Empty>
                    )}
                </CardContent>
            </Card>
            <FactureDialog
                open={dialogOpen}
                onOpenChange={handleCloseDialog}
                initialData={selectedFacture || undefined}
                factureId={selectedFacture?.id}
            />
        </>
    );
}
