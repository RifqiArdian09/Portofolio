"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Home, Folder, Award, Mail } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { motion } from "motion/react";

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: t("nav.home"), icon: Home, href: "/#beranda" },
    { id: "projects", name: t("nav.projects"), icon: Folder, href: "/#projects" },
    { id: "certificates", name: t("nav.certificates"), icon: Award, href: "/#certificates" },
    { id: "contact", name: t("nav.contact"), icon: Mail, href: "/#contact" },
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
      <NavigationMenuList className="gap-0 p-0 border-2 border-foreground bg-background">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <NavigationMenuItem key={item.id} className="relative overflow-hidden">
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "relative px-6 py-3 text-xs font-black uppercase tracking-[0.1em] transition-all duration-200 flex items-center gap-3 group border-r-2 border-foreground last:border-r-0",
                    isActive
                      ? "bg-accent text-black"
                      : "text-foreground hover:bg-foreground hover:text-background"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isActive ? "scale-110 rotate-12" : "group-hover:scale-110"
                  )} />
                  <span className="hidden md:inline">{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-foreground"
                    />
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
