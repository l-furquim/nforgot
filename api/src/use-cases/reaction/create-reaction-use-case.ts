import type { PrismaAuthorRepository } from "@/repositories/prisma-author-repository";
import type { PrismaNoteRepository } from "@/repositories/prisma-note-repository";
import type { PrismaReactionRepository } from "@/repositories/prisma-reaction-repository";
import { AccountNotFoundEror } from "../errors/account-not-found-error";
import { NoteNotFoundError } from "../errors/note-note-found-error";
import { UnauthorizedNoteError } from "../errors/unauthorized-note-error";

interface CreateReactionRequest {
  type: string,
  authorId: string,
  noteId: string,
};

export class CreateReactionUseCase{
  constructor(
    private repository: PrismaReactionRepository, 
    private authorRepository: PrismaAuthorRepository,
    private noteRepository: PrismaNoteRepository 
  ){}

  async create({
    type, authorId, noteId,
  }: CreateReactionRequest){
    const author = await this.authorRepository.findById(authorId);

    if(!author){
      throw new AccountNotFoundEror([authorId]);
    }

    const note = await this.noteRepository.findById(noteId);

    if(!note){
      throw new NoteNotFoundError();
    }

    if(note.type === "PRIVATE"){
      throw new UnauthorizedNoteError();
    }

    const reaction = await this.repository.create({
      type, author_id: authorId, note_id: noteId
    });

    return reaction;
  }
}