import { db } from "@/lib/db/drizzle";
import { recettes, clients, factures } from "@/lib/db/schema";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { successResponse } from "@/lib/api/response";
import { eq, desc } from "drizzle-orm";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {

        const rows = await db.select({
            id: recettes.id,
            date: recettes.date,
            amount: recettes.amount,
            paymentMethod: recettes.paymentMethod,
            factureId: recettes.factureId,
            clientId: recettes.clientId,
            userId: recettes.userId,
            createdAt: recettes.createdAt,
            clientName: clients.name,
            factureNumber: factures.number,
        })
            .from(recettes)
            .leftJoin(clients, eq(recettes.clientId, clients.id))
            .leftJoin(factures, eq(recettes.factureId, factures.id))
            .where(eq(recettes.userId, user.id))
            .orderBy(desc(recettes.date));
        return successResponse(rows);
    });
}
