"use client"

import { Button } from "@/components/ui/button"

export const PrimaryButton = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <Button onClick={() => location.replace("/login")} className="bg-[#3C2A21] text-[#E5E5CB] " > 
      {children}
    </Button>
  )
}