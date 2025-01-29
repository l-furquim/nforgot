"use server"

import { api } from "@/lib/api"
import type { AxiosError } from "axios";
import { cookies } from "next/headers";

type Response = {
  message: string,
  status: boolean
}

export async function validateCode(code: string, email: string): Promise<Response>{
  try{
    const cookie = await cookies();
    const token = cookie.get("verficationToken")?.value;

    const data = {
      token,
      code,
    }

    if(token){
      const response = await api.post("authors/code/validate",data);

      cookie.delete("verificationToken");

      cookie.set("user", email);

      return { message: response.data, status: true };
    }

    return { message: "Token cannot be found", status: false };
  }catch(err){
    const axiosError = err as AxiosError;

    console.log(axiosError.response?.data);

    return { message: axiosError.message, status: false };
  }
}