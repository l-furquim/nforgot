import type React from "react";
import { PublicNav } from "../_components/public-pages/public-nav";

export default function ReleasesLayout({
  children
}: { children: React.ReactNode }){
  return(
    <div className="w-full min-h-screen flex flex-col">
      <PublicNav/>
      {children}
    </div>
  )
}