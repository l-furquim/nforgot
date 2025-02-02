"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetNoteUseCase = makeGetNoteUseCase;
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const get_note_use_case_1 = require("@/use-cases/note/get-note-use-case");
function makeGetNoteUseCase() {
    const repo = new prisma_note_repository_1.PrismaNoteRepository();
    return new get_note_use_case_1.GetNoteUseCase(repo);
}
