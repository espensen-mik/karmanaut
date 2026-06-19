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
          className="overflow-hidden bg-cream lg:hidden"
        >
          <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Mobil navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "px-2 py-3 text-lg font-medium text-navy/75 transition-colors hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" className="mt-4 w-full">
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
