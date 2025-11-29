export type StripeStats = {
    accountId: string;
    accountName: string;
    monthlyAnalytics: MonthlyAnalytics[];
    currentSnapshot: CurrentSnapshot;
}[]

export type MonthlyAnalytics = {
    monthKey: string;
    startingMRR: number;
    endingMRR: number;
    newMRR: number;
    churnedMRR: number;
    startingCustomers: number;
    endingCustomers: number;
    newCustomers: number;
    churnedCustomers: number;
    customerChurnRate: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

export type CurrentSnapshot = {
    mrr: number;
    arr: number;
    activeCustomers: number;
}