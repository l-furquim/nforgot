import type { FastifyInstance } from "fastify";
import { createAuthor } from "./controllers/create-author";

export async function appRoutes(instance: FastifyInstance){
  instance.post("authors", createAuthor);
}