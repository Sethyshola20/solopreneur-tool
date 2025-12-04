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


export function ClientTable() {
    const { data: clients, isLoading, error } = useClients();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const deleteMutation = useDeleteClient(selectedClient?.id)
    const displayData = clients || [];

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur lors du chargement des clients</div>;

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
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nom</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Téléphone</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {displayData.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell className="font-medium">{client.name}</TableCell>
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
                            {displayData.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                                        Aucun client trouvé.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
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
