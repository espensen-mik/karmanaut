"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { useKarmaModal } from "@/components/karma/karma-modal-provider";
import { AccentButton } from "@/components/ui/button";
import { ctaLabel, navItems, type NavItem } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

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
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="inline-flex items-center">
        <Link
          href={item.href}
          className="text-sm font-medium tracking-wide text-navy/70 transition-all duration-200 hover:text-navy"
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`Åbn ${item.label} menu`}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-9 items-center justify-center rounded-[8px] text-navy/70 transition-colors duration-200 hover:bg-navy/5 hover:text-navy"
        >
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[15rem] pt-3 transition-all duration-200",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="rounded-[12px] border border-navy/10 bg-cream py-2 shadow-[var(--shadow-soft)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
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
  const { openModal } = useKarmaModal();

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
            <AccentButton type="button" onClick={openModal}>
              {ctaLabel}
            </AccentButton>
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
