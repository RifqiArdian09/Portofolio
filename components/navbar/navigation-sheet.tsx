"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Home, MessageSquareQuote, Award, Terminal } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { id: "beranda", name: "~/home", icon: Home, href: "/#beranda" },
    { id: "projects", name: "./projects", icon: MessageSquareQuote, href: "/#projects" },
    { id: "certificates", name: "./certificates", icon: Award, href: "/#certificates" },
    { id: "contact", name: "./contact", icon: Terminal, href: "/#contact" },
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
        <Button variant="outline" size="icon" className="bg-black border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors rounded-none">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-[300px] border-l border-primary/50 bg-black text-primary font-mono">
        <div className="flex flex-col h-full relative z-10">
          <SheetHeader className="p-6 text-left border-b border-primary/20 bg-primary/5">
            <SheetTitle className="flex items-center gap-2 text-primary font-bold">
              <Terminal className="w-5 h-5" />
              <span>SYSTEM_NAV</span>
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-red-500 hover:text-white rounded-none">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </SheetHeader>

          <div className="flex-1 px-6 py-8">
            <div className="mb-8">
              <div className="text-xs text-primary/50 uppercase tracking-widest mb-4 border-b border-primary/20 pb-2">
                Directory Listing
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <div key={item.id}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => handleScroll(e, item.href)}
                          className={cn(
                            "group flex items-center justify-between p-3 border hover:bg-primary hover:text-black transition-all",
                            isActive
                              ? "bg-primary text-black border-primary"
                              : "bg-transparent border-primary/30 text-primary"
                          )}
                        >
                          <span className="font-bold text-sm">{item.name}</span>
                          {isActive && <span className="animate-pulse">_</span>}
                        </Link>
                      </SheetClose>
                    </div>
                  );
                })}
              </nav>
            </div>

            <div>
              <div className="text-xs text-primary/50 uppercase tracking-widest mb-4 border-b border-primary/20 pb-2">
                System Commands
              </div>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="block text-center p-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm font-bold uppercase mb-2"
              >
                [SEND_MAIL]
              </Link>
            </div>
          </div>

          <div className="p-4 bg-primary/5 border-t border-primary/20 text-[10px] text-primary/50 uppercase text-center">
            Terminal Session Active
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
