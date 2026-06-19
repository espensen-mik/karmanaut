"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

const stars = [
  { cx: 20, cy: 24, size: 10, delay: 0 },
  { cx: 64, cy: 12, size: 8, delay: 0.5 },
  { cx: 108, cy: 36, size: 9, delay: 1 },
  { cx: 148, cy: 18, size: 7, delay: 1.5 },
  { cx: 36, cy: 52, size: 6, delay: 0.8 },
];

function FourPointStar({
  cx,
  cy,
  size,
  delay,
}: {
  cx: number;
  cy: number;
  size: number;
  delay: number;
}) {
  return (
    <motion.path
      d={`M${cx} ${cy - size} L${cx + size * 0.28} ${cy - size * 0.28} L${cx + size} ${cy} L${cx + size * 0.28} ${cy + size * 0.28} L${cx} ${cy + size} L${cx - size * 0.28} ${cy + size * 0.28} L${cx - size} ${cy} L${cx - size * 0.28} ${cy - size * 0.28} Z`}
      fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

type StarClusterProps = {
  className?: string;
};

export function StarCluster({ className }: StarClusterProps) {
  return (
    <svg
      viewBox="0 0 170 70"
      className={cn("pointer-events-none text-coral", className)}
      aria-hidden="true"
    >
      {stars.map((star, index) => (
        <FourPointStar key={index} {...star} />
      ))}
    </svg>
  );
}
