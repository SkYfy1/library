"use client";

import React, { useEffect, useState } from "react";
import EventButton from "./EventButton";
import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <EventButton
      handler={() => setTheme(theme === "dark" ? "light" : "dark")}
      text="Click"
    />
  );
};

export default Theme;
