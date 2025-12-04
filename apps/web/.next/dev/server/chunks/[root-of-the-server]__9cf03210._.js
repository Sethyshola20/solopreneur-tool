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
"[project]/Documents/Code/solopreneur-tool/apps/web/lib/validators/factures.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factureItemSchema",
    ()=>factureItemSchema,
    "factureSchema",
    ()=>factureSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const factureItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'La description est requise'),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0.01, 'La quantité doit être positive'),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, 'Le prix doit être positif')
});
const factureSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Le client est requis'),
    devisId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>!isNaN(Date.parse(val)), 'Date invalide'),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().nullable(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'pending',
        'paid',
        'cancelled'
    ]).default('pending').nonoptional(),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(factureItemSchema).min(1, 'Au moins un article est requis')
});
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
        return Response.json(null, {
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
"[project]/Documents/Code/solopreneur-tool/apps/web/app/api/factures/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/drizzle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$validators$2f$factures$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/validators/factures.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/run-with-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Code/solopreneur-tool/apps/web/lib/api/response.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
async function GET(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runWithAuthAPI"])(async (user)=>{
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].id,
            userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].userId,
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].clientId,
            number: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].number,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].status,
            clientName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clients"].name,
            items: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["facturesItems"],
            date: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].date,
            dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].dueDate,
            total: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].total,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].createdAt,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].updatedAt,
            devisId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].devisId
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"]).leftJoin(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["facturesItems"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].id, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["facturesItems"].factureId)).leftJoin(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clients"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].clientId, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clients"].id)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].userId, user.id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"].createdAt));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(rows);
    });
}
async function POST(req) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$run$2d$with$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runWithAuthAPI"])(async (user)=>{
        const body = await req.json();
        const validatedData = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$validators$2f$factures$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factureSchema"].parse(body);
        // Generate Facture Number (Simple logic: FAC-YYYY-TIMESTAMP for uniqueness)
        const year = new Date().getFullYear();
        const number = `FAC-${year}-${Date.now().toString().slice(-6)}`;
        // Calculate totals
        let total = 0;
        const itemsWithTotals = validatedData.items.map((item)=>{
            const itemTotal = item.quantity * item.price;
            total += itemTotal;
            return {
                ...item,
                total: itemTotal.toString(),
                quantity: item.quantity.toString(),
                price: item.price.toString()
            };
        });
        const newFacture = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$drizzle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
            const [createdFacture] = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["factures"]).values({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                userId: user.id,
                clientId: validatedData.clientId,
                devisId: validatedData.devisId || null,
                number: number,
                status: validatedData.status,
                date: validatedData.date,
                dueDate: validatedData.dueDate || null,
                total: total.toString()
            }).returning();
            if (itemsWithTotals.length > 0) {
                await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["facturesItems"]).values(itemsWithTotals.map((item)=>({
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                        factureId: createdFacture.id,
                        description: item.description,
                        quantity: item.quantity,
                        price: item.price,
                        total: item.total
                    })));
            }
            return createdFacture;
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Code$2f$solopreneur$2d$tool$2f$apps$2f$web$2f$lib$2f$api$2f$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(newFacture, 201);
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9cf03210._.js.map