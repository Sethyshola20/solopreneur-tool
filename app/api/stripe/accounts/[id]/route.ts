import { db } from "@/lib/db/drizzle";
import { stripeAccounts } from "@/lib/db/schema";
import { stripeAccountSchema } from "@/lib/validators/stripe";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { eq, and } from "drizzle-orm";
import { encrypt } from "@/lib/stripe/encryption";
import { clearStripeClientCache } from "@/lib/stripe/client";
import { successResponse, errorResponse } from "@/lib/api/response";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        const [account] = await db.select({
            id: stripeAccounts.id,
            name: stripeAccounts.name,
            description: stripeAccounts.description,
            isActive: stripeAccounts.isActive,
            lastSyncAt: stripeAccounts.lastSyncAt,
            createdAt: stripeAccounts.createdAt,
            updatedAt: stripeAccounts.updatedAt,
        })
            .from(stripeAccounts)
            .where(and(
                eq(stripeAccounts.id, id),
                eq(stripeAccounts.userId, user.id)
            ))
            .limit(1);

        if (!account) {
            return errorResponse("Not Found", 404);
        }

        return successResponse(account);
    });
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        const body = await req.json();
        const validation = validateRequest(stripeAccountSchema.partial(), body);

        if (validation.errors) {
            return errorResponse(JSON.stringify(validation.errors), 400);
        }

        // Encrypt sensitive fields if provided
        const updateData: any = {
            ...validation.data,
            updatedAt: new Date(),
        };

        if (validation.data.apiKey) {
            updateData.apiKey = encrypt(validation.data.apiKey);
            clearStripeClientCache(id);
        }

        if (validation.data.webhookSecret) {
            updateData.webhookSecret = encrypt(validation.data.webhookSecret);
        }

        const [updated] = await db.update(stripeAccounts)
            .set(updateData)
            .where(and(
                eq(stripeAccounts.id, id),
                eq(stripeAccounts.userId, user.id)
            ))
            .returning();

        if (!updated) {
            return errorResponse("Not Found", 404);
        }

        const { apiKey, webhookSecret, ...safeAccount } = updated;
        return successResponse(safeAccount);
    });
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    return runWithAuthAPI(async (user) => {
        const { id } = await params;
        await db.delete(stripeAccounts)
            .where(and(
                eq(stripeAccounts.id, id),
                eq(stripeAccounts.userId, user.id)
            ));

        clearStripeClientCache(id);
        return successResponse(null, 204);
    });
}
