"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateReactionUseCase = makeUpdateReactionUseCase;
const prisma_reaction_repository_1 = require("@/repositories/prisma-reaction-repository");
const update_reaction_use_case_1 = require("@/use-cases/reaction/update-reaction-use-case");
function makeUpdateReactionUseCase() {
    const repo = new prisma_reaction_repository_1.PrismaReactionRepository();
    return new update_reaction_use_case_1.UpdateReactionUseCase(repo);
}
