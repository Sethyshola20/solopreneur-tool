'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { settingsSchema, type SettingsSchema } from '@/lib/validators/settings';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSaveSettings } from '@/hooks/use-settings';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface SettingsFormProps {
    initialData?: SettingsSchema | null;
}

export function SettingsForm({ initialData }: SettingsFormProps) {
    const saveMutation = useSaveSettings();

    const form = useForm<SettingsSchema>({
        resolver: zodResolver(settingsSchema),
        defaultValues: initialData || {
            companyName: '',
            siret: '',
            address: '',
            email: '',
            logoUrl: '',
            legalMentions: '',
        },
    });

    const onSubmit = async (data: SettingsSchema) => {
        toast.promise(
            saveMutation.mutateAsync(data),
            {
                loading: 'Enregistrement...',
                success: 'Paramètres enregistrés avec succès !',
                error: (error) => 'Erreur: ' + error.message,
            }
        );
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Paramètres de l'entreprise</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de l'entreprise</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ma Micro-Entreprise" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="siret"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>SIRET</FormLabel>
                                    <FormControl>
                                        <Input placeholder="123 456 789 00012" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormDescription>
                                        Numéro SIRET à 14 chiffres
                                    </FormDescription>
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
                                        <Input placeholder="123 Rue de la République, 75001 Paris" {...field} value={field.value || ''} />
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
                                        <Input type="email" placeholder="contact@entreprise.fr" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="logoUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>URL du Logo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://..." {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormDescription>
                                        URL publique de votre logo
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="legalMentions"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mentions légales</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mentions légales par défaut" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={saveMutation.isPending} className="w-full">
                            {saveMutation.isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enregistrement...
                                </>
                            ) : (
                                'Enregistrer'
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
