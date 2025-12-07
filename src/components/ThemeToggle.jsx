import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    const apply = (dark) => {
      document.documentElement.classList.toggle("dark", dark);

      setIsDarkMode((prev) => (prev !== dark ? dark : prev));
    };

    if (stored === "dark") apply(true);
    else if (stored === "light") apply(false);
    else apply(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    setIsDarkMode(next);
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full")}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
