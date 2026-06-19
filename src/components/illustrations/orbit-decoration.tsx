"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

type OrbitDecorationProps = {
  className?: string;
};

export function OrbitDecoration({ className }: OrbitDecorationProps) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none text-navy/15", className)}
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    >
      <ellipse
        cx="100"
        cy="100"
        rx="78"
        ry="34"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="58"
        ry="78"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 8"
      />
    </motion.svg>
  );
}
