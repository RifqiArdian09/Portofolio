"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { TechIcon } from "./tech-icon";

const FeaturedProjects = () => {
    const { t } = useLanguage();
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll ? projects : projects.slice(0, 6);



    return (
        <section className="py-24">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div>
                    <p className="section-label mb-4">{t("projects.directory")}</p>
                    <h2 className="font-antonio text-5xl md:text-7xl font-bold uppercase text-foreground leading-tight">
                        {t("projects.title")}
                        {t("projects.titleHighlight") && (
                            <>
                                <br />
                                <span className="text-foreground/20">{t("projects.titleHighlight")}</span>
                            </>
                        )}
                    </h2>
                </div>

                <Link
                    href="https://github.com/RifqiArdian09?tab=repositories"
                    target="_blank"
                    className="pill-button-outline text-sm font-semibold shrink-0"
                >
                    <Github className="w-4 h-4" />
                    {t("projects.viewAllRepos")}
                </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Show More/Less */}
            <div className="mt-12 flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="pill-button-outline px-8 py-3 font-semibold text-sm"
                >
                    {showAll ? (
                        <><span>{t("projects.viewLess")}</span><ChevronUp className="w-4 h-4" /></>
                    ) : (
                        <><span>{t("projects.viewMore")}</span><ChevronDown className="w-4 h-4" /></>
                    )}
                </button>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: typeof import("@/lib/data").projects[0];
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const { t, language } = useLanguage();
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <motion.div
            className="group portavia-card overflow-hidden cursor-pointer flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-colors duration-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setMousePos({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
            style={{
                perspective: 1000,
            }}
            animate={{
                rotateX: hovered ? mousePos.y * -5 : 0,
                rotateY: hovered ? mousePos.x * 5 : 0,
                y: hovered ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-card/50 aspect-video">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.08 : 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                <div className="absolute top-5 right-5">
                    <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                        PREVIEW_0{index + 1}
                    </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3
                        className="font-antonio text-xl md:text-2xl font-bold uppercase text-white leading-tight mb-2"
                        animate={{ x: hovered ? 5 : 0 }}
                    >
                        {project.title}
                    </motion.h3>
                    <div className="flex items-center gap-2">
                        <span className="status-dot w-1.5 h-1.5" />
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{t("projects.stableRelease")}</span>
                    </div>
                </div>
            </div>

            {/* Info Area */}
            <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                <p className="text-foreground/50 text-sm leading-relaxed italic">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-foreground/[0.03] text-foreground/40 border border-border/50 group-hover:border-accent/20 transition-colors"
                        >
                            <TechIcon name={tech} className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/20 mt-auto">
                    <Link
                        href={`/projects/${project.id}`}
                        className="pill-button text-xs px-6 py-3 font-bold group/btn"
                    >
                        {t("projects.explore")}
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>

                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="p-3 rounded-xl border border-border/50 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                    )}

                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedProjects;
