"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, ChevronDown, ChevronUp, Folder } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const FeaturedProjects = () => {
    const { t } = useLanguage();
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className="py-32 border-t border-foreground/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-accent h-1 w-8"></div>
                            <span className="futuristic-label">[ {t("projects.directory")} ]</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-[0.05em] leading-[0.8] italic">
                            {t("projects.title")}<br />
                            <span className="text-foreground/10 italic">{t("projects.titleHighlight")}</span>
                        </h2>
                    </div>

                    <Link
                        href="https://github.com/RifqiArdian09?tab=repositories"
                        target="_blank"
                        className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-accent transition-colors pb-2 border-b-2 border-transparent hover:border-accent"
                    >
                        <Github className="w-5 h-5" /> {t("projects.viewAllRepos")}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-foreground/10">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group flex flex-col h-full relative border-r border-b border-foreground/10 p-8 md:p-10 hover:bg-foreground/[0.02] transition-colors"
                            >
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1 h-1 bg-accent"></div>
                                    <div className="w-1 h-1 bg-accent/40"></div>
                                    <div className="w-1 h-1 bg-accent/20"></div>
                                </div>

                                <div className="mb-10 text-[10px] font-bold text-foreground/30 tracking-[0.4em] uppercase">
                                    PRJ_0{index + 1} // {project.tech[0]}
                                </div>

                                <div className="relative aspect-[16/10] overflow-hidden mb-10 grayscale group-hover:grayscale-0 transition-all duration-700 border border-foreground/10">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                                </div>

                                <div className="flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-black uppercase tracking-wider leading-none group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-foreground/50 text-sm font-medium mb-10 leading-relaxed tracking-wide line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 italic">
                                                    #{t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-8 border-t border-foreground/5">
                                            <span className="text-[10px] font-black tracking-[0.2em] text-foreground/20 italic">{project.date}</span>
                                            <div className="flex gap-6">
                                                {project.github && (
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        className="text-foreground/40 hover:text-accent transition-colors"
                                                    >
                                                        <Github className="w-5 h-5" />
                                                    </Link>
                                                )}
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="w-10 h-10 border border-foreground/10 flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all"
                                                >
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-24 flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="brutalist-button py-6 px-12"
                    >
                        {showAll ? (
                            <>
                                <span>{t("projects.viewLess")}</span> <ChevronUp className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                <span>{t("projects.viewMore")}</span> <ChevronDown className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
