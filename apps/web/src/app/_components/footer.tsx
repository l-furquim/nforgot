import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Icon } from "./icon"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex py-8 mt-10 items-center">
      <div className="flex flex-col space-y-10 ml-10 items-start w-full">
        <Icon/>
        <div className="w-full flex space-x-5">
          <Link href={"https://x.com/furqass"}>
            <Twitter/>
          </Link>
          <Link href={"https://www.linkedin.com/in/lucas-hernandes-furquim-45048b312/"}>
            <Linkedin/> 
          </Link>
          <Link href={"https://github.com/l-furquim/nforgot"}>
            <Github/>
          </Link>
        </div>
        <p className="text-muted-foreground">Nós não vendemos ou negociamos <br/> quaisquer informações de usuários</p>
      </div>
      <div className="flex w-full ml-10 mt-10 space-x-20">
        <div className="w-full space-y-2 text-muted-foreground h-full flex flex-col justify-center">
          <h1 className="text-[#3C2A21] font-bold text-xl">Recursos</h1>
          <Link className="hover:cursor-pointer" href={"/documentation"}>Documentação</Link>
          <Link href={"/releases"} className="hover:cursor-pointer">Releases</Link>
          {/* <p>Ajuda</p> */}
        </div>
        <div className="w-full space-y-2 text-muted-foreground h-full flex flex-col justify-center">
          {/* <h1 className="text-[#3C2A21] font-bold text-xl">Companhia</h1> */}
         {/*  <p>Sobre nós</p>
          <p>Segurança</p> */}
        </div>
      </div>
    </footer>
  )
}