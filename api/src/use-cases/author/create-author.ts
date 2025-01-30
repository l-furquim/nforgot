import type { AuthorsRepository } from "@/repositories/author-repository";
import { compare, hash } from "bcryptjs";
import { AuthorAlredyExistError } from "../errors/author-alredy-exists-error";

interface CreateAuthorUseCaseRequest {
  alias: string,
  email: string,
  password: string,
  accountType: string,
  imageUrl: string,
}

export class CreateAuthorUseCase{
  constructor(private repository: AuthorsRepository){}

  async create({
    alias, email, password, accountType, imageUrl
  }: CreateAuthorUseCaseRequest){
    const userAlredyExists =  await this.repository.findByEmail(email);

    if(userAlredyExists){
      const isPaswordCorrect = await compare(password, userAlredyExists.password);

      if(isPaswordCorrect){
        return userAlredyExists;
      }else{
        throw new AuthorAlredyExistError();
      }
    };
  
    const hashedPassword = await hash(password, 6);
  
    const author = await this.repository.create({
      email,
      password: hashedPassword,
      alias,
      accountType,
      imageUrl,
      status: "pending"
    });
    return author;
  }

}