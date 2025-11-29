import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { db } from "@/lib/db/drizzle";
import { monthlyAnalytics, stripeAccounts } from "@/lib/db/schema"; // Import the new monthlyAnalytics table
import { getStripeClient } from "@/lib/stripe/client";
import { eq, desc, inArray, sql } from "drizzle-orm";
import Stripe from "stripe";
import { successResponse } from "@/lib/api/response";

// --- Configuration ---
const REPORTING_MONTHS = 12;
// Data is considered stale if it hasn't been updated in 24 hours (86,400,000 ms)
const STALENESS_THRESHOLD = 24 * 60 * 60 * 1000;

// --- Helper Functions ---

/**
 * Calculates the monthly recurring revenue (MRR) value for a single Stripe price object.
 */
const calculateMRR = (price: Stripe.Price): number => {
    if (!price || !price.recurring) return 0;

    const amountInCents = price.unit_amount || 0;
    const interval = price.recurring.interval;
    const intervalCount = price.recurring.interval_count || 1;
    const amount = amountInCents / 100;

    switch (interval) {
        case "month":
            return amount / intervalCount;
        case "year":
            return (amount / intervalCount) / 12;
        case "week":
            return (amount / intervalCount) * (52 / 12);
        default:
            return 0;
    }
};

/**
 * Generates a consistent YYYY-MM key from a Date object.
 */
const getMonthKey = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
};


// --- API Endpoint ---

