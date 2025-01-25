import { makeCreateAuthorUseCase } from "@/use-cases/factories/make-create-author-use-case";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function createAuthor(request: FastifyRequest, reply: FastifyReply){{
  const createAuthorSchema = z.object({
    alias: z.string().min(1),
    email: z.string().email(),
    accountType: z.enum(["GITHUB", "DEFAULT"]).default("DEFAULT"),
    imageUrl: z.string().min(1),
    password: z.string().min(1),
  });

  const { alias,email,imageUrl, password, accountType } = createAuthorSchema.parse(request.body);

  const useCase = makeCreateAuthorUseCase();

  const author = await useCase.create({
    alias,
    email,
    password,
    accountType,
    imageUrl,
  });

  return reply.status(201).send({
    author,
  })
}}