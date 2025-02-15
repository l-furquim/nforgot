"use client"
import { usePathname } from "next/navigation"
import { GuideContainer } from "./guide-container";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export const SideDocs = () => {
  const actualPath = usePathname();

  return (
    <Sidebar side="left">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="font-bold self-center text-1xl text-[#3C2A21]">
            Guias
        </SidebarGroupLabel>
        <SidebarGroupContent className="mt-2 flex flex-col w-full items-center">
          <SidebarMenu className="flex flex-col w-full items-center mt-4">
              <SidebarMenuItem>
                <GuideContainer text="Começando com o nforgot" href="/documentation/starting" isSelected={actualPath === "/documentation/starting"} />
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  )
}