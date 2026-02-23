"use client";

import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const LanguageToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-24 h-10 border-2 border-foreground bg-background/50 animate-pulse"></div>
        );
    }

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <button
            onClick={toggleLanguage}
            className="group relative flex items-center justify-between px-3 py-2 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-200 overflow-hidden min-w-24"
        >
            <div className="flex items-center gap-1 w-full relative z-10">
                <span className={cn(
                    "flex-1 text-[10px] font-black uppercase tracking-widest text-center transition-colors",
                    language === "id" ? "text-accent bg-foreground px-1" : "text-foreground group-hover:text-background"
                )}>
                    ID
                </span>
                <span className="text-[8px] opacity-30 font-mono">/</span>
                <span className={cn(
                    "flex-1 text-[10px] font-black uppercase tracking-widest text-center transition-colors",
                    language === "en" ? "text-accent bg-foreground px-1" : "text-foreground group-hover:text-background"
                )}>
                    EN
                </span>
            </div>

            {/* Selection Bar */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-accent"
                initial={false}
                animate={{
                    left: language === "id" ? "0%" : "50%",
                    width: "50%"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            <div className="absolute top-0 right-0 p-[2px] opacity-20 pointer-events-none">
                <div className="w-1 h-1 bg-foreground"></div>
            </div>
        </button>
    );
};

export default LanguageToggle;
