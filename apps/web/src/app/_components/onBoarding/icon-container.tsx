"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type React from "react"

type IconChooserProps = {
  name: string,
  fallback: string,
  onClick: () => void,
}

export const IconContainer: React.FC<IconChooserProps> = ({ name, fallback, onClick }) => {
  return (
    <div>
      <Avatar onClick={onClick}  className="w-[80px] h-[80px] hover:opacity-75 hover:border transition">
        <AvatarImage src={name} />
        <AvatarFallback>Icon {fallback}</AvatarFallback>
      </Avatar>
    </div>
  )
}