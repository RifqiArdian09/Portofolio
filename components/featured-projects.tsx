"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Terminal, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const FeaturedProjects = () => {
    const { t } = useLanguage();
    const [showAll, setShowAll] = useState(false);

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
                        href="https://github.com/RifqiArdian09"
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
                                className="group relative border border-primary/30 bg-black/50 hover:bg-black/80 hover:border-primary transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Terminal Header for Card */}
                                <div className="h-8 bg-primary/10 border-b border-primary/30 flex items-center px-4 justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="text-[10px] text-primary/60 uppercase tracking-wider">{project.title.replace(/\s+/g, '_').toLowerCase()}.exe</div>
                                </div>

                                <div className="relative aspect-video overflow-hidden border-b border-primary/20 group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>

                                    <div className="absolute bottom-4 right-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <Link href={`/projects/${project.id}`} className="bg-black border border-primary text-primary hover:bg-primary hover:text-black p-2 transition-colors">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.github} target="_blank" className="bg-black border border-primary text-primary hover:bg-primary hover:text-black p-2 transition-colors">
                                            <Github className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
                                        {">"} {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed font-sans">
                                        // {project.description}
                                    </p>

                                    <div className="mt-auto pt-4 flex flex-col gap-4">
                                        {project.teamMembers && (
                                            <div className="flex flex-col gap-2">
                                                <div className="text-[10px] text-primary/40 uppercase tracking-widest font-bold flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                                                    {t("projects.contributors")}
                                                </div>
                                                <div className="flex -space-x-2 overflow-hidden">
                                                    {project.teamMembers.map((member) => (
                                                        <Link
                                                            key={member.name}
                                                            href={member.github}
                                                            target="_blank"
                                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-black hover:ring-primary transition-all overflow-hidden bg-secondary relative group/member"
                                                            title={member.name}
                                                        >
                                                            <Image
                                                                src={`https://github.com/${member.name}.png`}
                                                                alt={member.name}
                                                                fill
                                                                unoptimized
                                                                className="object-cover transition-all"
                                                            />
                                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/member:opacity-100 transition-opacity"></div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="border-t border-primary/10 pt-4 flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-xs font-bold text-primary/70 border border-primary/20 px-2 py-1 uppercase">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-black border border-primary py-2 px-4 transition-all"
                                    >
                                        <span>{t("projects.executeProject")}</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </Link>
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
                                    {t("projects.viewLess")} <ChevronUp className="w-5 h-5 animate-bounce" />
                                </>
                            ) : (
                                <>
                                    {t("projects.viewMore")} <ChevronDown className="w-5 h-5 animate-bounce" />
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
