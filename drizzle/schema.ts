import {
  pgTable,
  bigint,
  timestamp,
  boolean,
  text,
  numeric,
  serial,
  integer,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const character = pgTable('character', {
  id: serial('id').notNull(),
  name: text('name').notNull(),
  gender: text('gender'),
  ability: text('ability').notNull(),
  minimalDistance: numeric('minimal_distance').notNull(),
  weight: numeric('weight'),
  born: timestamp('born', { mode: 'string' }).notNull(),
  inSpaceSince: timestamp('in_space_since', { mode: 'string' }),
  beerConsumption: integer('beer_consumption').notNull(),
  knowsTheAnswer: boolean('knows_the_answer').notNull(),
});

export const characterRelations = relations(character, ({ many }) => ({
  nemesis: many(nemesis),
}));

export const nemesis = pgTable('nemesis', {
  id: serial('id').notNull(),
  isAlive: boolean('is_alive').notNull(),
  years: integer('years'),
  characterId: integer('character_id'),
});

export const nemesisRelations = relations(nemesis, ({ one, many }) => ({
  character: one(character, {
    fields: [nemesis.characterId],
    references: [character.id],
  }),
  secrets: many(secret),
}));

export const secret = pgTable('secret', {
  id: serial('id').notNull(),
  secretCode: bigint('secret_code', { mode: 'number' }).notNull(),
  nemesisId: integer('nemesis_id').notNull(),
});

export const secretRelations = relations(secret, ({ one }) => ({
  nemesis: one(nemesis, {
    fields: [secret.nemesisId],
    references: [nemesis.id],
  }),
}));
