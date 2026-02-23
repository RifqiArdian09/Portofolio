"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import LanguageToggle from "../language-toggle";
import { useLanguage } from "@/context/language-context";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("beranda");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed z-50 top-0 inset-x-0 h-24 bg-background/80 backdrop-blur-xl border-b border-foreground/5">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-12">
        <Link
          href="/#beranda"
          onClick={handleScrollToTop}
          className="flex items-center gap-3 group"
        >
          <span className="font-black text-2xl lowercase tracking-[0.1em] italic text-foreground group-hover:text-accent transition-all duration-300">
            rifqi<span className="text-accent">ardian</span>.
          </span>
        </Link>

        <div className="flex items-center gap-12 h-full">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full">
            <NavMenu />
          </div>

          <div className="flex items-center gap-8 pl-8 border-l border-foreground/10">
            <LanguageToggle />
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
