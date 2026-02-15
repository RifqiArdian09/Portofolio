"use client";

import { useLanguage } from "@/context/language-context";
import { Terminal, Github, ExternalLink, Activity } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const GitHubActivity = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 border-t border-primary/20 relative overflow-hidden font-mono">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-primary/30 pb-8">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <Activity className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">{t("github.activityProbe")}</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-black text-zinc-400 uppercase"
                        >
                            {t("github.title")} <span className="text-primary">{t("github.titleHighlight")}</span>
                        </motion.h2>
                    </div>
                    <Link
                        href="https://github.com/RifqiArdian09"
                        target="_blank"
                        className="group flex items-center gap-2 text-primary hover:text-black transition-colors uppercase font-bold text-sm tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-black"
                    >
                        <Github className="w-4 h-4" /> {t("github.viewProfile")}
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Contribution Graph - Takes 8 columns */}
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="terminal-window h-full flex flex-col">
                            <div className="terminal-header">
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-green-500/50 rounded-full"></div>
                                </div>
                                <div className="text-[9px] text-primary/70 font-bold uppercase tracking-[0.2em]">
                                    {t("github.analysisMode")}
                                </div>
                                <Activity className="w-3 h-3 text-primary/40" />
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                                    <span className="text-[10px] text-primary/60 font-mono tracking-tighter uppercase whitespace-nowrap">
                                        target: rifqiardian09.git
                                    </span>
                                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                                </div>

                                <div className="relative w-full overflow-x-auto custom-scrollbar flex-grow flex items-center">
                                    <div className="min-w-[800px] py-10 w-full">
                                        <img
                                            src="https://ghchart.rshah.org/00ff00/RifqiArdian09"
                                            alt="GitHub Contributions"
                                            className="w-full h-auto transition-opacity duration-500"
                                            style={{ minHeight: '130px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex justify-between items-center text-[9px] text-primary/30 uppercase tracking-[0.3em] font-black">
                                    <div className="flex items-center gap-6">
                                        <span className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"></span>
                                            {t("github.uplinkStable")}
                                        </span>
                                        <span>{t("github.secureDataNode")}</span>
                                    </div>
                                    <div className="text-primary/50">
                                        {t("github.contributions")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card - Takes 4 columns */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="terminal-window h-full flex flex-col">
                            <div className="terminal-header">
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
                                </div>
                                <div className="text-[9px] text-primary/70 font-bold uppercase tracking-[0.2em]">
                                    SYSTEM_STATS.EXE
                                </div>
                                <Terminal className="w-3 h-3 text-primary/40" />
                            </div>

                            <div className="p-6 flex-grow flex flex-col gap-6 justify-center">
                                <div className="relative group/stat">
                                    <div className="absolute -inset-1 bg-primary/5 opacity-0 group-hover/stat:opacity-100 transition-opacity blur"></div>
                                    <div className="relative border border-primary/20 p-2 bg-black/40 hover:border-primary/50 transition-colors">
                                        <img
                                            src="https://github-readme-stats-tau-beige.vercel.app/api?username=RifqiArdian09&show_icons=true&theme=matrix&hide_border=true&bg_color=00000000"
                                            alt="GitHub Stats"
                                            className="w-full h-auto transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="relative group/stat">
                                    <div className="absolute -inset-1 bg-primary/5 opacity-0 group-hover/stat:opacity-100 transition-opacity blur"></div>
                                    <div className="relative border border-primary/20 p-2 bg-black/40 hover:border-primary/50 transition-colors">
                                        <img
                                            src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=RifqiArdian09&layout=compact&theme=matrix&hide_border=true&bg_color=00000000"
                                            alt="Top Languages"
                                            className="w-full h-auto transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 255, 0, 0.05);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0, 255, 0, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 255, 0, 0.4);
                }
            `}</style>
        </section>
    );
};

export default GitHubActivity;
