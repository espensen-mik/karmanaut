"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { PrimaryButton } from "@/components/ui/button";
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
          transition={{ duration: 0.2 }}
          className="overflow-hidden bg-cream lg:hidden"
        >
          <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Mobil navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "px-2 py-3 text-lg font-medium text-navy/75 transition-all duration-200 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <PrimaryButton href={ctaHref} className="mt-4 w-full">
              {ctaLabel}
            </PrimaryButton>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
