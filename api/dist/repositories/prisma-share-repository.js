"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaShareRepository = void 0;
const prisma_1 = require("@/lib/prisma");
class PrismaShareRepository {
    async findByNoteAndAuthor(noteId, authorId) {
        const share = await prisma_1.prisma.share.findFirst({
            where: {
                note_id: noteId,
                author_id: authorId,
            },
        });
        return share;
    }
    async create(data) {
        const share = await prisma_1.prisma.share.create({
            data,
        });
        return share;
    }
    async delete(data) {
        await prisma_1.prisma.share.delete({
            where: {
                id: data.id,
            },
        });
    }
    async findById(id) {
        const share = await prisma_1.prisma.share.findUnique({
            where: {
                id,
            },
        });
        return share;
    }
}
exports.PrismaShareRepository = PrismaShareRepository;
