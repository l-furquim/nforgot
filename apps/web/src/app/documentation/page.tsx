"use client"

import { BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../_components/footer";
import { SideDocs } from "../_components/documentation/side-docs";
import { PublicNav } from "../_components/public-pages/public-nav";

export default function DocumentationPage(){
  return (
    <div className="flex flex-col h-full">
      <PublicNav/>
      <div className="flex pl-5 justify-center space-x-20 pt-32 w-full"> 
        <div className="flex-col flex  space-y-5">
          <h1 className="font-bold text-4xl">Documentações</h1>
          <p className="text text-muted-foreground font-semibold">
            Aqui você encontra o guia para tudo que precisa <br/>
            para utilizar o melhor do nforgot
          </p>
          <div className="w-full flex justify-end items-center h-full">
            <Button onClick={() => location.replace("/documentation/starting")} className="w-44 p-2">
              Começar
            </Button>
          </div>
        </div>
          <BookMarked
          className=""
          size={200}
          />
      </div>
      <Footer/>
    </div>
  )
}