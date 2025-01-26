import { InvalidDataError } from "@/use-cases/errors/invalid-data-error";
import { makeUpdateNoteUseCase } from "@/use-cases/factories/note/make-update-note-use-case";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";


export async function updateNote(request: FastifyRequest, reply: FastifyReply){
  const updateNoteSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    type: z.enum(["PRIVATE", "PUBLIC"]),
  });

  const { title, content, type, id } = updateNoteSchema.parse(request.body);

  try{
    const useCase = makeUpdateNoteUseCase();

    await useCase.update({
      title, content, type, id
    });
  }catch(err){
    if(err instanceof InvalidDataError){
      return reply.status(400).send({
        message: err.message,
      });
    }

    reply.status(500).send();
  }
}