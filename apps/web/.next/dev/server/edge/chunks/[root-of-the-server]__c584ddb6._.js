(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__c584ddb6._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
function middleware(request) {
    // Handle CORS for API routes
    if (request.nextUrl.pathname.startsWith('/api')) {
        const origin = request.headers.get('origin');
        // Allow origins for development and production
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:8081',
            'http://localhost:19006',
            'http://127.0.0.1:3000',
            'http://127.0.0.1:8081',
            'http://127.0.0.1:19006',
            'https://solopreneur.sethylaleye.com'
        ];
        // Check if origin is allowed
        const isAllowedOrigin = origin && allowedOrigins.includes(origin);
        // In development, be more permissive
        const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
        // Create CORS headers
        const corsHeaders = new Headers();
        if (isAllowedOrigin) {
            corsHeaders.set('Access-Control-Allow-Origin', origin);
            corsHeaders.set('Access-Control-Allow-Credentials', 'true');
        } else if ("TURBOPACK compile-time truthy", 1) {
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
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
                status: 200,
                headers: corsHeaders
            });
        }
        // For actual requests, add CORS headers and continue
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        corsHeaders.forEach((value, key)=>{
            response.headers.set(key, value);
        });
        return response;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: '/api/:path*'
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c584ddb6._.js.map