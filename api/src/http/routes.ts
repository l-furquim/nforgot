import type { FastifyInstance } from "fastify";
import { authorRoutes } from "./controllers/author/routes";
import { notesRoutes } from "./controllers/note/routes";

export async function appRoutes(instance: FastifyInstance){
  instance.register(authorRoutes, { prefix: "/authors" });
  instance.register(notesRoutes, { prefix: "/notes" })
}