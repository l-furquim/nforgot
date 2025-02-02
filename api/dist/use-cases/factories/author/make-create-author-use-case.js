"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAuthorUseCase = makeCreateAuthorUseCase;
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const create_author_1 = require("@/use-cases/author/create-author");
function makeCreateAuthorUseCase() {
    const repository = new prisma_author_repository_1.PrismaAuthorRepository();
    const useCase = new create_author_1.CreateAuthorUseCase(repository);
    return useCase;
}
