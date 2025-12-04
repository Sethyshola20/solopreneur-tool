import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema, type ClientSchema } from '@/lib/validators/clients';
import { useCreateClient, useUpdateClient } from '@/hooks/use-clients';
import { ModalComponent } from '../ui/modal';
import { Button } from '../ui/button';
import { showToast } from '@/lib/toast';

interface ClientFormProps {
    visible: boolean;
    onClose: () => void;
    initialData?: ClientSchema & { id?: string };
    clientId?: string;
}

export function ClientForm({ visible, onClose, initialData, clientId }: ClientFormProps) {
    const createMutation = useCreateClient();
    const updateMutation = useUpdateClient(clientId || '');

    const { control, handleSubmit, reset, formState: { errors } } = useForm<ClientSchema>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            notes: '',
        },
    });

    useEffect(() => {
        if (initialData) {
            reset({
                name: initialData.name || '',
                email: initialData.email || '',
                phone: initialData.phone || '',
                address: initialData.address || '',
                notes: initialData.notes || '',
            });
        } else {
            reset({
                name: '',
                email: '',
                phone: '',
                address: '',
                notes: '',
            });
        }
    }, [initialData, reset]);

    const onSubmit = async (data: ClientSchema) => {
        const mutation = clientId ? updateMutation : createMutation;

        try {
            await mutation.mutateAsync(data);
            showToast.success(clientId ? 'Client mis à jour !' : 'Client créé !');
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
            title={clientId ? 'Modifier le client' : 'Nouveau client'}
        >
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nom *</Text>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.name && styles.inputError]}
                                placeholder="Nom du client"
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
                    <Text style={styles.label}>Email</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                placeholder="email@example.com"
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.email && (
                        <Text style={styles.errorText}>{errors.email.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Téléphone</Text>
                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, errors.phone && styles.inputError]}
                                placeholder="+33 6 12 34 56 78"
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                keyboardType="phone-pad"
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.phone && (
                        <Text style={styles.errorText}>{errors.phone.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Adresse</Text>
                    <Controller
                        control={control}
                        name="address"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, styles.textArea, errors.address && styles.inputError]}
                                placeholder="Adresse complète"
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                multiline
                                numberOfLines={3}
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.address && (
                        <Text style={styles.errorText}>{errors.address.message}</Text>
                    )}
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Notes</Text>
                    <Controller
                        control={control}
                        name="notes"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.input, styles.textArea, errors.notes && styles.inputError]}
                                placeholder="Notes additionnelles"
                                value={value || ''}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                multiline
                                numberOfLines={3}
                                placeholderTextColor="#666"
                            />
                        )}
                    />
                    {errors.notes && (
                        <Text style={styles.errorText}>{errors.notes.message}</Text>
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
    textArea: {
        minHeight: 80,
        textAlignVertical: 'top',
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

