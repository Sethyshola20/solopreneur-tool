import { db } from "@/lib/db/drizzle";
import { clients } from "@/lib/db/schema";
import { clientSchema } from "@/lib/validators/clients";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { eq, and } from "drizzle-orm";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        const [client] = await db.select()
            .from(clients)
            .where(and(
                eq(clients.id, id),
                eq(clients.userId, user.id)
            ))
            .limit(1);

        if (!client) {
            return errorResponse("Not Found", 404);
        }

        return successResponse(client);
    });
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        const body = await req.json();
        const validation = validateRequest(clientSchema, body);

        if (validation.errors) {
            return errorResponse(JSON.stringify(validation.errors), 400);
        }

        const [updated] = await db.update(clients)
            .set({
                ...validation.data,
                updatedAt: new Date(),
            })
            .where(and(
                eq(clients.id, id),
                eq(clients.userId, user.id)
            ))
            .returning();

        if (!updated) {
            return errorResponse("Not Found", 404);
        }

        return successResponse(updated);
    });
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        await db.delete(clients)
            .where(and(
                eq(clients.id, id),
                eq(clients.userId, user.id)
            ));

        return successResponse(null, 204);
    });
}
