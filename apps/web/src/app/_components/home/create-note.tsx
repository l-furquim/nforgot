"use client"

import { createNote } from "@/app/actions/notes/create-note";
import type { Note } from "@/app/actions/notes/get-notes";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const CreateNote = () => {

  const onCreatePrivateNote = async () => {
      const newId = crypto.randomUUID();
      const newNote: Note = {
        content: "",
        id: newId,
        title: "New note",
        icon: "",
        type: "PRIVATE",
      };
  
      await createNote(newNote);
      location.replace("/home/" + newId);
    }

  return (
    <Button onClick={onCreatePrivateNote} className="mt-32 bg-[#3C2A21] hover:opacity-75 text-[#E5E5CB] dark:bg-sidebar dark:hover:bg-sidebar-accent">
        <PlusCircle/> Nova nota
    </Button>
  )
}