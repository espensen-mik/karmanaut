"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

type OrbitDecorationProps = {
  className?: string;
  animate?: boolean;
};

export function OrbitDecoration({
  className,
  animate = true,
}: OrbitDecorationProps) {
  const svg = (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-full text-navy/20"
      aria-hidden="true"
    >
      <ellipse
        cx="100"
        cy="100"
        rx="78"
        ry="34"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="58"
        ry="78"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 10"
      />
      <circle cx="168" cy="88" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="42" cy="128" r="3" fill="currentColor" opacity="0.25" />
    </svg>
  );

  if (!animate) {
    return (
      <div className={cn("pointer-events-none", className)} aria-hidden="true">
        {svg}
      </div>
    );
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      className={cn("pointer-events-none origin-center", className)}
      aria-hidden="true"
    >
      {svg}
    </motion.div>
  );
}
