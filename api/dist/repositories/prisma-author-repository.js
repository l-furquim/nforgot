"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAuthorRepository = void 0;
const prisma_1 = require("@/lib/prisma");
class PrismaAuthorRepository {
    findById(id) {
        const author = prisma_1.prisma.author.findUnique({
            where: {
                id,
            },
        });
        return author;
    }
    async create(data) {
        const author = await prisma_1.prisma.author.create({
            data
        });
        return author;
    }
    async findByEmail(email) {
        const author = await prisma_1.prisma.author.findUnique({
            where: {
                email,
            }
        });
        return author;
    }
}
exports.PrismaAuthorRepository = PrismaAuthorRepository;
