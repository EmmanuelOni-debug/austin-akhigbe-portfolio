import { clsx, type ClassValue } from "clsx";

/** Small helper for combining conditional Tailwind classes. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
