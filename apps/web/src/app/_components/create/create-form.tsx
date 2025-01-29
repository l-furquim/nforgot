"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendCodeToEmail } from "@/app/actions/author/send-code-email"
import { validateCode } from "@/app/actions/author/validate-code"

const CreateFormSchema = z.object({
  email: z.string().email("Por favor, insira um email válido."),
});

const CodeFormSchema = z.object({
  code: z.string().length(8, { message: "Por favor, insira um código válido" }),
});

export type CreateFormType = z.infer<typeof CreateFormSchema>;
export type CodeFormType = z.infer<typeof CodeFormSchema>;

export const CreateForm = () => {
  const [showCodeIpt, setshowCodeIpt] = useState(false);
  const [userEmail ,setUserEmail] = useState("");
  const router = useRouter();

  const { handleSubmit, register, formState: { errors }, setError } = useForm<CreateFormType>({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const codeState = useForm<CodeFormType>({
    resolver: zodResolver(CodeFormSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit: SubmitHandler<CreateFormType> = async ({ email }) => {

    const code = await sendCodeToEmail(email);

    if(code.status){
      setshowCodeIpt(true);
      setUserEmail(email);

      return;
    }
    setError("email", {
      message: code.message,
    });
  };

  const codeSubmit: SubmitHandler<CodeFormType> = async ({ code }) => {
      const response = await validateCode(code, userEmail);

      if(response.status){
        router.push("/onBoarding");
        return;
      };

      codeState.setError("code", {message: "Código inválido"})
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col space-y-5" action="">
      <div className="w-full flex flex-col items-center">
        <label className="flex w-full self-start ml-5 text-opacity-75 text-sm" htmlFor="iptEmail">Email</label>
        <Input
          disabled={showCodeIpt}
          {...register("email")}
          className="placeholder:text-[#3C2A21] w-72 border-[#3C2A21] focus:outline-none focus:ring-0"
          placeholder="Coloque seu email aqui..."
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
        )}
      </div>
      
      {showCodeIpt && (
        <div className="w-full flex flex-col items-center">
           <label className="flex w-full self-start ml-5 text-opacity-75 text-sm" htmlFor="iptCode">Código</label>
            <Input
              {...codeState.register("code")}
              type="text"
              className="placeholder:text-[#3C2A21] border border-[#3C2A21] w-72"
              placeholder="Código..."
            />
            <p className="mt-2 text-sm text-muted-foreground">Foi enviado um código de confirmação ao seu email.</p>
            { codeState.formState.errors.code && (
               <p className="text-red-500 text-sm mt-2">{codeState.formState.errors.code.message}</p>
            )}
        </div>
      )}
      
      <div className="w-full flex justify-center mt-5">
        {showCodeIpt ? (
          <Button type="button" onClick={codeState.handleSubmit(codeSubmit)} className="w-64">Verificar código</Button>
        ) : (
          <Button type="submit" className="w-64 bg-[#D5CEA3] text-inherit text-[#3C2A21] transition hover:bg-[#c4bd86]">
            Continuar
          </Button>
        )}
      </div>
    </form>
  );
};
