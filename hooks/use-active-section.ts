"use client";

import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            // Check if at top
            if (window.scrollY < 100 && window.location.pathname === "/") {
                setActiveSection("beranda");
                return;
            }

            // Check if at bottom
            if (
                window.innerHeight + Math.ceil(window.scrollY) >=
                document.documentElement.scrollHeight - 10
            ) {
                if (sectionIds.length > 0) {
                    setActiveSection(sectionIds[sectionIds.length - 1]);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0,
                // Adjust rootMargin to trigger when section passes the middle of viewport
                rootMargin: "-20% 0px -35% 0px"
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds]);

    return activeSection;
};
