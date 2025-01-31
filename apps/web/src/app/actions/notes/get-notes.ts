"use server"

import { api } from "@/lib/api";
import { AxiosError } from "axios";
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation";

export type Note = {
  id: string,
  title: string,
  content: string,
  type: string,
  icon: string,
}

type NotesResponse = {
  notes: Note[],
}

export async function getNotes(){
  try{
    const cookie = await cookies();

    const token = cookie.get("nforgotAuth")?.value;

    if(token){
      const response = await api.get("/notes/get", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const { notes } = response.data as NotesResponse;

      return notes;
    }
    redirect("/create");
  }catch(err){
    const axiosError = err as AxiosError;

    console.log(JSON.stringify(axiosError.response?.data));

    throw new AxiosError("Erro ao buscar as notas " + axiosError.message);
  }
}