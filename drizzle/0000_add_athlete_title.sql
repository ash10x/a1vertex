CREATE TABLE "athlete_applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"date_of_birth" varchar(50),
	"school" varchar(255),
	"primary_events" varchar(255),
	"personal_bests" varchar(255),
	"phone" varchar(50),
	"email" varchar(255) NOT NULL,
	"goals" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "athletes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"title" varchar(255),
	"image" varchar(255) NOT NULL,
	"dob" varchar(50),
	"age" integer,
	"age_group" varchar(50),
	"events" jsonb NOT NULL,
	"pbs" jsonb NOT NULL,
	"highlights" jsonb NOT NULL,
	"attributes" jsonb NOT NULL,
	"bio" text NOT NULL,
	"motto" varchar(255),
	"goals" text,
	"accent" varchar(100) DEFAULT 'from-cyan-400 to-blue-500',
	"is_spotlight" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "coaches" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"qualifications" varchar(255),
	"experience" text,
	"image" varchar(255) NOT NULL,
	"bio" text NOT NULL,
	"specialties" jsonb NOT NULL,
	"philosophy" text,
	"is_head_coach" integer DEFAULT 0 NOT NULL,
	"highlights" jsonb,
	"focus" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"subject" varchar(255),
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "group_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"contact_name" varchar(255) NOT NULL,
	"contact_email" varchar(255) NOT NULL,
	"contact_phone" varchar(50),
	"athletes" jsonb NOT NULL,
	"boys_count" integer NOT NULL,
	"girls_count" integer NOT NULL,
	"total_count" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "parent_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_name" varchar(255) NOT NULL,
	"relationship" varchar(100),
	"athlete_name" varchar(255),
	"emergency_contact" varchar(50),
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer,
	"primary_event" varchar(255),
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"experience" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
