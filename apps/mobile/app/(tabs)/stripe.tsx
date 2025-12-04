import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useStripeAccounts, useProducts, useSyncProducts, useDeleteStripeAccount } from '@/hooks/use-stripe';
import { Ionicons } from '@expo/vector-icons';
import { showToast } from '@/lib/toast';
import { StripeAccountForm } from '@/components/stripe/stripe-account-form';

export default function StripeScreen() {
    const { data: accounts, isLoading } = useStripeAccounts();
    const { data: products } = useProducts();
    const syncMutation = useSyncProducts();
    const deleteMutation = useDeleteStripeAccount();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editAccount, setEditAccount] = useState<any | null>(null);
    const [accountToDelete, setAccountToDelete] = useState<{ id: string; name: string } | null>(null);

    const handleSync = (accountId: string, accountName: string) => {
        syncMutation.mutate(accountId, {
            onSuccess: (data) => {
                showToast.success(`${data.count} produit${data.count !== 1 ? 's' : ''} synchronisé${data.count !== 1 ? 's' : ''} !`);
            },
            onError: (error: any) => {
                showToast.error(error.message || 'Erreur de synchronisation');
            },
        });
    };

    const handleDelete = () => {
        if (!accountToDelete) return;
        deleteMutation.mutate(accountToDelete.id, {
            onSuccess: () => {
                showToast.success('Compte Stripe déconnecté !');
                setAccountToDelete(null);
            },
            onError: (error: any) => {
                showToast.error(error.message || 'Erreur lors de la déconnexion');
            },
        });
    };

    const productsByAccount = products?.reduce((acc, product) => {
        if (!acc[product.stripeAccountId]) acc[product.stripeAccountId] = [];
        acc[product.stripeAccountId].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Chargement...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {accounts && accounts.length === 0 ? (
                <View style={styles.emptyState}>
                    <View style={styles.emptyIconContainer}>
                        <Ionicons name="card-outline" size={48} color="#666" />
                    </View>
                    <Text style={styles.emptyTitle}>Aucun compte Stripe connecté</Text>
                    <Text style={styles.emptyDescription}>
                        Commencez par connecter votre premier compte pour synchroniser vos produits et suivre vos ventes.
                    </Text>
                    <TouchableOpacity
                        style={styles.emptyButton}
                        onPress={() => {
                            setEditAccount(null);
                            setDialogOpen(true);
                        }}
                    >
                        <Ionicons name="add" size={20} color="#fff" style={{ marginRight: 8 }} />
                        <Text style={styles.emptyButtonText}>Connecter un compte</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    {accounts?.map((account) => {
                        const accountProducts = productsByAccount?.[account.id] || [];
                        const productCount = accountProducts.length;
                        const isSyncing = syncMutation.isPending && syncMutation.variables === account.id;

                        return (
                            <View key={account.id} style={styles.accountCard}>
                                <View style={styles.accountHeader}>
                                    <View style={styles.accountInfo}>
                                        <Text style={styles.accountName}>{account.name}</Text>
                                        {account.description && (
                                            <Text style={styles.accountDescription}>{account.description}</Text>
                                        )}
                                    </View>
                                    <View style={[styles.statusBadge, account.isActive && styles.statusBadgeActive]}>
                                        <Ionicons
                                            name={account.isActive ? "checkmark-circle" : "time-outline"}
                                            size={16}
                                            color={account.isActive ? "#34C759" : "#999"}
                                            style={{ marginRight: 4 }}
                                        />
                                        <Text style={[styles.statusText, account.isActive && styles.statusTextActive]}>
                                            {account.isActive ? 'Actif' : 'Inactif'}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.metricsRow}>
                                    <View style={styles.metric}>
                                        <Text style={styles.metricLabel}>Produits</Text>
                                        <Text style={styles.metricValue}>{productCount}</Text>
                                    </View>
                                    <View style={styles.metric}>
                                        <Text style={styles.metricLabel}>Dernière synchro</Text>
                                        <Text style={styles.metricValue}>
                                            {account.lastSyncAt
                                                ? new Date(account.lastSyncAt).toLocaleDateString('fr-FR')
                                                : 'Jamais'}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.separator} />

                                {accountProducts.length > 0 && (
                                    <View style={styles.productsSection}>
                                        <Text style={styles.productsTitle}>
                                            Produits ({accountProducts.length})
                                        </Text>
                                        {accountProducts.slice(0, 3).map((product) => (
                                            <View key={product.id} style={styles.productItem}>
                                                <Text style={styles.productName} numberOfLines={1}>
                                                    {product.name}
                                                </Text>
                                                {product.price && (
                                                    <Text style={styles.productPrice}>
                                                        {Number(product.price).toLocaleString('fr-FR', {
                                                            style: 'currency',
                                                            currency: product.currency,
                                                        })}
                                                    </Text>
                                                )}
                                            </View>
                                        ))}
                                        {accountProducts.length > 3 && (
                                            <Text style={styles.moreProducts}>
                                                +{accountProducts.length - 3} autre{accountProducts.length - 3 > 1 ? 's' : ''}
                                            </Text>
                                        )}
                                    </View>
                                )}

                                <View style={styles.actionsContainer}>
                                    <TouchableOpacity
                                        style={[styles.actionButton, styles.syncButton]}
                                        onPress={() => handleSync(account.id, account.name)}
                                        disabled={syncMutation.isPending}
                                    >
                                        <Ionicons
                                            name="refresh"
                                            size={18}
                                            color="#fff"
                                            style={isSyncing ? { transform: [{ rotate: '360deg' }] } : {}}
                                        />
                                        <Text style={styles.actionButtonText}>
                                            {isSyncing ? 'Synchronisation…' : 'Synchroniser'}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.actionButton, styles.editButton]}
                                        onPress={() => {
                                            setEditAccount(account);
                                            setDialogOpen(true);
                                        }}
                                    >
                                        <Ionicons name="pencil-outline" size={18} color="#007AFF" />
                                        <Text style={styles.actionButtonText}>Modifier</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.actionButton, styles.deleteButton]}
                                        onPress={() => {
                                            setAccountToDelete({ id: account.id, name: account.name });
                                            Alert.alert(
                                                'Confirmer la suppression',
                                                `Vous êtes sur le point de supprimer le compte ${account.name}. Cette action est irréversible.`,
                                                [
                                                    { text: 'Annuler', style: 'cancel' },
                                                    {
                                                        text: 'Déconnecter',
                                                        style: 'destructive',
                                                        onPress: handleDelete,
                                                    },
                                                ]
                                            );
                                        }}
                                    >
                                        <Ionicons name="trash-outline" size={18} color="#FF3B30" />
                                        <Text style={[styles.actionButtonText, styles.deleteButtonText]}>
                                            Déconnecter
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </>
            )}

            <StripeAccountForm
                visible={dialogOpen}
                onClose={() => {
                    setDialogOpen(false);
                    setEditAccount(null);
                }}
                initialData={editAccount || undefined}
                accountId={editAccount?.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loadingText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 32,
    },
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        minHeight: 400,
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
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    emptyDescription: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginBottom: 24,
        maxWidth: 300,
    },
    emptyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    emptyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    accountCard: {
        backgroundColor: '#1a1a1a',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    accountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    accountInfo: {
        flex: 1,
        marginRight: 12,
    },
    accountName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    accountDescription: {
        fontSize: 12,
        color: '#999',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#0a0a0a',
    },
    statusBadgeActive: {
        borderColor: '#34C759',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#999',
    },
    statusTextActive: {
        color: '#34C759',
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    metric: {
        flex: 1,
    },
    metricLabel: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    metricValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    separator: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 12,
    },
    productsSection: {
        marginBottom: 12,
    },
    productsTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#999',
        marginBottom: 8,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    productName: {
        fontSize: 14,
        color: '#fff',
        flex: 1,
        marginRight: 8,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
    moreProducts: {
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
        marginTop: 4,
    },
    actionsContainer: {
        gap: 8,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        gap: 8,
    },
    syncButton: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#333',
    },
    editButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#333',
    },
    deleteButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#333',
    },
    actionButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
    deleteButtonText: {
        color: '#FF3B30',
    },
});

