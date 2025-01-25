import type { AuthorsRepository } from "@/repositories/author-repository";
import type { NoteRepository } from "@/repositories/note-repository";
import { AccountNotFoundEror } from "./errors/account-not-found-error";
import { InvalidPublicNoteContent } from "./errors/invalid-public-note-content";

interface CreateNoteUseCaseRequest {
  title: string,
  content: string,
  type: string,
  authorId: string,  
};


export class CreateNoteUseCase {
  constructor(private repository: NoteRepository, private authorRepository: AuthorsRepository){}

  async create({
    title,content,type,authorId
  }: CreateNoteUseCaseRequest){
    const author = this.authorRepository.findById(authorId);

    if(!author){
      throw new AccountNotFoundEror([authorId]);
    }

    if(type === "PUBLIC" && (content === "" || title === "")){
      throw new InvalidPublicNoteContent();
    }

    const note = await this.repository.create({
      title,
      content,
      type,
      author_id: authorId
    });

    return note;
  }
}