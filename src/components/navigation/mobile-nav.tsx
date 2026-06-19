"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ctaHref, ctaLabel, navItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden border-t border-cream-dark/60 bg-cream lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobil navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-cream-dark/40 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" className="mt-3 w-full">
              <Link href={ctaHref} onClick={onClose}>
                {ctaLabel}
              </Link>
            </Button>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
