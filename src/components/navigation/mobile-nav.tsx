"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { AccentButton } from "@/components/ui/button";
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
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="flex flex-col gap-2">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="px-2 py-3 text-lg font-medium text-navy transition-all duration-200 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                  <div className="ml-2 flex flex-col gap-1 border-l border-navy/10 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="px-2 py-2 text-base text-navy/70 transition-all duration-200 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              ),
            )}
            <AccentButton href={ctaHref} className="mt-4 w-full">
              {ctaLabel}
            </AccentButton>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
