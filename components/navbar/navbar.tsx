"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import LanguageToggle from "../language-toggle";

const Navbar = () => {
  const pathname = usePathname();

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
    <nav className="fixed z-50 top-0 inset-x-0 h-16 bg-black border-b border-primary/30">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/#beranda"
            onClick={handleScrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="flex flex-col font-mono">
              <span className="font-bold text-lg sm:text-xl tracking-tighter block text-white leading-tight">
                <span className="text-primary mr-1">{">"}</span>
                RIFQI<span className="text-primary group-hover:text-white transition-colors">_ARDIAN</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle */}
          <LanguageToggle />

          {/* Mobile Menu */}
          <div className="md:hidden ">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
