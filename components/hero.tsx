"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
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
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00ff0010_1px,transparent_1px),linear-gradient(to_bottom,#00ff0010_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* Left: Typing Content & Commands */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-primary/50 text-xs tracking-widest uppercase">{t("hero.secureConnection")}</span>
            </div>

            {/* Typing Animation Block */}
            <div className="bg-black/80 border-l-2 border-primary p-6 mb-8 shadow-[0_0_20px_rgba(0,255,0,0.1)] min-h-[180px]">
              <div className="text-white text-sm md:text-base leading-relaxed whitespace-pre-line font-bold">
                {typedText}
                <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse align-middle"></span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              {t("hero.greeting")}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600 glitch-text" data-text={personalInfo.name}>
                <DecryptedText text={personalInfo.name.toUpperCase()} />
              </span>
            </h1>

            <p className="text-lg text-white mb-10 max-w-xl border-l border-primary/30 pl-4">
              {t("hero.bio")}
            </p>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="group relative px-8 py-3 bg-primary text-black font-bold uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t("hero.initializeProtocol")} <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                {/* Scanline effect on button */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[scanline_2s_linear_infinite] opacity-0 group-hover:opacity-20 pointer-events-none"></div>
              </Link>

              <Link href={personalInfo.cvPath} target="_blank" className="group px-8 py-3 border border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> {t("hero.downloadData")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: Hacker Style Profile Image with Parallax */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end prospective-1000">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]"
          >
            {/* Frame Layers */}
            <div className="absolute inset-0 border-2 border-primary/30 rotate-6 translate-z-10"></div>
            <div className="absolute inset-0 border-2 border-dashed border-primary/30 -rotate-3 translate-z-20"></div>

            {/* Main Image Container */}
            <div className="absolute inset-4 bg-black border border-primary overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)] translate-z-30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>
              <Image
                src={personalInfo.profileImage}
                alt="Hacker Profile"
                fill
                className="object-cover transition-all duration-500"
              />

              {/* HUD Overlays */}
              <div className="absolute top-4 left-4 flex gap-1 z-30">
                <div className="w-8 h-1 bg-primary animate-pulse"></div>
                <div className="w-2 h-1 bg-primary/50"></div>
                <div className="w-2 h-1 bg-primary/30"></div>
              </div>

              <div className="absolute bottom-4 right-4 text-[10px] bg-primary text-black px-2 py-1 font-bold z-30">
                {t("hero.targetLocked")}
              </div>

              {/* Glitch Effect Elements (CSS can be added globally if needed, simulated here with overlay) */}
              <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-100"></div>
            </div>

            {/* Floating Tech Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-black border border-primary p-2 shadow-lg z-40 translate-z-40"
            >
              <Terminal className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
