"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, MessageCircle, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
            {/* Contact / WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group flex items-center pointer-events-auto"
            >
                <div className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                    <div className="bg-foreground text-background border-2 border-foreground px-4 py-2 shadow-[4px_4px_0px_var(--accent)]">
                        CHAT
                    </div>
                </div>

                <div className="w-16 h-16 bg-accent border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-accent transition-all cursor-pointer shadow-[6px_6px_0px_var(--foreground)] group-active:translate-x-1 group-active:translate-y-1 group-active:shadow-none">
                    <MessageCircle className="w-8 h-8" />
                </div>
            </motion.a>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={scrollToTop}
                        className="group flex items-center pointer-events-auto"
                        aria-label="Return to top"
                    >
                        <div className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                            <div className="bg-background text-foreground border-2 border-foreground px-4 py-2 shadow-[4px_4px_0px_var(--foreground)]">
                                TOP
                            </div>
                        </div>

                        <div className="w-16 h-16 bg-background border-2 border-foreground text-foreground flex items-center justify-center hover:bg-accent hover:text-black transition-all cursor-pointer shadow-[6px_6px_0px_var(--foreground)] group-active:translate-x-1 group-active:translate-y-1 group-active:shadow-none">
                            <ArrowUp className="w-8 h-8 font-black" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
