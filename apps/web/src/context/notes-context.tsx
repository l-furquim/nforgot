"use client";
import { createContext, useContext, useState } from "react";
import { type Note } from "@/app/actions/notes/get-notes";

interface NotesContextType {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes deve ser usado dentro de um NotesProvider");
  }
  return context;
};
