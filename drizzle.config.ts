import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { isLocal } from './const';
config({ path: '.env' });

export default defineConfig({
    schema: [
        "./lib/db/schema.ts",
        "./lib/db/auth-schema.ts",
    ],
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: isLocal ? process.env.DATABASE_URL_DEV! : process.env.DATABASE_URL!,
    },
});
