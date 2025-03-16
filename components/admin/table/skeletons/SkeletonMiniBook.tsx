import React from "react";

const SkeletonMiniBook = () => {
  return (
    <div className="bg-light-600 p-4 rounded-lg shadow flex flex-col gap-1">
      <div className="flex items-center gap-3 text-sm">
        <div className="h-16 w-12 bg-gray-500 animate-pulse rounded-md" />
        <div className="flex flex-col gap-1">
          <div className="w-20 bg-gray-400 h-5 animate-pulse rounded-md"></div>
          <div className="flex gap-2 items-center text-gray-500 w-44 h-5 bg-gray-400 animate-pulse rounded-md"></div>
          <div className="text-gray-500 h-5 bg-gray-400 w-24 animate-pulse rounded-md">
            <div className="flex gap-1 items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMiniBook;
