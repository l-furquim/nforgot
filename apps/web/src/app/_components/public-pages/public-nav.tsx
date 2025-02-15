"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "../icon"
import { ArrowDown, ArrowUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { LoginButton } from "../navbar/login-button"
import { GetnForgotButton } from "../navbar/get-nforgot"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const PublicNav = () => {
  const [docState, setDocState] = useState(false);
  const [releasesState, setreleasesState] = useState(false)

  return (
    <div className="ml-2 mt-2 h-24 flex w-full">
      <Icon/>
      <div className="flex w-full justify-start space-x-10 items-center">
        <DropdownMenu  open={docState} onOpenChange={setDocState}>
          <DropdownMenuTrigger asChild>
            <Button
            onClick={() => location.replace("/documentation")}
            onMouseEnter={() => setDocState(true)}
            className="bg-transparent hover:bg-zinc-300 rounded-md p-1 text-primary">
              Documentação { docState ? <ArrowDown/> : <ArrowUp/> }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 "
            onMouseEnter={() => setDocState(true)} 
            onMouseLeave={() => setDocState(false)}
            >
            <DropdownMenuLabel>Guias</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="hover:bg-zinc-300">
              <Link href={"/documentation/starting"}>
                Começando com o nforgot 🚀
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu  open={releasesState} onOpenChange={setreleasesState}>
          <DropdownMenuTrigger asChild>
            <Button
            onMouseEnter={() => setreleasesState(true)}
            className="bg-transparent hover:bg-zinc-300 rounded-md p-1 text-primary">
              Releases { releasesState ? <ArrowDown/> : <ArrowUp/> }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 "
            onMouseEnter={() => setreleasesState(true)} 
            onMouseLeave={() => setreleasesState(false)}
            >
            <DropdownMenuLabel>Releases</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="hover:bg-zinc-300">
              <Link href={"/releases"}>
                v 0.1
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full flex space-x-3 items-center justify-end mr-10">
        <LoginButton/>
        <GetnForgotButton/>
      </div>
    </div>
  )
}