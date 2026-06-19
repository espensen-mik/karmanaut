"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Button } from "@/components/ui/button";
import { ctaHref, ctaLabel, navItems } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark/60 bg-cream/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/forside" className="shrink-0">
            <Image
              src={siteConfig.logoHorizontal}
              alt={siteConfig.name}
              width={180}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primær navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="accent" size="sm">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border border-cream-dark text-navy lg:hidden",
            )}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
