"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Terminal } from "lucide-react";
import DecryptedText from "@/components/decrypted-text";
import { useLanguage } from "@/context/language-context";

const Hero = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const fullText = `${t("hero.initializing")}
${t("hero.loadingAssets")}
${t("hero.decryptingBio")}
${t("hero.user")}${personalInfo.name}
${t("hero.role")}${personalInfo.role}
${t("hero.status")}
${t("hero.ready")}`;

  useEffect(() => {
    // Reset text when component mounts
    setTypedText("");

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Typing speed

    return () => {
      clearInterval(interval);
    };
  }, [fullText]);

  // Mouse parallax effect for image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  // Create a smooth spring for the rotation values
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center font-mono overflow-hidden relative"
    >
      {/* Background Grid & HUD Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* HUD Markers */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-primary/20"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-primary/20"></div>

        <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 text-[8px] text-primary/30 font-bold uppercase vertical-text">
          <span>LAT: 3.8231</span>
          <span>LONG: 102.2748</span>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* Left Content */}
        <div className="order-2 lg:order-1 relative">
          {/* Decorative HUD Circle */}
          <div className="absolute -left-20 top-0 w-64 h-64 border border-primary/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-red-500/50 rounded-full"></div>
              </div>
              <span className="text-primary/40 text-[10px] font-black tracking-[0.4em] uppercase">{t("hero.secureConnection")}</span>
            </div>

            {/* Terminal Block */}
            <div className="terminal-window mb-10 overflow-hidden">
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/10"></div>
                </div>
                <div className="text-[9px] font-bold text-primary/50 tracking-widest">{t("hero.sessionInit")}</div>
                <div className="w-4 h-[1px] bg-primary/30"></div>
              </div>
              <div className="p-6 bg-black/40 min-h-[160px] font-bold">
                <div className="text-primary/90 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {typedText}
                  <span className="inline-block w-2 h-4 bg-primary ml-1 animate-blink align-middle"></span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              {t("hero.greeting")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-600 glitch-text relative inline-block py-2">
                <DecryptedText text={personalInfo.name.toUpperCase()} />
              </span>
            </h1>

            <p className="text-zinc-400 text-lg mb-12 max-w-xl border-l-2 border-primary/30 pl-6 italic leading-relaxed">
              // {t("hero.bio")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link href="#contact" className="group relative w-full sm:w-auto px-10 py-4 bg-primary text-black font-black uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95 text-center">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t("hero.initializeProtocol")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link href={personalInfo.cvPath} target="_blank" className="w-full sm:w-auto px-10 py-4 border border-primary/30 text-primary font-black uppercase tracking-widest hover:bg-primary/5 hover:border-primary transition-all flex items-center justify-center gap-3 group text-center">
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" /> {t("hero.viewCv")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end prospective-1000">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]"
          >
            {/* HUD Rings */}
            <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute inset-10 border border-dashed border-primary/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

            {/* Corner Markers */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary shadow-[0_0_15px_rgba(0,255,0,0.5)]"></div>

            {/* Profile Container */}
            <div className="absolute inset-6 terminal-window overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)] z-10"></div>
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
              />

              {/* Dynamic Scanline */}
              <div className="absolute inset-0 bg-primary/10 h-[2px] w-full z-20 animate-scanline"></div>

              <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-1">
                <div className="text-[10px] bg-primary text-black px-2 py-0.5 font-black uppercase">
                  {t("hero.targetLocked")}
                </div>
                <div className="text-[8px] text-primary font-bold bg-black/60 px-2 py-0.5 border border-primary/20">
                  SYSTEM_ID: ARDIAN_09
                </div>
              </div>
            </div>

            {/* Floating HUD Labels */}
            <div className="absolute -right-12 top-1/4 bg-black/80 border border-primary/30 p-2 text-[10px] text-primary/60 font-bold vertical-text uppercase tracking-widest h-32 flex items-center">
              {t("hero.biometricScan")}
            </div>

            <div className="absolute -left-12 bottom-1/4 bg-black/80 border border-primary/30 p-2 text-[10px] text-primary/60 font-bold vertical-text uppercase tracking-widest h-32 flex items-center rotate-180">
              {t("hero.uplinkNode")}
            </div>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default Hero;
