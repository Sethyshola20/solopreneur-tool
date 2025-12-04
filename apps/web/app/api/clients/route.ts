import { db } from "@/lib/db/drizzle";
import { clients } from "@/lib/db/schema";
import { clientSchema } from "@/lib/validators/clients";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const data = await db.select()
            .from(clients)
            .where(eq(clients.userId, user.id))
            .orderBy(desc(clients.createdAt));

        return successResponse(data);
    });
}

export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validation = validateRequest(clientSchema, body);

        if (validation.errors) {
            return errorResponse(JSON.stringify(validation.errors), 400);
        }

        const [client] = await db.insert(clients).values({
            id: nanoid(),
            userId: user.id,
            ...validation.data,
        }).returning();

        return successResponse(client, 201);
    });
}
