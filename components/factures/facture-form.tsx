'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { factureSchema, type FactureSchema } from '@/lib/validators/factures';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CardContent, CardFooter } from '@/components/ui/card';
import { useCreateFacture, useUpdateFacture } from '@/hooks/use-factures';
import { useClients } from '@/hooks/use-clients';
import { Trash2, Plus, Loader2, ChevronsUpDown, Check } from 'lucide-react';
import { toast } from 'sonner';
import { FactureWithItems } from '@/lib/use-cases/factures';
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DatePicker } from '../ui/date-picker';
import { useEffect, useState } from 'react';
import { useDevisList } from '@/hooks/use-devis';
import { DevisWithItems } from '@/lib/use-cases/devis';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

interface FactureFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: FactureWithItems;
    factureId?: string;
}

export function FactureForm({ onOpenChange, initialData, factureId }: FactureFormProps) {
    const createMutation = useCreateFacture();
    const updateMutation = useUpdateFacture(factureId || '');
    const [value, setValue] = useState("")

    const { data: devisList } = useDevisList();
    const { data: clients } = useClients();

    const initalFormData = initialData
        ? {
            clientId: initialData.clientId ?? clients?.[0]?.id,
            devisId: initialData.devisId ?? "",
            date: initialData.date ?? "",
            dueDate: initialData.dueDate ?? "",
            status: initialData.status as 'pending' | 'paid' | 'cancelled',
            serviceStartDate: initialData.serviceStartDate ?? "",
            serviceEndDate: initialData.serviceEndDate ?? "",
            items: (Array.isArray(initialData.items) ? initialData.items : [initialData.items]).map(item => ({
                ...item,
                description: item.description ?? "",
                quantity: Number(item.quantity),
                price: Number(item.price),
            }))
        }
        : undefined;

    const form = useForm<FactureSchema>({
        resolver: zodResolver(factureSchema),
        defaultValues: initalFormData || {
            clientId: clients?.[0]?.id,
            devisId: "",
            date: new Date().toISOString().split("T")[0],
            dueDate: "",
            serviceStartDate: "",
            serviceEndDate: "",
            status: 'pending' as 'pending' | 'paid' | 'cancelled',
            items: [
                {
                    description: "",
                    quantity: 1,
                    price: 1,
                }
            ]
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'items',
    });


    useEffect(() => {
        if (value) {
            const devis = devisList?.find((d) => d.id === value)
            if (devis) {
                form.setValue('clientId', devis.clientId)
                form.setValue('devisId', devis.id)
                form.setValue('date', devis.date)
                form.setValue('status', devis.status as 'pending' | 'paid' | 'cancelled')
                form.setValue('items', (Array.isArray(devis.items) ? devis.items : [devis.items]).map(item => ({
                    ...item,
                    description: item.description ?? "",
                    quantity: Number(item.quantity),
                    price: Number(item.price),
                })))
            }
        } else {
            form.reset(initalFormData || {
                clientId: clients?.[0]?.id,
                devisId: "",
                date: new Date().toISOString().split("T")[0],
                dueDate: "",
                serviceStartDate: "",
                serviceEndDate: "",
                status: 'pending' as 'pending' | 'paid' | 'cancelled',
                items: [
                    {
                        description: "",
                        quantity: 1,
                        price: 1,
                    }
                ]
            })
        }
    }, [value])


    useEffect(() => {
        form.reset(initalFormData || {
            clientId: clients?.[0]?.id,
            devisId: "",
            date: new Date().toISOString().split("T")[0],
            dueDate: "",
            serviceStartDate: "",
            serviceEndDate: "",
            status: 'pending' as 'pending' | 'paid' | 'cancelled',
            items: [
                {
                    description: "",
                    quantity: 1,
                    price: 1,
                }
            ]
        });
    }, [initialData, form]);

    const onSubmit = async (data: FactureSchema) => {
        const mutation = factureId ? updateMutation : createMutation;

        toast.promise(
            mutation.mutateAsync(data).then(() => {
                onOpenChange(false);
                form.reset();
            }),
            {
                loading: factureId ? 'Mise à jour...' : 'Création...',
                success: factureId ? 'Facture mise à jour avec succès !' : 'Facture créée avec succès !',
                error: (error) => 'Erreur: ' + error.message,
            }
        );
    };


    const isPending = createMutation.isPending || updateMutation.isPending;

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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>{factureId ? 'Modifier la facture' : 'Nouvelle facture'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DevisListCombobox devis={devisList || []} value={value} setValue={setValue} />
                            <FormField
                                control={form.control}
                                name="clientId"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Client <span className="text-destructive">*</span></FormLabel>
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
                                        <FormLabel>Date d'émission<span className="text-destructive">*</span></FormLabel>
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
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date d'échéance (optionnel)</FormLabel>
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
                                    <FormItem>
                                        <FormLabel>Statut</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={(value) => field.onChange(value)}
                                                value={field.value}>
                                                <SelectTrigger className='w-full'>
                                                    <SelectValue placeholder={field.value || 'Select a status'} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pending">En attente</SelectItem>
                                                    <SelectItem value="paid">Payée</SelectItem>
                                                    <SelectItem value="cancelled">Annulée</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="serviceStartDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date de début du service</FormLabel>
                                        <FormControl>
                                            <DatePicker
                                                value={field.value ?? ""}
                                                onChange={(value) => field.onChange(value || "")}
                                                placeholder="Sélectionner la date de début"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="serviceEndDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date de fin du service</FormLabel>
                                        <FormControl>
                                            <DatePicker
                                                value={field.value ?? ""}
                                                onChange={(value) => field.onChange(value || "")}
                                                placeholder="Sélectionner la date de fin"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b pt-4 pb-4">
                                <h3 className="text-lg font-medium">Articles</h3>
                                <Button type="button" variant="outline" size="sm" onClick={() => append({ description: '', quantity: 1, price: 0 })}>
                                    <Plus className="mr-2 h-4 w-4" /> Ajouter un article
                                </Button>
                            </div>

                            {fields.map((field, index) => (
                                <div key={field.id} className="grid grid-cols-12 gap-2 items-end">
                                    <FormField
                                        control={form.control}
                                        name={`items.${index}.description`}
                                        render={({ field }) => (
                                            <FormItem className="col-span-6">
                                                <FormLabel className="text-xs">Description <span className="text-destructive">*</span></FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Description de l'article" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`items.${index}.quantity`}
                                        render={({ field }) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="text-xs">Qté</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        {...field}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={`items.${index}.price`}
                                        render={({ field }) => (
                                            <FormItem className="col-span-3">
                                                <FormLabel className="text-xs">Prix Unit.</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        step="0.01"
                                                        {...field}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => remove(index)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end pt-4 ">
                            <div className="text-right">
                                <span className="text-muted-foreground mr-4">Total:</span>
                                <span className="text-2xl font-bold">{total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
                            </div>
                        </div>

                        <div className="bg-muted p-3 rounded-md">
                            <FormDescription className="font-medium">
                                * TVA non applicable – art. 293 B du CGI
                            </FormDescription>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 pr-0 pt-6">
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


function DevisListCombobox({ devis, value, setValue }: { devis: DevisWithItems[]; value: string; setValue: (value: string) => void }) {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col gap-2'>
            <Label htmlFor="devisId">Devis</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className=" justify-between"
                    >
                        {value
                            ? devis.find((d) => d.id === value)?.clientName + " - " + devis.find((d) => d.id === value)?.number
                            : "Créer une facture à partir d'un devis..."}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className=" p-0">
                    <Command>
                        <CommandInput placeholder="Rechercher un devis..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>Pas de devis trouvé.</CommandEmpty>
                            <CommandGroup>
                                {devis.map((d) => (
                                    <CommandItem
                                        key={d.id}
                                        value={d.id}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {d.clientName + " - " + d.number}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === d.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}