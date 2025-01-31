import { Home , Search } from "lucide-react"

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
import type React from "react"
import { UserButton } from "@/app/_components/sidebar/user-button"
import { NotesContainer } from "@/app/_components/sidebar/notes-container"
import { getNotes } from "@/app/actions/notes/get-notes"

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
]
export async function AppSidebar({  }) {
  const notes = await getNotes();

  return (
    <Sidebar side="left">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <UserButton/>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <NotesContainer fetchNotes={notes} />
      </SidebarContent>
    </Sidebar>
  )
};