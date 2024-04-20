import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as drizzleSchema from '../../drizzle/schema';

export type DrizzleConnection = PostgresJsDatabase<typeof drizzleSchema>;
