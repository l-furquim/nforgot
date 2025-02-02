import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LoginForm } from "../_components/login/login-form"

export default function LoginPage(){
  return (
    <div className="w-full h-full flex flex-col">
      <div className="ml-5 mt-5 flex justify-start">
        <Image alt="nforgot icon" width={50} height={50} src={"/icon.png"} />
      </div> 
      <div className="w-full h-full flex flex-col p-10 justify-center items-center">
        <h1 className="font-bold text-2xl">Pense. E faça.</h1>
        <p className="text-muted-foreground text-2xl">Faça login com a sua conta nForgot</p>
        <div className="flex flex-col space-y-3 mt-5">
          <Button>Login com github</Button>
        </div>
      </div>
    </div>
  )
}