"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, User, MessageSquare, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/language-context";
import { personalInfo } from "@/lib/data";

const ContactForm = () => {
    const { t } = useLanguage();
    const [pending, setPending] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        const waMessage = `Halo Rifqi!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
        const waUrl = `https://wa.me/${personalInfo.whatsapp}?text=${waMessage}`;

        // Simulate sending pause
        setTimeout(() => {
            setPending(false);
            window.open(waUrl, "_blank");
        }, 800);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left side: Heading */}
                <div className="space-y-8">
                    <div>
                        <p className="section-label mb-4">{t("footer.getInTouch")}</p>
                        <h2 className="font-antonio text-5xl md:text-7xl font-bold uppercase text-foreground leading-tight">
                            {t("footer.title")} <br />
                            <span className="text-accent">{t("footer.titleHighlight")}</span>
                        </h2>
                    </div>

                    <p className="text-foreground/50 text-lg leading-relaxed max-w-md">
                        {t("footer.contactDescription")}
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">{t("footer.emailMe")}</p>
                                <p className="font-bold text-foreground">{personalInfo.email}</p>
                            </div>
                        </div>

                        <a
                            href={`https://wa.me/${personalInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">{t("footer.whatsapp")}</p>
                                <p className="font-bold text-foreground">+{personalInfo.whatsapp}</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="portavia-card p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block mx-1">{t("footer.fullName")}</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="pl-12 bg-background/50 border-border focus:border-accent transition-colors h-14 rounded-xl"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block mx-1">{t("footer.emailAddress")}</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                        className="pl-12 bg-background/50 border-border focus:border-accent transition-colors h-14 rounded-xl"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2 block mx-1">{t("footer.message")}</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-foreground/30" />
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        className="pl-12 pt-5 bg-background/50 border-border focus:border-accent transition-colors min-h-[160px] rounded-xl"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={pending}
                            className="pill-button w-full justify-center py-4 font-bold text-base disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {pending ? t("footer.redirecting") : t("footer.sendViaWa")}
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