export async function GET(request: Request) {
    return runWithAuthAPI(async (user) => {

        // --- 1. Setup Reporting Window and Keys ---
        const today = new Date();
        const startDate = new Date();
        startDate.setMonth(today.getMonth() - REPORTING_MONTHS);
        const startTimestamp = Math.floor(startDate.getTime() / 1000);

        // Generate the month keys we expect in the DB (for the last 12 months)
        const expectedMonthKeys: string[] = [];
        for (let i = 0; i < REPORTING_MONTHS; i++) {
            const monthKeyDate = new Date(startDate);
            monthKeyDate.setMonth(monthKeyDate.getMonth() + i + 1);
            expectedMonthKeys.push(getMonthKey(monthKeyDate));
        }

        const accounts = await db
            .select({
                id: stripeAccounts.id,
                name: stripeAccounts.name,
            })
            .from(stripeAccounts)
            .where(eq(stripeAccounts.userId, user.id));

        const allResults = [];

        for (const acc of accounts) {

            // =======================================================
            // 🚀 CACHING LOGIC: ATTEMPT TO READ FROM DB FIRST
            // =======================================================

            const cachedAnalytics = await db.query.monthlyAnalytics.findMany({
                where: inArray(monthlyAnalytics.monthKey, expectedMonthKeys),
                orderBy: desc(monthlyAnalytics.monthKey),
            });

            // Check 1: Do we have all the required records?
            const isComplete = cachedAnalytics.length >= REPORTING_MONTHS;

            // Check 2: Is the most recent record fresh?
            const mostRecentRecord = cachedAnalytics[0];
            const isFresh = mostRecentRecord
                ? (today.getTime() - mostRecentRecord.updatedAt.getTime() < STALENESS_THRESHOLD)
                : false;

            if (isComplete && isFresh) {
                // Data is complete and fresh, return from cache.
                const currentMRR = mostRecentRecord.endingMRR;
                const currentCustomers = mostRecentRecord.endingCustomers;

                allResults.push({
                    accountId: acc.id,
                    accountName: acc.name,
                    monthlyAnalytics: cachedAnalytics.sort((a, b) => (a.monthKey > b.monthKey ? 1 : -1)),
                    currentSnapshot: {
                        mrr: currentMRR,
                        arr: parseFloat((currentMRR * 12).toFixed(2)),
                        activeCustomers: currentCustomers,
                    }
                });
                continue; // Skip the Stripe API call
            }

            // =======================================================
            // 📉 FALLBACK LOGIC: CALL STRIPE API & RECALCULATE
            // =======================================================

            const stripe = await getStripeClient(acc.id);

            // --- 2. Fetch Relevant Subscriptions ---
            const subscriptions = await stripe.subscriptions.list({
                limit: 100,
                created: { gte: startTimestamp },
                status: 'all',
                expand: ["data.items.data.price"],
            });

            // --- 3. Initialize Monthly Data Structure ---
            const monthlyData: {
                [key: string]: {
                    newMRR: number;
                    churnedMRR: number;
                    newCustomers: Set<string>;
                    churnedCustomers: Set<string>;
                }
            } = {};

            // Re-initialize for all expected months
            for (const key of expectedMonthKeys) {
                monthlyData[key] = {
                    newMRR: 0,
                    churnedMRR: 0,
                    newCustomers: new Set(),
                    churnedCustomers: new Set(),
                };
            }

            // --- 4. Process Subscriptions for New/Churn Events (Calculation) ---
            for (const sub of subscriptions.data) {
                if (!sub.customer || !sub.items.data.length) continue;
                const customerId = sub.customer as string;

                // A. Track New MRR
                const createdMonthKey = getMonthKey(new Date(sub.created * 1000));
                if (monthlyData[createdMonthKey]) {
                    for (const item of sub.items.data) {
                        monthlyData[createdMonthKey].newMRR += calculateMRR(item.price);
                    }
                    monthlyData[createdMonthKey].newCustomers.add(customerId);
                }

                // B. Track Churned MRR
                if (sub.canceled_at) {
                    const canceledMonthKey = getMonthKey(new Date(sub.canceled_at * 1000));
                    if (monthlyData[canceledMonthKey]) {
                        for (const item of sub.items.data) {
                            monthlyData[canceledMonthKey].churnedMRR += calculateMRR(item.price);
                        }
                        monthlyData[canceledMonthKey].churnedCustomers.add(customerId);
                    }
                }
            }

            // --- 5. Calculate Cumulative/Derived Metrics ---
            let cumulativeMRR = 0;
            let cumulativeCustomers = 0;
            const monthlyResultsArray: typeof monthlyAnalytics.$inferInsert[] = [];

            const sortedMonthKeys = expectedMonthKeys.sort(); // Ensure chronological order

            for (const monthKey of sortedMonthKeys) {
                const monthData = monthlyData[monthKey];

                const startingMRR = cumulativeMRR;
                const startingCustomers = cumulativeCustomers;

                // Update Cumulative MRR: (Start + New - Churned)
                cumulativeMRR += monthData.newMRR - monthData.churnedMRR;

                // Update Cumulative Customers: (Start + New - Churned)
                const newCustomersCount = monthData.newCustomers.size;
                const churnedCustomersCount = monthData.churnedCustomers.size;
                cumulativeCustomers += (newCustomersCount - churnedCustomersCount);

                const customerChurnRate = startingCustomers > 0
                    ? (churnedCustomersCount / startingCustomers) * 100
                    : 0;

                // Ensure no negative values
                cumulativeMRR = Math.max(0, cumulativeMRR);
                cumulativeCustomers = Math.max(0, cumulativeCustomers);

                // Prepare data for DB and API response
                monthlyResultsArray.push({
                    accountId: acc.id,
                    monthKey: monthKey,
                    startingMRR: parseFloat(startingMRR.toFixed(2)),
                    endingMRR: parseFloat(cumulativeMRR.toFixed(2)),
                    newMRR: parseFloat(monthData.newMRR.toFixed(2)),
                    churnedMRR: parseFloat(monthData.churnedMRR.toFixed(2)),
                    startingCustomers: startingCustomers,
                    endingCustomers: cumulativeCustomers,
                    newCustomers: newCustomersCount,
                    churnedCustomers: churnedCustomersCount,
                    customerChurnRate: parseFloat(customerChurnRate.toFixed(2)),
                });
            }

            // --- 6. Persist Data to DB (Upsert) ---
            if (monthlyResultsArray.length > 0) {
                // Use insert with onConflictDoUpdate to handle existing records (upsert pattern)
                await db.insert(monthlyAnalytics)
                    .values(monthlyResultsArray)
                    .onConflictDoUpdate({
                        target: [monthlyAnalytics.accountId, monthlyAnalytics.monthKey],
                        set: {
                            startingMRR: monthlyAnalytics.startingMRR,
                            endingMRR: monthlyAnalytics.endingMRR,
                            newMRR: monthlyAnalytics.newMRR,
                            churnedMRR: monthlyAnalytics.churnedMRR,
                            startingCustomers: monthlyAnalytics.startingCustomers,
                            endingCustomers: monthlyAnalytics.endingCustomers,
                            newCustomers: monthlyAnalytics.newCustomers,
                            churnedCustomers: monthlyAnalytics.churnedCustomers,
                            customerChurnRate: monthlyAnalytics.customerChurnRate,
                            updatedAt: sql`NOW()`, // Update the timestamp
                        },
                    });
            }

            // --- 7. Compile Final API Response from Calculated Data ---
            const currentMRR = monthlyResultsArray.length > 0 ? monthlyResultsArray[monthlyResultsArray.length - 1].endingMRR : 0;
            const currentCustomers = monthlyResultsArray.length > 0 ? monthlyResultsArray[monthlyResultsArray.length - 1].endingCustomers : 0;

            allResults.push({
                accountId: acc.id,
                accountName: acc.name,
                monthlyAnalytics: monthlyResultsArray,
                currentSnapshot: {
                    mrr: currentMRR,
                    arr: parseFloat((currentMRR * 12).toFixed(2)),
                    activeCustomers: currentCustomers,
                }
            });
        }

        return successResponse(allResults);
    });
}