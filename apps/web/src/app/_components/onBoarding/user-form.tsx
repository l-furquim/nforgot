"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";
import { IconChooser } from "./icon-chooser";
import { signIn } from "next-auth/react" 
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/cookie";

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
    const password = data.get("iptPassword")?.toString();

    if(username && password){
      const email = getCookie("user")?.replaceAll("%40", "@");

      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
        alias: username,
        accountType: "DEFAULT",
        iconUrl: userAvatarURL,
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
        <div className="flex flex-col space-y-5">
          <div>
            <label className="mb-1 text-sm" htmlFor="iptName">Coloque seu nome</label>
            <Input placeholder="Seu nome..." className="placeholder:text-[#3C2A21] border border-[#3C2A21] focus:border-none focus:outline-none focus:ring-0 w-72"  id="iptName" name="iptName" />
          </div>
          <div>
            <label className="mb-1 text-sm" htmlFor="iptName">Escolha uma senha</label>
            <Input type="password" placeholder="Senha aqui..." className="placeholder:text-[#3C2A21] border border-[#3C2A21] focus:border-none focus:outline-none focus:ring-0 w-72"  id="iptPassword" name="iptPassword" />
          </div>
        </div>
        
        { errorMessage }
        <Button type="submit" className="w-60 mt-20 font-bold bg-[#3C2A21] hover:opacity-75">
          Confirmar
        </Button>
      </form>
      </>
  )
}