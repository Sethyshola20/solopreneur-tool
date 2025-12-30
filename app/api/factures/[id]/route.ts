import { db } from "@/lib/db/drizzle";
import { factures, facturesItems } from "@/lib/db/schema";
import { factureSchema } from "@/lib/validators/factures";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, and } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;

        const data = await db.query.factures.findFirst({
            where: and(eq(factures.id, id), eq(factures.userId, user.id)),
            with: {
                items: true,
                client: true,
            },
        });

        if (!data) {
            return errorResponse("Not Found", 404);
        }

        return successResponse(data);
    });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;

        const body = await req.json();
        const validatedData = factureSchema.parse(body);

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

        // Store original items for rollback
        const originalItems = await db.select().from(facturesItems).where(eq(facturesItems.factureId, id));

        // Update Facture
        const [updated] = await db.update(factures)
            .set({
                clientId: validatedData.clientId,
                devisId: validatedData.devisId || null,
                status: validatedData.status,
                date: validatedData.date,
                dueDate: validatedData.dueDate || null,
                serviceStartDate: validatedData.serviceStartDate || null,
                serviceEndDate: validatedData.serviceEndDate || null,
                total: total.toString(),
                updatedAt: new Date(),
            })
            .where(and(eq(factures.id, id), eq(factures.userId, user.id)))
            .returning();

        if (!updated) {
            return errorResponse("Facture not found or unauthorized", 404);
        }

        // Replace Items - if this fails, restore original items
        try {
            await db.delete(facturesItems).where(eq(facturesItems.factureId, id));

            if (itemsWithTotals.length > 0) {
                await db.insert(facturesItems).values(
                    itemsWithTotals.map(item => ({
                        id: nanoid(),
                        factureId: id,
                        description: item.description,
                        quantity: item.quantity,
                        price: item.price,
                        total: item.total,
                    }))
                );
            }
        } catch (itemsError) {
            // Rollback: restore original items
            if (originalItems.length > 0) {
                await db.insert(facturesItems).values(originalItems);
            }
            throw itemsError;
        }

        return successResponse(updated);
    });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;

        await db.delete(factures).where(and(eq(factures.id, id), eq(factures.userId, user.id)));

        return successResponse("Deleted", 200);
    });
}
