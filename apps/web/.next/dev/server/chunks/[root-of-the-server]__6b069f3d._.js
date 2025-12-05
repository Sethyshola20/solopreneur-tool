module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/const.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLocal",
    ()=>isLocal
]);
const isLocal = ("TURBOPACK compile-time value", "development") === 'development';
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/auth-schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "account",
    ()=>account,
    "apikey",
    ()=>apikey,
    "authSchema",
    ()=>authSchema,
    "session",
    ()=>session,
    "user",
    ()=>user,
    "verification",
    ()=>verification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
;
const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("user", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("email_verified").default(false).notNull(),
    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("session", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull(),
    ipAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("ip_address"),
    userAgent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_agent"),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    })
});
const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("account", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("account_id").notNull(),
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("provider_id").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("access_token"),
    refreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("refresh_token"),
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_token"),
    accessTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("access_token_expires_at"),
    refreshTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("refresh_token_expires_at"),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("scope"),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verification", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const apikey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("apikey", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name"),
    start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("start"),
    prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("prefix"),
    key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("key").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    refillInterval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("refill_interval"),
    refillAmount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("refill_amount"),
    lastRefillAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("last_refill_at"),
    enabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("enabled").default(true),
    rateLimitEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("rate_limit_enabled").default(true),
    rateLimitTimeWindow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rate_limit_time_window").default(3600000),
    rateLimitMax: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rate_limit_max").default(100),
    requestCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("request_count").default(0),
    remaining: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("remaining"),
    lastRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("last_request"),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").notNull(),
    permissions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("permissions"),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("metadata")
});
const authSchema = {
    user,
    session,
    account,
    verification,
    apikey
};
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clients",
    ()=>clients,
    "devis",
    ()=>devis,
    "devisItems",
    ()=>devisItems,
    "factures",
    ()=>factures,
    "facturesItems",
    ()=>facturesItems,
    "monthlyAnalytics",
    ()=>monthlyAnalytics,
    "monthlyAnalyticsRelations",
    ()=>monthlyAnalyticsRelations,
    "products",
    ()=>products,
    "recettes",
    ()=>recettes,
    "settings",
    ()=>settings,
    "stripeAccounts",
    ()=>stripeAccounts,
    "stripeEvents",
    ()=>stripeEvents,
    "subscriptions",
    ()=>subscriptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/columns/real.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/auth-schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
