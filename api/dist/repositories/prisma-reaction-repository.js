"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaReactionRepository = void 0;
const prisma_1 = require("@/lib/prisma");
class PrismaReactionRepository {
    async findByNoteAndAuthor(noteId, authorId) {
        const reaction = await prisma_1.prisma.reaction.findFirst({
            where: {
                author_id: authorId,
                note_id: noteId,
            }
        });
        return reaction;
    }
    async create(data) {
        const reaction = await prisma_1.prisma.reaction.create({
            data,
        });
        return reaction;
    }
    async findById(id) {
        const reaction = await prisma_1.prisma.reaction.findUnique({
            where: {
                id,
            },
        });
        return reaction;
    }
    async findByNote(id) {
        const reaction = await prisma_1.prisma.reaction.findMany({
            where: {
                note_id: id,
            },
        });
        return reaction;
    }
    async findByUser(id) {
        const reaction = await prisma_1.prisma.reaction.findMany({
            where: {
                note: {
                    author_id: id,
                },
            },
        });
        return reaction;
    }
    ;
    async delete(data) {
        await prisma_1.prisma.reaction.delete({
            where: {
                id: data.id,
            }
        });
    }
    async update(id, type) {
        await prisma_1.prisma.reaction.update({
            where: {
                id
            },
            data: {
                type,
            },
        });
    }
}
exports.PrismaReactionRepository = PrismaReactionRepository;
