import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";


export class PrismaAuthorRepository {
  async create(data: Prisma.AuthorCreateInput){
    const author = await prisma.user.create({
      data
    });

    return author;
  }
}