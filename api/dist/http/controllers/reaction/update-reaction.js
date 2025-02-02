"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReaction = updateReaction;
const reaction_not_found_error_1 = require("@/use-cases/errors/reaction-not-found-error");
const make_update_reaction_use_case_1 = require("@/use-cases/factories/reaction/make-update-reaction-use-case");
const zod_1 = __importDefault(require("zod"));
async function updateReaction(request, reply) {
    const updateReactionSchema = zod_1.default.object({
        reactionId: zod_1.default.number(),
        type: zod_1.default.enum(["LOVED", "APPLAUSED", "LIKED"]),
    });
    const { reactionId, type } = updateReactionSchema.parse(request.body);
    try {
        const useCase = (0, make_update_reaction_use_case_1.makeUpdateReactionUseCase)();
        await useCase.update({
            reactionId, type
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
