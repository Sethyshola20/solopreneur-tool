import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth/auth";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Handle CORS for API routes FIRST
    if (pathname.startsWith('/api')) {
        const origin = request.headers.get('origin');

        // Allow origins for development and production
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:8081', // Expo default
            'http://127.0.0.1:3000',
            'http://127.0.0.1:8081',
            'http://127.0.0.1:19006',
            'https://solopreneur.sethylaleye.com',
            'https://solopreneur-tool.vercel.app'
        ];

        // Check if origin is allowed
        const isAllowedOrigin = origin && allowedOrigins.includes(origin);

        // In development, be more permissive
        const isDevelopment = process.env.NODE_ENV === 'development';

        // Create CORS headers
        const corsHeaders = new Headers();

        if (isAllowedOrigin) {
            corsHeaders.set('Access-Control-Allow-Origin', origin);
            corsHeaders.set('Access-Control-Allow-Credentials', 'true');
        } else if (isDevelopment) {
            // In development, allow the origin if provided, otherwise allow localhost:8081 (Expo)
            const allowedOrigin = origin || 'http://localhost:8081';
            corsHeaders.set('Access-Control-Allow-Origin', allowedOrigin);
            corsHeaders.set('Access-Control-Allow-Credentials', 'true');
        }

        corsHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        corsHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie, X-Requested-With, Accept');
        corsHeaders.set('Access-Control-Max-Age', '86400');

        // Handle preflight requests FIRST - return immediately
        if (request.method === 'OPTIONS') {
            return new NextResponse(null, {
                status: 200,
                headers: corsHeaders,
            });
        }

        // For actual API requests, add CORS headers and continue with auth check
        // Public routes that don't require authentication
        const publicRoutes = [
            '/api/auth',
        ];

        // Check if the current path is public
        const isPublicRoute = publicRoutes.some(route =>
            pathname === route || pathname.startsWith(`${route}/`)
        );

        // Allow public routes without authentication
        if (isPublicRoute) {
            const response = NextResponse.next();
            corsHeaders.forEach((value, key) => {
                response.headers.set(key, value);
            });
            return response;
        }

        // Check authentication for protected API routes
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        // If not authenticated, return 401 instead of redirect (for API routes)
        if (!session) {
            const response = new NextResponse(
                JSON.stringify({ error: 'Unauthorized' }),
                { status: 401, headers: { 'Content-Type': 'application/json' } }
            );
            corsHeaders.forEach((value, key) => {
                response.headers.set(key, value);
            });
            return response;
        }

        // User is authenticated, allow the request with CORS headers
        const response = NextResponse.next();
        corsHeaders.forEach((value, key) => {
            response.headers.set(key, value);
        });
        return response;
    }

    // Handle non-API routes (authentication check for pages)
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
