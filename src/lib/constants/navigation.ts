import { karmaPillars, getKarmaPillarHref } from "@/lib/constants/karma-pillars";

export type NavChildItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChildItem[];
};

export const karmaNavItems: readonly NavChildItem[] = karmaPillars.map(
  (pillar) => ({
    label: pillar.title,
    href: getKarmaPillarHref(pillar.slug),
  }),
);

export const navItems: readonly NavItem[] = [
  { label: "Forside", href: "/forside" },
  { label: "Karma er...", href: "/karma", children: karmaNavItems },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
];

export const ctaHref = "/kontakt";
export const ctaLabel = "Bliv Karmanaut";
