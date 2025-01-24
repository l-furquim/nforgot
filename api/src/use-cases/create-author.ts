import { PrismaAuthorRepository } from "@/repositories/prisma-author-repository";
import { hash } from "bcryptjs";

interface CreateUserUseCaseRequest {
  alias: string,
  email: string,
  password: string,
  accountType: string,
  imageUrl: string,
}

export class createUserUseCase{
  constructor(private repository: PrismaAuthorRepository){}

  async create({
    alias, email, password, accountType, imageUrl
  }: CreateUserUseCaseRequest){
    if(!email.includes("@")){
      throw new Error("Invalid email");
    }
  
    const hashedPassword = await hash(password, 6);
  
    await this.repository.create({
      email,
      password: hashedPassword,
      alias,
      accountType,
      imageUrl,
      status: "pending"
    });
  }
}