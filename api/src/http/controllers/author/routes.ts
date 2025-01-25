import type { FastifyInstance } from "fastify";
import { createAuthor } from "./create-author";

export async function authorRoutes(instance: FastifyInstance){
  instance.post("/create", createAuthor);
}