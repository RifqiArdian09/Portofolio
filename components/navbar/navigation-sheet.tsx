"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Home, Folder, Award, Mail, Cpu, X } from "lucide-react";
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
    { id: "projects", name: t("nav.projects"), icon: Folder, href: "/#projects" },
    { id: "github", name: t("nav.github"), icon: Cpu, href: "/#github" },
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
        <button className="p-3 border-2 border-foreground bg-background hover:bg-accent hover:text-black transition-all">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full md:w-[400px] border-l-4 border-foreground bg-background text-foreground shadow-none">
        <SheetHeader className="p-10 text-left border-b-4 border-foreground bg-accent/10 relative">
          <SheetTitle className="text-4xl font-black uppercase tracking-tighter leading-none flex items-center justify-between">
            <div>
              RIFQI<br />
              <span className="text-foreground/30 italic">ARDIAN</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full bg-background">
          <div className="flex-1 p-10">
            <nav className="flex flex-col gap-0 border-2 border-foreground">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <SheetClose asChild key={item.id}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={cn(
                        "group flex items-center gap-4 p-6 transition-all duration-200 border-b-2 border-foreground last:border-b-0",
                        isActive
                          ? "bg-accent text-black"
                          : "hover:bg-foreground hover:text-background"
                      )}
                    >
                      <Icon className={cn("w-6 h-6", isActive ? "rotate-12" : "group-hover:-rotate-12 transition-transform")} />
                      <span className="font-black text-2xl uppercase tracking-tighter">
                        {item.name}
                      </span>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>

          <div className="p-10 border-t-4 border-foreground font-mono text-[10px] uppercase font-black tracking-[0.4em] flex justify-between items-center mt-auto">
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
