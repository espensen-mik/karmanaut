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
    default: "py-20 lg:py-28",
    compact: "py-14 lg:py-20",
    hero: "py-24 lg:py-32",
  }[spacing];

  if (!animate) {
    return (
      <section id={id} className={cn(spacingClass, className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(spacingClass, className)}
    >
      {children}
    </motion.section>
  );
}
