"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Home, MessageSquareQuote, Award, Terminal, Cpu } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: t("nav.home"), icon: Home, href: "/#beranda" },
    { id: "projects", name: t("nav.projects"), icon: MessageSquareQuote, href: "/#projects" },
    { id: "certificates", name: t("nav.certificates"), icon: Award, href: "/#certificates" },
    { id: "contact", name: t("nav.contact"), icon: Terminal, href: "/#contact" },
  ];

  const activeSection = useActiveSection(navItems.map((item) => item.id));

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
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-0 bg-black/80 border border-primary/30 p-0 rounded-none backdrop-blur-md shadow-[0_0_20px_rgba(0,255,0,0.1)] relative overflow-hidden">
        {/* Scanline effect on container */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>

        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "relative px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group overflow-hidden",
                    "border-r border-primary/20 last:border-r-0",
                    isActive
                      ? "bg-primary text-black shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
                      : "text-primary/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {/* Animated background on hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700",
                    isActive && "hidden"
                  )}></div>

                  {/* Icon with animation */}
                  <Icon className={cn(
                    "w-3.5 h-3.5 transition-all duration-300 relative z-10",
                    isActive ? "scale-110 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]" : "group-hover:scale-110 group-hover:rotate-12"
                  )} />

                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator - top line */}
                  {isActive && (
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-black/30"></span>
                  )}

                  {/* Active indicator - bottom line with animation */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black/30 animate-pulse"></span>
                  )}

                  {/* Hover indicator */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                  )}

                  {/* Corner accent for active state */}
                  {isActive && (
                    <>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black/40"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black/40"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black/40"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black/40"></span>
                    </>
                  )}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}

      </NavigationMenuList>
    </NavigationMenu>
  );
};