;
;
;
const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('clients', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('email'),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('phone'),
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('address'),
    notes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('notes'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const devis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('devis', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id),
    clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('client_id').notNull().references(()=>clients.id),
    number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('number').notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('status').notNull().default('draft'),
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])('date').notNull(),
    validUntil: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])('valid_until'),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('total', {
        precision: 10,
        scale: 2
    }).notNull().default('0'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const devisItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('devis_items', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    devisId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('devis_id').notNull().references(()=>devis.id, {
        onDelete: 'cascade'
    }),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('quantity', {
        precision: 10,
        scale: 2
    }).notNull().default('1'),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('price', {
        precision: 10,
        scale: 2
    }).notNull().default('0'),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('total', {
        precision: 10,
        scale: 2
    }).notNull().default('0')
});
const factures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('factures', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id),
    clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('client_id').notNull().references(()=>clients.id),
    devisId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('devis_id').references(()=>devis.id),
    // Stripe Integration
    stripeInvoiceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_invoice_id').unique(),
    stripeCustomerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_customer_id'),
    stripeAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_account_id').references(()=>stripeAccounts.id),
    number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('number').notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('status').notNull().default('pending'),
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])('date').notNull(),
    dueDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])('due_date'),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('total', {
        precision: 10,
        scale: 2
    }).notNull().default('0'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const facturesItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('factures_items', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    factureId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('facture_id').notNull().references(()=>factures.id, {
        onDelete: 'cascade'
    }),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('quantity', {
        precision: 10,
        scale: 2
    }).notNull().default('1'),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('price', {
        precision: 10,
        scale: 2
    }).notNull().default('0'),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('total', {
        precision: 10,
        scale: 2
    }).notNull().default('0')
});
const recettes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('recettes', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id),
    factureId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('facture_id').references(()=>factures.id),
    clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('client_id').references(()=>clients.id),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('amount', {
        precision: 10,
        scale: 2
    }).notNull(),
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])('date').notNull(),
    paymentMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('payment_method'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('settings', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id).unique(),
    companyName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('company_name'),
    siret: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('siret'),
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('address'),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('email'),
    logoUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('logo_url'),
    legalMentions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('legal_mentions'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const stripeAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('stripe_accounts', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id, {
        onDelete: 'cascade'
    }),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description'),
    stripeAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_account_id'),
    apiKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('api_key').notNull(),
    webhookSecret: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('webhook_secret'),
    isActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('is_active').default(true).notNull(),
    lastSyncAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('last_sync_at'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('products', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id, {
        onDelete: 'cascade'
    }),
    stripeAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_account_id').notNull().references(()=>stripeAccounts.id, {
        onDelete: 'cascade'
    }),
    stripeProductId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_product_id').notNull(),
    stripePriceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_price_id'),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description'),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('price', {
        precision: 10,
        scale: 2
    }),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('currency').default('EUR').notNull(),
    isRecurring: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('is_recurring').default(false).notNull(),
    billingPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('billing_period'),
    isActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('is_active').default(true).notNull(),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('metadata'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const subscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('subscriptions', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["user"].id, {
        onDelete: 'cascade'
    }),
    stripeAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_account_id').notNull().references(()=>stripeAccounts.id, {
        onDelete: 'cascade'
    }),
    clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('client_id').references(()=>clients.id, {
        onDelete: 'set null'
    }),
    productId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('product_id').references(()=>products.id, {
        onDelete: 'set null'
    }),
    stripeSubscriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_subscription_id').notNull().unique(),
    stripeCustomerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_customer_id'),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('status').notNull(),
    currentPeriodStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('current_period_start'),
    currentPeriodEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('current_period_end'),
    cancelAtPeriodEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('cancel_at_period_end').default(false).notNull(),
    canceledAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('canceled_at'),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decimal"])('amount', {
        precision: 10,
        scale: 2
    }),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('currency').default('EUR'),
    metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('metadata'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
});
const stripeEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('stripe_events', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey(),
    stripeAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_account_id').references(()=>stripeAccounts.id, {
        onDelete: 'cascade'
    }),
    stripeEventId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('stripe_event_id').notNull().unique(),
    eventType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('event_type').notNull(),
    processed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])('processed').default(false).notNull(),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('error'),
    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('payload'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull()
});
const monthlyAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])('monthly_analytics', {
    // Primary Key
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])('id').notNull().unique(),
    // Foreign Key to link to the Stripe Account
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('account_id').notNull().references(()=>stripeAccounts.id, {
        onDelete: 'cascade'
    }),
    // Time Dimension
    // Store the month as a standardized key (e.g., '2025-11') for easy querying
    monthKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])('month_key', {
        length: 7
    }).notNull(),
    // --- MRR Metrics (use 'real' for floating-point currency) ---
    startingMRR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('starting_mrr').notNull(),
    endingMRR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('ending_mrr').notNull(),
    newMRR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('new_mrr').notNull(),
    churnedMRR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('churned_mrr').notNull(),
    // --- Customer Metrics (use 'integer' for counts) ---
    startingCustomers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('starting_customers').notNull(),
    endingCustomers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('ending_customers').notNull(),
    newCustomers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('new_customers').notNull(),
    churnedCustomers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('churned_customers').notNull(),
    customerChurnRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('customer_churn_rate').notNull(),
    // Metadata
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('created_at').defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])('updated_at').defaultNow().notNull()
}, (table)=>{
    return {
        // Enforce uniqueness for a specific month for a specific account
        pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                table.accountId,
                table.monthKey
            ]
        })
    };
});
const monthlyAnalyticsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(monthlyAnalytics, ({ one })=>({
        // Defines the one-to-many relationship back to the parent Stripe Account
        stripeAccount: one(stripeAccounts, {
            fields: [
                monthlyAnalytics.accountId
            ],
            references: [
                stripeAccounts.id
            ]
        })
    }));
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/neon-http/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$const$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/const.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/auth-schema.ts [app-route] (ecmascript)");
;
;
;
;
;
const DATABASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$const$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLocal"] ? process.env.DATABASE_URL_DEV : process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error("Missing DATABASE_URL environment variable");
const cleanDatabaseUrl = DATABASE_URL.split('?')[0];
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(cleanDatabaseUrl);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$neon$2d$http$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(sql, {
    schema: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
    }
});
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/validators/stripe.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productSchema",
    ()=>productSchema,
    "stripeAccountSchema",
    ()=>stripeAccountSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const stripeAccountSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Le nom est requis'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'La clé API est requise'),
    webhookSecret: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true).nonoptional()
});
const productSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    stripeAccountId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Le compte Stripe est requis'),
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'L\'ID produit Stripe est requis'),
    stripePriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Le nom est requis'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('EUR'),
    isRecurring: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    billingPeriod: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true).nonoptional()
});
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/auth/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2d$DfR8_5w3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__betterAuth$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/better-auth/dist/auth-DfR8_5w3.mjs [app-route] (ecmascript) <export t as betterAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/auth-schema.ts [app-route] (ecmascript)");
;
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2d$DfR8_5w3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__betterAuth$3e$__["betterAuth"])({
    appName: "Solopreneur Tool",
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"], {
        provider: "pg",
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authSchema"]
    }),
    trustedOrigins: [
        "http://localhost:3000",
        "http://localhost:8081",
        "http://localhost:19006",
        "https://solopreneur.sethylaleye.com"
    ],
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextCookies"])()
    ]
});
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorResponse",
    ()=>errorResponse,
    "successResponse",
    ()=>successResponse
]);
function successResponse(data, status = 200) {
    if (status === 204) {
        return new Response(null, {
            status
        });
    }
    return Response.json({
        data,
        error: null
    }, {
        status
    });
}
function errorResponse(message, status = 400) {
    return Response.json({
        data: null,
        error: message
    }, {
        status
    });
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/run-with-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runWithAuthAPI",
    ()=>runWithAuthAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$auth$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/auth/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/response.ts [app-route] (ecmascript)");
;
;
;
async function runWithAuthAPI(handler, ...args) {
    try {
        const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$auth$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"].api.getSession({
            headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])()
        });
        if (!session) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])('Unauthorized: User not authenticated.', 401);
        }
        return await handler(session.user, ...args);
    } catch (error) {
        console.error('API Route Error:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(error instanceof Error ? error.message : 'Internal server error', 500);
    }
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/validate-request.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateRequest",
    ()=>validateRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/zod/v4/classic/errors.js [app-route] (ecmascript)");
;
function validateRequest(schema, data) {
    try {
        const validatedData = schema.parse(data);
        return {
            data: validatedData,
            errors: null
        };
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"]) {
            return {
                data: null,
                errors: {
                    message: "Validation failed",
                    details: error.flatten().fieldErrors
                }
            };
        }
        throw error;
    }
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/encryption.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const ALGORITHM = 'aes-256-gcm';
if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length !== 64) {
    throw new Error('ENCRYPTION_KEY must be a 64-character hex string (32 bytes)');
}
const key = Buffer.from(ENCRYPTION_KEY, 'hex');
function encrypt(text) {
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    // Format: iv:authTag:encrypted
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}
function decrypt(encryptedData) {
    const parts = encryptedData.split(':');
    if (parts.length !== 3) {
        throw new Error('Invalid encrypted data format');
    }
    const [ivHex, authTagHex, encrypted] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearStripeClientCache",
    ()=>clearStripeClientCache,
    "getStripeClient",
    ()=>getStripeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/encryption.ts [app-route] (ecmascript)");
;
;
;
;
;
const stripeClients = new Map();
async function getStripeClient(accountId) {
    // Check cache first
    if (stripeClients.has(accountId)) {
        return stripeClients.get(accountId);
    }
    // Fetch account from database
    const account = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].query.stripeAccounts.findFirst({
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].id, accountId)
    });
    if (!account) {
        throw new Error(`Stripe account not found: ${accountId}`);
    }
    if (!account.isActive) {
        throw new Error(`Stripe account is inactive: ${accountId}`);
    }
    // Decrypt API key and create client
    const apiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"])(account.apiKey);
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](apiKey, {
        apiVersion: '2025-11-17.clover'
    });
    // Cache the client
    stripeClients.set(accountId, client);
    return client;
}
function clearStripeClientCache(accountId) {
    if (accountId) {
        stripeClients.delete(accountId);
    } else {
        stripeClients.clear();
    }
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/sync.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "syncProducts",
    ()=>syncProducts,
    "syncSubscriptions",
    ()=>syncSubscriptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
;
;
;
;
;
async function syncProducts(accountId, userId) {
    const stripe = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStripeClient"])(accountId);
    const stripeProducts = await stripe.products.list({
        limit: 100,
        active: true
    });
    const syncedProducts = [];
    for (const product of stripeProducts.data){
        const defaultPrice = product.default_price ? await stripe.prices.retrieve(product.default_price) : null;
        const [existingProduct] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"].stripeProductId, product.id)).limit(1);
        if (existingProduct) {
            const [updated] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]).set({
                name: product.name,
                description: product.description,
                price: defaultPrice ? (defaultPrice.unit_amount / 100).toString() : null,
                currency: defaultPrice?.currency?.toUpperCase() || 'EUR',
                isRecurring: defaultPrice?.type === 'recurring',
                billingPeriod: defaultPrice?.recurring?.interval || null,
                stripePriceId: defaultPrice?.id || null,
                isActive: product.active,
                metadata: JSON.stringify(product.metadata),
                updatedAt: new Date()
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"].id, existingProduct.id)).returning();
            syncedProducts.push(updated);
        } else {
            const [created] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]).values({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                userId,
                stripeAccountId: accountId,
                stripeProductId: product.id,
                stripePriceId: defaultPrice?.id || null,
                name: product.name,
                description: product.description,
                price: defaultPrice ? (defaultPrice.unit_amount / 100).toString() : null,
                currency: defaultPrice?.currency?.toUpperCase() || 'EUR',
                isRecurring: defaultPrice?.type === 'recurring',
                billingPeriod: defaultPrice?.recurring?.interval || null,
                isActive: product.active,
                metadata: JSON.stringify(product.metadata)
            }).returning();
            syncedProducts.push(created);
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"]).set({
        lastSyncAt: new Date()
    }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].id, accountId));
    return syncedProducts;
}
async function syncSubscriptions(accountId, userId) {
    const stripe = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStripeClient"])(accountId);
    const stripeSubscriptions = await stripe.subscriptions.list({
        limit: 100
    });
    const syncedSubscriptions = [];
    for (const sub of stripeSubscriptions.data){
        const [existingSub] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptions"].stripeSubscriptionId, sub.id)).limit(1);
        const subData = {
            userId,
            stripeAccountId: accountId,
            stripeSubscriptionId: sub.id,
            stripeCustomerId: sub.customer,
            status: sub.status,
            currentPeriodStart: new Date(sub.start_date * 1000),
            currentPeriodEnd: sub.ended_at ? new Date(sub.ended_at * 1000) : null,
            cancelAtPeriodEnd: sub.cancel_at_period_end,
            canceledAt: sub.canceled_at ? new Date(sub.canceled_at * 1000) : null,
            amount: sub.items.data[0]?.price.unit_amount ? (sub.items.data[0].price.unit_amount / 100).toString() : null,
            currency: sub.currency.toUpperCase(),
            metadata: JSON.stringify(sub.metadata),
            updatedAt: new Date()
        };
        if (existingSub) {
            const [updated] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptions"]).set(subData).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptions"].id, existingSub.id)).returning();
            syncedSubscriptions.push(updated);
        } else {
            const [created] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptions"]).values({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                ...subData
            }).returning();
            syncedSubscriptions.push(created);
        }
    }
    return syncedSubscriptions;
}
}),
"[project]/Documents/Code/solopreneur-tool/apps/web/app/api/stripe/accounts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$validators$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/validators/stripe.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/run-with-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$validate$2d$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/validate-request.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/encryption.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/stripe/sync.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function GET(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runWithAuthAPI"])(async (user)=>{
        const accounts = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].id,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].name,
            description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].description,
            isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].isActive,
            lastSyncAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].lastSyncAt,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].createdAt,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].updatedAt
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"].userId, user.id));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(accounts);
    });
}
async function POST(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runWithAuthAPI"])(async (user)=>{
        const body = await req.json();
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$validate$2d$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$validators$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccountSchema"], body);
        if (validation.errors) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(JSON.stringify(validation.errors), 400);
        }
        // Encrypt API key and webhook secret
        const encryptedApiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])(validation.data.apiKey);
        const encryptedWebhookSecret = validation.data.webhookSecret ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])(validation.data.webhookSecret) : null;
        const [account] = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stripeAccounts"]).values({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            userId: user.id,
            name: validation.data.name,
            description: validation.data.description,
            apiKey: encryptedApiKey,
            webhookSecret: encryptedWebhookSecret,
            isActive: validation.data.isActive
        }).returning();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$stripe$2f$sync$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["syncProducts"])(account.id, user.id);
        // Return without sensitive data
        const { apiKey, webhookSecret, ...safeAccount } = account;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(safeAccount, 201);
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b069f3d._.js.map