import Editor from "@/app/_components/editor";
import { getNote } from "@/app/actions/notes/get-note";
import { Toolbar } from "@/components/tool-bar";

type tParams = Promise<{noteId: string}>;

export default async function VisitPage(props: { params: tParams}){
  const { noteId } = await props.params;
  const actualNote = await getNote(noteId);

  return (
    <div className="w-full h-full flex flex-col space-y-10">
          {actualNote && (
            <>
              <Toolbar title={actualNote.title} icon={actualNote.icon} id={actualNote.id} visitor={true} />
              <Editor editable={false}  id={actualNote.id} initialContent={actualNote.content} />
            </>
          )}
    </div>
  )
}