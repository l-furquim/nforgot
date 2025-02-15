import type React from "react";
import { SideDocs } from "../_components/documentation/side-docs";

export default function DocumentationLayout({
  children
}: { children: React.ReactNode }){
  return (
    <div className="w-full h-screen flex">
      <SideDocs/>
      {children}
    </div>
  )
}