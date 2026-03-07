"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/language-context";
import { User, Code2, GraduationCap, Github, Mail, Award } from "lucide-react";
import { certificates, projects, personalInfo } from "@/lib/data";
import ProfileCard from "./ProfileCard";

const About = () => {
    const { t } = useLanguage();

    const stats = [
        {
            label: t("about.stats.projects"),
            value: projects.length,
            icon: Code2,
        },
        {
            label: t("about.stats.experience"),
            value: "3+",
            icon: GraduationCap,
        },
        {
            label: t("about.stats.certificates"),
            value: certificates.length,
            icon: Award,
        },
    ];

    return (
        <section id="about" className="py-16 md:py-24 overflow-hidden">
            <div className="mb-16">
                <p className="section-label mb-4">{t("about.directory")}</p>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-antonio text-5xl md:text-7xl font-bold uppercase text-foreground leading-tight"
                    >
                        {t("about.title")}
                    </motion.h2>
                    <div className="accent-label shrink-0">
                        <User className="w-3.5 h-3.5" />
                        {t("about.subtitle")}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left: Profile Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 flex justify-center lg:justify-start"
                >
                    <ProfileCard
                        avatarUrl="/images/profile.png"
                        name={personalInfo.name}
                        title={personalInfo.role}
                        handle="rifqiardian"
                        contactText="Hire Me"
                        onContactClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        showShine={false}
                        showGlare={false}
                        behindGlowEnabled={false}
                        socials={{
                            github: personalInfo.github,
                            linkedin: personalInfo.linkedin,
                            instagram: personalInfo.instagram
                        }}
                        className="w-full max-w-[400px]"
                    />
                </motion.div>

                {/* Right: Content */}
                <div className="lg:col-span-7 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="portavia-card p-8 space-y-6">
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                {t("about.content1")}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-foreground/60">
                                {t("about.content2")}
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="portavia-card p-6 flex flex-col items-center justify-center text-center gap-2 group hover:border-accent/30 transition-colors">
                                    <stat.icon className="w-5 h-5 text-accent mb-1" />
                                    <span className="text-2xl md:text-3xl font-bold font-antonio text-foreground">{stat.value}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default About;
