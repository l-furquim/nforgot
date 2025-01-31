"use server"

import { api } from "@/lib/api"
import type { AxiosError } from "axios";
import { cookies } from "next/headers";
import type { Note } from "./get-notes";

interface CreateNoteRequest {
  title: string,
  content: string,
  icon: string,
  type: string,
  id: string,
};


interface CreateNoteResponse {
  note: Note
}

export async function createNote({ title, content, icon, id ,type }: CreateNoteRequest){
  try{
    const cookie = await cookies();
    const token = cookie.get("nforgotAuth")?.value;
    console.log(token);

    if(token){
      const response = await api.post("/notes/create", JSON.stringify({
        title,
        content,
        icon,
        type,
        id,
      }), {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
  
      if(response){
        const { note } = response.data as CreateNoteResponse;

        return note;
      } 
      console.log(response);
    }

  }catch(err) {
    const axiosError = err as AxiosError;

    console.log(JSON.stringify(axiosError.response?.data));
  }
}