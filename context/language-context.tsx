"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import portfolioId from "@/translations/portfolio-id.json";
import portfolioEn from "@/translations/portfolio-en.json";

type Translations = typeof portfolioId;
type Language = "id" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const translations: Record<Language, Translations> = {
    id: portfolioId,
    en: portfolioEn
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("id");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "id" || savedLang === "en")) {
            setLanguage(savedLang);
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("language", language);
            document.documentElement.lang = language;
        }
    }, [language, isLoaded]);

    const t = (path: string) => {
        const keys = path.split(".");
        let result: any = translations[language];

        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return path; // Fallback to key path if not found
            }
        }

        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
