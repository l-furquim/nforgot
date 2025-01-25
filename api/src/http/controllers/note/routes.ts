import type { FastifyInstance } from "fastify";
import { createNote } from "./create-notes";

export async function notesRoutes(instance: FastifyInstance){
  instance.post("/create", createNote);
}