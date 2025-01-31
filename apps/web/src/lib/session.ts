"use server"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./auth";

export async function getSession(){
  const session = await getServerSession(authOptions);

  const author = session?.user;

  if(author) return author;

  redirect("/error");
}