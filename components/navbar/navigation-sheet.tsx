"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Home, FolderDot, Award, Mail, X } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: t("nav.home"), icon: Home, href: "/#beranda" },
    { id: "projects", name: t("nav.projects"), icon: FolderDot, href: "/#projects" },
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
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-200">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" hideClose className="p-0 w-full sm:w-[380px] border-l border-border bg-background text-foreground">
        <SheetHeader className="p-8 border-b border-border relative">
          <SheetTitle className="text-left">
            <span className="font-antonio text-3xl font-bold uppercase text-foreground">
              Rifqi<span className="text-accent">Ardian</span>
            </span>
          </SheetTitle>
          <SheetClose className="absolute top-6 right-6 p-2 rounded-full border border-border hover:border-accent text-foreground/50 hover:text-accent transition-all">
            <X className="w-5 h-5" />
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <nav className="flex flex-col gap-1 p-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <SheetClose asChild key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={cn(
                      "group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 text-base font-semibold",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/[0.05]"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
