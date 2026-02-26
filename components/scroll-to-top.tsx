"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">

            {/* Scroll to Top */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={scrollToTop}
                        className="pointer-events-auto w-12 h-12 rounded-full bg-card border border-border text-foreground/60 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="Return to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
