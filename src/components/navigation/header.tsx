"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { AccentButton } from "@/components/ui/button";
import { ctaHref, ctaLabel, navItems, type NavItem } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium tracking-wide text-navy/70 transition-all duration-200 hover:text-navy"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-navy/70 transition-all duration-200 hover:text-navy"
      >
        {item.label}
        <ChevronDown
          className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </Link>
      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[15rem] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-[12px] border border-navy/10 bg-cream py-2 shadow-[var(--shadow-soft)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-navy/75 transition-colors duration-200 hover:bg-cream-dark/40 hover:text-navy"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <AccentButton href={ctaHref}>{ctaLabel}</AccentButton>
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
