"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const EventButton = ({ text }: { text: string }) => {
  return (
    <Button
      className="book-overview_btn font-bebas-neue text-xl"
      onClick={() => toast("Click")}
    >
      {text}
    </Button>
  );
};

export default EventButton;
