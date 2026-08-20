import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

/**
 * Lazily-built Turso (libSQL) client + Drizzle instance. Lazy so a missing env
 * var surfaces as a normal API error at request time instead of crashing the
 * module at import/build time (mirrors the getTransporter() pattern in mailer.ts).
 */
let db: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url) {
    return null
  }

  if (!db) {
    const client = createClient({ url, authToken })
    db = drizzle(client, { schema })
  }

  return db
}

export * from './schema'
