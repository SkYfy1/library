"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        <Image
          src="/icons/admin/trash.svg"
          width={32}
          height={32}
          loading="lazy"
          alt="trash"
        />
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
