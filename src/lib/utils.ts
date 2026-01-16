
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//used to dynamically and safely manage Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
