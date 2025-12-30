'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Building2, FileText, CreditCard, Loader2, Mail, MapPin, ImageIcon } from 'lucide-react';
import { useSaveSettings, useSettings } from '@/hooks/use-settings';
import { settingsSchema, SettingsSchema } from '@/lib/validators/settings';

export default function SettingsForm() {
    const { data: settings, isLoading, error } = useSettings();
    const saveMutation = useSaveSettings();

    const form = useForm<SettingsSchema>({
        resolver: zodResolver(settingsSchema),
        defaultValues: {
            companyName: '',
            siret: '',
            ape: '',
            address: '',
            email: '',
            logoUrl: '',
            paymentTerms: '',
            latePaymentPenalty: '',
            recoveryFee: '',
            legalMentions: '',
        },
    });

    useEffect(() => {
        if (settings) {
            form.reset({
                companyName: settings.companyName ?? '',
                siret: settings.siret ?? '',
                ape: settings.ape ?? '',
                address: settings.address ?? '',
                email: settings.email ?? '',
                logoUrl: settings.logoUrl ?? '',
                paymentTerms: settings.paymentTerms ?? '',
                latePaymentPenalty: settings.latePaymentPenalty ?? '',
                recoveryFee: settings.recoveryFee ?? '',
                legalMentions: settings.legalMentions ?? '',
            });
        }
    }, [settings, form]);

    const onSubmit = async (data: SettingsSchema) => {
        try {
            await saveMutation.mutateAsync(data);
            alert('Paramètres enregistrés avec succès !');
        } catch (error) {
            alert('Erreur lors de l\'enregistrement');
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
        );
    }

    if (error) {
        return (
            <Card className="w-full max-w-4xl mx-auto border-red-200">
                <CardContent className="pt-6">
                    <div className="text-center text-red-600">
                        <p className="font-medium">Erreur lors du chargement des paramètres</p>
                        <p className="text-sm mt-1">Veuillez réessayer plus tard</p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="w-full space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
                <p className="text-gray-500 mt-2">
                    Gérez les informations de votre entreprise et vos paramètres de facturation
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Company Information Section */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-gray-600" />
                                <CardTitle>Informations de l'entreprise</CardTitle>
                            </div>
                            <CardDescription>
                                Informations légales et coordonnées de votre entreprise
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nom de l'entreprise</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Ma Micro-Entreprise"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                />
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
                                            <FormLabel className="flex items-center gap-2">
                                                <Mail className="h-4 w-4" />
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="contact@entreprise.fr"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            Adresse complète
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123 Rue de la République, 75001 Paris"
                                                {...field}
                                                value={field.value ?? ''}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="siret"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>SIRET</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="123 456 789 00012"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    maxLength={17}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Format : 14 chiffres (espaces acceptés)
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="ape"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Code APE / NAF</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="62.01Z"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    maxLength={6}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Format : 4 chiffres + 1 lettre (ex: 62.01Z)
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="logoUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <ImageIcon className="h-4 w-4" />
                                            URL du logo
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="https://exemple.com/logo.png"
                                                {...field}
                                                value={field.value ?? ''}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Lien public vers le logo de votre entreprise (apparaîtra sur les factures)
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* Payment Terms Section */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-gray-600" />
                                <CardTitle>Conditions de paiement</CardTitle>
                            </div>
                            <CardDescription>
                                Paramètres par défaut pour vos factures
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <FormField
                                    control={form.control}
                                    name="paymentTerms"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Délai de paiement</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type="number"
                                                        placeholder="30"
                                                        {...field}
                                                        value={field.value ?? ''}
                                                        className="pr-16"
                                                    />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                                        jours
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Durée standard
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="latePaymentPenalty"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Pénalités de retard</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type="number"
                                                        step="0.01"
                                                        placeholder="10"
                                                        {...field}
                                                        value={field.value ?? ''}
                                                        className="pr-12"
                                                    />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                                        %
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Taux annuel
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="recoveryFee"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Indemnité de recouvrement</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type="number"
                                                        step="0.01"
                                                        placeholder="40"
                                                        {...field}
                                                        value={field.value ?? ''}
                                                        className="pr-12"
                                                    />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                                                        €
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormDescription>
                                                Montant légal
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Legal Section */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-gray-600" />
                                <CardTitle>Mentions légales</CardTitle>
                            </div>
                            <CardDescription>
                                Texte personnalisé à afficher sur vos factures
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="legalMentions"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Exemple : TVA non applicable, art. 293 B du CGI. Escompte pour paiement anticipé : néant. Conditions de règlement : paiement à réception de facture."
                                                {...field}
                                                value={field.value ?? ''}
                                                rows={4}
                                                className="resize-none"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Ces mentions apparaîtront en bas de chaque facture générée
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => form.reset()}
                        >
                            Réinitialiser
                        </Button>
                        <Button
                            type="submit"
                            disabled={saveMutation.isPending}
                            className="min-w-[140px]"
                        >
                            {saveMutation.isPending ? (
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
        </div>
    );
}