import type React from "react";
import { SideDocs } from "../_components/documentation/side-docs";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DocumentationLayout({
  children
}: { children: React.ReactNode }){
  return (
    <div className="w-full h-screen flex">
      <SidebarProvider>
        <SideDocs/>
        {children}
      </SidebarProvider>
    </div>
  )
}