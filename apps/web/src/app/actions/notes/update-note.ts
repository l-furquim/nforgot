"use server"

import { api } from "@/lib/api";
import type { AxiosError } from "axios";
import { cookies } from "next/headers"

interface UpdateNoteRequest {
  title?: string,
  content?: string,
  id: string,
  type? : string,
  icon?: string,
};


export async function updateNote({ title, content, id, type, icon }: UpdateNoteRequest){
  try{
    const cookie = await cookies();

    const token = cookie.get("nforgotAuth")?.value;

    if(token){
      await api.put("notes/update", JSON.stringify({
        title, content, id, type, icon
      }), {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });
    };
  }catch(err){
    const axiosError = err as AxiosError;

    console.log(axiosError);

    throw new Error("Erro ao sincronizar os dados");
  }
}