'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMemo } from 'react';
// Assuming Recette and StripeStats are defined elsewhere
// Note: StripeStats structure is defined implicitly by the API response
// and is represented by the array of accounts containing 'monthlyAnalytics'.

// Define the expected type structure for the Recette item
interface Recette {
    date: string; // ISO date string
    amount: number; // Use amount instead of total for consistency with original logic
}

// Define the expected type structure for a single month of Stripe Analytics
interface MonthlyAnalytic {
    monthKey: string; // e.g., '2025-11'
    endingMRR: number; // The MRR at the end of that month
}

// Define the expected type structure for StripeStats (the account item)
interface StripeStats {
    accountId: string;
    accountName: string;
    monthlyAnalytics: MonthlyAnalytic[];
    currentSnapshot: { mrr: number; arr: number; activeCustomers: number };
}

interface RevenueChartProps {
    recettes: Recette[];
    stripeStats?: StripeStats[]; // Accepts the array of accounts from the new API
}

// --- Component ---

export function RevenueChart({ recettes, stripeStats }: RevenueChartProps) {

    const monthlyData = useMemo(() => {
        const today = new Date();
        const dataLength = 12;

        // 1. Initialize data structure for the last 12 months
        // The index represents the offset from the current month (0 = current month, 11 = 11 months ago)
        const initializedMonths = Array.from({ length: dataLength }, (_, i) => {
            const date = new Date(today);
            // Go back 11 months for the first item, up to 0 months for the last item (current month)
            date.setMonth(today.getMonth() - (dataLength - 1 - i));

            return {
                // Key for easy lookup, e.g., '2025-11'
                key: date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0'),
                // Display label, e.g., 'Nov.'
                monthLabel: date.toLocaleDateString('fr-FR', { month: 'short' }),
                revenue: 0, // Non-recurring revenue
                mrr: 0,     // Recurring revenue
                total: 0,   // Revenue + MRR
            };
        });

        const dataMap = new Map(initializedMonths.map(item => [item.key, item]));

        // 2. Aggregate Non-Recurring Revenue (Recettes)
        recettes.forEach((recette) => {
            const date = new Date(recette.date);
            const key = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');

            if (dataMap.has(key)) {
                const monthData = dataMap.get(key)!;
                monthData.revenue += Number(recette.amount);
                monthData.total += Number(recette.amount);
            }
        });

        // 3. Aggregate Recurring Revenue (MRR) from Stripe Analytics
        stripeStats?.forEach((accountStat) => {
            accountStat.monthlyAnalytics.forEach((analytics) => {
                const key = analytics.monthKey; // Already in 'YYYY-MM' format from API

                if (dataMap.has(key)) {
                    const monthData = dataMap.get(key)!;
                    monthData.mrr += analytics.endingMRR;
                    // Add MRR to the total revenue for the chart
                    monthData.total += analytics.endingMRR;
                }
            });
        });

        // Convert Map back to an array in chronological order
        return Array.from(dataMap.values());

    }, [recettes, stripeStats]);

    // Calculate max revenue after aggregation for scaling the bars
    const maxRevenue = Math.max(...monthlyData.map(m => m.total), 1000); // Ensure min height for scaling

    return (
        <Card className="col-span-4 md:col-span-7"> {/* Increased span for better visibility */}
            <CardHeader>
                <CardTitle>Évolution du Chiffre d'Affaires Total (CA + MRR)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-4">
                    {monthlyData.map((data, index) => (
                        <div key={data.key} className="flex-1 flex flex-col items-center gap-2">
                            {/* Bar visualization */}
                            <div
                                className="w-full bg-primary rounded-t relative transition-all duration-300"
                                style={{
                                    height: `${(data.total / maxRevenue) * 100}%`,
                                    minHeight: data.total > 0 ? '4px' : '0px'
                                }}
                            >
                                {/* Display Value */}
                                <div className="absolute -top-6 left-0 right-0 text-center text-xs font-medium">
                                    {data.total > 0 ? `${(data.total / 1000).toFixed(1)}k` : ''}
                                </div>
                            </div>
                            {/* Month Label */}
                            <span className="text-xs text-muted-foreground capitalize">{data.monthLabel}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}