import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { isLocal } from "@/const";
import * as schema from "./schema";
import * as authSchema from "./auth-schema";

const DATABASE_URL = isLocal ? process.env.DATABASE_URL_DEV! : process.env.DATABASE_URL!;
if (!DATABASE_URL) throw new Error("Missing DATABASE_URL environment variable");
const cleanDatabaseUrl = DATABASE_URL.split('?')[0];

const sql = neon(cleanDatabaseUrl);
export const db = drizzle(sql, { schema: { ...schema, ...authSchema } });

