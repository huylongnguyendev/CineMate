import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setColor(score: number) {
  if (score < 4)
    return "text-red-600"
  if (score < 6)
    return "text-amber-600"
  if (score < 8)
    return "text-yellow-600"
  return "text-green-600"
}
