import type { Prisma, Note } from "@prisma/client";
import type { NoteRepository } from "./note-repository";
import { prisma } from "@/lib/prisma";

export class PrismaNoteRepository implements NoteRepository{
  
  async create(data: Prisma.NoteUncheckedCreateInput): Promise<Note> {
    const note = await prisma.note.create({
      data
    });

    return note;
  }
  async findByUserId(authorId: string): Promise<Note[] | null> {
    const note = await prisma.note.findMany({
      where: {
        author_id: authorId
      },
    })

    return note;
  }
  async update(data: Note): Promise<Note> {
      const note = await prisma.note.update({
        where: {
          id: data.id
        },
        data,
      });

      return note
  }

}