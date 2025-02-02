"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = createNote;
const account_not_found_error_1 = require("@/use-cases/errors/account-not-found-error");
const invalid_public_note_content_1 = require("@/use-cases/errors/invalid-public-note-content");
const make_create_note_use_case_1 = require("@/use-cases/factories/note/make-create-note-use-case");
const zod_1 = __importDefault(require("zod"));
async function createNote(request, reply) {
    const createNoteSchema = zod_1.default.object({
        title: zod_1.default.string(),
        content: zod_1.default.string(),
        type: zod_1.default.enum(["PRIVATE", "PUBLIC"]).default("PRIVATE"),
        icon: zod_1.default.string(),
        id: zod_1.default.string(),
    });
    const { title, content, type, icon, id } = createNoteSchema.parse(request.body);
    try {
        const useCase = (0, make_create_note_use_case_1.makeCreateNoteUseCase)();
        const note = await useCase.create({
            title,
            content,
            type,
            icon,
            authorId: request.user.sub,
            id,
        });
        return reply.status(201).send({
            note
        });
    }
    catch (err) {
        if (err instanceof invalid_public_note_content_1.InvalidPublicNoteContent || err instanceof account_not_found_error_1.AccountNotFoundEror) {
            reply.status(400).send({
                message: err.message
            });
        }
    }
}
