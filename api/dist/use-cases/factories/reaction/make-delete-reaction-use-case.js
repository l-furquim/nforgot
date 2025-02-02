"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteReactionUseCase = makeDeleteReactionUseCase;
const prisma_reaction_repository_1 = require("@/repositories/prisma-reaction-repository");
const delete_reaction_use_case_1 = require("@/use-cases/reaction/delete-reaction-use-case");
function makeDeleteReactionUseCase() {
    const repo = new prisma_reaction_repository_1.PrismaReactionRepository();
    return new delete_reaction_use_case_1.DeleteReactionUseCase(repo);
}
