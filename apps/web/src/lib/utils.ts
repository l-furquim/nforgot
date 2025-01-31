import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeOfDay(): { period: string; message: string } {
  const hours = new Date().getHours();

  if (hours >= 5 && hours < 12) {
    return { period: "manhã", message: "Bom dia" };
  } else if (hours >= 12 && hours < 18) {
    return { period: "tarde", message: "Boa tarde" };
  } else {
    return { period: "noite", message: "Boa noite" };
  }
}
