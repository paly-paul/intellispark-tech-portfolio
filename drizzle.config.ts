import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

// drizzle-kit's CLI doesn't auto-load .env.local the way Next.js does, so load it
// explicitly for `db:generate` / `db:push` / `db:studio`.
config({ path: '.env.local' })

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config
