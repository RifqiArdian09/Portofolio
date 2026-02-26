"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8 rounded-full bg-foreground/10 animate-pulse" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center px-1 py-1 rounded-full bg-foreground/[0.06] border border-border hover:border-accent/50 transition-all duration-200 w-16 h-8"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sliding pill */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground z-10"
        initial={false}
        animate={{ left: resolvedTheme === "dark" ? 4 : 36 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        {resolvedTheme === "dark" ? <MoonIcon className="w-3.5 h-3.5" /> : <SunIcon className="w-3.5 h-3.5" />}
      </motion.div>

      {/* Target Icons (Indicating what mode you'll switch to or just status) */}
      <div className="relative z-0 flex w-full h-full justify-between items-center px-2">
        <MoonIcon className={`w-3.5 h-3.5 transition-colors ${resolvedTheme === "light" ? "text-foreground/40" : "opacity-0"}`} />
        <SunIcon className={`w-3.5 h-3.5 transition-colors ${resolvedTheme === "dark" ? "text-foreground/40" : "opacity-0"}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
