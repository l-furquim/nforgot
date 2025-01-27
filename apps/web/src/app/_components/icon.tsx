import Image from "next/image"
import Link from "next/link"

export const Icon = () => {
  return (
    <Link href={"/"} className="flex gap-2 w-full justify-start  items-center">
      <Image width={60} height={60} alt="nForgot icon" src={"/icon.png"}/>
      <p className="text-2xl font-bold">nForgot</p>
    </Link>
  )
}