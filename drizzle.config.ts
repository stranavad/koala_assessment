import type { Config } from 'drizzle-kit';
import 'dotenv/config';
export default {
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    // connectionString: process.env.DATABASE_URL || '',
    connectionString:
      'postgres://hvyvudcn:xvQqbJ22KEb7auJxdvpPyj5kbC@dontpanic.k42.app/postgres',
  },
} satisfies Config;
