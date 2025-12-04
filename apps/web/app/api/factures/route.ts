import { db } from "@/lib/db/drizzle";
import { clients, factures, facturesItems } from "@/lib/db/schema";
import { factureSchema } from "@/lib/validators/factures";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const rows = await db.select({
            id: factures.id,
            userId: factures.userId,
            clientId: factures.clientId,
            number: factures.number,
            status: factures.status,
            clientName: clients.name,
            items: facturesItems,
            date: factures.date,
            dueDate: factures.dueDate,
            total: factures.total,
            createdAt: factures.createdAt,
            updatedAt: factures.updatedAt,
            devisId: factures.devisId,
        })
            .from(factures)
            .leftJoin(facturesItems, eq(factures.id, facturesItems.factureId))
            .leftJoin(clients, eq(factures.clientId, clients.id))
            .where(eq(factures.userId, user.id))
            .orderBy(desc(factures.createdAt));
        return successResponse(rows);
    });
}

export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validatedData = factureSchema.parse(body);

        // Generate Facture Number (Simple logic: FAC-YYYY-TIMESTAMP for uniqueness)
        const year = new Date().getFullYear();
        const number = `FAC-${year}-${Date.now().toString().slice(-6)}`;

        // Calculate totals
        let total = 0;
        const itemsWithTotals = validatedData.items.map(item => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;
            return {
                ...item,
                total: itemTotal.toString(),
                quantity: item.quantity.toString(),
                price: item.price.toString(),
            };
        });

        const newFacture = await db.transaction(async (tx) => {
            const [createdFacture] = await tx.insert(factures).values({
                id: nanoid(),
                userId: user.id,
                clientId: validatedData.clientId,
                devisId: validatedData.devisId || null,
                number: number,
                status: validatedData.status,
                date: validatedData.date,
                dueDate: validatedData.dueDate || null,
                total: total.toString(),
            }).returning();

            if (itemsWithTotals.length > 0) {
                await tx.insert(facturesItems).values(
                    itemsWithTotals.map(item => ({
                        id: nanoid(),
                        factureId: createdFacture.id,
                        description: item.description,
                        quantity: item.quantity,
                        price: item.price,
                        total: item.total,
                    }))
                );
            }

            return createdFacture;
        });

        return successResponse(newFacture, 201);
    });
}
