"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateNoteUseCase = makeUpdateNoteUseCase;
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const update_note_1 = require("@/use-cases/note/update-note");
function makeUpdateNoteUseCase() {
    const repository = new prisma_note_repository_1.PrismaNoteRepository();
    const authorRepository = new prisma_author_repository_1.PrismaAuthorRepository();
    return new update_note_1.UpdateNoteUseCase(repository, authorRepository);
}
