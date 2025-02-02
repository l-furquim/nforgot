import { getSession } from "@/lib/session";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { ChevronDown, DoorOpen, Settings } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle";


export async function UserButton(){
  const session = await getSession();
  const nameSplited= session.alias.split(" ")[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-start w-full items-center" asChild>
        <SidebarMenuButton className="w-full">
            <Avatar className="w-8 h-8">
              <AvatarImage src={session.imageUrl}/>
            </Avatar>
            <h1 className="font-semibold text-sm text-[#3C2A21] dark:text-[#E5E5CB]">{nameSplited}</h1>
          <ChevronDown  />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-3 w-[--radix-popper-anchor-width]">
        <div className="flex items-center justify-start w-full gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={session.imageUrl}/>
              </Avatar>
              <h1 className="font-semibold text-sm">{nameSplited}&apos nForgot</h1>
        </div>  
        <div className="space-y-3 mt-5 w-full ml-5">
          <Button className="w-28 h-10 bg-[#3C2A21] dark:bg-[#E5E5CB]">
                <Settings/> 
                <DropdownMenu>
                  <DropdownMenuTrigger  asChild>
                    <p className="text-xs">
                      Configurações
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36 h-14 items-center text-base  gap-x-2 flex justify-center">
                    Tema <ModeToggle/>
                  </DropdownMenuContent>
                </DropdownMenu>
          </Button>
          <Button className="w-28 h-10 hover:text-red-600 flex justify-start text-xs items-center  bg-[#3C2A21] dark:bg-[#E5E5CB]">
                <DoorOpen/> 
                Sair
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}