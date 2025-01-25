import type { FastifyInstance } from "fastify";
import { createAuthor } from "./create-author";
import { authAuthor } from "./auth-author";

export async function authorRoutes(instance: FastifyInstance){
  instance.post("/create", createAuthor);
  instance.post("/auth", authAuthor);
}