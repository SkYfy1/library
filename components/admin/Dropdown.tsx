"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function DropdownMenuComponent({
  value,
  values,
  update,
  //   id,
}: {
  value: string;
  values: string[];
  //   update: (data: string, id: string) => void;
  update: (data: string) => void;
  //   id: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "rounded-3xl text-sm py-1 px-3 h-auto",
            value === values[1]
              ? "bg-green-200 text-green-800"
              : "bg-pink-200 text-pink-700"
          )}
        >
          {value}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 px-2">
        {values.map((data) => (
          <DropdownMenuItem
            className="flex justify-between"
            key={data}
            onClick={() => update(data)}
          >
            <Button
              className={cn(
                "px-3 py-1 rounded-3xl h-auto",
                data === value
                  ? "bg-pink-200 text-pink-700"
                  : "bg-green-200 text-green-800"
              )}
            >
              {data}
            </Button>
            {data === value && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
