import { getSession } from "@/lib/session";
import { getTimeOfDay } from "@/lib/utils";
import { Box } from "lucide-react";
import { CreateNote } from "../_components/home/create-note";

export const dynamic = 'force-dynamic';

export default async function HomePage(){
  const author = await getSession();
  const helloMessage = getTimeOfDay();

  console.log(author);

  return (
    <div className="w-full h-full flex flex-col gap-y-10 justify-start items-center pt-10">
      <h1 className="font-bold text-2xl dark:text-muted-foreground">{helloMessage.message}, {author.alias.split(" ")[0]}</h1>
      <p className="flex gap-x-3 text-2xl dark:text-muted-foreground font-bold">
        O que vem na sua mente hoje ? <Box/>
      </p>
      <CreateNote/>
    </div>   
  )
}