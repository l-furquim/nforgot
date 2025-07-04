"use client";

import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { File, Plus } from "lucide-react";
import { type Note } from "@/app/actions/notes/get-notes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createNote } from "@/app/actions/notes/create-note";
import { DeleteNote } from "./delete-note";

interface NotesContainerProps {
  fetchNotes: Note[];
}

export const NotesContainer: React.FC<NotesContainerProps> = ({ fetchNotes }) => {
  const pathName = usePathname();
  const [currentId, setCurrentId] = useState("");

  const privateNotes = fetchNotes.filter((note) => note.type === "PRIVATE");
  const publicNotes = fetchNotes.filter((note) => note.type === "PUBLIC");

  async function createPublicNote() {
    const newId = crypto.randomUUID();
    const newNote: Note = {
      content: "",
      id: newId,
      title: "Nova nota",
      icon: "",
      type: "PUBLIC",
    };

    await createNote(newNote);
    location.replace("/home/" + newId);
  }

  async function createPrivateNote() {
    const newId = crypto.randomUUID();
    const newNote: Note = {
      content: "",
      id: newId,
      title: "Nova nota",
      icon: "",
      type: "PRIVATE",
    };

    await createNote(newNote);
    location.replace("/home/" + newId);
  }

  useEffect(() => {
    const id = pathName.replace("/home/", "");
    if (id.length > 0) {
      setCurrentId(id);
    }
  }, [pathName]);

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Privado</SidebarGroupLabel>
        <SidebarGroupAction asChild>
          <div className="hover:cursor-pointer" onClick={() => createPrivateNote()}>
            <Plus />
          </div>
        </SidebarGroupAction>
        <SidebarGroupContent>
          <SidebarMenu>
            {privateNotes.length > 0 &&
              privateNotes.map((note) => (
                <SidebarMenuItem key={note.id}>
                  <SidebarMenuButton
                    asChild
                    className={`${note.id === currentId &&  
                    "bg-[#3C2A21] text-[#E5E5CB] hover:bg-[#563c2f] hover:text-[#E5E5CB]"}`}
                  >
                    <a href={`/home/${note.id}`}>
                      <span className="flex w-44 gap-x-1 truncate">
                        {note.icon === "" ? <File className="w-4 h-4" /> : note.icon}
                        {note.title}
                      </span>
                      <span onClick={(e) => { e.stopPropagation(); e.preventDefault() }}>
                        <DeleteNote noteId={note.id}/>
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Público</SidebarGroupLabel>
        <SidebarGroupAction asChild>
          <div className="hover:cursor-pointer" onClick={() => createPublicNote()}>
            <Plus />
          </div>
        </SidebarGroupAction>
        <SidebarGroupContent>
          <SidebarMenu>
            {publicNotes.length > 0 &&
              publicNotes.map((note) => (
                <SidebarMenuItem key={note.id} className="group">
                  <SidebarMenuButton
                    asChild
                    className={`${note.id === currentId &&  
                      "bg-[#3C2A21] text-[#E5E5CB] hover:bg-[#563c2f] hover:text-[#E5E5CB]"}`}
                  >
                    <a href={`/home/${note.id}`}>
                      <span className="flex w-44 gap-x-1 truncate">
                        {note.icon === "" ? <File className="w-4 h-4" /> : note.icon}
                        {note.title}
                      </span>
                      <span onClick={(e) => { e.stopPropagation(); e.preventDefault() }}>
                        <DeleteNote noteId={note.id}/>
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};
