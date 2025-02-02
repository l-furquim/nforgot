"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = deleteNote;
const note_note_found_error_1 = require("@/use-cases/errors/note-note-found-error");
const make_delete_note_use_case_1 = require("@/use-cases/factories/note/make-delete-note-use-case");
const zod_1 = __importDefault(require("zod"));
async function deleteNote(request, reply) {
    const deleteNoteSchema = zod_1.default.object({
        id: zod_1.default.string(),
    });
    const { id } = deleteNoteSchema.parse(request.query);
    try {
        const useCase = (0, make_delete_note_use_case_1.makeDeleteNoteUseCase)();
        await useCase.delete({
            id,
            authorId: request.user.sub,
        });
        return reply.status(204).send();
    }
    catch (err) {
        if (err instanceof note_note_found_error_1.NoteNotFoundError) {
            return reply.status(404).send({
                message: err.message,
            });
        }
        return reply.status(500).send();
    }
    ;
}
