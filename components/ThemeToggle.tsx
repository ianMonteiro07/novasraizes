"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-10 h-5 md:w-14 md:h-7 rounded-full border-2 border-nr-dark dark:border-nr-cream bg-nr-cream dark:bg-nr-dark transition-colors duration-300 focus:outline-none shadow-[2px_2px_0px_#1A1A1A] dark:shadow-[2px_2px_0px_#F4ECD8]"
      aria-label="Trocar Tema"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute w-3 h-3 md:w-5 md:h-5 rounded-full border-2 border-nr-dark dark:border-nr-cream shadow-sm ${
          isDark 
            ? "left-[calc(100%-1.1rem)] md:left-[calc(100%-1.4rem)] bg-nr-purple" 
            : "left-[2px] md:left-1 bg-nr-orange"
        }`}
      />
    </button>
  );
}