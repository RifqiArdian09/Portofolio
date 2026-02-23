"use client";

import { useEffect, useState, useRef } from "react";

interface Column {
    id: number;
    x: number;
    chars: string[];
    speed: number;
    opacity: number;
    isAccent: boolean;
}

export const BinaryBackground = () => {
    const [columns, setColumns] = useState<Column[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const requestRef = useRef<number>(null);

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", updateDimensions);
        updateDimensions();

        const columnCount = Math.floor(window.innerWidth / 30);
        const characters = "010101ABCDEF#<>/_";

        const initialColumns: Column[] = Array.from({ length: columnCount }).map((_, i) => ({
            id: i,
            x: i * 30,
            chars: Array.from({ length: 20 }).map(() => characters[Math.floor(Math.random() * characters.length)]),
            speed: 2 + Math.random() * 4,
            opacity: Math.random() > 0.8 ? 0.08 : 0.03,
            isAccent: Math.random() > 0.95
        }));

        setColumns(initialColumns);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const [yOffsets, setYOffsets] = useState<number[]>([]);

    useEffect(() => {
        if (columns.length > 0) {
            setYOffsets(new Array(columns.length).fill(0).map(() => -Math.random() * 1000));
        }
    }, [columns]);

    useEffect(() => {
        const animate = () => {
            setYOffsets((prev) =>
                prev.map((y, i) => {
                    const speed = columns[i]?.speed || 2;
                    const newY = y + speed;
                    return newY > dimensions.height ? -200 : newY;
                })
            );
            requestRef.current = requestAnimationFrame(animate);
        };

        if (dimensions.height > 0) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [dimensions, columns]);

    if (dimensions.width === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] select-none" aria-hidden="true">
            {columns.map((col, i) => (
                <div
                    key={col.id}
                    className="absolute text-[12px] font-mono leading-none flex flex-col items-center transition-opacity duration-1000"
                    style={{
                        left: col.x,
                        top: yOffsets[i],
                        opacity: col.opacity,
                        color: col.isAccent ? "#e1ff01" : "white",
                        textShadow: col.isAccent ? "0 0 8px #e1ff01" : "none"
                    }}
                >
                    {col.chars.map((char, index) => (
                        <span key={index} className="block mb-2 font-black">
                            {char}
                        </span>
                    ))}
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
    );
};
