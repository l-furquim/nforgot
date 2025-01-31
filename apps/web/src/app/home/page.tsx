import { getSession } from "@/lib/session";
import { getTimeOfDay } from "@/lib/utils";

export default async function HomePage(){
  const author = await getSession();
  const helloMessage = getTimeOfDay();

  console.log(author);

  return (
    <div>
      <h1>{helloMessage.message}, {author.alias}</h1>
    </div> 
  )
}