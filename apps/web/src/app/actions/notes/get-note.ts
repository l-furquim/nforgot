"use server"

import { api } from "@/lib/api"
import { cookies } from "next/headers";
import type { Note } from "./get-notes";
import type { AxiosError } from "axios";
import { redirect } from "next/navigation";

type GetNoteResponse = {
  note: Note
};

export async function getNote(id: string){
  try{
      const cookie = await cookies();
      const token = cookie.get("nforgotAuth")?.value;
      
      if(token){
        const response = await api.get(`notes/note?noteId=${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });

      const { note } = response.data as GetNoteResponse;

      return note;
     }
     
    }catch(err){
      const axiosError = err as AxiosError;

      if(axiosError.status === 404){
        redirect("/home");
      }
      console.log(JSON.stringify(axiosError.response?.data));
    }
  }