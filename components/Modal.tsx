"use client";

import React, { useEffect } from "react";
interface Props {
  children: React.ReactNode;
  close: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const Modal = ({ children, close }: Props) => {
  // UseEffect prevent scrolling then modal window opened!
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="bg-gray-700/80 z-40 w-screen h-screen flex justify-center items-center absolute top-0 left-0"
      onClick={close}
    >
      <div
        className="bg-white z-50 rounded-xl p-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
