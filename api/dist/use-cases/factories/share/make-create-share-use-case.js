"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateShareUseCase = makeCreateShareUseCase;
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const prisma_share_repository_1 = require("@/repositories/prisma-share-repository");
const create_share_use_case_1 = require("@/use-cases/share/create-share-use-case");
function makeCreateShareUseCase() {
    const repo = new prisma_share_repository_1.PrismaShareRepository();
    const noteRepo = new prisma_note_repository_1.PrismaNoteRepository();
    return new create_share_use_case_1.CreateShareUseCase(repo, noteRepo);
}
