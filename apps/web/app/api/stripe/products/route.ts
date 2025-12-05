import { db } from "@/lib/db/drizzle";
import { products } from "@/lib/db/schema";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { eq } from "drizzle-orm";
import { syncProducts } from "@/lib/stripe/sync";
import { successResponse, errorResponse } from "@/lib/api/response";
import z from "zod";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const { searchParams } = new URL(req.url);
        const accountId = searchParams.get('accountId');

        let productsList;

        if (accountId) {
            productsList = await db.select()
                .from(products)
                .where(eq(products.stripeAccountId, accountId));
        } else {
            productsList = await db.select()
                .from(products)
                .where(eq(products.userId, user.id));
        }

        return successResponse(productsList);
    });
}

const productSyncParams = z.object({
    accountId: z.string(),
});
export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const validatedBody = productSyncParams.parse(body);

        if (!validatedBody.accountId) {
            return errorResponse("Account ID required", 400);
        }

        // Sync products from Stripe
        const syncedProducts = await syncProducts(validatedBody.accountId, user.id);

        return successResponse({
            success: true,
            count: syncedProducts.length,
            products: syncedProducts,
        });
    });
}
