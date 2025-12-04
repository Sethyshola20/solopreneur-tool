import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stripeAccountSchema, type StripeAccountSchema } from '@/lib/validators/stripe';
import { useCreateStripeAccount, useUpdateStripeAccount } from '@/hooks/use-stripe';
import { ModalComponent } from '../ui/modal';
import { Button } from '../ui/button';
import { showToast } from '@/lib/toast';
import { StripeAccount } from '@/lib/use-cases/stripe';

interface StripeAccountFormProps {
    visible: boolean;
    onClose: () => void;
    initialData?: StripeAccount;
    accountId?: string;
}

export function StripeAccountForm({ visible, onClose, initialData, accountId }: StripeAccountFormProps) {
    const createMutation = useCreateStripeAccount();
    const updateMutation = useUpdateStripeAccount(accountId || '');

    const { control, handleSubmit, reset, formState: { errors } } = useForm<StripeAccountSchema>({
        resolver: zodResolver(stripeAccountSchema),
        defaultValues: {
            name: '',
            description: '',
            apiKey: '',
            stripeAccountId: '',
        },
    });

    useEffect(() => {
        if (initialData) {
            reset({
                name: initialData.name || '',
                description: initialData.description || '',
                apiKey: '', // Don't show existing API key for security
                stripeAccountId: initialData.stripeAccountId || '',
            });
        } else {
            reset({
                name: '',
                description: '',
                apiKey: '',
                stripeAccountId: '',
            });
        }
    }, [initialData, reset]);

    const onSubmit = async (data: StripeAccountSchema) => {
        const mutation = accountId ? updateMutation : createMutation;

        try {
            await mutation.mutateAsync(data);
            showToast.success(accountId ? 'Compte Stripe mis à jour !' : 'Compte Stripe ajouté !');
            onClose();
            reset();
        } catch (error: any) {
            showToast.error(error.message || 'Erreur lors de l\'enregistrement');
        }
    };

    const isPending = createMutation.isPending || updateMutation.isPending;

    return (
        <ModalComponent
            visible={visible}
            onClose={onClose}
            title={accountId ? 'Modifier le compte Stripe' : 'Ajouter un compte Stripe'}
        >
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nom *</Text>
                    <Text style={styles.description}>Un nom pour identifier ce compte Stripe</Text>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.name && styles.inputError]}
                                placeholder="Ex: SaaS Product A"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.name && (
                        <Text style={styles.errorText}>{errors.name.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Description</Text>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.description && styles.inputError]}
                                placeholder="Description optionnelle"
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.description && (
                        <Text style={styles.errorText}>{errors.description.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Clé API Stripe *</Text>
                    <Text style={styles.description}>Votre clé secrète Stripe (sera chiffrée)</Text>
                    <Controller
                        control={control}
                        name="apiKey"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.apiKey && styles.inputError]}
                                placeholder="sk_..."
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                secureTextEntry
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.apiKey && (
                        <Text style={styles.errorText}>{errors.apiKey.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Stripe Account ID</Text>
                    <Text style={styles.description}>ID du compte Stripe Connect (optionnel)</Text>
                    <Controller
                        control={control}
                        name="stripeAccountId"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.stripeAccountId && styles.inputError]}
                                placeholder="acct_..."
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.stripeAccountId && (
                        <Text style={styles.errorText}>{errors.stripeAccountId.message}</Text>
                    )}
                </View>

                <View style={styles.actions}>
                    <Button
                        variant="outline"
                        onPress={onClose}
                        style={{ flex: 1, marginRight: 8 }}
                    >
                        Annuler
                    </Button>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={isPending}
                        loading={isPending}
                        style={{ flex: 1 }}
                    >
                        {isPending ? 'Enregistrement...' : 'Enregistrer'}
                    </Button>
                </View>
            </View>
        </ModalComponent>
    );
}

const styles = StyleSheet.create({
    form: {
        gap: 16,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#0a0a0a',
        color: '#fff',
    },
    inputError: {
        borderColor: '#FF3B30',
    },
    errorText: {
        fontSize: 12,
        color: '#FF3B30',
        marginTop: 4,
    },
    actions: {
        flexDirection: 'row',
        marginTop: 8,
    },
});

