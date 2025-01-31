"use client"

import { Input } from "@/components/ui/input"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";


const LoginFormSchema = z.object({
  email: z.string().email("Por favor insira um email valido"),
  password: z.string(),
});

export const LoginForm = () => {
  type LoginFormType = z.infer<typeof LoginFormSchema>;
  
  const { handleSubmit, register, formState: { errors }, setError } = useForm<LoginFormType>({
      resolver: zodResolver(LoginFormSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

  async function onSubmit(data: LoginFormType){
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if(response?.ok){
      location.replace("/home");
      return;
    }
    
    setError("email", {
      message: "Email ou senha errados",
    });

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col space-y-5" action="">
      <div className="flex flex-col">
        <label className="text-opacity-75 text-sm" htmlFor="iptEmail">Email</label>
        <div className={`border flex items-center border-[#3C2A21] w-72 rounded-md`}>
            <Input 
            {...register("email")}
            className="placeholder:text-[#3C2A21] focus:outline-none focus:ring-0" 
            placeholder="Coloque seu email aqui..."/>
          </div>
      </div>
      <div>
           <label className="text-opacity-75 text-sm" htmlFor="iptPassword">Senha</label>
            <Input
            {...register("password")}
            type="password"
            className="placeholder:text-[#3C2A21] border border-[#3C2A21] w-72"
            placeholder="Senha.."/>
            {errors.email && (
              <p className="text-red-500 w-full flex justify-center mt-2" >{errors.email.message}</p>
            )}
      </div>
      
      <div className="w-full flex justify-center mt-5">
        <Button className="w-64 bg-[#D5CEA3]  text-inherit text-[#3C2A21] transition hover:bg-[#c4bd86]`">Entrar</Button>
      </div>
    </form>
  )
}