"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = updateNote;
const invalid_data_error_1 = require("@/use-cases/errors/invalid-data-error");
const make_update_note_use_case_1 = require("@/use-cases/factories/note/make-update-note-use-case");
const zod_1 = __importDefault(require("zod"));
async function updateNote(request, reply) {
    const updateNoteSchema = zod_1.default.object({
        id: zod_1.default.string(),
        title: zod_1.default.string().optional(),
        content: zod_1.default.string().optional(),
        icon: zod_1.default.string().optional(),
        type: zod_1.default.enum(["PRIVATE", "PUBLIC"]).optional(),
    });
    const { title, content, type, id, icon } = updateNoteSchema.parse(request.body);
    try {
        const useCase = (0, make_update_note_use_case_1.makeUpdateNoteUseCase)();
        await useCase.update({
            title, content, type, id, icon
        });
    }
    catch (err) {
        if (err instanceof invalid_data_error_1.InvalidDataError) {
            return reply.status(400).send({
                message: err.message,
            });
        }
        reply.status(500).send();
    }
}
