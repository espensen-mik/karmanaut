"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

type FloatingPlanetProps = {
  className?: string;
  size?: number;
};

export function FloatingPlanet({ className, size = 48 }: FloatingPlanetProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none text-navy/25", className)}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="24" cy="24" r="10" fill="currentColor" opacity="0.5" />
      <ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="6"
        stroke="currentColor"
        strokeWidth="1.25"
        transform="rotate(-20 24 24)"
      />
    </motion.svg>
  );
}
