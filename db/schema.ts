import {
  pgTable,
  serial,
  text,
  integer,
  varchar,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const athleteApplications = pgTable("athlete_applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  dateOfBirth: varchar("date_of_birth", { length: 50 }),
  school: varchar("school", { length: 255 }),
  primaryEvents: varchar("primary_events", { length: 255 }),
  personalBests: varchar("personal_bests", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  email: varchar("email", { length: 255 }).notNull(),
  goals: text("goals"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const parentRegistrations = pgTable("parent_registrations", {
  id: serial("id").primaryKey(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  relationship: varchar("relationship", { length: 100 }),
  athleteName: varchar("athlete_name", { length: 255 }),
  emergencyContact: varchar("emergency_contact", { length: 50 }),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age"),
  primaryEvent: varchar("primary_event", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  experience: text("experience"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type AthleteEntry = {
  name: string;
  age: string;
  gender: "male" | "female" | "";
  event: string;
};

export const groupRegistrations = pgTable("group_registrations", {
  id: serial("id").primaryKey(),
  contactName: varchar("contact_name", { length: 255 }).notNull(),
  contactEmail: varchar("contact_email", { length: 255 }).notNull(),
  contactPhone: varchar("contact_phone", { length: 50 }),
  athletes: jsonb("athletes").$type<AthleteEntry[]>().notNull(),
  boysCount: integer("boys_count").notNull(),
  girlsCount: integer("girls_count").notNull(),
  totalCount: integer("total_count").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const coaches = pgTable("coaches", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  qualifications: varchar("qualifications", { length: 255 }),
  experience: text("experience"),
  image: varchar("image", { length: 255 }).notNull(),
  bio: text("bio").notNull(),
  specialties: jsonb("specialties").$type<string[]>().notNull(),
  philosophy: text("philosophy"),
  isHeadCoach: integer("is_head_coach").default(0).notNull(),
  highlights: jsonb("highlights").$type<string[]>(),
  focus: jsonb("focus").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const athletes = pgTable("athletes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }),
  image: varchar("image", { length: 255 }).notNull(),
  dob: varchar("dob", { length: 50 }),
  age: integer("age"),
  ageGroup: varchar("age_group", { length: 50 }),
  events: jsonb("events").$type<string[]>().notNull(),
  pbs: jsonb("pbs").$type<Record<string, string>>().notNull(),
  highlights: jsonb("highlights").$type<string[]>().notNull(),
  attributes: jsonb("attributes").$type<string[]>().notNull(),
  bio: text("bio").notNull(),
  motto: varchar("motto", { length: 255 }),
  goals: text("goals"),
  accent: varchar("accent", { length: 100 }).default(
    "from-cyan-400 to-blue-500",
  ),
  isSpotlight: integer("is_spotlight").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
