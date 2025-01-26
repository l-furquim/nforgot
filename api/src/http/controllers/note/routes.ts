import type { FastifyInstance } from "fastify";
import { createNote } from "./create-notes";
import { getAuthorNotes } from "./get-author-notes";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { updateNote } from "./update-note";

export async function notesRoutes(instance: FastifyInstance){
  instance.addHook("onRequest", verifyJwt);

  instance.post("/create", createNote);
  instance.get("/get", getAuthorNotes);
  instance.put("/update", updateNote);
}