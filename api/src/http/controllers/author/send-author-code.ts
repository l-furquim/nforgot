import { AuthorAlredyExistError } from "@/use-cases/errors/author-alredy-exists-error";
import { GenerateCodeError } from "@/use-cases/errors/GenerateCodeError";
import { MailError } from "@/use-cases/errors/MailSendError";
import { makeSendAuthorCodeUseCase } from "@/use-cases/factories/author/make-send-author-code-use-case";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function sendAuthorCode(request: FastifyRequest, reply: FastifyReply){
  const sendAuthorCodeSchema = z.object({
    email: z.string().email(),
  });

  const { email } = sendAuthorCodeSchema.parse(request.body);

  try{
    const useCase = makeSendAuthorCodeUseCase();

    await useCase.send({
      email,
    });

    return reply.status(201).send({
      message: "Email sended",
    });
  }catch(err){
    if(err instanceof MailError){
      return reply.status(500).send({
        message: err.message,
      });
    }

    if(err instanceof AuthorAlredyExistError){
      return reply.status(400).send({
        message: err.message,
      });
    }

    if(err instanceof GenerateCodeError){
      return reply.status(500).send({
        message: err.message,
      });
    }

    return reply.status(500).send({
      err,
    })
  }
}