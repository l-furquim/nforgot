import { env } from "@/env";
import type { PrismaAuthorRepository } from "@/repositories/prisma-author-repository";
import * as jwt from "jsonwebtoken";
import { JwtDecondingError } from "../errors/JwtDecondingError";

interface VerifyCodeProps {
  code: string,
  expiresIn: string,
}

interface VerifyCodeRequest {
  token: string,
  code: string,
};

export class VerifyCodeUseCase{
  constructor(private repository: PrismaAuthorRepository){};

  async verify({
    token, code
  }: VerifyCodeRequest){
    try{
      const decodedToken = jwt.verify(token,env.JWT_SECRET) as VerifyCodeProps;

      if(decodedToken.code === code){
        return true;
      };
      return false;
    }catch(err){
      console.log(err);
      throw new JwtDecondingError();
    }
  }
}