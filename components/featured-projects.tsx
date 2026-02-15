"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, Terminal, Folder, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const FeaturedProjects = () => {
    const { t } = useLanguage();
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);
    const [loadingProjectId, setLoadingProjectId] = useState<string | null>(null);

    const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
        e.preventDefault();
        setLoadingProjectId(projectId);

        // Navigation delay to show the "hacker" loading animation
        setTimeout(() => {
            router.push(`/projects/${projectId}`);
        }, 1200);
    };

    const displayedProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className="py-24 border-t border-primary/20 relative overflow-hidden font-mono">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-primary/30 pb-8">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <Terminal className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">{t("projects.directory")}</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-black text-white/90"
                        >
                            {t("projects.title")} <span className="text-primary">{t("projects.titleHighlight")}</span>
                        </motion.h2>
                    </div>
                    <Link
                        href="https://github.com/RifqiArdian09?tab=repositories"
                        target="_blank"
                        className="group flex items-center gap-2 text-primary hover:text-black transition-colors uppercase font-bold text-sm tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-black"
                    >
                        <Github className="w-4 h-4" /> {t("projects.viewAllRepos")}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group terminal-window flex flex-col h-full hover:border-primary transition-all duration-300"
                            >
                                {/* Terminal Header */}
                                <div className="terminal-header">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="text-[9px] text-primary/70 font-bold uppercase tracking-widest truncate max-w-[150px]">
                                        {project.title.replace(/\s+/g, '_').toLowerCase()}.sys
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 border border-primary/30"></div>
                                        <div className="w-2 h-2 bg-primary/20"></div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto transition-all duration-500"
                                    />

                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <div className="text-[8px] bg-black/80 text-primary border border-primary/30 px-1 py-0.5 font-bold">{t("projects.locked")}</div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col relative">
                                    {/* Corners Decoration */}
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors"></div>

                                    <h3 className="text-xl font-bold text-zinc-400 mb-3 group-hover:text-primary transition-colors uppercase tracking-tight flex items-center gap-2">
                                        <span className="text-primary/50">#</span> {project.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-6 leading-relaxed font-sans line-clamp-3 italic">
                                        "{project.description}"
                                    </p>

                                    <div className="mt-auto space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] font-bold text-primary/60 bg-primary/5 border border-primary/10 px-2 py-0.5 uppercase tracking-tighter">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                onClick={(e: React.MouseEvent) => handleProjectClick(project.id, e)}
                                                className="flex-1 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/30 py-2.5 hover:bg-primary hover:text-black transition-all group/btn"
                                            >
                                                <span>{t("projects.executeProject")}</span>
                                                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="w-12 flex items-center justify-center border border-primary/30 text-primary/50 hover:border-primary hover:text-primary transition-all"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Loading Overlay */}
                                    <AnimatePresence>
                                        {loadingProjectId === project.id && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6 border border-primary shadow-[0_0_50px_rgba(0,255,0,0.2)]"
                                            >
                                                <div className="relative w-20 h-20 mb-6">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 border-2 border-primary/10 border-t-primary rounded-full shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                                                    />
                                                    <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-4 border-2 border-primary/20 border-b-primary rounded-full"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Terminal className="w-8 h-8 text-primary" />
                                                    </div>
                                                </div>
                                                <div className="text-center space-y-2">
                                                    <div className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">
                                                        {t("projects.initializingAccess")}
                                                    </div>
                                                    <div className="flex gap-1 justify-center">
                                                        {[0, 1, 2].map((i) => (
                                                            <motion.div
                                                                key={i}
                                                                animate={{ opacity: [0, 1, 0] }}
                                                                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                                                                className="w-1.5 h-1.5 bg-primary rounded-full"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Decorative background numbers */}
                                                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden text-[8px] leading-none text-primary break-all font-mono">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <div key={i} className="whitespace-nowrap">
                                                            {Math.random().toString(16).repeat(10)}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View More Button */}
                <div className="mt-20 flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group relative px-10 py-4 bg-primary text-black font-black uppercase tracking-[0.2em] text-sm overflow-hidden flex items-center gap-3 transition-transform active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {showAll ? (
                                <>
                                    {t("projects.viewLess")} <ChevronUp className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    {t("projects.viewMore")} <ChevronDown className="w-5 h-5" />
                                </>
                            )}
                        </span>
                        {/* Glitch Animated Backgrounds */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
