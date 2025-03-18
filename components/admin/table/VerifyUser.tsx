"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  userApprove: () => Promise<
    | {
        success: boolean;
        message: string;
      }
    | undefined
  >;
  userReject: () => Promise<
    | {
        success: boolean;
        message: string;
      }
    | undefined
  >;
}

const VerifyUser = ({ userApprove, userReject }: Props) => {
  const [confirm, setConfirm] = useState<null | "Approve" | "Reject">(null);
  const openApproveModal = () => {
    setConfirm("Approve");
  };

  const openRejectModal = () => {
    setConfirm("Reject");
  };

  const closeModal = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setConfirm(null);
  };

  const handleSubmit = async () => {
    const result =
      confirm === "Approve" ? await userApprove() : await userReject();

    if (result?.success) {
      toast("Success", {
        description: result?.message,
        action: {
          label: "x",
          onClick: () => console.log("oooo"),
        },
      });
    } else {
      toast("Error", {
        description: result?.message,
        action: {
          label: "x",
          onClick: () => console.log("oooo"),
        },
      });
    }
  };
  return (
    <>
      <Button
        className="text-green-800 bg-green-600/20"
        onClick={openApproveModal}
      >
        Approve Account
      </Button>
      <button onClick={openRejectModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-red cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      {confirm && (
        <Modal close={closeModal}>
          <div className="flex flex-col gap-4 items-center relative">
            <button onClick={closeModal}>
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
            <div
              className={cn(
                "bg-green-750 rounded-full size-24 flex justify-center items-center text-white border-[12px]",
                confirm === "Approve" ? "bg-green-750" : "bg-red-400"
              )}
            >
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
            <h1 className="text-2xl font-semibold">
              {confirm === "Approve" ? confirm : "Deny"} Account Request
            </h1>
            <p className="max-w-[26rem] text-center text-gray-500">
              {confirm === "Approve"
                ? "Approve the student’s account request and grant access. A confirmation email will be sent upon approval."
                : "Denying this request will notify the student they’re not eligible due to unsuccessful ID card verification."}
            </p>
            <Button
              onClick={handleSubmit}
              className={cn(
                "w-full py-3 h-auto text-white",
                confirm === "Approve" ? "bg-green-750" : "bg-red-400"
              )}
            >
              {confirm === "Approve"
                ? "Approve & Send Confirmation"
                : "Deny & Notify Student"}
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default VerifyUser;
