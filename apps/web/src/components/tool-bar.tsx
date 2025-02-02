"use client"

import { Smile, X } from "lucide-react"
import { IconPicker } from "./icon-picker"
import { Button } from "./ui/button"
import React, { useRef, useState } from "react"
import TextareaAutosize from "react-textarea-autosize";
import { updateNote } from "@/app/actions/notes/update-note"


interface ToolBarProps {
  title: string,
  visitor?: boolean,
  icon: string,
  id: string,
}

export const Toolbar = ({ title, visitor, icon, id }: ToolBarProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ value, setValue ] = useState(title);
  const [changeIcon, setChangeIcon] = useState(icon);
   
  const enableInput = () => {
    if(visitor) return;

    setIsEditing(true);
    setTimeout(()=> {
      //setValue(title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = async () => {
    setIsEditing(false);

    await updateNote({
      id,
      title: value,
    });
  };

  const onInput = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    /* update({
      id,
      title: value || "Nova nota",
    }); */
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(event.key === "Enter"){
      event.preventDefault();

      disableInput();
    }
  };

  const onIconSelect = async (icon: string) => {
    setChangeIcon(icon);

    console.log("icone adicionado;")

    await updateNote({
      id,
      icon,
    })
  };

  const onRemoveIcon = async () => {
    setChangeIcon("");

    await updateNote({
      id, 
      icon: "",
    })
  }

  return (
    <div className="pl-[54px] w-full h-fit group relative">
      {!!changeIcon  && !visitor && (
        <div className="flex items-center gap-x-2 group group/icon pt-6">
          <IconPicker onChange={onIconSelect}>
            <p className="text-6xl hover:opacity-75 pb-4 tansition">
              {changeIcon}
            </p>
          </IconPicker>
          <Button
          onClick={onRemoveIcon}
          className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs
                    dark:text-[#E5E5CB] bg-[#E5E5CB] border hover:bg-inherit border-[#3C2A21] dark:bg-[#3C2A21] text-[#3C2A21]"
          size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!!changeIcon && visitor && (
        <p className="text-6xl pt-6 pb-3">
          {changeIcon}
        </p>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 p-y-4">
        {!changeIcon && !visitor && (
          <IconPicker asChild onChange={onIconSelect}>
            <Button className="dark:text-[#E5E5CB] bg-[#E5E5CB] border hover:bg-inherit border-[#3C2A21] dark:bg-[#3C2A21] text-[#3C2A21] mt-10 mb-5 text-xs" size="sm">
              <Smile className="w-4 h-4 mr-2"/>
              Adicionar icone
            </Button>
          </IconPicker>
        )}
      </div>
      {isEditing && !visitor ? (
        <TextareaAutosize
        ref={inputRef}
        onBlur={disableInput}
        onKeyDown={onKeyDown}
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className="text-5xl bg-transparent font-bold break-words outline-none text-[#3C2A21] dark:text-[#E5E5CB] resize-none"
        />
      ): (
        <div onClick={enableInput} className="pb-[11.5px] w-[580px] text-5xl font-bold outline-none break-words text-[#3C2A21] dark:text-[#E5E5CB]">  
          {value}
        </div>
      )}
    </div>
  )
}