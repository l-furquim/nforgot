"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateReactUseCase = makeCreateReactUseCase;
const prisma_note_repository_1 = require("@/repositories/prisma-note-repository");
const prisma_reaction_repository_1 = require("@/repositories/prisma-reaction-repository");
const create_reaction_use_case_1 = require("@/use-cases/reaction/create-reaction-use-case");
function makeCreateReactUseCase() {
    const repo = new prisma_reaction_repository_1.PrismaReactionRepository();
    const noteRepo = new prisma_note_repository_1.PrismaNoteRepository();
    return new create_reaction_use_case_1.CreateReactionUseCase(repo, noteRepo);
}
