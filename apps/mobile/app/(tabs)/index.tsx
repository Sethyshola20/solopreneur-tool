import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useClients } from '@/hooks/use-clients';
import { useDevisList } from '@/hooks/use-devis';
import { useFacturesList } from '@/hooks/use-factures';
import { useRecettesList } from '@/hooks/use-recettes';
import { useStripeStats } from '@/hooks/use-stripe';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
    const { data: clients } = useClients();
    const { data: devisList } = useDevisList();
    const { data: facturesList } = useFacturesList();
    const { data: recettesList } = useRecettesList();
    const { data: stripeStats } = useStripeStats();

    const formatCurrency = (value: number) =>
        value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

    const stats = useMemo(() => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

        let totalRevenue = 0;
        let yearRevenue = 0;
        let monthRevenue = 0;
        let lastMonthRevenue = 0;

        recettesList?.forEach(r => {
            const date = new Date(r.date);
            const amount = Number(r.amount);
            totalRevenue += amount;

            if (date.getFullYear() === currentYear) {
                yearRevenue += amount;
            }

            if (date.getFullYear() === currentYear && date.getMonth() === currentMonth) {
                monthRevenue += amount;
            }

            if (date.getFullYear() === lastMonthYear && date.getMonth() === lastMonth) {
                lastMonthRevenue += amount;
            }
        });

        const pendingAmount = facturesList?.filter(f => f.status === 'pending')
            .reduce((sum, f) => sum + Number(f.total), 0) || 0;
        const taxDue = yearRevenue * 0.22;

        const growthTrend = lastMonthRevenue > 0
            ? ((monthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
            : 0;

        const combinedStripeData = stripeStats?.reduce((acc, stat) => {
            const currentSnapshot = stat.currentSnapshot;
            acc.mrr += currentSnapshot.mrr;
            acc.arr += currentSnapshot.arr;
            acc.activeCustomers += currentSnapshot.activeCustomers;

            const latestMonth = stat.monthlyAnalytics.slice(-1)[0];
            if (latestMonth) {
                acc.latestCustomerChurnRate = (acc.latestCustomerChurnRate * acc.accountCount + latestMonth.customerChurnRate) / (acc.accountCount + 1);
            }
            acc.accountCount++;
            return acc;
        }, { mrr: 0, arr: 0, activeCustomers: 0, latestCustomerChurnRate: 0, accountCount: 0 });

        return {
            totalRevenue,
            yearRevenue,
            monthRevenue,
            pendingAmount,
            taxDue,
            growthTrend,
            clientCount: clients?.length || 0,
            devisCount: devisList?.length || 0,
            facturesCount: facturesList?.length || 0,
            combinedStripeData,
        };
    }, [clients, devisList, facturesList, recettesList, stripeStats]);

    const primaryMRR = stats.combinedStripeData?.mrr || 0;
    const primaryARR = stats.combinedStripeData?.arr || 0;
    const primaryChurnRate = stats.combinedStripeData?.latestCustomerChurnRate || 0;

    const recentFactures = facturesList?.slice(0, 5) || [];

    return (
        <ScrollView style={styles.container}>
            {/* Key Financial Metrics */}
            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>MRR Total</Text>
                        <Ionicons name="trending-up" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(primaryMRR)}</Text>
                    <Text style={styles.statDescription}>Revenu mensuel récurrent (Stripe)</Text>
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>ARR Total</Text>
                        <Ionicons name="calendar" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(primaryARR)}</Text>
                    <Text style={styles.statDescription}>Revenu annuel récurrent (Stripe)</Text>
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>CA du Mois (Non-Récur.)</Text>
                        <Ionicons name="cash" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(stats.monthRevenue)}</Text>
                    <Text style={styles.statDescription}>Hors abonnements</Text>
                    {stats.growthTrend !== 0 && (
                        <Text style={[styles.trend, stats.growthTrend >= 0 ? styles.trendPositive : styles.trendNegative]}>
                            {stats.growthTrend >= 0 ? '+' : ''}{Math.round(stats.growthTrend)}% par rapport au mois dernier
                        </Text>
                    )}
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>Factures en Attente</Text>
                        <Ionicons name="document-text" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(stats.pendingAmount)}</Text>
                    <Text style={styles.statDescription}>Montant à encaisser</Text>
                </View>
            </View>

            {/* Recent Activity */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Factures Récentes</Text>
                {recentFactures.length > 0 ? (
                    <View style={styles.activityList}>
                        {recentFactures.map((facture) => (
                            <View key={facture.id} style={styles.activityItem}>
                                <View style={styles.activityInfo}>
                                    <Text style={styles.activityNumber}>{facture.number}</Text>
                                    <Text style={styles.activityDate}>
                                        {new Date(facture.date).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </Text>
                                </View>
                                <View style={styles.activityRight}>
                                    <Text style={styles.activityAmount}>
                                        {formatCurrency(Number(facture.total))}
                                    </Text>
                                    <View style={[styles.statusBadge, styles[`status${facture.status}`]]}>
                                        <Text style={styles.statusText}>
                                            {facture.status === 'pending' ? 'En attente' :
                                                facture.status === 'paid' ? 'Payée' :
                                                    facture.status === 'cancelled' ? 'Annulée' : facture.status}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>Aucune facture récente</Text>
                    </View>
                )}
            </View>

            {/* Operational Summary */}
            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>Clients Actifs (Stripe)</Text>
                        <Ionicons name="people" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{stats.combinedStripeData?.activeCustomers || 0}</Text>
                    <Text style={styles.statDescription}>Abonnements en cours</Text>
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>Taux de Churn</Text>
                        <Ionicons name="person-remove" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{primaryChurnRate.toFixed(2)}%</Text>
                    <Text style={styles.statDescription}>Moyenne sur tous les comptes</Text>
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>CA Annuel (Non-Récur.)</Text>
                        <Ionicons name="stats-chart" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(stats.yearRevenue)}</Text>
                    <Text style={styles.statDescription}>Année {new Date().getFullYear()}</Text>
                </View>

                <View style={styles.statCard}>
                    <View style={styles.statHeader}>
                        <Text style={styles.statLabel}>Charges Estimées</Text>
                        <Ionicons name="alert-circle" size={16} color="#999" />
                    </View>
                    <Text style={styles.statValue}>{formatCurrency(stats.taxDue)}</Text>
                    <Text style={styles.statDescription}>URSSAF (22% estimé)</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    statsContainer: {
        padding: 16,
        gap: 12,
    },
    statCard: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    statHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    statLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    statDescription: {
        fontSize: 12,
        color: '#999',
    },
    trend: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
    trendPositive: {
        color: '#34C759',
    },
    trendNegative: {
        color: '#FF3B30',
    },
    section: {
        padding: 16,
        paddingTop: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 12,
    },
    activityList: {
        gap: 12,
    },
    activityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    activityInfo: {
        flex: 1,
    },
    activityNumber: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    activityDate: {
        fontSize: 12,
        color: '#999',
    },
    activityRight: {
        alignItems: 'flex-end',
        gap: 4,
    },
    activityAmount: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statuspending: {
        backgroundColor: '#FF9500',
    },
    statuspaid: {
        backgroundColor: '#34C759',
    },
    statuscancelled: {
        backgroundColor: '#FF3B30',
    },
    statusText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase',
    },
    emptyState: {
        padding: 32,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#999',
    },
});
