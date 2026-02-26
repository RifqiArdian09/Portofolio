"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { certificates } from "@/lib/data";
import { Award, X, Download, Maximize2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const Certificates = () => {
    const { t, language } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-24">
            {/* Section Header */}
            <div className="mb-16">
                <p className="section-label mb-4">{t("certificates.directory")}</p>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-antonio text-5xl md:text-7xl font-bold uppercase text-foreground leading-tight"
                    >
                        {t("certificates.verified")}<br />
                        <span className="text-foreground/20">{t("certificates.title")}{t("certificates.titleHighlight")}</span>
                    </motion.h2>
                    <div className="accent-label shrink-0">
                        <Award className="w-3.5 h-3.5" />
                        {certificates.length} Certificates
                    </div>
                </div>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        onClick={() => setSelectedCert(cert)}
                        className="group portavia-card cursor-pointer overflow-hidden"
                    >
                        {/* Thumbnail */}
                        <div className="relative overflow-hidden bg-card">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                width={800}
                                height={600}
                                unoptimized
                                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-full bg-accent text-accent-foreground">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-5">
                            <div className="flex items-center gap-1.5 mb-3 text-accent text-xs font-semibold uppercase tracking-wider">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                {t("certificates.verified")}
                            </div>
                            <h3 className="font-antonio text-lg font-bold uppercase text-foreground group-hover:text-accent transition-colors leading-tight mb-3">
                                {cert.title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/40 text-xs font-medium">{cert.issuer}</span>
                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                    <Award className="w-4 h-4 text-accent group-hover:text-accent-foreground" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/90 backdrop-blur-md"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.92, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.92, y: 30 }}
                            className="relative max-w-4xl w-full rounded-2xl bg-card border border-border overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="flex-1 bg-card/50">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        width={1200}
                                        height={900}
                                        unoptimized
                                        className="w-full h-auto block"
                                    />
                                </div>

                                {/* Details Panel */}
                                <div className="w-full lg:w-80 p-8 flex flex-col justify-between gap-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                                            <ShieldCheck className="w-4 h-4" />
                                            {t("certificates.verified")}
                                        </div>
                                        <div>
                                            <p className="text-foreground/40 text-xs font-semibold uppercase tracking-wider mb-2">{t("certificates.certName")}</p>
                                            <h3 className="font-antonio text-2xl font-bold uppercase text-foreground leading-tight">
                                                {selectedCert.title}
                                            </h3>
                                        </div>
                                        <div>
                                            <p className="text-foreground/40 text-xs font-semibold uppercase tracking-wider mb-2">{t("certificates.issuedBy")}</p>
                                            <p className="font-bold text-foreground text-lg">{selectedCert.issuer}</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10 flex items-center gap-3">
                                            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                                            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                                                {t("certificates.verifiedMainframe")}
                                            </span>
                                        </div>
                                    </div>

                                    <a
                                        href={selectedCert.image}
                                        download
                                        target="_blank"
                                        className="pill-button w-full justify-center font-bold"
                                    >
                                        <Download className="w-4 h-4" />
                                        {t("certificates.download")}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
