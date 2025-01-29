"use client"

import React, { useState } from "react";
import { IconContainer } from "./icon-container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageDown } from "lucide-react";

interface UserAvatarProps {
  userAvatarURL: string;
  setUserAvatarURL: React.Dispatch<React.SetStateAction<string>>;
}

export const IconChooser: React.FC<UserAvatarProps> = ({ userAvatarURL, setUserAvatarURL }) => {
  const [open, setOpen] = useState(false);

  return (
   <>
    <Dialog open={open}>
        <DialogTrigger onClick={() => setOpen(true)} className="flex font-bold gap-2">
          <div className="flex w-full gap-4 justify-center items-center flex-col">
            <Avatar className="w-[80px] h-[80px]">
              <AvatarImage src={userAvatarURL} />
              <AvatarFallback>User icon</AvatarFallback>
            </Avatar>
            <div className="flex gap-2 items-center text-muted-foreground text-sm">
              <ImageDown/>
              Escolha um icone
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full bg-[#E5E5CB] h-[500px]">
          <DialogHeader>
            <DialogTitle>Escolha seu icone</DialogTitle>
          </DialogHeader>
            <div className="w-full h-full flex flex-col space-y-10 justify-center items-center">
              <div className="w-full space-x-10 flex justify-center items-center">
                          <IconContainer name="/icons/icon-1.png" fallback="icone 1" onClick={() => { setUserAvatarURL("/icons/icon-1.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-2.png" fallback="icone 2" onClick={() => { setUserAvatarURL("/icons/icon-2.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-3.png" fallback="icone 3" onClick={() => { setUserAvatarURL("/icons/icon-3.png"); setOpen(!open) }} />
              </div>
              <div className="w-full space-x-10 flex justify-center items-center">
                          <IconContainer name="/icons/icon-4.png" fallback="icone 4" onClick={() => { setUserAvatarURL("/icons/icon-4.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-5.png" fallback="icone 5" onClick={() => { setUserAvatarURL("/icons/icon-5.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-6.png" fallback="icone 6" onClick={() => { setUserAvatarURL("/icons/icon-6.png"); setOpen(!open) }} />
              </div>
              <div className="w-full space-x-10 flex justify-center items-center">
                          <IconContainer name="/icons/icon-7.png" fallback="icone 7" onClick={() => { setUserAvatarURL("/icons/icon-7.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-8.png" fallback="icone 8" onClick={() => { setUserAvatarURL("/icons/icon-8.png"); setOpen(!open) }} />
                          <IconContainer name="/icons/icon-9.png" fallback="icone 9" onClick={() => { setUserAvatarURL("/icons/icon-9.png"); setOpen(!open) }} />
              </div>
            </div>
        </DialogContent>
    </Dialog>
   </>
  )
}