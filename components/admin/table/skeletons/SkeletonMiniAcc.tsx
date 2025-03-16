import React from "react";

const SkeletonMiniAcc = () => {
  return (
    <div className="bg-light-600 rounded-md size-44 p-3 flex flex-col gap-2 justify-center">
      <div className="self-center mb-3 rounded-full size-12  bg-gray-400 animate-pulse" />
      <div className="w-36 h-5 bg-gray-300 animate-pulse"></div>

      <div className="w-36 h-5  bg-gray-300 animate-pulse"></div>
    </div>
  );
};

export default SkeletonMiniAcc;
