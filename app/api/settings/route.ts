import { db } from "@/lib/db/drizzle";
import { settings } from "@/lib/db/schema";
import { settingsSchema } from "@/lib/validators/settings";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const [data] = await db.select()
            .from(settings)
            .where(eq(settings.userId, user.id))
            .limit(1);

        return successResponse(data || null);
    });
}

export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validation = validateRequest(settingsSchema, body);

        if (validation.errors) {
            return errorResponse(JSON.stringify(validation.errors), 400);
        }

        // Check if settings already exist
        const [existing] = await db.select()
            .from(settings)
            .where(eq(settings.userId, user.id))
            .limit(1);

        if (existing) {
            // Update
            const [updated] = await db.update(settings)
                .set({
                    ...validation.data,
                    updatedAt: new Date(),
                })
                .where(eq(settings.userId, user.id))
                .returning();

            return successResponse(updated);
        } else {
            // Create
            const [created] = await db.insert(settings).values({
                id: nanoid(),
                userId: user.id,
                ...validation.data,
            }).returning();

            return successResponse(created, 201);
        }
    });
}
