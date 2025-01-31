import { getNote } from "@/app/actions/notes/get-note"
import { Toolbar } from "@/components/tool-bar";

type tParams = Promise<{noteId: string}>;

export  default async function NotePage(props: { params: tParams }){
  const { noteId } = await props.params;
  
  const actualNote = await getNote(noteId)

  console.log(actualNote);


  return (
    <div className="w-full h-full flex">
      {actualNote && (
        <Toolbar title={actualNote.title} icon={actualNote.icon} id={actualNote.id} visitor={false} />
      )}
    </div>
  )
}