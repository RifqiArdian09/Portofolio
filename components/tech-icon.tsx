"use client";

import React from "react";
import { HTML5 } from "./icons/html";
import { CSS } from "./icons/css";
import { JavaScript } from "./icons/js";
import { Php } from "./icons/php";
import { Laravel } from "./icons/laravel";
import { MySQL } from "./icons/mysql";
import { Supabase } from "./icons/supabase";
import { TailwindCSS } from "./icons/tailwind";
import { Nextjs } from "./icons/nextjs";
import { React as ReactIcon } from "./icons/reactjs";
import { TypeScript } from "./icons/typescript";
import { Motion } from "./icons/motion";

const iconMap: Record<string, any> = {
    "HTML": HTML5,
    "HTML5": HTML5, 
    "CSS": CSS,
    "CSS3": CSS,
    "JAVASCRIPT": JavaScript,
    "JS": JavaScript,
    "PHP": Php,
    "LARAVEL": Laravel,
    "LARAVEL 12": Laravel,
    "MYSQL": MySQL,
    "SUPABASE": Supabase,
    "TAILWIND CSS": TailwindCSS,
    "TAILWINDCSS": TailwindCSS,
    "TAILWIND": TailwindCSS,
    "TAILWIND 4": TailwindCSS,
    "TAILWIND CSS 4": TailwindCSS,
    "NEXT.JS": Nextjs,
    "REACT": ReactIcon,
    "REACT 18": ReactIcon,
    "TYPESCRIPT": TypeScript,
    "MOTION": Motion,
    "FRAMER MOTION": Motion,
};

interface TechIconProps {
    name: string;
    className?: string;
}

export const TechIcon = ({ name, className }: TechIconProps) => {
    const Icon = iconMap[name.toUpperCase()];
    if (!Icon) return null;
    return <Icon className={className} />;
};
