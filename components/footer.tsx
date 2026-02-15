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
    <footer id="contact" className="bg-black border-t border-primary/50 pt-16 pb-8 font-mono relative overflow-hidden">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-10"></div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Terminal Output */}
          <div>
            <div className="flex items-center gap-2 text-primary font-bold mb-6">
              <Terminal className="w-5 h-5" />
              <span className="tracking-widest uppercase">{t("footer.systemShutdown")}</span>
            </div>
            <div className="font-sans text-muted-foreground max-w-md space-y-2 mb-8">
              <p>{t("footer.thankYou")}</p>
              <p>{t("footer.sessionSaved")}</p>
              <p>{t("footer.contactProtocol")}</p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-black italic tracking-tighter text-white block group">
                RIFQI<span className="text-primary group-hover:text-white transition-colors">ARDIAN</span>
                <span className="animate-pulse ml-1 text-primary">_</span>
              </Link>
            </div>
          </div>

          {/* Right: Commands / Links */}
          <div className="flex flex-col md:items-end justify-center">
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
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
                  className="flex items-center gap-3 px-4 py-3 border border-primary/30 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/50">
          <p>
            {t("footer.copyright").replace("{year}", currentYear.toString())}
          </p>
          <div className="flex items-center gap-2 text-primary/80 hover:text-primary cursor-pointer transition-colors">
            <Power className="w-3 h-3" />
            <span>{t("footer.terminateSession")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
