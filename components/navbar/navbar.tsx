"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationSheet } from "./navigation-sheet";
import { Home, FolderDot, Award, Mail, Github } from "lucide-react";
import LanguageToggle from "../language-toggle";
import ThemeToggle from "../theme-toggle";
import { useLanguage } from "@/context/language-context";
import { motion } from "motion/react";
import { personalInfo } from "@/lib/data";

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
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-50 top-5 inset-x-0 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full bg-card/90 dark:bg-card/80 backdrop-blur-xl border border-border shadow-xl shadow-black/5 dark:shadow-black/40">
        {/* Avatar + Status */}
        <Link
          href="/#beranda"
          onClick={handleScrollToTop}
          className="flex items-center px-2 group"
        >
          <span className="font-antonio text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300">
            Rifqi<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavPillLinks />
          <div className="w-px h-6 bg-border mx-1" />
        </div>

        <ThemeToggle />
        <div className="w-px h-6 bg-border mx-1" />
        <LanguageToggle />

        {/* Mobile Menu - Far Right */}
        <div className="md:hidden flex items-center">
          <div className="w-px h-6 bg-border mx-1" />
          <NavigationSheet />
        </div>
      </div>
    </motion.nav>
  );
};

const NavPillLinks = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: t("nav.home"), href: "/#beranda", icon: Home },
    { id: "projects", name: t("nav.projects"), href: "/#projects", icon: FolderDot },
    { id: "certificates", name: t("nav.certificates"), href: "/#certificates", icon: Award },
    { id: "contact", name: t("nav.contact"), href: "/#contact", icon: Mail },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element && pathname === "/") {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06] transition-all duration-200"
        >
          <item.icon className="w-3.5 h-3.5" />
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
