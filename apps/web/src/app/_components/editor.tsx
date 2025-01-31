"use client";

import { PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useState } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
  id: string,
}

export default function Editor({
  onChange,
  initialContent,
  editable,
  id
}: EditorProps) {

  const initialBlocks = initialContent ? JSON.parse(initialContent) : undefined;
  const [blocks, setBlocks] = useState<PartialBlock[]>(initialBlocks);
  const editor = useCreateBlockNote({ initialContent: blocks });
  const { resolvedTheme } = useTheme();

  return (
    <BlockNoteView
      className="dark:bg-[#1A120B] bg-[#E5E5CB]"
      editable={editable}
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onBlur={() => {
        if(editor.document === blocks) return;
        setBlocks(editor.document);
        onChange(JSON.stringify(blocks));
      }}
    />
  );
}