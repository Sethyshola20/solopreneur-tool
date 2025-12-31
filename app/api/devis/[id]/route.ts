import { db } from "@/lib/db/drizzle";
import { devis, devisItems } from "@/lib/db/schema";
import { devisSchema } from "@/lib/validators/devis";
import { successResponse, errorResponse } from "@/lib/api/response";
import { eq, and } from "drizzle-orm";
import { nanoid } from "nanoid";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;

        const data = await db.query.devis.findFirst({
            where: and(eq(devis.id, id), eq(devis.userId, user.id)),
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
        const validatedData = devisSchema.parse(body);

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
        const originalItems = await db.select().from(devisItems).where(eq(devisItems.devisId, id));

        // Update Devis
        const [updated] = await db.update(devis)
            .set({
                clientId: validatedData.clientId,
                status: validatedData.status,
                date: validatedData.date,
                validUntil: validatedData.validUntil || null,
                total: total.toString(),
                deliveryTimeWeeks: validatedData.deliveryTimeWeeks ?? null,
                deliverables: validatedData.deliverables ?? null,
                revisionCycles: validatedData.revisionCycles ?? null,
                exclusions: validatedData.exclusions ?? null,
                updatedAt: new Date(),
            })
            .where(and(eq(devis.id, id), eq(devis.userId, user.id)))
            .returning();

        if (!updated) {
            return errorResponse("Devis not found or unauthorized", 404);
        }

        // Replace Items - if this fails, restore original items
        try {
            await db.delete(devisItems).where(eq(devisItems.devisId, id));

            if (itemsWithTotals.length > 0) {
                await db.insert(devisItems).values(
                    itemsWithTotals.map(item => ({
                        id: nanoid(),
                        devisId: id,
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
                await db.insert(devisItems).values(originalItems);
            }
            throw itemsError;
        }

        return successResponse(updated);
    });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;

        await db.delete(devis).where(and(eq(devis.id, id), eq(devis.userId, user.id)));

        return successResponse("Deleted", 200);
    });
}
