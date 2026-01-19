import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Database routes removed. Everything is hardcoded in the frontend.
  return httpServer;
}
