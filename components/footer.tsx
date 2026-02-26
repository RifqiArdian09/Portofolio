"use client";

import React from "react";
import { Github, Linkedin, Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";
import { motion } from "motion/react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">

          {/* Logo + Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-antonio text-3xl font-bold uppercase text-foreground">
                Rifqi<span className="text-accent">Ardian</span>
              </span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-xs">
              {t("hero.bio")}
            </p>
            <div className="flex items-center gap-1.5 text-foreground/30 text-xs font-medium">
              <Globe className="w-3.5 h-3.5" />
              Bengkulu, Indonesia
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-antonio text-sm font-bold uppercase tracking-wider text-foreground/40 mb-5">{t("footer.navigation")}</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: t("nav.home"), href: "/#beranda" },
                { label: t("nav.projects"), href: "/#projects" },
                { label: t("nav.certificates"), href: "/#certificates" },
                { label: t("nav.contact"), href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/50 text-sm font-medium hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className="font-antonio text-sm font-bold uppercase tracking-wider text-foreground/40 mb-5">{t("footer.connect")}</h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-foreground/50 text-sm font-medium hover:text-accent transition-colors w-fit"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="border-b border-transparent group-hover:border-accent">{social.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/30 text-xs font-medium">
            {t("footer.copyright").replace("{year}", currentYear.toString())}
          </p>
          <div className="flex items-center gap-2 text-foreground/30 text-xs font-medium">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{t("footer.openToOpportunities")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
