import { db } from "@/lib/db/drizzle";
import { clients, factures, facturesItems, recettes } from "@/lib/db/schema";
import { factureSchema } from "@/lib/validators/factures";
import { eq, desc, sql } from "drizzle-orm";
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
            items: sql`json_agg(${facturesItems})`.as("items"),
            date: factures.date,
            dueDate: factures.dueDate,
            serviceStartDate: factures.serviceStartDate,
            serviceEndDate: factures.serviceEndDate,
            total: factures.total,
            createdAt: factures.createdAt,
            updatedAt: factures.updatedAt,
            devisId: factures.devisId,
        })
            .from(factures)
            .leftJoin(facturesItems, eq(factures.id, facturesItems.factureId))
            .leftJoin(clients, eq(factures.clientId, clients.id))
            .where(eq(factures.userId, user.id))
            .groupBy(factures.id, clients.name)
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

        // Insert facture first
        const factureId = nanoid();
        const [createdFacture] = await db.insert(factures).values({
            id: factureId,
            userId: user.id,
            clientId: validatedData.clientId,
            devisId: validatedData.devisId || null,
            number: number,
            status: validatedData.status,
            date: validatedData.date,
            dueDate: validatedData.dueDate || null,
            serviceStartDate: validatedData.serviceStartDate || null,
            serviceEndDate: validatedData.serviceEndDate || null,
            total: total.toString(),
            // stripe integration
            stripeInvoiceId: null,
            stripeCustomerId: null,
            stripeAccountId: null,
        }).returning();

        // Insert items - if this fails, cleanup the facture
        if (itemsWithTotals.length > 0) {
            try {
                await db.insert(facturesItems).values(
                    itemsWithTotals.map(item => ({
                        id: nanoid(),
                        factureId: createdFacture.id,
                        description: item.description,
                        quantity: item.quantity,
                        price: item.price,
                        total: item.total,
                    }))
                );
            } catch (itemsError) {
                // Rollback: delete the facture if items insertion fails
                await db.delete(factures).where(eq(factures.id, factureId));
                throw itemsError;
            }
        }

        // If facture is marked as 'paid', automatically create a recette
        if (validatedData.status === 'paid') {
            try {
                await db.insert(recettes).values({
                    id: nanoid(),
                    userId: user.id,
                    factureId: createdFacture.id,
                    clientId: validatedData.clientId,
                    amount: total.toString(),
                    date: validatedData.date,
                    paymentMethod: null, // Can be updated manually later
                });
            } catch (recetteError) {
                // Rollback: delete items and facture if recette creation fails
                await db.delete(facturesItems).where(eq(facturesItems.factureId, factureId));
                await db.delete(factures).where(eq(factures.id, factureId));
                throw recetteError;
            }
        }

        return successResponse(createdFacture, 201);
    });
}
