"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteShareUseCase = makeDeleteShareUseCase;
const prisma_share_repository_1 = require("@/repositories/prisma-share-repository");
const delete_share_use_case_1 = require("@/use-cases/share/delete-share-use-case");
function makeDeleteShareUseCase() {
    const repo = new prisma_share_repository_1.PrismaShareRepository();
    return new delete_share_use_case_1.DeleteShareUseCase(repo);
}
