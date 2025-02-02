"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReaction = deleteReaction;
const reaction_not_found_error_1 = require("@/use-cases/errors/reaction-not-found-error");
const make_delete_reaction_use_case_1 = require("@/use-cases/factories/reaction/make-delete-reaction-use-case");
const zod_1 = __importDefault(require("zod"));
async function deleteReaction(request, reply) {
    const deleteReactionSchema = zod_1.default.object({
        reactionId: zod_1.default.number(),
    });
    const { reactionId } = deleteReactionSchema.parse(request.query);
    try {
        const useCase = (0, make_delete_reaction_use_case_1.makeDeleteReactionUseCase)();
        await useCase.delete({
            authorId: request.user.sub,
            reactionId,
        });
        return reply.status(204).send();
    }
    catch (err) {
        if (err instanceof reaction_not_found_error_1.ReactionNotFoundError) {
            return reply.status(404).send({
                message: err.message,
            });
        }
        return reply.status(500).send({
            message: err,
        });
    }
}
