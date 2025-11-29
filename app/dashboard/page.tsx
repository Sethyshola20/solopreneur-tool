'use client';

import { useMemo } from 'react';
import { useClients } from '@/hooks/use-clients';
import { useDevisList } from '@/hooks/use-devis';
import { useFacturesList } from '@/hooks/use-factures';
import { useRecettesList } from '@/hooks/use-recettes'; // Assuming this provides non-recurring revenue
import { StatsCard } from '@/components/dashboard/stats-card';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import {
    Users,
    FileText,
    Euro,
    TrendingUp,
    Calendar,
    AlertCircle,
    UserX, // For Churn
    Activity, // For Growth/Trend
} from 'lucide-react';
import { useStripeStats } from '@/hooks/use-stripe';

export default function DashboardPage() {
    const { data: clients } = useClients();
    const { data: devisList } = useDevisList();
    const { data: facturesList } = useFacturesList();
    const { data: recettesList } = useRecettesList(); // Non-recurring revenue
    const { data: stripeStats, isLoading: isLoadingStripe } = useStripeStats(); // Fetch the new calculated data

    // Helper to format currency
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

        // Calculate non-recurring revenue stats from recettesList
        recettesList?.forEach(r => {
            const date = new Date(r.recettes.date);
            const amount = Number(r.recettes.amount);

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

        // --- Non-Recurring Financials ---
        const pendingAmount = facturesList?.filter(f => f.factures.status === 'pending')
            .reduce((sum, f) => sum + Number(f.factures.total), 0) || 0;
        const taxDue = yearRevenue * 0.22; // Assuming 22% tax on yearly revenue

        const growthTrend = lastMonthRevenue > 0
            ? ((monthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
            : 0;

        // --- Stripe Analytics Aggregation ---
        // Aggregate all Stripe accounts' MRR/ARR/Customers
        const combinedStripeData = stripeStats?.reduce((acc, stat) => {
            const currentSnapshot = stat.currentSnapshot;
            acc.mrr += currentSnapshot.mrr;
            acc.arr += currentSnapshot.arr;
            acc.activeCustomers += currentSnapshot.activeCustomers;

            // Get the latest month's analytics to find the churn rate
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

            // Stripe/Recurring Metrics
            combinedStripeData,
        };
    }, [clients, devisList, facturesList, recettesList, stripeStats]);


    // Determine the main MRR/ARR and churn
    const primaryMRR = stats.combinedStripeData?.mrr || 0;
    const primaryARR = stats.combinedStripeData?.arr || 0;
    const primaryChurnRate = stats.combinedStripeData?.latestCustomerChurnRate || 0;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Tableau de Bord</h1>
            </div>

            {/* --- PRIMARY RECURRING METRICS (Stripe) --- */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="MRR Total"
                    value={formatCurrency(primaryMRR)}
                    description="Revenu mensuel récurrent (Stripe)"
                    icon={TrendingUp}
                />
                <StatsCard
                    title="ARR Total"
                    value={formatCurrency(primaryARR)}
                    description="Revenu annuel récurrent (Stripe)"
                    icon={Calendar}
                />
                <StatsCard
                    title="Clients Actifs"
                    value={stats.combinedStripeData?.activeCustomers || 0}
                    description="Clients avec un abonnement actif"
                    icon={Users}
                />
                <StatsCard
                    title="Taux de Churn (Mois)"
                    value={`${primaryChurnRate.toFixed(2)}%`}
                    description="Clients perdus le mois dernier"
                    icon={UserX}
                    trend={{
                        value: primaryChurnRate,
                        isPositive: primaryChurnRate <= 0, // Churn is good if it's 0 or negative (rev churn)
                        //isWarning: primaryChurnRate > 5, // Custom warning logic
                    }}
                />
            </div>

            {/* --- NON-RECURRING/OPERATIONAL METRICS --- */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="CA du Mois (Non-Récur.)"
                    value={formatCurrency(stats.monthRevenue)}
                    description="Chiffre d'affaires mensuel hors abonnement"
                    icon={Euro}
                    trend={{
                        value: Math.round(stats.growthTrend),
                        isPositive: stats.growthTrend >= 0,
                    }}
                />
                <StatsCard
                    title="Factures en Attente"
                    value={formatCurrency(stats.pendingAmount)}
                    description="Montant total à encaisser"
                    icon={FileText}
                />
                <StatsCard
                    title="CA Annuel (Non-Récur.)"
                    value={formatCurrency(stats.yearRevenue)}
                    description={`Année 2025`}
                    icon={Activity}
                />
                <StatsCard
                    title="Charges Estimées"
                    value={formatCurrency(stats.taxDue)}
                    description="Cotisations sociales (22% estimé)"
                    icon={AlertCircle}
                />
            </div>

            {/* --- Stripe Account Breakdown --- */}
            {stripeStats && stripeStats.length > 0 && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stripeStats.map(stat => (
                        <StatsCard
                            key={stat.accountId}
                            title={`MRR - ${stat.accountName}`}
                            value={formatCurrency(stat.currentSnapshot.mrr)}
                            description={`${stat.currentSnapshot.activeCustomers} clients`}
                            icon={TrendingUp}
                        />
                    ))}
                </div>
            )}

            <div className="grid gap-4 md:grid-cols-7">
                {/* This chart should probably show both MRR evolution and non-recurring revenue */}
                <RevenueChart
                    recettes={recettesList?.map(r => ({ ...r.recettes, amount: Number(r.recettes.amount) })) || []}
                    stripeStats={stripeStats} // Pass the time series data for charting MRR
                />
                <RecentActivity factures={facturesList?.map(f => f.factures) || []} />
            </div>

            {/* --- Summary Counts --- */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Clients</p>
                    <p className="text-2xl font-bold">{stats.clientCount}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Devis</p>
                    <p className="text-2xl font-bold">{stats.devisCount}</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Factures</p>
                    <p className="text-2xl font-bold">{stats.facturesCount}</p>
                </div>
            </div>
        </div>
    );
}