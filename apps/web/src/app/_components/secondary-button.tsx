import { Button } from "@/components/ui/button";
import type React from "react";

export const SecondaryButton = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <Button className="bg-[#D5CEA3] text-inherit text-[#3C2A21] transition hover:bg-[#c4bd86]">
      {children}
    </Button>
  )
}