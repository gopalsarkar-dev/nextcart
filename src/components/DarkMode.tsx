"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex cursor-pointer items-center justify-center"
      >
        <MoonStar className="scale-0 dark:scale-100" />
        <Sun className="absolute scale-100 dark:scale-0" />
      </button>
    </>
  );
};

export default DarkMode;
