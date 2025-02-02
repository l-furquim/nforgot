import Image from "next/image"
import { CreateForm } from "../_components/create/create-form"
import { GithubButton } from "../_components/create/github-button"
import { GoogleButton } from "../_components/create/google-button"

export default function CreatePage(){
  return (
    <div className="w-full h-full flex flex-col">
      <div className="ml-5 mt-5 flex justify-start">
        <Image alt="nforgot icon" width={50} height={50} src={"/icon.png"} />
      </div> 
      <div className="w-full h-full flex flex-col p-10 justify-center items-center">
        <h1 className="font-bold text-2xl">Pense. E faça.</h1>
        <p className="text-muted-foreground text-2xl">Crie sua conta nForgot</p>
        <div className="flex flex-col space-y-3 mt-5">
          <GoogleButton/>
        </div>
      </div>
    </div>
  )
}