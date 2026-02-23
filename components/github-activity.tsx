"use client";

import { useLanguage } from "@/context/language-context";
import { Github, Activity, Database } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const GitHubActivity = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col overflow-hidden relative group">
            <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-12 py-4 border-b border-foreground/5">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-1 bg-accent animate-pulse"></div>
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground/40 italic">System_Insights // GitHub_Uplink</span>
                    </div>
                    <Link
                        href="https://github.com/RifqiArdian09"
                        target="_blank"
                        className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-colors"
                    >
                        <Github className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <span className="border-b border-transparent group-hover:border-accent">{t("github.openProfile") || "Open_Profile"}</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative p-8 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.03] transition-colors group/card">
                        <div className="absolute top-0 right-0 p-2 text-[8px] font-black text-foreground/10 tracking-[0.2em]">01_METRICS</div>
                        <div className="mb-6 h-px w-12 bg-accent/30 group-hover/card:w-full transition-all duration-700"></div>
                        <img
                            src="https://github-readme-stats-tau-beige.vercel.app/api?username=RifqiArdian09&show_icons=true&theme=dracula&hide_border=true&title_color=ff003c&text_color=ffffff&icon_color=ff003c&bg_color=00000000"
                            alt="GitHub Stats"
                            className="w-full h-auto grayscale group-hover/card:grayscale-0 transition-all duration-1000 opacity-60 group-hover/card:opacity-100"
                        />
                    </div>

                    <div className="relative p-8 border border-foreground/5 bg-foreground/[0.02] hover:bg-foreground/[0.03] transition-colors group/card">
                        <div className="absolute top-0 right-0 p-2 text-[8px] font-black text-foreground/10 tracking-[0.2em]">02_STACK</div>
                        <div className="mb-6 h-px w-12 bg-accent/30 group-hover/card:w-full transition-all duration-700"></div>
                        <img
                            src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=RifqiArdian09&layout=compact&theme=dracula&hide_border=true&title_color=ff003c&text_color=ffffff&bg_color=00000000"
                            alt="Top Languages"
                            className="w-full h-auto grayscale group-hover/card:grayscale-0 transition-all duration-1000 opacity-60 group-hover/card:opacity-100"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-foreground/5 relative z-10">
                <div className="text-[9px] font-black uppercase tracking-[0.5em] flex items-center justify-between opacity-20 italic">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 border border-foreground/50"></div>
                        <span>{t("github.uplinkStable")}</span>
                    </div>
                    <span className="hidden sm:block">DATA_STREAM_AUTH_X09 // API_V3</span>
                </div>
            </div>
        </div>
    );
};

export default GitHubActivity;
