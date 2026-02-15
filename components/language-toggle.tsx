"use client";

import { Languages, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LanguageToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-20 h-10 bg-black/50 border border-primary/20 rounded-none animate-pulse"></div>
        );
    }

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className={cn(
                "relative flex items-center gap-2 px-4 py-2 font-mono font-bold transition-all duration-300 overflow-hidden group",
                "bg-black/80 border border-primary/30 text-primary hover:bg-primary hover:text-black hover:border-primary",
                "rounded-none shadow-[0_0_10px_rgba(0,255,0,0.1)]"
            )}
        >
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            {/* Icon with animation */}
            <Globe className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500 relative z-10" />

            {/* Language text */}
            <span className="text-xs uppercase tracking-widest relative z-10">
                {language === "id" ? "ID" : "EN"}
            </span>

            {/* Indicator dots */}
            <div className="flex gap-1 relative z-10">
                <span className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    language === "id" ? "bg-primary shadow-[0_0_4px_rgba(0,255,0,0.8)]" : "bg-primary/30"
                )}></span>
                <span className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    language === "en" ? "bg-primary shadow-[0_0_4px_rgba(0,255,0,0.8)]" : "bg-primary/30"
                )}></span>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>
        </Button>
    );
};

export default LanguageToggle;
