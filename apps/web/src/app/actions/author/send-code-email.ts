"use server"

import { api } from "@/lib/api"
import type { AxiosError } from "axios";
import { cookies } from "next/headers";

interface SendCodeToEmailResponse {
  token: string
}

type Response = {
  message: string,
  status: boolean
}

export async function sendCodeToEmail(email: string): Promise<Response>{
  try{
    const response = await api.post("/authors/code", JSON.stringify({ email, })) 

    const { token } = response.data as SendCodeToEmailResponse;

    const cookie = await cookies();
    cookie.set("verficationToken", token);

    return { message: "Codigo enviado para seu email", status: true };
  }catch(err){
    const axiosError = err as AxiosError;

    return { message: axiosError.message, status: false };
  }
}