"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNote = getNote;
const note_note_found_error_1 = require("@/use-cases/errors/note-note-found-error");
const unauthorized_note_error_1 = require("@/use-cases/errors/unauthorized-note-error");
const make_get_note_use_case_1 = require("@/use-cases/factories/note/make-get-note-use-case");
const zod_1 = __importDefault(require("zod"));
async function getNote(request, reply) {
    const getNoteSchema = zod_1.default.object({
        noteId: zod_1.default.string(),
    });
    const { noteId } = getNoteSchema.parse(request.query);
    try {
        const useCase = (0, make_get_note_use_case_1.makeGetNoteUseCase)();
        const note = await useCase.get({
            noteId,
            authorId: request.user.sub,
        });
        return reply.status(200).send({
            note,
        });
    }
    catch (err) {
        if (err instanceof note_note_found_error_1.NoteNotFoundError) {
            return reply.status(404).send({
                message: err.message
            });
        }
        if (err instanceof unauthorized_note_error_1.UnauthorizedNoteError) {
            return reply.status(401).send({
                message: err.message
            });
        }
    }
}
