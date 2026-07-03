import { runWithAuthAPI } from "@/lib/api/run-with-auth";
import { successResponse } from "@/lib/api/response";
import { getRecettesByUser } from "@/lib/server/dashboard-queries";

export async function GET(req: Request) {
    return runWithAuthAPI(async (user) => {
        const rows = await getRecettesByUser(user.id);
        return successResponse(rows);
    });
}
