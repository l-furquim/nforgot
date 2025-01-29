import { Button } from "@/components/ui/button";
import type React from "react";

type SecondaryButtonProps = {
  text: string,
  className?: string,
  onClick? : () => void;
};

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, className, onClick }) => {
  return (
    <Button type="button" onClick={onClick}  className={`${ className } bg-[#D5CEA3]  text-inherit text-[#3C2A21] transition hover:bg-[#c4bd86]`}>
      {text}
    </Button>
  )
}