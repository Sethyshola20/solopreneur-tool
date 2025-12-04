import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { factureSchema, type FactureSchema } from '@/lib/validators/factures';
import { useCreateFacture, useUpdateFacture } from '@/hooks/use-factures';
import { useClients } from '@/hooks/use-clients';
import { ModalComponent } from '../ui/modal';
import { Button } from '../ui/button';
import { Select } from '../ui/select';
import { DatePicker } from '../ui/date-picker';
import { showToast } from '@/lib/toast';
import { Ionicons } from '@expo/vector-icons';
import { FactureWithItems } from '@/lib/use-cases/factures';

interface FactureFormProps {
    visible: boolean;
    onClose: () => void;
    initialData?: FactureWithItems;
    factureId?: string;
}

export function FactureForm({ visible, onClose, initialData, factureId }: FactureFormProps) {
    const createMutation = useCreateFacture();
    const updateMutation = useUpdateFacture(factureId || '');
    const { data: clients } = useClients();

    const initialFormData = initialData
        ? {
            clientId: initialData.clientId ?? (clients?.[0]?.id || ''),
            devisId: initialData.devisId ?? "",
            date: initialData.date ?? new Date().toISOString().split("T")[0],
            dueDate: initialData.dueDate ?? "",
            status: initialData.status as 'pending' | 'paid' | 'cancelled',
            items: (Array.isArray(initialData.items) ? initialData.items : [initialData.items]).map(item => ({
                ...item,
                quantity: Number(item.quantity),
                price: Number(item.price),
            }))
        }
        : undefined;

    const { control, handleSubmit, reset, watch, formState: { errors } } = useForm<FactureSchema>({
        resolver: zodResolver(factureSchema),
        defaultValues: initialFormData || {
            clientId: clients?.[0]?.id || '',
            devisId: "",
            date: new Date().toISOString().split("T")[0],
            dueDate: "",
            status: 'pending' as 'pending' | 'paid' | 'cancelled',
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
        control,
        name: 'items',
    });

    useEffect(() => {
        reset(initialFormData || {
            clientId: (clients?.[0]?.id || ''),
            devisId: "",
            date: new Date().toISOString().split("T")[0],
            dueDate: "",
            status: 'pending' as 'pending' | 'paid' | 'cancelled',
            items: [
                {
                    description: "",
                    quantity: 1,
                    price: 1,
                }
            ],
        });
    }, [initialData, clients, reset]);

    const onSubmit = async (data: FactureSchema) => {
        const mutation = factureId ? updateMutation : createMutation;

        try {
            await mutation.mutateAsync(data);
            showToast.success(factureId ? 'Facture mise à jour !' : 'Facture créée !');
            onClose();
            reset();
        } catch (error: any) {
            showToast.error(error.message || 'Erreur lors de l\'enregistrement');
        }
    };

    const isPending = createMutation.isPending || updateMutation.isPending;
    const items = watch('items') || [];
    const total = items.reduce((acc, item) => {
        return acc + (Number(item.quantity) || 0) * (Number(item.price) || 0);
    }, 0);

    const clientOptions = clients?.map(client => ({
        label: client.name,
        value: client.id,
    })) || [];

    const statusOptions = [
        { label: 'En attente', value: 'pending' },
        { label: 'Payée', value: 'paid' },
        { label: 'Annulée', value: 'cancelled' },
    ];

    return (
        <ModalComponent
            visible={visible}
            onClose={onClose}
            title={factureId ? 'Modifier la facture' : 'Nouvelle facture'}
        >
            <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.label}>Client *</Text>
                        <Controller
                            control={control}
                            name="clientId"
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    value={value}
                                    onValueChange={onChange}
                                    placeholder="Sélectionner un client"
                                    options={clientOptions}
                                />
                            )}
                        />
                        {errors.clientId && (
                            <Text style={styles.errorText}>{errors.clientId.message}</Text>
                        )}
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, { flex: 1 }]}>
                        <Text style={styles.label}>Date *</Text>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Sélectionner la date"
                                />
                            )}
                        />
                        {errors.date && (
                            <Text style={styles.errorText}>{errors.date.message}</Text>
                        )}
                    </View>

                    <View style={[styles.inputGroup, { flex: 1, marginLeft: 12 }]}>
                        <Text style={styles.label}>Date d'échéance</Text>
                        <Controller
                            control={control}
                            name="dueDate"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    value={value || ''}
                                    onChange={onChange}
                                    placeholder="Date d'échéance"
                                />
                            )}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Statut</Text>
                    <Controller
                        control={control}
                        name="status"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                value={value}
                                onValueChange={onChange}
                                placeholder="Sélectionner le statut"
                                options={statusOptions}
                            />
                        )}
                    />
                </View>

                <View style={styles.itemsSection}>
                    <View style={styles.itemsHeader}>
                        <Text style={styles.sectionTitle}>Articles</Text>
                        <TouchableOpacity
                            style={styles.addItemButton}
                            onPress={() => append({ description: "", quantity: 1, price: 1 })}
                        >
                            <Ionicons name="add" size={20} color="#fff" />
                            <Text style={styles.addItemText}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>

                    {fields.map((field, index) => (
                        <View key={field.id} style={styles.itemCard}>
                            <View style={styles.itemHeader}>
                                <Text style={styles.itemNumber}>Article {index + 1}</Text>
                                {fields.length > 1 && (
                                    <TouchableOpacity
                                        onPress={() => remove(index)}
                                        style={styles.removeButton}
                                    >
                                        <Ionicons name="trash-outline" size={18} color="#FF3B30" />
                                    </TouchableOpacity>
                                )}
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Description *</Text>
                                <Controller
                                    control={control}
                                    name={`items.${index}.description`}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={[styles.input, styles.textArea, errors.items?.[index]?.description && styles.inputError]}
                                            placeholder="Description de l'article"
                                            value={value}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            multiline
                                            numberOfLines={2}
                                            placeholderTextColor="#666"
                                        />
                                    )}
                                />
                                {errors.items?.[index]?.description && (
                                    <Text style={styles.errorText}>
                                        {errors.items[index]?.description?.message}
                                    </Text>
                                )}
                            </View>

                            <View style={styles.row}>
                                <View style={[styles.inputGroup, { flex: 1 }]}>
                                    <Text style={styles.label}>Quantité *</Text>
                                    <Controller
                                        control={control}
                                        name={`items.${index}.quantity`}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                style={[styles.input, errors.items?.[index]?.quantity && styles.inputError]}
                                                placeholder="1"
                                                value={value?.toString() || ''}
                                                onChangeText={(text) => onChange(Number(text) || 0)}
                                                onBlur={onBlur}
                                                keyboardType="numeric"
                                                placeholderTextColor="#666"
                                            />
                                        )}
                                    />
                                    {errors.items?.[index]?.quantity && (
                                        <Text style={styles.errorText}>
                                            {errors.items[index]?.quantity?.message}
                                        </Text>
                                    )}
                                </View>

                                <View style={[styles.inputGroup, { flex: 1, marginLeft: 12 }]}>
                                    <Text style={styles.label}>Prix *</Text>
                                    <Controller
                                        control={control}
                                        name={`items.${index}.price`}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                style={[styles.input, errors.items?.[index]?.price && styles.inputError]}
                                                placeholder="0.00"
                                                value={value?.toString() || ''}
                                                onChangeText={(text) => onChange(Number(text) || 0)}
                                                onBlur={onBlur}
                                                keyboardType="decimal-pad"
                                                placeholderTextColor="#666"
                                            />
                                        )}
                                    />
                                    {errors.items?.[index]?.price && (
                                        <Text style={styles.errorText}>
                                            {errors.items[index]?.price?.message}
                                        </Text>
                                    )}
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.totalSection}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>
                        {total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </Text>
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
            </ScrollView>
        </ModalComponent>
    );
}

const styles = StyleSheet.create({
    form: {
        gap: 16,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
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
        minHeight: 60,
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
    itemsSection: {
        marginTop: 8,
        marginBottom: 16,
    },
    itemsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    addItemButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        gap: 6,
    },
    addItemText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    itemCard: {
        backgroundColor: '#0a0a0a',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    itemNumber: {
        fontSize: 14,
        fontWeight: '600',
        color: '#999',
    },
    removeButton: {
        padding: 4,
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#0a0a0a',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34C759',
    },
    actions: {
        flexDirection: 'row',
        marginTop: 8,
    },
});

