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
import { StripeAccountsList } from '@/components/dashboard/stripe-accounts-list';

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

        // --- Non-Recurring Financials ---
        const pendingAmount = facturesList?.filter(f => f.status === 'pending')
            .reduce((sum, f) => sum + Number(f.total), 0) || 0;
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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Tableau de Bord</h1>
            </div>

            {/* --- SECTION 1: KEY FINANCIAL METRICS (Global) --- */}
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
                    title="CA du Mois (Non-Récur.)"
                    value={formatCurrency(stats.monthRevenue)}
                    description="Hors abonnements"
                    icon={Euro}
                    trend={{
                        value: Math.round(stats.growthTrend),
                        isPositive: stats.growthTrend >= 0,
                    }}
                />
                <StatsCard
                    title="Factures en Attente"
                    value={formatCurrency(stats.pendingAmount)}
                    description="Montant à encaisser"
                    icon={FileText}
                />
            </div>

            {/* --- SECTION 2: CHARTS & ACTIVITY --- */}
            <div className="grid gap-4 md:grid-cols-7">
                <RevenueChart
                    recettes={recettesList?.map(r => ({ ...r, amount: Number(r.amount) })) || []}
                    stripeStats={stripeStats} // Pass the time series data for charting MRR
                />
                <RecentActivity factures={facturesList || []} />
            </div>

            {/* --- SECTION 3: STRIPE ACCOUNTS BREAKDOWN --- */}
            <StripeAccountsList stripeStats={stripeStats} />

            {/* --- SECTION 4: OPERATIONAL SUMMARY --- */}
            <div className="grid gap-4 md:grid-cols-4">
                <StatsCard
                    title="Clients Actifs (Stripe)"
                    value={stats.combinedStripeData?.activeCustomers || 0}
                    description="Abonnements en cours"
                    icon={Users}
                />
                <StatsCard
                    title="Taux de Churn"
                    value={`${primaryChurnRate.toFixed(2)}%`}
                    description="Moyenne sur tous les comptes"
                    icon={UserX}
                    trend={{
                        value: primaryChurnRate,
                        isPositive: primaryChurnRate <= 0,
                    }}
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
                    description="URSSAF (22% estimé)"
                    icon={AlertCircle}
                />
            </div>
        </div>
    );
}