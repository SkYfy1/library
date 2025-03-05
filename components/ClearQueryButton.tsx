"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const ClearQueryButton = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  return (
    <Button
      onClick={() => {
        replace(pathname);
      }}
      className={className}
    >
      {text}
    </Button>
  );
};

export default ClearQueryButton;
