import type { PrismaNoteRepository } from "@/repositories/prisma-note-repository";
import { NoteNotFoundError } from "../errors/note-note-found-error";

interface DeleteNoteRequest {
  id: string,
};

export class DeleteNoteUseCase{
  constructor(private repository: PrismaNoteRepository){}

  async delete({
    id
  }: DeleteNoteRequest){
    const note = await this.repository.findById(id);

    if(!note){
      throw new NoteNotFoundError();
    }

    await this.repository.delete(id);
  }
}