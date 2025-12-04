import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFacturesList } from '@/hooks/use-factures';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FactureForm } from '@/components/factures/facture-form';

export default function FacturesScreen() {
    const { data: facturesList, isLoading, error } = useFacturesList();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editFacture, setEditFacture] = useState<any | null>(null);
    const router = useRouter();

    const formatCurrency = (value: string) =>
        Number(value).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return '#34C759';
            case 'pending': return '#FF9500';
            case 'cancelled': return '#FF3B30';
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
                <Text style={styles.error}>Erreur lors du chargement des factures</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        setEditFacture(null);
                        setDialogOpen(true);
                    }}
                >
                    <Ionicons name="add" size={20} color="#fff" style={{ marginRight: 8 }} />
                    <Text style={styles.addButtonText}>Nouvelle Facture</Text>
                </TouchableOpacity>
            </View>

            {facturesList && facturesList.length > 0 ? (
                facturesList.map((facture) => (
                    <TouchableOpacity
                        key={facture.id}
                        style={styles.factureCard}
                        onPress={() => router.push(`/factures/${facture.id}`)}
                    >
                        <View style={styles.factureHeader}>
                            <Text style={styles.factureNumber}>{facture.number}</Text>
                            <View
                                style={[
                                    styles.statusBadge,
                                    { backgroundColor: getStatusColor(facture.status) },
                                ]}
                            >
                                <Text style={styles.statusText}>{facture.status}</Text>
                            </View>
                        </View>
                        {facture.clientName && (
                            <Text style={styles.clientName}>{facture.clientName}</Text>
                        )}
                        <Text style={styles.date}>
                            {new Date(facture.date).toLocaleDateString('fr-FR')}
                        </Text>
                        <Text style={styles.total}>{formatCurrency(facture.total)}</Text>
                    </TouchableOpacity>
                ))
            ) : (
                <View style={styles.emptyState}>
                    <View style={styles.emptyIconContainer}>
                        <Ionicons name="receipt-outline" size={48} color="#666" />
                    </View>
                    <Text style={styles.emptyTitle}>Aucune facture trouvée</Text>
                </View>
            )}

            <FactureForm
                visible={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);
                    setEditFacture(null);
                }}
                initialData={editFacture || undefined}
                factureId={editFacture?.id}
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
    factureCard: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#1a1a1a',
    },
    factureHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    factureNumber: {
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

