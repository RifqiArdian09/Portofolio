"use client";

import { useLanguage } from "@/context/language-context";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const GitHubActivity = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="section-label">GitHub Activity</span>
                </div>
                <Link
                    href="https://github.com/RifqiArdian09"
                    target="_blank"
                    className="group flex items-center gap-2 text-xs font-semibold text-foreground/50 hover:text-accent transition-colors"
                >
                    <Github className="w-4 h-4" />
                    <span className="border-b border-transparent group-hover:border-accent">
                        {t("github.openProfile") || "View Profile"}
                    </span>
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="portavia-card p-6"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">GitHub Stats</span>
                    </div>
                    <img
                        src="https://github-readme-stats-tau-beige.vercel.app/api?username=RifqiArdian09&show_icons=true&theme=transparent&hide_border=true&title_color=c5ff4a&text_color=f0f0ec&icon_color=c5ff4a&bg_color=00000000"
                        alt="GitHub Stats"
                        className="w-full h-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="portavia-card p-6"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">Top Languages</span>
                    </div>
                    <img
                        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=RifqiArdian09&layout=compact&theme=transparent&hide_border=true&title_color=c5ff4a&text_color=f0f0ec&bg_color=00000000"
                        alt="Top Languages"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>

            {/* Footer note */}
            <div className="mt-6 flex items-center justify-between text-foreground/20 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full border border-foreground/20" />
                    <span>{t("github.uplinkStable") || "Data synced via GitHub API"}</span>
                </div>
                <span className="hidden sm:block">API v3</span>
            </div>
        </div>
    );
};

export default GitHubActivity;
