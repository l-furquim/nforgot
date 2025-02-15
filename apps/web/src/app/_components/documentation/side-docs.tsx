"use client"
import { usePathname } from "next/navigation"
import { GuideContainer } from "./guide-container";

export const SideDocs = () => {
  const actualPath = usePathname();

  return (
    <div className="w-56 h-full  bg-sidebar">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-lg pt-10">Guias</h1>
        <div className="pt-10">
          <GuideContainer text="Começando" href="/documentation/starting" isSelected={actualPath === "/documentation/starting"} />
        </div>
      </div>
    </div>
  )
}