"use client";


import { deleteNote } from "@/app/actions/notes/delete-note";
import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash } from "lucide-react"

interface DeleteNoteProps {
  noteId: string,
}

export const DeleteNote = ({ noteId }: DeleteNoteProps) => {
  const onDeleteNote = async () => {
    await deleteNote(noteId);

    location.replace("/home");
  }

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger asChild>
        <Button className="w-6 rounded-md h-6 bg-inherit hover:bg-sidebar-accent text-[#E5E5CB] dark:hover:bg-[#7e5f4f] flex justify-center items-center p-1 hover:text-red-600">
          <Trash className="w-4 h-4"/>
        </Button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle> Tem certeza que deseja remover essa nota? </DialogTitle>
        <DialogDescription>
          Note que ao remover a nota não é mais possível recupera-la  
        </DialogDescription>
      </DialogHeader>
      <DialogContent>
          <div className="w-full flex gap-x-8 justify-start items-center">
            <Button>
              Sim
            </Button>
            <Button>
              Cancelar
            </Button>
          </div>
      </DialogContent>
    </Dialog>
  )
}