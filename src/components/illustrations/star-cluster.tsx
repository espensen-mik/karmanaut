"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

const stars = [
  { x: 12, y: 18, size: 3, delay: 0 },
  { x: 48, y: 8, size: 2, delay: 0.4 },
  { x: 72, y: 32, size: 2.5, delay: 0.8 },
  { x: 88, y: 12, size: 2, delay: 1.2 },
  { x: 28, y: 42, size: 2, delay: 0.6 },
];

type StarClusterProps = {
  className?: string;
};

export function StarCluster({ className }: StarClusterProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={cn("pointer-events-none text-coral/50", className)}
      aria-hidden="true"
    >
      {stars.map((star, index) => (
        <motion.circle
          key={index}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="currentColor"
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
