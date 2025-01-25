import type { FastifyInstance } from "fastify";
import { authorRoutes } from "./controllers/author/routes";

export async function appRoutes(instance: FastifyInstance){
  instance.register(authorRoutes, { prefix: "/authors" });
}