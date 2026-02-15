"use client";

import React from "react";
import { Github, Linkedin, Mail, Twitter, Terminal, Power, Instagram } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 relative overflow-hidden font-mono border-t border-primary/20">

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="terminal-window">
          {/* Footer Header */}
          <div className="terminal-header">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
            </div>
            <div className="text-[9px] font-bold text-primary/60 tracking-[0.3em] uppercase">
              {t("footer.finalLogs")}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
              <span className="text-[8px] text-primary font-black uppercase tracking-tighter">{t("footer.uplinkLive")}</span>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Branding & Message */}
            <div className="space-y-8">
              <Link href="/" className="text-3xl md:text-4xl font-black tracking-tighter text-white block group">
                RIFQI<span className="text-primary group-hover:text-white transition-colors">ARDIAN</span>
                <span className="animate-blink ml-1 text-primary">_</span>
              </Link>

              <div className="space-y-4 max-w-md">
                <p className="text-zinc-500 text-sm leading-relaxed border-l border-primary/20 pl-4 italic">
                  // {t("footer.thankYou")}
                </p>
                <div className="flex flex-col gap-1 text-[10px] text-primary/40 font-bold uppercase tracking-widest">
                  <span>{t("footer.sessionSaved")}</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-[2px] bg-primary/20"></div>
                    <div className="w-12 h-[2px] bg-primary/10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Social Commands */}
            <div className="flex flex-col justify-center">
              <div className="text-[10px] text-primary/40 font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                {t("footer.socialUplinks")}
                <div className="h-[1px] flex-grow bg-primary/10"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Github, href: personalInfo.github, label: t("footer.github") },
                  { icon: Linkedin, href: personalInfo.linkedin, label: t("footer.linkedin") },
                  { icon: Instagram, href: personalInfo.instagram, label: t("footer.instagram") },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: t("footer.email") },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-4 border border-primary/20 bg-primary/5 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group overflow-hidden relative"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                    <span className="text-[10px] font-black tracking-widest relative z-10">{social.label}</span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-primary/40">
            <p className="flex items-center gap-2">
              <span className="text-primary/20">[SYS]</span>
              {t("footer.copyright").replace("{year}", currentYear.toString())}
            </p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                <span>{t("footer.statusStable")}</span>
              </div>
              <div className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors cursor-help">
                <Terminal className="w-3 h-3" />
                <span>{t("footer.activeProtocol")}: v4.2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
