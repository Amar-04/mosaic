import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  day: integer("day").notNull(), // 1, 2, or 3
  category: text("category").notNull(), // e.g., "Cultural", "Sports", "Technical"
  description: text("description").notNull(),
  registrationLink: text("registration_link").notNull(),
});

export const rules = pgTable("rules", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id"), // Null for general rules
  description: text("description").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  phone: text("phone").notNull(),
  department: text("department"),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertRuleSchema = createInsertSchema(rules).omit({ id: true });
export const insertContactSchema = createInsertSchema(contacts).omit({ id: true });

export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Rule = typeof rules.$inferSelect;
export type InsertRule = z.infer<typeof insertRuleSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
