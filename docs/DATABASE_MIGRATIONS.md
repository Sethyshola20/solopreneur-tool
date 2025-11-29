# Database Migration Commands

Quick reference for managing database schema changes with Drizzle.

## Available Commands

### 🔄 `bun run db:push`
**Push schema changes directly to the dev database (recommended for development)**

```bash
bun run db:push
```

- ✅ Fastest way to sync schema changes
- ✅ No migration files generated
- ✅ Perfect for rapid development
- ⚠️ Use only in development (uses `DATABASE_URL_DEV`)

**When to use:** Making quick schema changes during development

---

### 📝 `bun run db:generate`
**Generate migration SQL files from schema changes**

```bash
bun run db:generate
```

- Creates migration files in `./drizzle` directory
- Compares current schema with database
- Generates SQL for the differences
- Files are named with timestamps

**When to use:** When you want to review SQL before applying, or for production deployments

---

### 🚀 `bun run db:migrate`
**Apply generated migration files to the database**

```bash
bun run db:migrate
```

- Runs all pending migrations in `./drizzle` directory
- Tracks which migrations have been applied
- Safe to run multiple times (idempotent)

**When to use:** After generating migrations, to apply them to the database

---

### 🎨 `bun run db:studio`
**Open Drizzle Studio - visual database browser**

```bash
bun run db:studio
```

- Opens web UI at `https://local.drizzle.studio`
- Browse and edit database data
- View schema and relationships
- Run SQL queries

**When to use:** To visually inspect or modify database data

---

### 🌱 `bun run db:seed`
**Populate database with mock data**

```bash
bun run db:seed
```

- Inserts sample data for testing
- See `lib/db/mock-data.ts` for data
- Requires valid `MOCK_USER_ID`

**When to use:** Setting up test data in development

---

## Common Workflows

### Workflow 1: Quick Development (Recommended)

When making schema changes during development:

```bash
# 1. Edit your schema in lib/db/schema.ts
# 2. Push changes directly to dev database
bun run db:push

# 3. (Optional) View changes in Drizzle Studio
bun run db:studio
```

### Workflow 2: Production-Ready Migrations

When preparing changes for production:

```bash
# 1. Edit your schema in lib/db/schema.ts

# 2. Generate migration files
bun run db:generate

# 3. Review the generated SQL in ./drizzle/*.sql

# 4. Apply migrations to dev database
bun run db:migrate

# 5. Commit migration files to git
git add drizzle/
git commit -m "Add stripe invoice fields to factures"

# 6. In production, run migrations
NODE_ENV=production bun run db:migrate
```

### Workflow 3: Fresh Database Setup

Setting up a new database from scratch:

```bash
# 1. Push schema to create all tables
bun run db:push

# 2. Seed with test data
bun run db:seed

# 3. Open studio to verify
bun run db:studio
```

---

## Example: Adding Stripe Fields to Factures

Here's how you would apply the recent Stripe invoice integration changes:

```bash
# Option A: Quick push (development)
bun run db:push

# Option B: Generate migration (production-ready)
bun run db:generate
# Review the generated SQL file
bun run db:migrate
```

---

## Environment Variables

All commands use `NODE_ENV=development` by default, which means they use:
- `DATABASE_URL_DEV` from your `.env` file

To run against production:
```bash
NODE_ENV=production bun run db:push
```

---

## Troubleshooting

### "No schema changes detected"
- Make sure you saved your schema file
- Check that your schema file is listed in `drizzle.config.ts`

### "Connection error"
- Verify `DATABASE_URL_DEV` is set in `.env`
- Check database is accessible
- Ensure connection string is correct

### "Migration already applied"
- This is normal - migrations are tracked automatically
- Safe to run `db:migrate` multiple times

### "Conflicting changes"
- You may have made changes directly in the database
- Use `db:push` to force sync (development only)
- Or generate a new migration that resolves conflicts

---

## Best Practices

1. **Development**: Use `db:push` for speed
2. **Production**: Always use `db:generate` + `db:migrate`
3. **Version Control**: Commit migration files to git
4. **Review SQL**: Always review generated migrations before applying
5. **Backup**: Backup production database before running migrations
6. **Test**: Test migrations on staging before production

---

## Additional Resources

- [Drizzle Kit Documentation](https://orm.drizzle.team/kit-docs/overview)
- [Drizzle Migrations Guide](https://orm.drizzle.team/docs/migrations)
- [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)
