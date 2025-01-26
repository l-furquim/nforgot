import { verifyJwt } from "@/http/middlewares/verify-jwt";
import type { FastifyInstance } from "fastify";
import { createReaction } from "./create-reaction";

export async function reactionRotes(instance: FastifyInstance){
  instance.addHook("onRequest", verifyJwt);
  
  instance.post("/create", createReaction);
}