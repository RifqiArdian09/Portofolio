"use client";

import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-16 h-8 rounded-full bg-foreground/10 animate-pulse" />;
    }

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center px-1 py-1 rounded-full bg-foreground/[0.06] border border-border hover:border-accent/50 transition-all duration-200 w-16 h-8 overflow-hidden"
            aria-label={`Switch to ${language === "id" ? "English" : "Indonesian"}`}
        >
            {/* Sliding pill */}
            <motion.div
                className="absolute top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground z-10"
                initial={false}
                animate={{ left: language === "id" ? 4 : 36 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
            >
                <Languages className="w-3.5 h-3.5" />
            </motion.div>
            {/* Labels */}
            <span className={`relative z-0 flex-1 text-center text-[10px] font-bold uppercase transition-colors ${language === "id" ? "opacity-0" : "text-foreground/40"}`}>
                ID
            </span>
            <span className={`relative z-0 flex-1 text-center text-[10px] font-bold uppercase transition-colors ${language === "en" ? "opacity-0" : "text-foreground/40"}`}>
                EN
            </span>
        </button>
    );
};

export default LanguageToggle;
