"use client"

import { Input } from "@/components/ui/input"
import { SecondaryButton } from "../secondary-button"
import { useState } from "react"

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); 

  function onSubmit(e: any){
    e.preventDefault();
    
    return;
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="mt-10 flex flex-col space-y-5" action="">
      <div className="flex flex-col">
        <label className="text-opacity-75 text-sm" htmlFor="iptEmail">Email</label>
        <div className={`border flex items-center border-[#3C2A21] w-72 rounded-md`}>
            <Input 
            className="placeholder:text-[#3C2A21] focus:outline-none focus:ring-0" 
            id="iptEmail" name="iptEmail" placeholder="Coloque seu email aqui..."/>
          </div>
      </div>
      
      {showPassword && (
        // <label className="text-opacity-75 text-sm" htmlFor="iptPassword">Senha</label>
        <div>
           <label className="text-opacity-75 text-sm" htmlFor="iptPassword">Senha</label>
            <Input
            type="password"
            className="placeholder:text-[#3C2A21] border border-[#3C2A21] w-72"
            id="iptPassword" name="iptPassword" placeholder="Senha.."/>
        </div>
      )}
      
      <div className="w-full flex justify-center mt-5">
        <SecondaryButton onClick={() => setShowPassword(true)} className="w-64" text="Continuar"></SecondaryButton>
      </div>
    </form>
  )
}