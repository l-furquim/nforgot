"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthAuthorUseCase = makeAuthAuthorUseCase;
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const auth_author_1 = require("@/use-cases/author/auth-author");
function makeAuthAuthorUseCase() {
    const repository = new prisma_author_repository_1.PrismaAuthorRepository();
    return new auth_author_1.AuthAuthorUseCase(repository);
}
