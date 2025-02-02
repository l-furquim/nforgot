"use client"

import { Button } from "@/components/ui/button"

export const PrimaryButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
  return (
    <Button className="bg-[#3C2A21] text-[#E5E5CB] " onClick={onClick} > 
      {text}
    </Button>
  )
}