"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface Props {
  text: { title: string; p: string };
  handler: () => Promise<{
    success: boolean;
    message: string;
  }>;
}

const Delete = ({ handler, text }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const changeModalState = () => {
    setShowModal((prev) => !prev);
    // Scroll to top (modal window)
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <button onClick={changeModalState}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-red cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      {showModal && (
        <Modal close={changeModalState}>
          <div className="flex flex-col gap-4 items-center relative">
            <button onClick={changeModalState}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute top-0 right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-red-400 rounded-full size-24 flex justify-center items-center text-white border-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">{text.title}</h1>
            <p className="max-w-[26rem] text-center text-gray-500">{text.p}</p>
            <Button
              onClick={handler}
              className="w-full py-3 h-auto text-white bg-red-400 hover:bg-red-400/90"
            >
              Approve deleting
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Delete;
