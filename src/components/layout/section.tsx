"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

type SectionProps = {
  animate?: boolean;
  spacing?: "default" | "compact" | "hero";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({
  className,
  animate = true,
  spacing = "default",
  children,
  id,
}: SectionProps) {
  const spacingClass = {
    default: "py-28 lg:py-40",
    compact: "py-20 lg:py-28",
    hero: "py-32 lg:py-44",
  }[spacing];

  if (!animate) {
    return (
      <section id={id} className={cn("relative", spacingClass, className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("relative", spacingClass, className)}
    >
      {children}
    </motion.section>
  );
}
