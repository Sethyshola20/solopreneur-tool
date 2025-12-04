import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDevisList } from '@/hooks/use-devis';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DevisForm } from '@/components/devis/devis-form';

export default function DevisScreen() {
    const { data: devisList, isLoading, error } = useDevisList();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editDevis, setEditDevis] = useState<any | null>(null);
    const router = useRouter();

    const formatCurrency = (value: string) =>
        Number(value).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'accepted': return '#34C759';
            case 'sent': return '#007AFF';
            case 'rejected': return '#FF3B30';
            default: return '#8E8E93';
        }
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
                <Text style={styles.error}>Erreur lors du chargement des devis</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        setEditDevis(null);
                        setDialogOpen(true);
                    }}
                >
                    <Ionicons name="add" size={20} color="#fff" style={{ marginRight: 8 }} />
                    <Text style={styles.addButtonText}>Nouveau Devis</Text>
                </TouchableOpacity>
            </View>

            {devisList && devisList.length > 0 ? (
                devisList.map((devis) => (
                    <TouchableOpacity
                        key={devis.id}
                        style={styles.devisCard}
                        onPress={() => router.push(`/devis/${devis.id}`)}
                    >
                        <View style={styles.devisHeader}>
                            <Text style={styles.devisNumber}>{devis.number}</Text>
                            <View
                                style={[
                                    styles.statusBadge,
                                    { backgroundColor: getStatusColor(devis.status) },
                                ]}
                            >
                                <Text style={styles.statusText}>{devis.status}</Text>
                            </View>
                        </View>
                        {devis.clientName && (
                            <Text style={styles.clientName}>{devis.clientName}</Text>
                        )}
                        <Text style={styles.date}>
                            {new Date(devis.date).toLocaleDateString('fr-FR')}
                        </Text>
                        <Text style={styles.total}>{formatCurrency(devis.total)}</Text>
                    </TouchableOpacity>
                ))
            ) : (
                <View style={styles.emptyState}>
                    <View style={styles.emptyIconContainer}>
                        <Ionicons name="document-text-outline" size={48} color="#666" />
                    </View>
                    <Text style={styles.emptyTitle}>Aucun devis trouvé</Text>
                </View>
            )}

            <DevisForm
                visible={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);
                    setEditDevis(null);
                }}
                initialData={editDevis || undefined}
                devisId={editDevis?.id}
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
    devisCard: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#1a1a1a',
    },
    devisHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    devisNumber: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    clientName: {
        fontSize: 14,
        color: '#999',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#999',
        marginBottom: 4,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
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

