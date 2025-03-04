import { cn } from "@/lib/utils";
import React from "react";

const BookCardSkeleton = () => {
  return (
    <div className="w-[174px] h-[311px]">
      <div className="w-full bg-light-100 h-[238px] rounded-sm"></div>
      <div className={cn("mt-4")}>
        <p className="book-title bg-light-100 h-[28px] rounded-sm"></p>
        <p className="book-genre bg-light-100 h-[24px] rounded-sm"></p>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
