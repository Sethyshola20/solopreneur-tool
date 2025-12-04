import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRecettesList } from '@/hooks/use-recettes';
import { Ionicons } from '@expo/vector-icons';

export default function RecettesScreen() {
    const { data: recettesList, isLoading, error } = useRecettesList();

    const formatCurrency = (value: string) =>
        Number(value).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

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
                <Text style={styles.error}>Erreur lors du chargement des recettes</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>

            {recettesList && recettesList.length > 0 ? (
                recettesList.map((recette) => (
                    <View key={recette.id} style={styles.recetteCard}>
                        <View style={styles.recetteHeader}>
                            <Text style={styles.amount}>{formatCurrency(recette.amount)}</Text>
                            <Text style={styles.date}>
                                {new Date(recette.date).toLocaleDateString('fr-FR')}
                            </Text>
                        </View>
                        {recette.clientName && (
                            <Text style={styles.clientName}>{recette.clientName}</Text>
                        )}
                        {recette.factureNumber && (
                            <Text style={styles.factureNumber}>
                                Facture: {recette.factureNumber}
                            </Text>
                        )}
                        {recette.paymentMethod && (
                            <Text style={styles.paymentMethod}>
                                Paiement: {recette.paymentMethod}
                            </Text>
                        )}
                    </View>
                ))
            ) : (
                <View style={styles.emptyState}>
                    <View style={styles.emptyIconContainer}>
                        <Ionicons name="cash-outline" size={48} color="#666" />
                    </View>
                    <Text style={styles.emptyTitle}>Aucune recette trouvée</Text>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    recetteCard: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#1a1a1a',
    },
    recetteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34C759',
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
    clientName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        color: '#fff',
    },
    factureNumber: {
        fontSize: 14,
        color: '#999',
        marginBottom: 2,
    },
    paymentMethod: {
        fontSize: 14,
        color: '#999',
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

