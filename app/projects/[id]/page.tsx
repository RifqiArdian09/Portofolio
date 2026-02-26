"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Github, Globe, Code } from "lucide-react";
import { projects } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { TechIcon } from "@/components/tech-icon";

const ProjectDetail = () => {
    const { id } = useParams();
    const router = useRouter();
    const { t, language } = useLanguage();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
                <div className="portavia-card max-w-lg w-full p-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
                        <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h1 className="font-antonio text-5xl font-bold uppercase text-foreground mb-4">
                        {t("projects.notFound")}
                    </h1>
                    <p className="text-foreground/50 mb-8">
                        {t("projects.notFoundDescription") || "The requested project could not be found."}
                    </p>
                    <button
                        onClick={() => router.push("/")}
                        className="pill-button w-full justify-center font-bold"
                    >
                        {t("projects.returnRoot")}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen selection:bg-accent selection:text-accent-foreground">
            <Navbar />

            <main className="pt-28 pb-24 px-6 md:px-12 max-w-[1280px] mx-auto">
                {/* Breadcrumbs */}
                <div className="mb-12 flex items-center gap-3 text-xs font-medium text-foreground/40">
                    <Link href="/" className="hover:text-accent transition-colors">
                        {t("nav.home")}
                    </Link>
                    <span>/</span>
                    <Link href="/#projects" className="hover:text-accent transition-colors">
                        {t("nav.projects")}
                    </Link>
                    <span>/</span>
                    <span className="text-foreground/70">{project.title}</span>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t("projects.backToProjects")}
                    </Link>
                    <h1 className="font-antonio text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-foreground leading-tight">
                        {project.title}
                        <span className="text-accent">.</span>
                    </h1>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="space-y-5"
                        >
                            {/* Tech Stack */}
                            <div className="portavia-card p-6">
                                <h4 className="section-label mb-4">{t("projects.techStackHeader")}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-foreground/[0.06] text-foreground/60 border border-border"
                                        >
                                            <TechIcon name={tech} className="w-4 h-4 opacity-70" />
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Team */}
                            {project.teamMembers && (
                                <div className="portavia-card p-6">
                                    <h4 className="section-label mb-4">{t("projects.teamHeader")}</h4>
                                    <div className="space-y-3">
                                        {project.teamMembers.map((member) => (
                                            <Link
                                                key={member.name}
                                                href={member.github}
                                                target="_blank"
                                                className="group flex items-center gap-3 hover:text-accent transition-colors"
                                            >
                                                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border">
                                                    <Image
                                                        src={`https://github.com/${member.name}.png`}
                                                        alt={member.name}
                                                        fill
                                                        unoptimized
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold group-hover:text-accent transition-colors">
                                                    @{member.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Stats */}
                            <div className="portavia-card p-6 space-y-4">
                                <div>
                                    <p className="section-label mb-1">{t("projects.releaseLabel")}</p>
                                    <p className="text-foreground font-bold">{project.date || "2024"}</p>
                                </div>
                                <div>
                                    <p className="section-label mb-1">{t("projects.statusLabel")}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="status-dot" />
                                        <span className="text-sm font-semibold text-accent">{project.status}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-3">
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="pill-button w-full justify-center font-bold"
                                    >
                                        <Globe className="w-4 h-4" />
                                        {t("projects.liveDemo")}
                                    </Link>
                                )}
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="pill-button-outline w-full justify-center font-semibold"
                                    >
                                        <Github className="w-4 h-4" />
                                        {t("projects.viewOnGithub")}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-10"
                        >
                            {/* Hero Image */}
                            <div className="portavia-card overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    unoptimized
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Description */}
                            <div className="portavia-card p-8">
                                <h3 className="font-antonio text-2xl font-bold uppercase text-foreground mb-4">{t("projects.overviewHeader")}</h3>
                                <p className="text-foreground/60 text-lg leading-relaxed italic">
                                    "{project.description}"
                                </p>
                            </div>

                            {/* Detail Content */}
                            <div className="portavia-card p-8">
                                <h3 className="font-antonio text-2xl font-bold uppercase text-foreground mb-6">{t("projects.detailsHeader")}</h3>
                                <div className="text-foreground/60 leading-relaxed text-base space-y-4 whitespace-pre-wrap">
                                    {project.content}
                                </div>
                            </div>

                            {/* Implementation Images */}
                            {project.implementationImages && (
                                <div>
                                    <h3 className="font-antonio text-2xl font-bold uppercase text-foreground mb-6">{t("projects.galleryHeader")}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {project.implementationImages.map((img: string, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                className="portavia-card overflow-hidden aspect-video"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Screenshot ${idx + 1}`}
                                                    width={800}
                                                    height={600}
                                                    unoptimized
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>

            <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
                <Footer />
            </div>
        </div>
    );
};

export default ProjectDetail;
