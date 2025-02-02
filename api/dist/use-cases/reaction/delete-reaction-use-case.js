"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionUseCase = void 0;
const reaction_not_found_error_1 = require("../errors/reaction-not-found-error");
class DeleteReactionUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    ;
    async delete({ authorId, reactionId }) {
        const reaction = await this.repository.findById(reactionId);
        if (!reaction) {
            throw new reaction_not_found_error_1.ReactionNotFoundError();
        }
        if (reaction.author_id !== authorId) {
            throw new Error("Cant delete a reaction that is not yours");
        }
        await this.repository.delete(reaction);
    }
}
exports.DeleteReactionUseCase = DeleteReactionUseCase;
