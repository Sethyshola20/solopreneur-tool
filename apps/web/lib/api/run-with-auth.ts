import { auth } from '@/lib/auth/auth';
import { User } from 'better-auth';
import { headers } from 'next/headers';
import { errorResponse } from './response';

type AuthenticatedAPIHandler<A extends any[]> = (
    user: User,
    ...args: A
) => Promise<Response>;

export async function runWithAuthAPI<A extends any[]>(
    handler: AuthenticatedAPIHandler<A>,
    ...args: A
): Promise<Response> {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });


        if (!session) {
            return errorResponse('Unauthorized: User not authenticated.', 401);
        }

        return await handler(session.user, ...args);
    } catch (error) {
        console.error('API Route Error:', error);
        return errorResponse(
            error instanceof Error ? error.message : 'Internal server error',
            500
        );
    }
}
