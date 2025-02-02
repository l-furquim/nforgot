"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShare = deleteShare;
const share_note_found_error_1 = require("@/use-cases/errors/share-note-found-error");
const unauthorized_share_deletion_error_1 = require("@/use-cases/errors/unauthorized-share-deletion-error");
const make_delete_share_use_case_1 = require("@/use-cases/factories/share/make-delete-share-use-case");
const zod_1 = __importDefault(require("zod"));
async function deleteShare(request, reply) {
    const deleteShareSchema = zod_1.default.object({
        id: zod_1.default.string(),
    });
    const { id } = deleteShareSchema.parse(request.query);
    console.log(id);
    try {
        const useCase = (0, make_delete_share_use_case_1.makeDeleteShareUseCase)();
        await useCase.delete({
            authorId: request.user.sub,
            shareId: Number(id),
        });
        return reply.status(204).send();
    }
    catch (err) {
        if (err instanceof share_note_found_error_1.ShareNotFoundError) {
            return reply.status(404).send({
                message: err.message,
            });
        }
        if (err instanceof unauthorized_share_deletion_error_1.UnauthorizedShareDeletionError) {
            return reply.status(401).send({
                message: err.message,
            });
        }
        return reply.status(500).send({
            message: err,
        });
    }
}
