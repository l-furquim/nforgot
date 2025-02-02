"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetNotesAuthor = makeGetNotesAuthor;
const prisma_author_repository_1 = require("@/repositories/prisma-author-repository");
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const get_notes_by_user_1 = require("@/use-cases/note/get-notes-by-user");
function makeGetNotesAuthor() {
    const repository = new prisma_note_repository_1.PrismaNoteRepository();
    const authorRepository = new prisma_author_repository_1.PrismaAuthorRepository();
    return new get_notes_by_user_1.GetNotesByAuthor(repository, authorRepository);
}
