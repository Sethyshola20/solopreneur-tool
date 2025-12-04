import { auth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { GET, POST } = toNextJsHandler(auth);

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin');
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:8081',
        'http://localhost:19006',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:8081',
        'http://127.0.0.1:19006',
        'https://solopreneur.sethylaleye.com',
    ];

    const isAllowedOrigin = origin && allowedOrigins.includes(origin);
    const isDevelopment = process.env.NODE_ENV === 'development';

    const headers = new Headers();
    
    if (isAllowedOrigin) {
        headers.set('Access-Control-Allow-Origin', origin);
        headers.set('Access-Control-Allow-Credentials', 'true');
    } else if (isDevelopment) {
        headers.set('Access-Control-Allow-Origin', origin || 'http://localhost:8081');
        headers.set('Access-Control-Allow-Credentials', 'true');
    }

    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie, X-Requested-With, Accept');
    headers.set('Access-Control-Max-Age', '86400');

    return new NextResponse(null, {
        status: 200,
        headers,
    });
}

export { GET, POST };
