"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { signIn } from "next-auth/react"

export const GithubButton = () => {
  return (
    <Button onClick={() => signIn("github")}>Continuar com github <Github/></Button>
  )
}