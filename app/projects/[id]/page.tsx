"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Github, Globe, Terminal, Calendar, Code, Cpu, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import { useLanguage } from "@/context/language-context";

const ProjectDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-primary font-mono flex flex-col items-center justify-center p-6 relative">
                <div className="terminal-window max-w-lg w-full border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                    <div className="terminal-header !bg-red-500/10 !border-red-500/30">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                        </div>
                        <span className="text-[9px] font-black text-red-500/70 tracking-[0.2em]">CRITICAL_SYSTEM_ERROR</span>
                        <div className="w-4 h-px bg-red-500/20"></div>
                    </div>

                    <div className="p-10 text-center">
                        <div className="inline-block p-4 border border-red-500/20 bg-red-500/5 mb-8">
                            <Terminal className="w-12 h-12 text-red-500 animate-pulse" />
                        </div>

                        <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
                            {t("projects.notFound")}
                        </h1>

                        <div className="space-y-4 mb-10">
                            <p className="text-red-500/60 text-xs font-bold uppercase tracking-widest">
                                ERROR_CODE: 0x404_PROJECT_UNREACHABLE
                            </p>
                            <p className="text-zinc-500 text-sm italic border-l-2 border-red-500/20 pl-4 py-1">
                                [LOG] The requested system file could not be located in the primary storage nodes. Node might have been de-indexed or moved to a legacy cluster.
                            </p>
                        </div>

                        <Button
                            onClick={() => router.push("/")}
                            className="w-full bg-red-500 text-black font-black uppercase tracking-[0.2em] py-6 rounded-none hover:bg-white transition-all transform active:scale-[0.98]"
                        >
                            {t("projects.returnRoot")}
                        </Button>
                    </div>

                    <div className="border-t border-red-500/10 p-4 bg-red-500/5">
                        <div className="flex justify-between text-[8px] font-black text-red-500/40 uppercase tracking-widest">
                            <span>DIAGNOSTIC_UPLINK: FAIL</span>
                            <span>NODE_SYNC: TERMINATED</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-24 font-mono relative">

                <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                    {/* Breadcrumbs HUD */}
                    <div className="mb-10 flex items-center gap-4 text-[10px] uppercase font-black tracking-[0.3em]">
                        <Link href="/" className="text-primary/40 hover:text-primary transition-colors flex items-center gap-2">
                            {t("nav.home")}
                        </Link>
                        <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
                        <Link href="/#projects" className="text-primary/40 hover:text-primary transition-colors">
                            {t("nav.projects")}
                        </Link>
                        <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
                        <span className="text-primary glow-sm">{project.title}</span>
                        <div className="h-[1px] flex-grow bg-primary/10"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: System Info Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="terminal-window sticky top-32"
                            >
                                <div className="terminal-header">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <span className="text-[9px] font-bold text-primary/60 tracking-widest">{t("projects.metadataProbe")}</span>
                                    <Cpu className="w-3 h-3 text-primary/40" />
                                </div>

                                <div className="p-8">
                                    <div className="mb-10 text-center lg:text-left">
                                        <h1 className="text-4xl font-black text-white mb-2 uppercase leading-none tracking-tighter">
                                            {project.title}
                                        </h1>
                                        <div className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black border border-primary/20">
                                            {t("projects.secureFile").replace("{id}", project.id)}
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        {/* Tech Stack HUD */}
                                        <div>
                                            <div className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                                TECH_CORE
                                                <div className="h-[1px] flex-grow bg-primary/10"></div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-[10px] border border-primary/20 bg-primary/5 px-2 py-1 text-primary/70 font-bold uppercase tracking-tighter">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Contributors HUD */}
                                        {project.teamMembers && (
                                            <div>
                                                <div className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                                    {t("projects.contributors")}
                                                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                                                </div>
                                                <div className="space-y-3">
                                                    {project.teamMembers.map((member) => (
                                                        <Link
                                                            key={member.name}
                                                            href={member.github}
                                                            target="_blank"
                                                            className="flex items-center gap-3 p-2 border border-primary/10 bg-black/40 hover:border-primary/40 hover:bg-primary/5 transition-all group/agent"
                                                        >
                                                            <div className="relative h-9 w-9 border border-primary/20 group-hover/agent:border-primary/50 transition-colors overflow-hidden">
                                                                <Image
                                                                    src={`https://github.com/${member.name}.png`}
                                                                    alt={member.name}
                                                                    fill
                                                                    unoptimized
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[11px] font-bold text-zinc-400 group-hover/agent:text-primary transition-colors">@{member.name}</span>
                                                                <span className="text-[8px] text-primary/30 font-black uppercase tracking-widest">{t("projects.authorizedContributor")}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Stats */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 border border-primary/10 bg-primary/5">
                                                <div className="text-[8px] text-primary/40 font-black mb-1 uppercase tracking-widest">{t("projects.deployDate")}</div>
                                                <div className="text-xs font-bold text-zinc-400 uppercase">{(project as any).date || "2024.Q4"}</div>
                                            </div>
                                            <div className="p-3 border border-primary/10 bg-primary/5">
                                                <div className="text-[8px] text-primary/40 font-black mb-1 uppercase tracking-widest">{t("projects.status")}</div>
                                                <div className="text-xs font-bold text-green-500 animate-pulse uppercase tracking-tighter">{t("projects.successful")}</div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="pt-4 flex flex-col gap-4">
                                            {project.demo && (
                                                <Link
                                                    href={project.demo}
                                                    target="_blank"
                                                    className="relative flex items-center justify-center gap-3 bg-primary text-black font-black uppercase tracking-[0.2em] py-4 text-[10px] hover:scale-[1.02] transition-transform overflow-hidden group/btn"
                                                >
                                                    <Globe className="w-4 h-4" /> {t("projects.initializeDemo")}
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                                                </Link>
                                            )}
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-3 border border-primary/30 text-primary font-black uppercase tracking-[0.2em] py-4 text-[10px] hover:bg-primary/10 hover:border-primary transition-all"
                                                >
                                                    <Github className="w-4 h-4" /> {t("projects.viewSource")}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Project Data Blocks */}
                        <div className="lg:col-span-8 flex flex-col gap-12 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-12"
                            >
                                {/* Main Image Terminal */}
                                <div className="terminal-window overflow-hidden group">
                                    <div className="terminal-header">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
                                            <span className="text-[9px] font-bold text-primary/60 tracking-widest">SOURCE_STREAM_01 // {project.title.toLowerCase().replace(/\s+/g, '_')}.IMG</span>
                                        </div>
                                        <div className="text-[8px] bg-primary/10 px-1.5 py-0.5 border border-primary/20 text-primary/60 font-black">100%_SYNC</div>
                                    </div>
                                    <div className="relative w-full aspect-[16/9] bg-black">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Content DOSSIER */}
                                <div className="terminal-window">
                                    <div className="terminal-header">
                                        <span className="text-[9px] font-bold text-primary/60 uppercase tracking-widest">{t("projects.analysisDocket")}</span>
                                        <Terminal className="w-3 h-3 text-primary/40" />
                                    </div>
                                    <div className="p-10 space-y-12">
                                        <section>
                                            <div className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                                                [01] {t("projects.missionOverview")}
                                                <div className="h-[1px] flex-grow bg-primary/10"></div>
                                            </div>
                                            <p className="text-zinc-400 text-lg leading-relaxed font-sans italic border-l-4 border-primary/20 pl-8">
                                                "{project.description}"
                                            </p>
                                        </section>

                                        <section>
                                            <div className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                                                [02] {t("projects.executionDetails")}
                                                <div className="h-[1px] flex-grow bg-primary/10"></div>
                                            </div>
                                            <div className="text-zinc-300 leading-relaxed font-sans whitespace-pre-line text-justify text-base md:text-lg">
                                                {project.content}
                                            </div>
                                        </section>

                                        {/* Implementation Imagery */}
                                        {(project as any).implementationImages && (
                                            <section>
                                                <div className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                                                    [03] {t("projects.systemSnapshots")}
                                                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {(project as any).implementationImages.map((img: string, idx: number) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, scale: 0.98 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                            className="terminal-window overflow-hidden group/snap"
                                                        >
                                                            <div className="aspect-video relative">
                                                                <Image
                                                                    src={img}
                                                                    alt={`Shot ${idx + 1}`}
                                                                    fill
                                                                    className="object-cover transition-all duration-700"
                                                                />
                                                                <div className="absolute bottom-2 right-2 text-[8px] bg-black/60 text-primary/40 px-1 border border-primary/10 uppercase">SNAP_{idx + 1}</div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProjectDetail;
