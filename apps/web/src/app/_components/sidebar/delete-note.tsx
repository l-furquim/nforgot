"use client";


import { deleteNote } from "@/app/actions/notes/delete-note";
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogHeader, 
  DialogContent, 
  DialogDescription, 
  DialogTitle, 
  DialogTrigger, 
  DialogClose} from "@/components/ui/dialog";
import { Trash } from "lucide-react"

interface DeleteNoteProps {
  noteId: string,
}

export const DeleteNote = ({ noteId }: DeleteNoteProps) => {
  const onDeleteNote = async () => {
    console.log(noteId);
    await deleteNote(noteId);

    location.replace("/home");
  }

  return (
          <Dialog>
        <DialogTrigger asChild>
          <Button className="w-6 opacity-0 hover:opacity-100 transition ease-in rounded-md h-6 bg-inherit hover:bg-sidebar-accent text-[#3C2A21] dark:text-[#E5E5CB] dark:hover:bg-[#7e5f4f] flex justify-center items-center p-1 hover:text-red-500">
            <Trash className="w-4 h-4"/>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tem certeza que deseja remover essa nota?</DialogTitle>
            <DialogDescription>
              Note que ao remover a nota não é mais possível recupera-la  
            </DialogDescription>
          </DialogHeader>
            <div className="w-full flex gap-x-4 justify-end items-center">
              <Button onClick={onDeleteNote}>
                Sim
              </Button>
              <DialogClose asChild>
                <Button>
                  Cancelar
                </Button>
              </DialogClose>
            </div>
        </DialogContent>
      </Dialog>
  )
}