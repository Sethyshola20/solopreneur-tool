'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema, type ClientSchema } from '@/lib/validators/clients';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateClient, useUpdateClient } from '@/hooks/use-clients';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';

interface ClientFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: ClientSchema & { id?: string };
    clientId?: string;
}

export function ClientForm({ open, onOpenChange, initialData, clientId }: ClientFormProps) {
    const createMutation = useCreateClient();
    const updateMutation = useUpdateClient(clientId || '');

    const form = useForm<ClientSchema>({
        resolver: zodResolver(clientSchema),
        defaultValues: initialData || {
            name: '',
            email: '',
            phone: '',
            address: '',
            notes: '',
        },
    });

    useEffect(() => {
        form.reset(initialData || {
            name: '',
            email: '',
            phone: '',
            address: '',
            notes: '',
        });
    }, [initialData, form]);


    const onSubmit = async (data: ClientSchema) => {
        const mutation = clientId ? updateMutation : createMutation;

        toast.promise(
            mutation.mutateAsync(data).then(() => {
                onOpenChange(false);
                form.reset();
            }),
            {
                loading: clientId ? 'Mise à jour...' : 'Création...',
                success: clientId ? 'Client mis à jour !' : 'Client créé !',
                error: (error) => 'Erreur: ' + error.message,
            }
        );
    };

    const isPending = createMutation.isPending || updateMutation.isPending;

    return (
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>{clientId ? 'Modifier le client' : 'Nouveau client'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nom *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nom du client" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="email@example.com" {...field} value={field.value || ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Téléphone</FormLabel>
                                <FormControl>
                                    <Input placeholder="+33 6 12 34 56 78" {...field} value={field.value || ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adresse</FormLabel>
                                <FormControl>
                                    <Input placeholder="Adresse complète" {...field} value={field.value || ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notes</FormLabel>
                                <FormControl>
                                    <Input placeholder="Notes additionnelles" {...field} value={field.value || ''} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter className='mt-4'>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Annuler
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enregistrement...
                                </>
                            ) : (
                                'Enregistrer'
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    );
}
