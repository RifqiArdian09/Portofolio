"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { motion, Variants } from "motion/react";
import { ArrowRight, FileText, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

import Marquee from "@/components/ui/marquee";
import { TechIcon } from "./tech-icon";

const Hero = () => {
  const { t, language } = useLanguage();
  const { techStack } = require("@/lib/data");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const bioVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.5 } },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden select-none">

      <div className="container mx-auto relative z-10 px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-left order-2 lg:order-1 max-w-2xl"
          >
            {/* Location badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 text-foreground/40 text-xs font-medium">
                <MapPin className="w-3 h-3" />
                Bengkulu, Indonesia
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="mb-8 font-display">
              <p className="text-foreground/40 font-medium text-lg mb-3 tracking-wide">
                {t("hero.greeting")},
              </p>
              <h1 className="font-antonio text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] font-bold leading-[0.88] uppercase tracking-wide text-foreground">
                {personalInfo.name.split(' ')[0]}
                <br />
                <span className="text-accent">{personalInfo.name.split(' ')[1]}</span>
                <span className="text-foreground/20">.</span>
              </h1>
            </motion.div>

            {/* Role title */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50">
                  {personalInfo.role}
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="max-w-lg mb-12 min-h-[4.5rem]">
              <motion.p
                variants={bioVariants}
                className="text-foreground/60 text-base md:text-lg font-medium leading-relaxed inline"
              >
                {t("hero.bio").split("").map((char: string, i: number) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-[2px] h-[1.2em] bg-accent ml-1 translate-y-[4px]"
                />
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 items-center mb-10">
              <Link
                href="#contact"
                className="pill-button text-[9px] xs:text-[11px] sm:text-sm font-bold justify-center px-2 py-3 sm:px-6 whitespace-nowrap overflow-hidden"
              >
                {t("hero.initializeProtocol")}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              </Link>

              <Link
                href={personalInfo.cvPath}
                target="_blank"
                className="pill-button-outline text-[9px] xs:text-[11px] sm:text-sm font-bold justify-center px-2 py-3 sm:px-6 whitespace-nowrap overflow-hidden"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                {t("hero.viewCv")}
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-2"
            >
              <div className="flex items-center gap-3">
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  className="p-3 rounded-xl border border-border bg-card/50 hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 group shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  className="p-3 rounded-xl border border-border bg-card/50 hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 group shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href={personalInfo.instagram}
                  target="_blank"
                  className="p-3 rounded-xl border border-border bg-card/50 hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 group shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative shrink-0 order-1 lg:order-2"
          >
            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[500px]">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-accent/10 scale-105" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border bg-card">
                <img
                  src={personalInfo.profileImage}
                  alt="Rifqi Ardian"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 px-5 py-3 rounded-2xl bg-accent text-accent-foreground font-bold text-sm shadow-xl shadow-accent/20"
              >
                {personalInfo.role}
              </motion.div>

              {/* Small decorative circle */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-accent" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-10 border-t border-border/50"
        >
          <Marquee pauseOnHover className="[--duration:35s] py-4">
            {techStack.map((tech: any) => {
              return (
                <div key={tech.name} className="flex items-center gap-4 px-8 border-r border-border last:border-0 h-10 group/item">
                  <TechIcon name={tech.name} className="w-6 h-6 grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                  <span className="font-antonio text-xl font-bold uppercase text-foreground/30 group-hover/item:text-foreground transition-colors">
                    {tech.name}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                </div>
              );
            })}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
