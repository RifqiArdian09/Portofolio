"use client";

import React from "react";
import { Github, Linkedin, Mail, Instagram, Send, Globe } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 border-t border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side - Identity */}
          <div className="space-y-12">
            <Link href="/" className="text-5xl md:text-7xl font-black tracking-[0.1em] text-foreground lowercase italic">
              rifqi<span className="text-accent">ardian</span>.
            </Link>

            <p className="text-foreground/50 text-xl font-medium max-w-xl leading-relaxed tracking-wide italic lowercase">
              {t("footer.thankYou")}
            </p>

            <div className="flex flex-wrap gap-8">
              {[
                { icon: Github, href: personalInfo.github, label: "/github" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "/linkedin" },
                { icon: Instagram, href: personalInfo.instagram, label: "/instagram" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "/email" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-colors"
                >
                  <social.icon className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="border-b border-transparent group-hover:border-accent">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Status & Call to Action */}
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-px bg-accent"></div>
                <h3 className="text-xl font-black uppercase tracking-[0.4em] text-accent">
                  {t("footer.socialUplinks")}
                </h3>
              </div>

              <div className="space-y-8 pl-12">
                <p className="text-foreground/40 font-medium leading-relaxed italic text-lg">{t("hero.bio")}</p>

                <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.4em] opacity-30 uppercase">
                  <Globe className="w-4 h-4" />
                  <span>Based in Bengkulu, ID // 3.78° S, 102.26° E</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-foreground/20 italic">
              <p>© {currentYear} Rifqi Ardian // ALL_RIGHTS_RESERVED</p>
              <div className="w-2 h-2 bg-accent animate-pulse shadow-[0_0_10px_var(--accent)]"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
