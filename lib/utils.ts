import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export const getReturnDate = (date: string): number => {
  const date1 = new Date(date);
  const date2 = new Date();

  const diffInMs = date1.getTime() - date2.getTime();

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return Math.round(diffInDays);
};
