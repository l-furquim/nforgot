"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateNoteUseCase = makeCreateNoteUseCase;
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const create_note_1 = require("@/use-cases/note/create-note");
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
function makeCreateNoteUseCase() {
    const repository = new prisma_note_repository_1.PrismaNoteRepository();
    const authorRepository = new prisma_author_repository_1.PrismaAuthorRepository();
    return new create_note_1.CreateNoteUseCase(repository, authorRepository);
}
