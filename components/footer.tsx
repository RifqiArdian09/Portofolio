"use client";

import React from "react";
import { Github, Linkedin, Mail, Instagram, Globe, ArrowUpRight, Send } from "lucide-react";
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
    <footer id="footer" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        {/* WhatsApp Urgent Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-card border-2 border-accent/10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-xl"
        >
          {/* Internal Tech Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="flex flex-col lg:flex-row items-center gap-10 z-10 relative w-full lg:w-auto">
            {/* WhatsApp Icon with Pulse Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px 2px rgba(37,211,102,0.15)",
                    "0 0 40px 10px rgba(37,211,102,0.4)",
                    "0 0 20px 2px rgba(37,211,102,0.15)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-16 h-16 md:w-20 md:h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20 z-10"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl lg:text-3xl font-bold tracking-tight mb-2 text-card-foreground font-antonio uppercase">{t("footer.help_title")}</h2>
              <p className="text-muted-foreground text-base lg:text-lg font-medium max-w-md">
                {t("footer.help_description")}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="z-10 w-full lg:w-auto">
            <Link
              href="https://wa.me/+6285182911840"
              target="_blank"
              className="inline-flex items-center justify-center w-full lg:w-auto px-4 py-3.5 lg:px-10 lg:py-4 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:border-[#25D366] dark:hover:text-black font-bold rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-tl-md rounded-br-md transition-all duration-500 group whitespace-nowrap hover:rounded-2xl"
            >
              <span className="mr-2 text-sm sm:text-base">{t("footer.whatsapp_btn")}</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

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
                { label: t("nav.contact"), href: "/#footer" },
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
