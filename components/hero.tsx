"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { motion, Variants } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const backgroundTextVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.05,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden bg-background border-b-2 border-foreground/5 select-none py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>

        {/* Large Decorative Background Text */}
        <motion.div
          variants={backgroundTextVariants}
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-[15vw] font-black leading-none text-foreground pointer-events-none whitespace-nowrap opacity-[0.03] italic tracking-[0.2em]"
          style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
        >
          {personalInfo.role.toUpperCase()}
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
              <span className="futuristic-label">
                [ {personalInfo.role} ]
              </span>
              <div className="h-px flex-grow bg-foreground/10"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <h1 className="text-6xl md:text-[9rem] font-black leading-[0.8] uppercase tracking-[0.02em] italic">
                <span className="text-foreground/20 italic block mb-2">{t("hero.greeting")}</span>
                <span className="text-foreground text-glow-subtle">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="text-accent">.</span>
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="max-w-xl mb-12"
            >
              <p className="text-foreground/60 text-lg md:text-xl font-medium leading-relaxed tracking-wide">
                {t("hero.bio")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
              <Link
                href="#contact"
                className="brutalist-button px-10 py-5"
              >
                <span>{t("hero.initializeProtocol")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={personalInfo.cvPath}
                target="_blank"
                className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                  <FileText className="w-4 h-4" />
                </div>
                {t("hero.viewCv")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 h-64 md:w-[450px] md:h-[450px] shrink-0 order-1 lg:order-2"
          >
            <div className="absolute inset-0 border border-foreground/10 translate-x-6 translate-y-6"></div>
            <div className="relative w-full h-full overflow-hidden border-2 border-foreground grayscale hover:grayscale-0 transition-all duration-700 bg-foreground/5">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Minimalist Tech Decor */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-white px-2 py-1 text-[8px] font-bold tracking-[0.3em]">
              SYS_ACTIVE
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Info Ribbon */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-foreground/5 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] z-20 bg-background/80 backdrop-blur-md">
        <div className="flex gap-10">
          <span className="text-accent opacity-80">{personalInfo.role}</span>
          <span className="opacity-20">/ /</span>
          <span className="text-foreground/40 italic">R_09.PROTO</span>
        </div>
        <div className="flex items-center gap-4 text-foreground/40">
          <div className="w-1.5 h-1.5 bg-accent animate-pulse"></div>
          LATEST_UPDATE: 2024.0.1
        </div>
      </div>
    </div>
  );
};

export default Hero;
