"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const EventButton = ({
  handler,
  text,
}: {
  handler: () => void;
  text: string;
}) => {
  return (
    <Button
      className="book-overview_btn font-bebas-neue text-xl"
      onClick={handler}
    >
      {text}
    </Button>
  );
};

export default EventButton;
