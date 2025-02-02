"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNoteRepository = void 0;
const prisma_1 = require("@/lib/prisma");
class PrismaNoteRepository {
    async delete(id) {
        await prisma_1.prisma.note.delete({
            where: {
                id,
            },
        });
    }
    ;
    async findById(id) {
        const note = await prisma_1.prisma.note.findUnique({
            where: {
                id,
            },
        });
        return note;
    }
    async create(data) {
        const note = await prisma_1.prisma.note.create({
            data
        });
        return note;
    }
    async findByUserId(authorId) {
        const notes = await prisma_1.prisma.note.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                reactions: {
                    select: {
                        type: true
                    }
                },
                Share: {
                    select: {
                        author: true,
                    }
                },
                type: true,
                author_id: true,
                _count: {
                    select: {
                        reactions: true,
                        Share: true,
                    }
                }
            },
            where: {
                author_id: authorId,
            }
        });
        console.log(notes);
        const note = await prisma_1.prisma.note.findMany({
            where: {
                author_id: authorId
            },
        });
        return note;
    }
    async update(data) {
        await prisma_1.prisma.note.update({
            where: {
                id: data.id,
            },
            data,
        });
    }
    ;
}
exports.PrismaNoteRepository = PrismaNoteRepository;
