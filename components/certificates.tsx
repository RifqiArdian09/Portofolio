"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { certificates } from "@/lib/data";
import { Award, CheckCircle, X, Download, Maximize2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const Certificates = () => {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-24">
            <div className="flex flex-col items-center text-center mb-20 px-4">
                <div className="inline-flex items-center gap-3 px-4 py-3 border-2 border-foreground hover:bg-accent transition-all duration-200 bg-accent text-black text-xs font-black uppercase tracking-[0.2em] mb-8">
                    <Award className="w-4 h-4" />
                    {t("certificates.directory")}
                </div>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none"
                >
                    {t("certificates.verified")} <br />
                    <span className="text-foreground/20 italic">{t("certificates.title")}{t("certificates.titleHighlight")}</span>
                </motion.h2>
                <p className="text-foreground/60 max-w-2xl text-lg font-medium border-l-2 border-accent pl-6">
                    {t("certificates.scanning").replace("{count}", certificates.length.toString())}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => setSelectedCert(cert)}
                        className="brutalist-card group cursor-pointer flex flex-col h-full overflow-visible"
                    >
                        <div className="relative aspect-[1.4/1] overflow-hidden border-2 border-foreground -m-4 md:-m-5 mb-6 bg-foreground">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                unoptimized
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-accent p-2 border-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-5 h-5 text-black" />
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col">
                            <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-accent">
                                <ShieldCheck className="w-4 h-4" />
                                {t("certificates.verified")}
                            </div>

                            <h3 className="text-2xl font-black uppercase leading-tight mb-8 group-hover:text-accent transition-colors">
                                {cert.title}
                            </h3>

                            <div className="mt-auto flex justify-between items-end pt-6 border-t-2 border-foreground/10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-foreground/40 uppercase font-black tracking-[0.1em]">{t("certificates.issuerUnit")}</span>
                                    <span className="text-sm font-bold">{cert.issuer}</span>
                                </div>
                                <div className="bg-foreground text-background p-2">
                                    <Award className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificate Modal - Industrial Design */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            className="relative max-w-4xl w-full border-4 border-foreground bg-background shadow-[12px_12px_0px_var(--border)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-6 -right-6 p-4 bg-accent border-4 border-foreground text-black hover:bg-foreground hover:text-accent transition-all z-50"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="flex-1 relative aspect-[1.4/1] lg:aspect-auto border-b-4 lg:border-b-0 lg:border-r-4 border-foreground bg-foreground">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        unoptimized
                                        className="object-contain p-4 md:p-8"
                                    />
                                </div>

                                <div className="w-full lg:w-96 p-8 md:p-12 flex flex-col justify-between bg-accent/5">
                                    <div className="space-y-12">
                                        <div>
                                            <div className="text-xs text-foreground/40 uppercase font-black tracking-[0.3em] mb-4">Certificate Name</div>
                                            <div className="text-3xl font-black uppercase tracking-tighter leading-none">{selectedCert.title}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-foreground/40 uppercase font-black tracking-[0.3em] mb-4">Issuer</div>
                                            <div className="text-2xl font-bold uppercase">{selectedCert.issuer}</div>
                                        </div>
                                        <div className="bg-foreground text-background p-4 border-2 border-foreground">
                                            <div className="flex items-center gap-4">
                                                <ShieldCheck className="w-6 h-6 text-accent" />
                                                <div className="text-xs font-black uppercase tracking-widest">{t("certificates.verifiedMainframe")}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-16 space-y-4">
                                        <a
                                            href={selectedCert.image}
                                            download
                                            target="_blank"
                                            className="brutalist-button w-full flex items-center justify-center gap-4 text-base"
                                        >
                                            <Download className="w-6 h-6" /> {t("certificates.download")}
                                        </a>
                                    </div>
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
