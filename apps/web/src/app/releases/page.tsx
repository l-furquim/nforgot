import { Check } from "lucide-react";
import Image from "next/image";
import { Footer } from "../_components/footer";

export default function ReleasesPage(){
  return (
    <div className="flex pb-10 h-full flex-col">
      <h1 className="font-bold text-5xl self-center">Releases</h1>
      <div className="w-full flex pt-20 justify-center items-start space-x-16">
        <div className="flex flex-col space-y-3">
          <h3 className="text-3xl font-bold">
            Versão beta <br /> 
            do nforgot
          </h3>
          <div className="flex space-x-10 items-center">
            <span className="rounded-md w-fit p-2 px-5 bg-[#3C2A21] font-bold text-[#E5E5CB]">
              v 0.1.0
            </span>
            <span className="text-sm text-muted-foreground ">
              02 fev, 2025
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-10 items-start">
          <Image
          className=" rounded-md shadow-2xl"
          src={"/releases/homeSs.png"} 
          alt="Print do inicio do site" 
          width={600}
          height={100}
          />
          <h1 className="font-bold text-2xl self-start">Adições:</h1>
          <p className="flex items-center gap-2 font-medium">
            <span className=" w-6  h-6 text-[#E5E5CB]">
              <Check className="w-6 h-6 bg-[#3C2A21] rounded-md" />
            </span>
            Criação de nota pública e privada pelo usuário.
          </p>
          <p className="flex items-center gap-2 font-medium">
            <span className=" w-6  h-6 text-[#E5E5CB]">
              <Check className="w-6 h-6 bg-[#3C2A21] rounded-md" />
            </span>
            Exclusão de notas pelo usuário.
          </p>
          <p className="flex items-center gap-2 font-medium">
            <span className=" w-6  h-6 text-[#E5E5CB]">
              <Check className="w-6 h-6 bg-[#3C2A21] rounded-md" />
            </span>
            Alterar o tema para claro ou escuro
          </p>
          <p className="flex items-center gap-2 font-medium">
            <span className=" w-6  h-6 text-[#E5E5CB]">
              <Check className="w-6 h-6 bg-[#3C2A21] rounded-md" />
            </span>
            Exclusão de notas pelo usuário.
          </p>
          
        </div>
       
      </div>
      <Footer/>
    </div>
  )
}