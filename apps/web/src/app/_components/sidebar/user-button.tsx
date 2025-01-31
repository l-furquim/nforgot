import { getSession } from "@/lib/session";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { ChevronDown, Settings } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


export async function UserButton(){
  const session = await getSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-start w-full items-center" asChild>
        <SidebarMenuButton className="w-full">
            <Avatar className="w-8 h-8">
              <AvatarImage src={session.imageUrl}/>
            </Avatar>
            <h1 className="font-semibold text-sm text-[#3C2A21]">{session.alias}</h1>
          <ChevronDown  />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
        <DropdownMenuItem className="flex-col space-y-3 w-full items-start">
            <div className="flex items-center justify-start w-full gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={session.imageUrl}/>
              </Avatar>
              <h1 className="font-semibold text-sm">{session.alias}'s nForgot</h1>
            </div>
            <Button className="w-28 h-6 bg-[#3C2A21]">
              <Settings/> <p className="text-xs">Configurações</p>
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}