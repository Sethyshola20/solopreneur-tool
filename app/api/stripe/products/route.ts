import { db } from "@/lib/db/drizzle";
import { products } from "@/lib/db/schema";
import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { eq } from "drizzle-orm";
import { syncProducts } from "@/lib/stripe/sync";
import { successResponse, errorResponse } from "@/lib/api/response";

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

export async function POST(req: Request) {
    return runWithAuthAPI(async (user) => {
        const body = await req.json();
        const { accountId } = body;

        if (!accountId) {
            return errorResponse("Account ID required", 400);
        }

        // Sync products from Stripe
        const syncedProducts = await syncProducts(accountId, user.id);

        return successResponse({
            success: true,
            count: syncedProducts.length,
            products: syncedProducts,
        });
    });
}
