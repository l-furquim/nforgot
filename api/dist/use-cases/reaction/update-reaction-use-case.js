"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionUseCase = void 0;
const reaction_not_found_error_1 = require("../errors/reaction-not-found-error");
;
class UpdateReactionUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    ;
    async update({ reactionId, type }) {
        const reaction = await this.repository.findById(reactionId);
        if (!reaction) {
            throw new reaction_not_found_error_1.ReactionNotFoundError();
        }
        if (reaction.type === type) {
            return;
        }
        await this.repository.update(reactionId, type);
    }
}
exports.UpdateReactionUseCase = UpdateReactionUseCase;
