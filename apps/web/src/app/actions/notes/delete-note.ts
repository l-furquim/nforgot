"use server"

import type { AxiosError } from "axios";
import { cookies } from "next/headers"

export async function deleteNote(noteId: string){
  try{
    const cookie = await cookies();

    const token = cookie.get("nforgotAuth")?.value;

    if(token){
      await fetch(`http://localhost:3333/notes/delete?id=${noteId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
    }
  }catch(err){
    const axiosError = err as AxiosError;

    console.error(axiosError);

    throw new Error("Error during deletion of a note" + JSON.stringify(axiosError.response?.data));
  }
}