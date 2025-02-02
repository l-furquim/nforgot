"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReaction = createReaction;
const note_note_found_error_1 = require("@/use-cases/errors/note-note-found-error");
const unauthorized_note_error_1 = require("@/use-cases/errors/unauthorized-note-error");
const unauthorized_reaction_error_1 = require("@/use-cases/errors/unauthorized-reaction-error");
const make_create_reaction_use_case_1 = require("@/use-cases/factories/reaction/make-create-reaction-use-case");
const zod_1 = __importDefault(require("zod"));
async function createReaction(request, reply) {
    const createReactionSchema = zod_1.default.object({
        type: zod_1.default.enum(["LOVED", "APPLAUSED", "LIKED"]),
        noteId: zod_1.default.string(),
    });
    const { type, noteId } = createReactionSchema.parse(request.body);
    try {
        const useCase = (0, make_create_reaction_use_case_1.makeCreateReactUseCase)();
        const react = await useCase.create({
            type, authorId: request.user.sub, noteId
        });
        return reply.status(201).send({
            react,
        });
    }
    catch (err) {
        if (err instanceof unauthorized_reaction_error_1.UnauthorizedReactionError) {
            reply.status(401).send({
                message: err.message,
            });
        }
        ;
        if (err instanceof note_note_found_error_1.NoteNotFoundError) {
            reply.status(404).send({
                message: err.message,
            });
        }
        if (err instanceof unauthorized_note_error_1.UnauthorizedNoteError) {
            reply.status(401).send({
                message: err.message,
            });
        }
    }
}
