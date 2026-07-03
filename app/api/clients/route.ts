import { db } from "@/lib/db/drizzle";
import { clients } from "@/lib/db/schema";
import { clientSchema } from "@/lib/validators/clients";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { nanoid } from "nanoid";
import { successResponse, errorResponse } from "@/lib/api/response";
import { getClientsByUser } from "@/lib/server/dashboard-queries";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const data = await getClientsByUser(user.id);
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
