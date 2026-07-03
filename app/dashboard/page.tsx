import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { auth } from "@/lib/auth/auth";
import {
    getClientsByUser,
    getDevisByUser,
    getFacturesByUser,
    getRecettesByUser,
} from "@/lib/server/dashboard-queries";
import DashboardClient from "./dashboard-client";

// Normalize to the same JSON shape the client HTTP fetch produces (Dates ->
// ISO strings, etc.) so the hydrated cache matches later background refetches.
const toJSON = <T,>(data: T): T => JSON.parse(JSON.stringify(data));

export default async function DashboardPage() {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) redirect("/");

    const userId = session.user.id;
    const queryClient = new QueryClient();

    // Prefetch the cheap, pure-read queries in parallel so the dashboard paints
    // with data server-side instead of waiting on client round-trips. Stripe
    // stats are intentionally left to the client: that query hits the Stripe API
    // and writes analytics on cache-miss, so it must not block SSR.
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ["clients"],
            queryFn: async () => toJSON(await getClientsByUser(userId)),
        }),
        queryClient.prefetchQuery({
            queryKey: ["devis"],
            queryFn: async () => toJSON(await getDevisByUser(userId)),
        }),
        queryClient.prefetchQuery({
            queryKey: ["factures"],
            queryFn: async () => toJSON(await getFacturesByUser(userId)),
        }),
        queryClient.prefetchQuery({
            queryKey: ["recettes"],
            queryFn: async () => toJSON(await getRecettesByUser(userId)),
        }),
    ]);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <DashboardClient />
        </HydrationBoundary>
    );
}
