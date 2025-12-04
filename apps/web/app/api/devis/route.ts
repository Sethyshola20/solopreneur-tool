import { db } from "@/lib/db/drizzle";
import { clients, devis, devisItems } from "@/lib/db/schema";
import { devisSchema } from "@/lib/validators/devis";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { successResponse } from "@/lib/api/response";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {

        const rows = await db.select({
            id: devis.id,
            userId: devis.userId,
            clientId: devis.clientId,
            number: devis.number,
            status: devis.status,
            clientName: clients.name,
            date: devis.date,
            validUntil: devis.validUntil,
            total: devis.total,
            items: devisItems,
            createdAt: devis.createdAt,
            updatedAt: devis.updatedAt,
        })
            .from(devis)
            .leftJoin(devisItems, eq(devis.id, devisItems.devisId))
            .leftJoin(clients, eq(devis.clientId, clients.id))
            .where(eq(devis.userId, user.id))
            .orderBy(desc(devis.createdAt));

        return successResponse(rows);
    });
}

export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validatedData = devisSchema.parse(body);

        const year = new Date().getFullYear();
        const number = `DEV-${year}-${Date.now().toString().slice(-6)}`;

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

        // Create the devis
        const [createdDevis] = await db.insert(devis).values({
            id: nanoid(),
            userId: user.id,
            clientId: validatedData.clientId,
            number: number,
            status: validatedData.status,
            date: validatedData.date,
            validUntil: validatedData.validUntil || null,
            total: total.toString(),
        }).returning();

        // Create the items
        if (itemsWithTotals.length > 0) {
            await db.insert(devisItems).values(
                itemsWithTotals.map(item => ({
                    id: nanoid(),
                    devisId: createdDevis.id,
                    description: item.description,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total,
                }))
            );
        }

        return successResponse(createdDevis, 201);
    });
}
