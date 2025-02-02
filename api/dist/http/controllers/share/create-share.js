"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShare = createShare;
const alredy_shared_error_1 = require("@/use-cases/errors/alredy-shared-error");
const note_note_found_error_1 = require("@/use-cases/errors/note-note-found-error");
const unauthorized_note_error_1 = require("@/use-cases/errors/unauthorized-note-error");
const make_create_share_use_case_1 = require("@/use-cases/factories/share/make-create-share-use-case");
const zod_1 = __importDefault(require("zod"));
async function createShare(request, reply) {
    const createShareSchema = zod_1.default.object({
        noteId: zod_1.default.string(),
    });
    const { noteId } = createShareSchema.parse(request.body);
    try {
        const useCase = (0, make_create_share_use_case_1.makeCreateShareUseCase)();
        const share = await useCase.create({
            authorId: request.user.sub,
            noteId,
        });
        return reply.status(201).send({
            share,
        });
    }
    catch (err) {
        if (err instanceof note_note_found_error_1.NoteNotFoundError) {
            return reply.status(404).send({
                message: err.message,
            });
        }
        if (err instanceof unauthorized_note_error_1.UnauthorizedNoteError) {
            return reply.status(401).send({
                message: err.message,
            });
        }
        if (err instanceof alredy_shared_error_1.AlredySharedError) {
            return reply.status(400).send({
                message: err.message,
            });
        }
        return reply.status(500).send({
            message: err,
        });
    }
}
