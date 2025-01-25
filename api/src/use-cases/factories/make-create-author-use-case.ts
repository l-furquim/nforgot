import { PrismaAuthorRepository } from "@/repositories/prisma-author-repository";
import { CreateAuthorUseCase } from "../create-author";

export function makeCreateAuthorUseCase(){
  const repository = new PrismaAuthorRepository();
  const useCase = new CreateAuthorUseCase(repository);

  return useCase;
}