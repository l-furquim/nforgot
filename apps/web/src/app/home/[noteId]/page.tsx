"use client";

import { useEffect, useState } from "react";
import { getNote } from "@/app/actions/notes/get-note";
import Editor from "@/app/_components/editor";
import { Toolbar } from "@/components/tool-bar";
import type { Note } from "@/app/actions/notes/get-notes";
import { updateNote } from "@/app/actions/notes/update-note";
import { PublishNote } from "@/app/_components/home/publish-note";

type tParams = Promise<{noteId: string}>;

export default function NotePage(props: { params: tParams}) {
  const [actualNote, setActualNote] = useState<Note | undefined>();

  useEffect(() => {
    async function fetchNote() {
      const { noteId } = await props.params;

      const note = await getNote(noteId);
      setActualNote(note);
    }

    fetchNote();
  }, [props.params]);

  const onUpdate = async (content: string) => {
    if(actualNote){
      console.log(content)
      await updateNote({
        id: actualNote.id,
        content,
      })
    }
  }

  return (
    <div className="w-full h-full flex flex-col space-y-10">
      {actualNote && (
        <>
          <PublishNote published={actualNote.type === "PUBLIC"} noteId={actualNote.id} />
          <Toolbar title={actualNote.title} icon={actualNote.icon} id={actualNote.id} visitor={false} />
          <Editor onChange={onUpdate} id={actualNote.id} initialContent={actualNote.content} />
        </>
      )}
    </div>
  );
}
