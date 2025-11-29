'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stripeAccountSchema, type StripeAccountSchema } from '@/lib/validators/stripe';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
import { useCreateStripeAccount, useUpdateStripeAccount } from '@/hooks/use-stripe';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { StripeAccount } from '@/lib/use-cases/stripe';
import { useEffect } from 'react';

interface StripeAccountDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: StripeAccount;
    accountId?: string;
}

export function StripeAccountDialog({ open, onOpenChange, initialData, accountId }: StripeAccountDialogProps) {
    const createMutation = useCreateStripeAccount();
    const updateMutation = useUpdateStripeAccount(accountId || '');

    const form = useForm<StripeAccountSchema>({
        resolver: zodResolver(stripeAccountSchema),
        defaultValues: initialData || {
            name: '',
            description: '',
            apiKey: '',
            webhookSecret: '',
            isActive: true,
        },
    });
    useEffect(() => {
        if (initialData) {
            form.reset({
                ...initialData,
            });
        } else {
            form.reset({
                name: '',
                description: '',
                apiKey: '',
                webhookSecret: '',
                isActive: true,
            });
        }
    }, [initialData, form]);

    const onSubmit = async (data: StripeAccountSchema) => {
        const mutation = accountId ? updateMutation : createMutation;

        toast.promise(
            mutation.mutateAsync(data).then(() => {
                onOpenChange(false);
                form.reset();
            }),
            {
                loading: accountId ? 'Mise à jour...' : 'Ajout...',
                success: accountId ? 'Compte Stripe mis à jour !' : 'Compte Stripe ajouté !',
                error: (error) => 'Erreur: ' + error.message,
            }
        );
    };

    const isPending = createMutation.isPending || updateMutation.isPending;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{accountId ? 'Modifier le compte Stripe' : 'Ajouter un compte Stripe'}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: SaaS Product A" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Un nom pour identifier ce compte Stripe
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Description optionnelle" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="apiKey"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Clé API Stripe *</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="sk_..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Votre clé secrète Stripe (sera chiffrée)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="webhookSecret"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Webhook Secret</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="whsec_..."
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Secret du webhook Stripe (optionnel)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                                Annuler
                            </Button>
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
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
