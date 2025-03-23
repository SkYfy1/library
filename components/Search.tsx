"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";

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
        className="border-none bg-slate-700/20 brightness-70 py-6 px-8 text-white text-lg"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={params.get("query")?.toString()}
      />
      <Image
        src="/icons/admin/search.svg"
        width={16}
        height={16}
        className="absolute left-2 top-1/2 -translate-y-1/2"
        loading="lazy"
        alt="search"
      />
    </div>
  );
};

export default Search;
