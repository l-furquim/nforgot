import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeAuthAuthorUseCase } from "@/use-cases/factories/make-auth-author-use-case";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function authAuthor(request: FastifyRequest, reply: FastifyReply){
  const authAuthorSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  const { email, password } = authAuthorSchema.parse(request.body);

  try{
    const useCase = makeAuthAuthorUseCase();

    const author = await useCase.create({
      email,
      password
    });

    return reply.status(200).send(
      {
        author
      }
    )
  }catch(err){
    if(err instanceof InvalidCredentialsError){
      return reply.status(400).send({
        message: err.message,
      })
    }
  }
}