"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import LanguageToggle from "../language-toggle";
import { useLanguage } from "@/context/language-context";

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
    <nav className="fixed z-50 top-0 inset-x-0 h-16 bg-black/80 backdrop-blur-lg border-b border-primary/20">
      {/* HUD Beam Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <Link
            href="/#beranda"
            onClick={handleScrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="flex flex-col font-mono relative">
              <span className="font-black text-xl tracking-tighter block text-white leading-tight">
                <span className="text-primary mr-1 animate-pulse">{">"}</span>
                RIFQI<span className="text-primary group-hover:text-white transition-colors">_ARDIAN</span>
              </span>
              <div className="absolute -bottom-1 left-4 right-0 h-[1px] bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 border border-primary/10 bg-primary/5 rounded-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black text-primary/60 uppercase tracking-widest">{t("nav.systemOnline")}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          {/* HUD Indicators */}
          <div className="hidden sm:flex items-center gap-6 text-[8px] font-bold text-primary/30 uppercase tracking-[0.2em] mr-4 border-r border-primary/10 pr-6">
            <span className="hover:text-primary transition-colors cursor-default">{t("nav.loc")}: BGL</span>
            <span className="hover:text-primary transition-colors cursor-default">{t("nav.net")}</span>
          </div>

          <LanguageToggle />

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
