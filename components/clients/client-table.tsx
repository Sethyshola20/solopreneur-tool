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
import { Edit, Plus, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useClients, useDeleteClient } from '@/hooks/use-clients';
import { ClientDialog } from './client-dialog';
import { Client } from '@/lib/use-cases/clients';
import { DeleteDialiog } from '../delete-dialog';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty';


export function ClientTable() {
    const { data: clients, isLoading, error } = useClients();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const deleteMutation = useDeleteClient(selectedClient?.id)
    const displayData = clients || [];

    const handleEdit = (client: Client) => {
        setSelectedClient(client);
        setDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        toast.promise(deleteMutation.mutateAsync, {
            loading: "Suppression du client...",
            success: "Client supprimé",
            error: (error: Error) => "Erreur : " + error.message
        })
    }

    const handleCreate = () => {
        setSelectedClient(null);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedClient(null);
    };


    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className='px-4'><Users /></CardTitle>
                    <Button onClick={handleCreate}>
                        <Plus className="mr-2 h-4 w-4" /> Nouveau Client
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
                            Erreur lors du chargement des clients
                        </div>
                    ) : displayData.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nom</TableHead>
                                    <TableHead>SIRET</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Téléphone</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {displayData.map((client) => (
                                    <TableRow key={client.id}>
                                        <TableCell className="font-medium">{client.name}</TableCell>
                                        <TableCell>{client.siret || '-'}</TableCell>
                                        <TableCell>{client.email || '-'}</TableCell>
                                        <TableCell>{client.phone || '-'}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(client)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <DeleteDialiog handleDelete={handleDelete} id={client.id} ressource={"client"} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Users />
                                </EmptyMedia>
                                <EmptyTitle>Aucun client</EmptyTitle>
                                <EmptyDescription>
                                    Vous n'avez pas encore ajouté de clients. Commencez par créer votre premier client.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button onClick={handleCreate}>
                                    <Plus className="mr-2 h-4 w-4" /> Ajouter un client
                                </Button>
                            </EmptyContent>
                        </Empty>
                    )}
                </CardContent>
            </Card>

            <ClientDialog
                open={dialogOpen}
                onOpenChange={handleCloseDialog}
                initialData={selectedClient || undefined}
                clientId={selectedClient?.id}
            />
        </>
    );
}
