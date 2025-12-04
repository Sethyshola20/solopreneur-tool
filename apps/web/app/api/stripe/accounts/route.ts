import { db } from "@/lib/db/drizzle";
import { stripeAccounts } from "@/lib/db/schema";
import { stripeAccountSchema } from "@/lib/validators/stripe";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { validateRequest } from "@/lib/api/validate-request";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { encrypt } from "@/lib/stripe/encryption";
import { successResponse, errorResponse } from "@/lib/api/response";


export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const accounts = await db.select({
            id: stripeAccounts.id,
            name: stripeAccounts.name,
            description: stripeAccounts.description,
            isActive: stripeAccounts.isActive,
            lastSyncAt: stripeAccounts.lastSyncAt,
            createdAt: stripeAccounts.createdAt,
            updatedAt: stripeAccounts.updatedAt,
        })
            .from(stripeAccounts)
            .where(eq(stripeAccounts.userId, user.id));

        return successResponse(accounts);
    });
}


export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validation = validateRequest(stripeAccountSchema, body);

        if (validation.errors) {
            return errorResponse(JSON.stringify(validation.errors), 400);
        }

        // Encrypt API key and webhook secret
        const encryptedApiKey = encrypt(validation.data.apiKey);
        const encryptedWebhookSecret = validation.data.webhookSecret
            ? encrypt(validation.data.webhookSecret)
            : null;

        const [account] = await db.insert(stripeAccounts).values({
            id: nanoid(),
            userId: user.id,
            name: validation.data.name,
            description: validation.data.description,
            apiKey: encryptedApiKey,
            webhookSecret: encryptedWebhookSecret,
            isActive: validation.data.isActive,
        }).returning();

        // Return without sensitive data
        const { apiKey, webhookSecret, ...safeAccount } = account;
        return successResponse(safeAccount, 201);
    });
}
