import { PrismaAuthorRepository } from "@/repositories/prisma-author-repository"
import { AuthAuthorUseCase } from "../auth-author";


export function makeAuthAuthorUseCase(){
  const repository = new PrismaAuthorRepository();

  return new AuthAuthorUseCase(repository);
}