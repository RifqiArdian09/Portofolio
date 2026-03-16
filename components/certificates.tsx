"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { certificates } from "@/lib/data";
import { Award, X, Maximize2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const Certificates = () => {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;
            
            let scrollTo;
            if (direction === "left") {
                scrollTo = scrollLeft - scrollAmount;
                if (scrollTo < -10) scrollTo = scrollWidth; // Gap to end if at start
            } else {
                scrollTo = scrollLeft + scrollAmount;
                if (scrollLeft + clientWidth >= scrollWidth - 10) scrollTo = 0; // Loop to start
            }
            
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    // Auto scroll logic
    useEffect(() => {
        if (selectedCert || isHovered) return;

        const interval = setInterval(() => {
            scroll("right");
        }, 3000);

        return () => clearInterval(interval);
    }, [selectedCert, isHovered]);

    return (
        <section className="py-24 overflow-hidden">
            {/* Section Header */}
            <div className="mb-16 px-4 md:px-0">
                <p className="section-label mb-4">{t("certificates.directory")}</p>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-antonio text-5xl md:text-7xl font-bold uppercase text-foreground leading-tight"
                    >
                        {t("certificates.verified")}<br />
                        <span className="text-foreground/20">{t("certificates.title")}{t("certificates.titleHighlight")}</span>
                    </motion.h2>
                    <div className="flex items-center gap-4">
                        <div className="accent-label shrink-0">
                            <Award className="w-3.5 h-3.5" />
                            {certificates.length} Certificates
                        </div>
                        {/* Navigation Buttons */}
                        <div className="hidden md:flex gap-2">
                             <button 
                                onClick={() => scroll("left")}
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all group/btn"
                                aria-label="Previous certificate"
                             >
                                <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
                             </button>
                             <button 
                                onClick={() => scroll("right")}
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all group/btn"
                                aria-label="Next certificate"
                             >
                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    ref={scrollContainerRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 pt-4 px-4 md:px-0"
                    style={{ 
                        msOverflowStyle: 'none', 
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedCert(cert)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group portavia-card cursor-pointer overflow-hidden transform-gpu min-w-[300px] md:min-w-[420px] snap-start"
                        >
                            {/* Thumbnail */}
                            <div className="relative overflow-hidden bg-card aspect-[1.4/1]">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 300px, 420px"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-4 rounded-full bg-accent text-accent-foreground shadow-2xl">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Visual fading edge at the end for hint of more content */}
                <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-xl"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative max-w-3xl w-full rounded-2xl bg-card border border-border overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-foreground/10 hover:bg-accent hover:text-accent-foreground text-foreground transition-all duration-300 shadow-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col lg:flex-row min-h-[400px]">
                                {/* Image Container */}
                                <div className="flex-1 bg-neutral-900/50 flex items-center justify-center p-4">
                                    <div className="relative w-full aspect-[4/3] max-h-[60vh]">
                                        <Image
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Details Panel */}
                                <div className="w-full lg:w-72 p-6 md:p-8 flex flex-col justify-between bg-card">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                                            <ShieldCheck className="w-4 h-4" />
                                            {t("certificates.verified")}
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-foreground/30 text-[9px] font-black uppercase tracking-[0.3em]">{t("certificates.certName")}</p>
                                            <h3 className="font-antonio text-xl md:text-2xl font-bold uppercase text-foreground leading-tight">
                                                {selectedCert.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-foreground/30 text-[9px] font-black uppercase tracking-[0.3em]">{t("certificates.issuedBy")}</p>
                                            <p className="font-antonio text-base font-bold text-foreground/80 uppercase">{selectedCert.issuer}</p>
                                        </div>

                                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10 flex items-start gap-3">
                                            <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest leading-relaxed">
                                                {t("certificates.verifiedMainframe")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="mt-8 pt-6 border-t border-border/50">
                                        <button 
                                            onClick={() => setSelectedCert(null)}
                                            className="w-full py-3 rounded-full border border-foreground/10 hover:border-accent hover:text-accent font-bold uppercase tracking-widest text-[10px] transition-all duration-300"
                                        >
                                            Close
                                        </button>
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

