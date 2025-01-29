import type { FastifyInstance } from "fastify";
import { createAuthor } from "./create-author";
import { authAuthor } from "./auth-author";
import { sendAuthorCode } from "./send-author-code";

export async function authorRoutes(instance: FastifyInstance){
  instance.post("/create", createAuthor);
  instance.post("/auth", authAuthor);
  instance.post("/code", sendAuthorCode);
}