"use server"

import { api } from "@/lib/api"
import type { AxiosError } from "axios";
import { cookies } from "next/headers";

type Response = {
  message: string,
  status: boolean
}
interface newAuthorRequest {
  username: string,
  password: string,
  avatarURL: string,  
}

export async function newAuthor({ username, password , avatarURL }: newAuthorRequest): Promise<Response>{
  try{
    const cookie = await cookies();
    const email = cookie.get("user")?.value;
    const accountType = cookie.get("type")?.value


    if(email && accountType){
      const response = await api.post("authors/create",JSON.stringify({
        alias: username,
        email: email.replaceAll("%40", "@"),
        accountType,
        imageUrl: avatarURL,
        password,
      }));

      cookie.delete("user");
      cookie.delete("type");

      const data = response.data;

      cookie.set("nforgotAuth", data.token);

      return { message: response.data, status: true };
    }

    return { message: "Email and account type cannot be found", status: false };
  }catch(err){
    const axiosError = err as AxiosError;

    console.log(axiosError.response?.data);

    return { message: axiosError.message, status: false };
  } 
}