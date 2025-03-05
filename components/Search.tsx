"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React from "react";
import { Input } from "./ui/input";

const Search = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const searchParams = new URLSearchParams(params);
    if (term) {
      searchParams.set("query", term);
    } else {
      searchParams.delete("query");
    }

    replace(`${pathname}?${searchParams.toString()}`);
  }, 500);
  return (
    <div className="w-full relative">
      <Input
        className="border-none bg-slate-700 brightness-70 py-6 px-8 text-white text-lg"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={params.get("query")?.toString()}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-light-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default Search;
