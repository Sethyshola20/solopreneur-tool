import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public routes that don't require authentication
    const publicRoutes = [
        '/',
        '/api/auth',
    ];

    // Check if the current path is public
    const isPublicRoute = publicRoutes.some(route =>
        pathname === route || pathname.startsWith(`${route}/`)
    );

    // Allow public routes without authentication
    if (isPublicRoute) {
        return NextResponse.next();
    }

    // Check authentication for all other routes
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    // If not authenticated, redirect to landing page
    if (!session) {
        const url = new URL("/", request.url);
        url.searchParams.set("from", pathname);
        return NextResponse.redirect(url);
    }

    // User is authenticated, allow the request
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
