import type { Prisma, Reaction } from "@prisma/client";

export interface ReactionRepository {
  create(data: Prisma.ReactionUncheckedCreateInput): Promise<Reaction>;
  findById(id: number): Promise<Reaction | null>;
  findByNote(id: string): Promise<Reaction[] | null>;
  findByUser(id: string): Promise<Reaction[] | null>;
  delete(id: number): Promise<void>;
  update(id: number, type: string): Promise<void>;
  findByNoteAndAuthor(noteId: string, authorId: string): Promise<Reaction | null>;
}