"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { PrimaryButton } from "@/components/ui/button";
import { ctaHref, ctaLabel, navItems } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link href="/forside" className="shrink-0">
            <Image
              src={siteConfig.logoHorizontal}
              alt={siteConfig.name}
              width={240}
              height={52}
              priority
              className="h-10 w-auto sm:h-11 lg:h-12"
            />
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Primær navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-navy/70 transition-all duration-200 hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center text-navy lg:hidden",
            )}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>
      <div className="editorial-rule mx-6 lg:mx-8" />
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
