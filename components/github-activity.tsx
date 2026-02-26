"use client";

import { useLanguage } from "@/context/language-context";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const GitHubActivity = () => {
    const { t } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";
    const textColor = isDark ? "f0f0ec" : "111111";
    const titleColor = isDark ? "c5ff4a" : "7fb900"; // Use darker green for light mode readability
    const iconColor = isDark ? "c5ff4a" : "7fb900";

    if (!mounted) return null;

    return (
        <section id="github" className="py-16 overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8">
                <div>
                    <p className="section-label mb-3">Activity Log</p>
                    <h2 className="font-antonio text-4xl md:text-6xl font-bold uppercase text-foreground leading-tight">
                        {t("github.title") || "Commit"}
                        <br />
                        <span className="text-foreground/20">{t("github.titleHighlight") || "Activity"}</span>
                    </h2>
                </div>

                <Link
                    href="https://github.com/RifqiArdian09"
                    target="_blank"
                    className="pill-button-outline text-xs font-semibold shrink-0"
                >
                    <Github className="w-4 h-4" />
                    {t("github.viewProfile") || "View Full Profile"}
                </Link>
            </div>

            <div className="space-y-6">
                {/* Contribution Calendar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="portavia-card p-6 md:p-7 overflow-hidden relative group"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Live Contribution Grid</span>
                        </div>
                        <span className="text-[10px] font-mono text-foreground/20">UPLINK_STABLE</span>
                    </div>

                    <div className="relative w-full overflow-x-auto pb-4 custom-scrollbar">
                        <div className="min-w-[800px]">
                            <img
                                src="https://github-readme-stats-tau-beige.vercel.app/api/pin/?username=RifqiArdian09&repo=Portfolio&theme=transparent&title_color=c5ff4a&text_color=f0f0ec&icon_color=c5ff4a&bg_color=00000000&hide_border=true"
                                alt="Featured Repo"
                                className="hidden" /* Simplified for now, focusing on the calendar */
                            />
                            {/* GitHub Contribution Calendar via an SVG generator */}
                            <img
                                src={`https://ghchart.rshah.org/${isDark ? "c5ff4a" : "7fb900"}/RifqiArdian09`}
                                alt="RifqiArdian09's GitHub Contributions"
                                className="w-full h-auto brightness-110 contrast-125 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap gap-x-10 gap-y-4">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-bold">Status</span>
                            <span className="text-xs font-bold text-accent uppercase">Active Contributor</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-bold">Node</span>
                            <span className="text-xs font-bold text-foreground/70 uppercase">GitHub/RifqiArdian09</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-bold">Protocol</span>
                            <span className="text-xs font-bold text-foreground/70 uppercase">Secure HTTPS v3</span>
                        </div>
                    </div>
                </motion.div>

                {/* Second Row: Stats & Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="portavia-card p-6 group hover:border-accent/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Performance Metrics</span>
                        </div>
                        <img
                            src={`https://github-readme-stats-tau-beige.vercel.app/api?username=RifqiArdian09&show_icons=true&theme=transparent&hide_border=true&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&bg_color=00000000`}
                            alt="GitHub Stats"
                            className="w-full h-auto scale-95 origin-left"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="portavia-card p-6 group hover:border-accent/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Language Distribution</span>
                        </div>
                        <img
                            src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=RifqiArdian09&layout=compact&theme=transparent&hide_border=true&title_color=${titleColor}&text_color=${textColor}&bg_color=00000000`}
                            alt="Top Languages"
                            className="w-full h-auto scale-95 origin-left"
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default GitHubActivity;
