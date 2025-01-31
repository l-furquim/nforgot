import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="w-full flex flex-col">
        <div className=" w-full flex items-start  flex-col space-y-10 ml-10 mt-10">
          <h1 className="font-bold text-5xl">
            Um lugar mais feliz <br/> e livre para suas ideias
          </h1>
          <p className=" text-2xl" >
            Escreva e planeje tudo no mesmo lugar <br/> 
            da forma como quiser
          </p>
        </div>
      </div>
      <Footer/>    
    </>
  );
}
