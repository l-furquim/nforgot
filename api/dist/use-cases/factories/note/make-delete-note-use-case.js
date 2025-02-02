"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteNoteUseCase = makeDeleteNoteUseCase;
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const delete_note_1 = require("@/use-cases/note/delete-note");
function makeDeleteNoteUseCase() {
    const repository = new prisma_note_repository_1.PrismaNoteRepository();
    return new delete_note_1.DeleteNoteUseCase(repository);
}
