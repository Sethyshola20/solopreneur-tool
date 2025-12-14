'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { devisSchema, type DevisSchema } from '@/lib/validators/devis';
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
import { Label } from '@/components/ui/label';
import { CardContent, CardFooter } from '@/components/ui/card';
import { useCreateDevis, useUpdateDevis } from '@/hooks/use-devis';
import { useClients } from '@/hooks/use-clients';
import { Trash2, Plus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { DevisWithItems } from '@/lib/use-cases/devis';
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DatePicker } from '../ui/date-picker';

interface DevisFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    devisId?: string;
    initialData?: DevisWithItems
}

export function DevisForm({ open, onOpenChange, devisId, initialData }: DevisFormProps) {
    const createMutation = useCreateDevis();
    const updateMutation = useUpdateDevis(devisId || '');

    const { data: clients } = useClients()

    console.log({ clients })
    const initalFormData = initialData
        ? {
            clientId: initialData.clientId ?? clients?.[0]?.id,
            date: initialData.date ?? "",
            validUntil: initialData.validUntil ?? "",
            status: initialData.status as 'draft' | 'sent' | 'accepted' | 'rejected',
            items: (Array.isArray(initialData.items) ? initialData.items : [initialData.items]).map(item => ({
                ...item,
                quantity: Number(item.quantity),
                price: Number(item.price),
            }))
        }
        : undefined;

    const form = useForm<DevisSchema>({
        resolver: zodResolver(devisSchema),
        defaultValues: initalFormData || {
            clientId: clients?.[0]?.id,
            date: new Date().toISOString().split("T")[0],
            validUntil: "",
            status: 'draft' as 'draft' | 'sent' | 'accepted' | 'rejected',
            items: [
                {
                    description: "",
                    quantity: 1,
                    price: 1,
                }
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'items',
    });

    useEffect(() => {
        form.reset(initalFormData || {
            clientId: clients?.[0].id,
            date: new Date().toISOString().split("T")[0],
            validUntil: "",
            status: 'draft' as 'draft' | 'sent' | 'accepted' | 'rejected',
            items: [
                {
                    description: "",
                    quantity: 1,
                    price: 1,
                }
            ],
        },);
    }, [initialData, form]);


    const onSubmit = async (data: DevisSchema) => {
        const mutation = devisId ? updateMutation : createMutation;

        toast.promise(
            mutation.mutateAsync(data).then(() => {
                onOpenChange(false);
                form.reset();
            }),
            {
                loading: devisId ? 'Mise à jour...' : 'Création...',
                success: devisId ? 'Devis mis à jour !' : 'Devis créé !',
                error: (error) => 'Erreur: ' + error.message,
            }
        );
    };

    const isPending = createMutation.isPending || updateMutation.isPending;

    // Calculate Total
    const items = form.watch('items') || [
        {
            description: "",
            quantity: 1,
            price: 1,
        }
    ];
    const total = items.reduce((acc, item) => {
        return acc + (Number(item.quantity) || 0) * (Number(item.price) || 0);
    }, 0);

    return (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>{devisId ? 'Modifier le devis' : 'Nouveau devis'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className='p-0'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="clientId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Client *</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                                                <SelectTrigger className='w-full'>
                                                    <SelectValue
                                                        placeholder={
                                                            clients?.length === 1
                                                                ? clients?.[0].name
                                                                : clients?.find(
                                                                    (client) => client.id.toString() === field.value
                                                                )?.name || 'Select a client' || clients?.length === 0 && 'No clients'
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {clients?.map((client) => (
                                                        <SelectItem key={client.id} value={client.id}>
                                                            {client.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date *</FormLabel>
                                        <FormControl>
                                            <DatePicker
                                                value={field.value ?? ""}
                                                onChange={(value) => field.onChange(value || "")}
                                                placeholder={field.value ?? ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="validUntil"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Validité (optionnel)</FormLabel>
                                        <FormControl>
                                            <DatePicker
                                                value={field.value ?? ""}
                                                onChange={(value) => field.onChange(value || "")}
                                                placeholder="Sélectionner la date d'échéance"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Statut</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                                                <SelectTrigger className='w-full'>
                                                    <SelectValue placeholder="Select a status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="draft">Brouillon</SelectItem>
                                                    <SelectItem value="sent">Envoyé</SelectItem>
                                                    <SelectItem value="accepted">Accepté</SelectItem>
                                                    <SelectItem value="rejected">Refusé</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pb-2">
                                <h3 className="text-lg font-medium">Articles</h3>
                                <Button type="button" variant="outline" size="sm" onClick={() => append({ description: '', quantity: 1, price: 0 })}>
                                    <Plus className="mr-2 h-4 w-4" /> Ajouter un article
                                </Button>
                            </div>

                            {fields.map((field, index) => (
                                <div key={field.id} className="grid grid-cols-12 gap-2 items-end">
                                    <div className="col-span-6 space-y-1">
                                        <Label className="text-xs">Description</Label>
                                        <Input {...form.register(`items.${index}.description`)} placeholder="Description de l'article" />
                                        {form.formState.errors.items?.[index]?.description && (
                                            <p className="text-xs text-destructive">{form.formState.errors.items[index]?.description?.message}</p>
                                        )}
                                    </div>
                                    <div className="col-span-2 space-y-1">
                                        <Label className="text-xs">Qté</Label>
                                        <Input type="number" step="0.1" {...form.register(`items.${index}.quantity`)} />
                                    </div>
                                    <div className="col-span-3 space-y-1">
                                        <Label className="text-xs">Prix Unit.</Label>
                                        <Input type="number" step="0.01" {...form.register(`items.${index}.price`)} />
                                    </div>
                                    <div className="col-span-1">
                                        <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => remove(index)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            {form.formState.errors.items && (
                                <p className="text-sm text-destructive">{form.formState.errors.items.message}</p>
                            )}
                        </div>

                        <div className="flex justify-end pt-4 ">
                            <div className="text-right">
                                <span className="text-muted-foreground mr-4">Total:</span>
                                <span className="text-2xl font-bold">{total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
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
                    </CardFooter>
                </form>
            </Form>
        </DialogContent>
    );
}
