"use client";

import { useEffect, useState, useRef } from "react";

interface Column {
    id: number;
    x: number;
    chars: string[];
    speed: number;
    opacity: number;
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

        // Create initial columns
        const columnCount = Math.floor(window.innerWidth / 25);
        const initialColumns: Column[] = Array.from({ length: columnCount }).map((_, i) => ({
            id: i,
            x: i * 25,
            chars: Array.from({ length: 15 }).map(() => (Math.random() > 0.5 ? "0" : "1")),
            speed: 1 + Math.random() * 2,
            opacity: 0.03 + Math.random() * 0.07
        }));

        setColumns(initialColumns);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const [yOffsets, setYOffsets] = useState<number[]>([]);

    useEffect(() => {
        if (columns.length > 0) {
            setYOffsets(new Array(columns.length).fill(-100));
        }
    }, [columns]);

    useEffect(() => {
        const animate = () => {
            setYOffsets((prev) =>
                prev.map((y, i) => {
                    const speed = columns[i]?.speed || 1;
                    const newY = y + speed;
                    return newY > dimensions.height ? -Math.random() * 500 : newY;
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
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] opacity-40 select-none" aria-hidden="true">
            {columns.map((col, i) => (
                <div
                    key={col.id}
                    className="absolute text-[10px] font-mono whitespace-nowrap leading-none flex flex-col items-center"
                    style={{
                        left: col.x,
                        top: yOffsets[i],
                        opacity: col.opacity,
                        color: "var(--primary)",
                    }}
                >
                    {col.chars.map((char, index) => (
                        <span key={index} className="block mb-1">
                            {char}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};
