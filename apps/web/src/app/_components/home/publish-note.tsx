"use client"

import { Button } from "@/components/ui/button"
import { Check, Clipboard, Globe } from "lucide-react"
import { 
  Dialog, 
  DialogHeader, 
  DialogContent, 
  DialogTitle, 
  DialogTrigger,
 }from "@/components/ui/dialog";
import { updateNote } from "@/app/actions/notes/update-note";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"


interface PublishNoteProps {
  published: boolean,
  noteId: string,
}

export const PublishNote = ({ published, noteId }:PublishNoteProps) => {  
  const [copied, setCopied] = useState(false);
  const [changePublish, setPublish] = useState(published);
  const { toast } = useToast();

  const onPublish = async () => {
    await updateNote({
      id: noteId,
      type: "PUBLIC"
    });
    setPublish(true);
    toast({
      title: "Nota publicada com sucesso",
      description: "Agora voce pode compartilhar com todos",
    })
  };

  const onUnpublish = async () => {
    await updateNote({
      id: noteId,
      type: "PRIVATE"
    });
    setPublish(false);
    toast({
      title: "Nota despublicada com sucesso",
      description: "Agora o link de acesso a sua nota foi desativado",
    })
  };

  const onCopyToClipBoard = () => {
    setCopied(true);
    toast({
      title: "Copiado para seu clipboard",
      description: "URL copiada",
    })
    navigator.clipboard.writeText(`http://localhost:3000/visit/${noteId}`)
  }

  return (
         <Dialog>
         <DialogTrigger asChild>
           <Button className="bg-transparent flex w-full justify-end pr-8 pt-4 text-[#3C2A21] dark:text-[#E5E5CB] hover:bg-transparent hover:text-opacity-75">
           <Globe/>
           { changePublish ? <p>Published</p> : <p>Publish</p> }
           </Button>
         </DialogTrigger>
         <DialogContent>
           <DialogHeader>
             <DialogTitle>
              { changePublish ? 
              <p className="flex gap-x-3 items-center">Nota publicada 
                <Globe className="animate-pulse text-sky-400" />
              </p> :
              <p>Deseja publicar esta nota?</p>
              }
             </DialogTitle>
           </DialogHeader>
             <div className="w-full flex gap-x-4 justify-center items-center">
                {changePublish && (
                  <div className="w-full flex flex-col items-center gap-y-5">
                    <div className="flex gap-x-2">
                        <input
                        value={`http://localhost:3000/visit/${noteId }`}
                        type="text" 
                        disabled 
                        className="bg-transparent w-56 hover:bg-transparent text-[#3C2A21] dark:text-[#E5E5CB]" />
                        <Button className="w-12 h-10" onClick={onCopyToClipBoard}>
                          {copied ? <Check className="w-4 h-4"/> : <Clipboard className="w-4 h-4"/>}
                        </Button>
                    </div>
                    <Button onClick={onUnpublish} className="w-30 h-10 self-start">
                      Despublicar
                    </Button>
                  </div>
                  
                )}
                {!changePublish && (  
                  <div className="flex flex-col items-end">
                    <p className="text-muted-foreground">
                      Ao tornar a nota pública você poderá desfazer essa ação a qualquer momento.
                    </p>
                    <Button onClick={onPublish} className="mt-4">
                      Publicar
                    </Button>
                  </div>
                )}
             </div>
         </DialogContent>
       </Dialog>
  )
}