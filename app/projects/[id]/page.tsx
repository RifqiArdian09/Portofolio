"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Github, Globe, Calendar, Code, Cpu, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
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
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="brutalist-card max-w-2xl w-full border-4 border-foreground bg-background relative z-10 shadow-[12px_12px_0px_var(--foreground)]">

                    <div className="p-12 text-center border-b-4 border-foreground">
                        <div className="inline-block p-6 border-4 border-foreground bg-accent mb-10 translate-x-2 -translate-y-2 shadow-[8px_8px_0px_var(--foreground)]">
                            <Code className="w-16 h-16 text-black" />
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter leading-[0.8]">
                            {t("projects.notFound")}<br />
                        </h1>

                        <div className="space-y-6 mb-12 text-left">
                            <p className="text-foreground/60 text-lg font-medium border-l-4 border-accent pl-6 leading-tight">
                                {t("projects.notFoundDescription") || "The requested project could not be found."}
                            </p>
                        </div>

                        <button
                            onClick={() => router.push("/")}
                            className="brutalist-button w-full text-xl"
                        >
                            {t("projects.returnRoot")}
                        </button>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen selection:bg-accent selection:text-white">
            <Navbar />

            <main className="pt-40 pb-40 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative">
                {/* Header Breadcrumbs Section */}
                <div className="mb-32">
                    <div className="flex items-center gap-6 text-[10px] uppercase font-black tracking-[0.4em] text-foreground/30">
                        <Link href="/" className="hover:text-accent transition-colors">
                            {t("nav.home")}
                        </Link>
                        <div className="w-8 h-px bg-foreground/10"></div>
                        <Link href="/#projects" className="hover:text-accent transition-colors">
                            {t("nav.projects")}
                        </Link>
                        <div className="w-8 h-px bg-foreground/10"></div>
                        <span className="text-accent italic">{project.title}</span>
                    </div>

                    <div className="mt-12">
                        <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.8] tracking-[0.02em] italic">
                            {project.title}<span className="text-accent">/</span>
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left Column: Industrial Sidebar */}
                    <aside className="lg:col-span-4 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-16"
                        >
                            <div className="space-y-12">
                                {/* Tech Core Section */}
                                <section>
                                    <h4 className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-foreground/40 italic">
                                        <div className="w-6 h-px bg-accent"></div>
                                        <span>Technology_Stack</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-sm font-black uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </section>

                                {/* Team Section */}
                                {project.teamMembers && (
                                    <section>
                                        <h4 className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-foreground/40 italic">
                                            <div className="w-6 h-px bg-accent"></div>
                                            <span>The_Engineers</span>
                                        </h4>
                                        <div className="space-y-6">
                                            {project.teamMembers.map((member) => (
                                                <Link
                                                    key={member.name}
                                                    href={member.github}
                                                    target="_blank"
                                                    className="group flex items-center gap-6"
                                                >
                                                    <div className="relative h-12 w-12 border border-foreground/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                                        <Image
                                                            src={`https://github.com/${member.name}.png`}
                                                            alt={member.name}
                                                            fill
                                                            unoptimized
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-black uppercase tracking-widest group-hover:text-accent transition-colors">@{member.name}</span>
                                                        <span className="text-[8px] opacity-30 font-black uppercase tracking-[0.3em] italic">L_01_DEV</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* System Stats */}
                                <section className="grid grid-cols-1 gap-6">
                                    <div className="p-8 border border-foreground/5 bg-foreground/[0.02]">
                                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/20 mb-3 italic">Launch_Date</div>
                                        <div className="text-xl font-black italic">{(project as any).date || "2024.Q1"}</div>
                                    </div>
                                    <div className="p-8 border border-accent/20 bg-accent/[0.03]">
                                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/50 mb-3 italic">System_Status</div>
                                        <div className="text-xl font-black uppercase tracking-widest text-accent">STABLE_V4</div>
                                    </div>
                                </section>

                                {/* Action Matrix */}
                                <section className="space-y-4 pt-10">
                                    {project.demo && (
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            className="brutalist-button w-full"
                                        >
                                            <span>Launch_Deployment</span>
                                            <Globe className="w-4 h-4 ml-2" />
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="group flex items-center justify-center gap-4 py-5 border border-foreground/10 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all"
                                        >
                                            <Github className="w-4 h-4" /> Sync_Source
                                        </Link>
                                    )}
                                </section>
                            </div>
                        </motion.div>
                    </aside>

                    {/* Right Column: Content Dossier */}
                    <div className="lg:col-span-8 flex flex-col gap-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-32"
                        >
                            {/* Visual Asset Container */}
                            <div className="relative aspect-video overflow-hidden border border-foreground/5 group">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    unoptimized
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 p-4"
                                />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                            </div>

                            {/* Informational Dossier */}
                            <div className="space-y-32">
                                {/* Mission Statement */}
                                <section className="space-y-12">
                                    <div className="flex items-center gap-6">
                                        <span className="text-xs font-black opacity-10 tracking-[0.5em]">01_MISSION</span>
                                        <div className="h-px flex-grow bg-foreground/5"></div>
                                    </div>
                                    <p className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight italic">
                                        "{project.description}"
                                    </p>
                                </section>

                                {/* Execution Details */}
                                <section className="space-y-12">
                                    <div className="flex items-center gap-6">
                                        <span className="text-xs font-black opacity-10 tracking-[0.5em]">02_EXECUTION</span>
                                        <div className="h-px flex-grow bg-foreground/5"></div>
                                    </div>
                                    <div className="text-foreground/60 leading-relaxed font-medium text-lg md:text-xl space-y-8 columns-1 md:columns-2 gap-16 italic">
                                        {project.content}
                                    </div>
                                </section>

                                {/* Visual Evidence Matrix */}
                                {(project as any).implementationImages && (
                                    <section className="space-y-12">
                                        <div className="flex items-center gap-6">
                                            <span className="text-xs font-black opacity-10 tracking-[0.5em]">03_EVIDENCE</span>
                                            <div className="h-px flex-grow bg-foreground/5"></div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            {(project as any).implementationImages.map((img: string, idx: number) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                                    className="space-y-4 group/snap"
                                                >
                                                    <div className="aspect-video relative overflow-hidden border border-foreground/5 bg-foreground/5 grayscale group-hover/snap:grayscale-0 transition-all duration-700">
                                                        <Image
                                                            src={img}
                                                            alt={`Snapshot ${idx + 1}`}
                                                            fill
                                                            unoptimized
                                                            className="object-cover scale-105 group-hover/snap:scale-100 transition-transform duration-1000"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.4em] opacity-20 italic">
                                                        <span>EVIDENCE_00{idx + 1}</span>
                                                        <span>PRJ_IMG_0{idx + 1}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
