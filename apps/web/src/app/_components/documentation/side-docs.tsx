"use client"
import { usePathname } from "next/navigation"
import { GuideContainer } from "./guide-container";
import Image from "next/image";

export const SideDocs = () => {
  const actualPath = usePathname();

  return (
    <div className="w-56 h-full  bg-sidebar">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-lg pt-10 flex items-center gap-2">
        <Image src={"/icon.png"} alt="nforgot icon" width={50} height={50} />  Guias
        </h1>
        <div className="pt-10">
          <GuideContainer text="Começando" href="/documentation/starting" isSelected={actualPath === "/documentation/starting"} />
        </div>
      </div>
    </div>
  )
}