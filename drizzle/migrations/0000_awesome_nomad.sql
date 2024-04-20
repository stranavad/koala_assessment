-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "pg_stat_statements_info" (
	"dealloc" bigint,
	"stats_reset" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pg_stat_statements" (
	"userid" "oid",
	"dbid" "oid",
	"toplevel" boolean,
	"queryid" bigint,
	"query" text,
	"plans" bigint,
	"total_plan_time" double precision,
	"min_plan_time" double precision,
	"max_plan_time" double precision,
	"mean_plan_time" double precision,
	"stddev_plan_time" double precision,
	"calls" bigint,
	"total_exec_time" double precision,
	"min_exec_time" double precision,
	"max_exec_time" double precision,
	"mean_exec_time" double precision,
	"stddev_exec_time" double precision,
	"rows" bigint,
	"shared_blks_hit" bigint,
	"shared_blks_read" bigint,
	"shared_blks_dirtied" bigint,
	"shared_blks_written" bigint,
	"local_blks_hit" bigint,
	"local_blks_read" bigint,
	"local_blks_dirtied" bigint,
	"local_blks_written" bigint,
	"temp_blks_read" bigint,
	"temp_blks_written" bigint,
	"blk_read_time" double precision,
	"blk_write_time" double precision,
	"wal_records" bigint,
	"wal_fpi" bigint,
	"wal_bytes" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "character" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"gender" text,
	"ability" text NOT NULL,
	"minimal_distance" numeric NOT NULL,
	"weight" numeric,
	"born" timestamp NOT NULL,
	"in_space_since" timestamp,
	"beer_consumption" integer NOT NULL,
	"knows_the_answer" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nemesis" (
	"is_alive" boolean NOT NULL,
	"years" integer,
	"id" serial NOT NULL,
	"character_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "secret" (
	"id" serial NOT NULL,
	"secret_code" bigint NOT NULL,
	"nemesis_id" integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "fki_Character Id" ON "nemesis" ("id");
*/