"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { certificates } from "@/lib/data";
import { Award, ExternalLink, FileText, CheckCircle, X, Download, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const Certificates = () => {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className="py-24 relative overflow-hidden font-mono border-t border-primary/20">

            <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-block border border-primary/50 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {t("certificates.directory")}
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
                    >
                        {t("certificates.verified")} <span className="text-primary">{t("certificates.title")}{t("certificates.titleHighlight")}</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl text-sm">
                        {">"} Scanning database for verified credentials... [FOUND {certificates.length}]
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative bg-black border border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer"
                        >
                            {/* Top decorative line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            <div className="p-1 border-b border-primary/20">
                                <div className="relative aspect-[1.5/1] overflow-hidden bg-primary/5">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />

                                    {/* Grid Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-50"></div>

                                    <div className="absolute top-2 right-2 bg-black border border-primary p-1">
                                        <Maximize2 className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-3 text-[10px] text-primary/60 font-bold uppercase tracking-wider">
                                    <CheckCircle className="w-3 h-3 text-primary" />
                                    {t("certificates.verified")}
                                    <span className="w-full h-[1px] bg-primary/20 ml-2"></span>
                                </div>
                                <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-primary/10">
                                    <span className="text-xs text-muted-foreground uppercase font-bold">
                                        {t("certificates.issuer")}: {cert.issuer}
                                    </span>
                                    <FileText className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-5xl w-full bg-black border border-primary overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Terminal Header */}
                            <div className="h-10 bg-primary/10 border-b border-primary/30 flex items-center px-4 justify-between">
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest truncate max-w-[200px] md:max-w-none">
                                        VIEW_CREDENTIAL: {selectedCert.title}.doc
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-1 hover:bg-red-500 hover:text-black transition-colors text-primary"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-4 md:p-6 flex flex-col md:flex-row gap-8">
                                <div className="flex-1 relative aspect-video border border-primary/20">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="w-full md:w-64 flex flex-col justify-between py-2">
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-[10px] text-primary/60 uppercase font-bold mb-1">Title</div>
                                            <div className="text-white font-bold">{selectedCert.title}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-primary/60 uppercase font-bold mb-1">Issuer</div>
                                            <div className="text-white font-bold">{selectedCert.issuer}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-primary/60 uppercase font-bold mb-1">Status</div>
                                            <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
                                                <CheckCircle className="w-3 h-3" /> VERIFIED_ON_MAINFRAME
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-3">
                                        <a
                                            href={selectedCert.image}
                                            download
                                            target="_blank"
                                            className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest bg-primary text-black py-3 hover:bg-white transition-colors"
                                        >
                                            <Download className="w-4 h-4" /> Download Certificate
                                        </a>
                                        <button
                                            onClick={() => setSelectedCert(null)}
                                            className="w-full text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors py-2"
                                        >
                                            :: Close_Preview
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative scanline on modal */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-primary animate-pulse opacity-30"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
