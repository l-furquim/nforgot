"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeVerifyCodeUseCase = makeVerifyCodeUseCase;
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const verify_code_use_case_1 = require("@/use-cases/author/verify-code-use-case");
function makeVerifyCodeUseCase() {
    const repo = new prisma_author_repository_1.PrismaAuthorRepository();
    return new verify_code_use_case_1.VerifyCodeUseCase(repo);
}
