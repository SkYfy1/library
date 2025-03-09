"use client";

import React, { useEffect, useState } from "react";
import EventButton from "./EventButton";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Button
      className="book-overview_btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Click
    </Button>
  );
};

export default Theme;
