"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StripeStats {
    accountId: string;
    accountName: string;
    monthlyAnalytics: any[];
    currentSnapshot: { mrr: number; arr: number; activeCustomers: number };
}

interface StripeAccountsListProps {
    stripeStats: StripeStats[] | undefined;
}

export function StripeAccountsList({ stripeStats }: StripeAccountsListProps) {
    if (!stripeStats || stripeStats.length === 0) {
        return null;
    }

    const formatCurrency = (value: number) =>
        value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Performance par Compte Stripe</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compte</TableHead>
                            <TableHead>MRR</TableHead>
                            <TableHead>ARR</TableHead>
                            <TableHead>Clients Actifs</TableHead>
                            <TableHead>Tendance (Mois)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stripeStats.map((stat) => {
                            // Calculate simple trend based on last 2 months if available
                            const lastMonth = stat.monthlyAnalytics[stat.monthlyAnalytics.length - 1];
                            const prevMonth = stat.monthlyAnalytics[stat.monthlyAnalytics.length - 2];

                            let trend = 0;
                            if (lastMonth && prevMonth && prevMonth.endingMRR > 0) {
                                trend = ((lastMonth.endingMRR - prevMonth.endingMRR) / prevMonth.endingMRR) * 100;
                            }

                            return (
                                <TableRow key={stat.accountId}>
                                    <TableCell className="font-medium">
                                        {stat.accountName}
                                    </TableCell>
                                    <TableCell>{formatCurrency(stat.currentSnapshot.mrr)}</TableCell>
                                    <TableCell>{formatCurrency(stat.currentSnapshot.arr)}</TableCell>
                                    <TableCell>{stat.currentSnapshot.activeCustomers}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {trend > 0 ? (
                                                <TrendingUp className="h-4 w-4 text-green-500" />
                                            ) : trend < 0 ? (
                                                <TrendingDown className="h-4 w-4 text-red-500" />
                                            ) : (
                                                <Minus className="h-4 w-4 text-muted-foreground" />
                                            )}
                                            <span className={`text-sm ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-muted-foreground'
                                                }`}>
                                                {Math.abs(trend).toFixed(1)}%
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
