import { Button } from "@/components/ui/button"
import Image from "next/image"

export const UserButton = () => {
  return (
      <Button className="bg-transparent hover:opacity-75 transtition hover:bg-transparent  flex justify-center items-center w-fit">
        <Image className="rounded-xl" width={50} height={50} src={"http://github.com/l-furquim.png"} alt="User icon" />
      </Button>
  ) 
}