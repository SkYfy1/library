"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const PermissionButton = () => {
  const getPermission = () => {
    toast("Admin have been notified");
  };
  return (
    <div className="flex gap-8 items-center w-full">
      <h2 className="text-xl text-light-200 underline underline-offset-4">
        You don't have permission to borrow the book
      </h2>
      <Button className="book-overview_btn" onClick={getPermission}>
        <p className="font-bebas-neue text-xl text-dark-100">Get permission</p>
      </Button>
    </div>
  );
};

export default PermissionButton;
