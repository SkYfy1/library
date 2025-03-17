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
            value === "ADMIN"
              ? "bg-green-200 text-green-800"
              : "bg-pink-200 text-pink-700"
          )}
        >
          {value}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 px-2">
        {values.map((data) => (
          <DropdownMenuItem key={data} onClick={() => update(data)}>
            <span
              className={cn(
                "px-3 py-1 rounded-3xl",
                data === "ADMIN"
                  ? "bg-green-200 text-green-800"
                  : "bg-pink-200 text-pink-700"
              )}
            >
              {data}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
