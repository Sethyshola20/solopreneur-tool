import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useClients, useDeleteClient } from '@/hooks/use-clients';
import { Client } from '@/lib/use-cases/clients';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { showToast } from '@/lib/toast';
import { ClientForm } from '@/components/clients/client-form';

export default function ClientsScreen() {
    const { data: clients, isLoading, error } = useClients();
    const router = useRouter();
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const deleteMutation = useDeleteClient(selectedClient?.id);

    // Handle delete mutation callbacks
    useEffect(() => {
        if (deleteMutation.isSuccess) {
            showToast.success('Client supprimé');
            setSelectedClient(null);
        }
        if (deleteMutation.isError) {
            showToast.error(deleteMutation.error?.message || 'Erreur lors de la suppression');
            setSelectedClient(null);
        }
    }, [deleteMutation.isSuccess, deleteMutation.isError, deleteMutation.error]);

    const handleDelete = (client: Client) => {
        Alert.alert(
            'Supprimer le client',
            `Êtes-vous sûr de vouloir supprimer ${client.name}?`,
            [
                { text: 'Annuler', style: 'cancel' },
                {
                    text: 'Supprimer',
                    style: 'destructive',
                    onPress: () => {
                        setSelectedClient(client);
                        deleteMutation.mutate();
                    },
                },
            ]
        );
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Erreur lors du chargement des clients</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        setSelectedClient(null);
                        setDialogOpen(true);
                    }}
                >
                    <Ionicons name="add" size={20} color="#fff" style={{ marginRight: 8 }} />
                    <Text style={styles.addButtonText}>Nouveau Client</Text>
                </TouchableOpacity>
            </View>

            {clients && clients.length > 0 ? (
                clients.map((client) => (
                    <View key={client.id} style={styles.clientCard}>
                        <View style={styles.clientInfo}>
                            <Text style={styles.clientName}>{client.name}</Text>
                            {client.email && (
                                <Text style={styles.clientEmail}>{client.email}</Text>
                            )}
                            {client.phone && (
                                <Text style={styles.clientPhone}>{client.phone}</Text>
                            )}
                        </View>
                        <View style={styles.clientActions}>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => {
                                    setSelectedClient(client);
                                    setDialogOpen(true);
                                }}
                            >
                                <Ionicons name="pencil-outline" size={18} color="#007AFF" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => handleDelete(client)}
                            >
                                <Ionicons name="trash-outline" size={18} color="#FF3B30" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            ) : (
                <View style={styles.emptyState}>
                    <View style={styles.emptyIconContainer}>
                        <Ionicons name="people-outline" size={48} color="#666" />
                    </View>
                    <Text style={styles.emptyTitle}>Aucun client trouvé</Text>
                </View>
            )}

            <ClientForm
                visible={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);
                    setSelectedClient(null);
                }}
                initialData={selectedClient || undefined}
                clientId={selectedClient?.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 12,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    clientCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#1a1a1a',
    },
    clientInfo: {
        flex: 1,
    },
    clientName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
        color: '#fff',
    },
    clientEmail: {
        fontSize: 14,
        color: '#999',
        marginBottom: 2,
    },
    clientPhone: {
        fontSize: 14,
        color: '#999',
    },
    clientActions: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        padding: 8,
    },
    emptyState: {
        padding: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyIconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
    error: {
        color: '#FF3B30',
        padding: 16,
    },
});

