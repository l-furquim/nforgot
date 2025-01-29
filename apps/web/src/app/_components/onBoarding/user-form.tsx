"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";
import { IconChooser } from "./icon-chooser";
import { newAuthor } from "@/app/actions/author/new-author";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

export const UserForm = () => {
  const [userAvatarURL, setUserAvatarURL] = useState<string>("/profile-placeholder.png");
  const [errorMessage, setErrorMessage] = useState(<></>);
  const router = useRouter();


  let icons = [];

  
  for(let i=0; i <= 9; i++){
    icons.push(`/icons/icon-${i}.png`);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

    const username = data.get("iptName")?.toString();

    if(username){
      const response = await newAuthor({
        username,
        avatarURL: userAvatarURL,
      });

      if(response){
        router.push("/home");
      };

      return;
    };

    setErrorMessage(<p className="text-red-700 text-sm">Nome inválido</p>)
  }

  return (
      <>
      <IconChooser userAvatarURL={userAvatarURL} setUserAvatarURL={setUserAvatarURL} />
      <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col items-center">
        <label className="mb-1 text-sm" htmlFor="iptName">Coloque seu nome</label>
        <Input placeholder="Seu nome..." className="placeholder:text-[#3C2A21] border border-[#3C2A21] focus:border-none focus:outline-none focus:ring-0 w-72"  id="iptName" name="iptName" />
        { errorMessage }
        <Button type="submit" className="w-60 mt-20 font-bold bg-[#3C2A21] hover:opacity-75">
          Confirmar
        </Button>
      </form>
      </>
  )
}