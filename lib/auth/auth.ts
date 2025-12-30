import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "../db/drizzle";
import { authSchema } from "../db/auth-schema";

export const auth = betterAuth({
    appName: "Solopreneur Tool",
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: authSchema,
    }),
    trustedOrigins: [
        "http://localhost:3000",
        "http://localhost:8081",
        "http://localhost:19006",
        "https://solopreneur.sethylaleye.com"
    ],
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()],
});
