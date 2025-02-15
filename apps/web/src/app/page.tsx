import Image from "next/image";
import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";
import { PublicNav } from "./_components/public-pages/public-nav";

export default function Home() {
  return (
    <>
      <PublicNav/>
      <div className="w-full flex flex-col">
        <div className=" w-full flex items-start  flex-col space-y-10 ml-10 mt-10">
          <h1 className="font-bold text-5xl">
            Um lugar mais feliz <br/> e livre para suas ideias
          </h1>
          <p className=" text-2xl" >
            Escreva e planeje tudo no mesmo lugar <br/> 
            da forma como quiser
          </p>
           <Image
            className="self-center rounded-md shadow-2xl"
            src={"/indrodSs.png"} 
            alt="Print do inicio do site" 
            width={1000}
            height={100}
            />
        </div>
      </div>
      <Footer/>    
    </>
  );
}
