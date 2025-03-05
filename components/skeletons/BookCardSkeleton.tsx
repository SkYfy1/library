"use client";

import { cn } from "@/lib/utils";
import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const BookCardSkeleton = () => {
  return (
    <div className="w-[174px] h-[311px]">
      <div className="w-full bg-light-500 h-[238px] rounded-sm animate-pulse"></div>
      <div className={cn("mt-4")}>
        <p className="book-title bg-light-100 h-[28px] rounded-sm animate-pulse"></p>
        <p className="book-genre bg-light-100 h-[24px] rounded-sm animate-pulse"></p>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
