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
            <div className="min-h-screen bg-black text-primary font-mono flex flex-col items-center justify-center p-4">
                <div className="border border-red-500 p-8 max-w-md w-full text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-red-500 text-black text-xs font-bold px-2 py-0.5">ERROR 404</div>
                    <h1 className="text-4xl font-bold text-red-500 mb-4 tracking-tighter">{t("projects.notFound")}</h1>
                    <p className="text-red-500/70 mb-8 border-l-2 border-red-500/30 pl-4 text-left font-sans">
                        The requested project data could not be retrieved from the mainframe. It may have been deleted or corrupted.
                    </p>
                    <Button
                        onClick={() => router.push("/")}
                        className="w-full bg-red-500 hover:bg-red-600 text-black font-bold uppercase tracking-widest rounded-none"
                    >
                        {t("projects.returnRoot")}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-black pt-24 pb-24 font-mono relative overflow-hidden">
                {/* Global Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0 opacity-10"></div>

                <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                    <div className="mb-8 border-b border-primary/30 pb-4 flex items-center gap-2 text-primary/50 text-xs uppercase tracking-widest">
                        <Link href="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/#projects" className="hover:text-primary transition-colors">{t("nav.projects")}</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary font-bold">{project.title.toUpperCase()}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Left Column: Project Metadata */}
                        <div className="lg:col-span-1 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="border border-primary/30 bg-black/50 p-6 sticky top-32"
                            >
                                <h1 className="text-3xl font-black text-white italic mb-1 uppercase leading-none">
                                    {project.title}
                                </h1>
                                <div className="text-xs text-primary/50 mb-8 font-bold tracking-widest">
                                    PROJECT_ID: #{project.id.padStart(4, '0')}
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3 pb-1 border-b border-primary/20">
                                            <Code className="w-4 h-4" /> {t("projects.techStack")}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs border border-primary/30 px-2 py-1 text-primary/80 hover:bg-primary hover:text-black cursor-default transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.teamMembers && (
                                        <div>
                                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3 pb-1 border-b border-primary/20">
                                                <Terminal className="w-4 h-4" /> {t("projects.contributors")}
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                {project.teamMembers.map((member) => (
                                                    <Link
                                                        key={member.name}
                                                        href={member.github}
                                                        target="_blank"
                                                        className="flex items-center gap-3 group/member p-2 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all"
                                                    >
                                                        <div className="relative h-8 w-8 rounded-full overflow-hidden border border-primary/20 group-hover/member:border-primary transition-colors">
                                                            <Image
                                                                src={`https://github.com/${member.name}.png`}
                                                                alt={member.name}
                                                                fill
                                                                unoptimized
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-sm text-muted-foreground group-hover/member:text-primary transition-colors">
                                                            @{member.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3 pb-1 border-b border-primary/20">
                                            <Calendar className="w-4 h-4" /> {t("projects.date")}
                                        </div>
                                        <p className="text-sm text-muted-foreground font-sans">{(project as any).date || "2024 Release"}</p>
                                    </div>

                                    {(project.demo || project.github) && (
                                        <div className="pt-6 flex flex-col gap-3">
                                            {project.demo && (
                                                <Link
                                                    href={project.demo}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 bg-primary text-black font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors text-xs"
                                                >
                                                    <Globe className="w-4 h-4" /> {t("projects.initializeDemo")}
                                                </Link>
                                            )}
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 border border-primary text-primary font-bold uppercase tracking-widest py-3 hover:bg-primary/10 transition-colors text-xs"
                                                >
                                                    <Github className="w-4 h-4" /> {t("projects.viewSource")}
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Content & Image */}
                        <div className="lg:col-span-2 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="relative aspect-video w-full border border-primary/30 mb-8 group overflow-hidden">
                                    {/* Corner Brackets */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary z-20"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary z-20"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary z-20"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary z-20"></div>

                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
                                </div>

                                <div className="prose prose-invert prose-lg max-w-none">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                                        <Terminal className="w-4 h-4" /> {t("projects.readme")}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{t("projects.overview")}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-sans border-l-2 border-primary/20 pl-4 text-justify">
                                        {project.description}
                                    </p>
                                    <div className="my-8 h-px bg-primary/20 w-full"></div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{t("projects.implementation")}</h3>
                                    <p className="text-white leading-relaxed font-sans whitespace-pre-line text-justify">
                                        {project.content}
                                    </p>

                                    {/* Implementation Screenshots */}
                                    {(project as any).implementationImages && (
                                        <div className="mt-12 space-y-8">
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest border-b border-primary/20 pb-2">
                                                <Terminal className="w-4 h-4" /> IMPLEMENTATION_SCREENSHOTS
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {(project as any).implementationImages.map((img: string, idx: number) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                        className="relative aspect-video border border-primary/20 group overflow-hidden bg-primary/5"
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Implementation ${idx + 1}`}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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
