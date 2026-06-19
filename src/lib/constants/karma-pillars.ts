import { siteConfig } from "@/lib/constants/site";

export const karmaPillars = [
  {
    slug: "raadgivning",
    title: "Rådgivning",
    icon: siteConfig.icons.raadgivning,
    description:
      "Karmanauterne har gennem mange år i reklamebranchen arbejdet sammen med et utal af kommuner, offentlige organisationer, interesse organisationer og private virksomheder. Vi rådgiver bl.a. om karma, rekruttering, kommunikation, fællesskab og trivsel ud fra karmanautiske principper.",
  },
  {
    slug: "workshops",
    title: "Workshops",
    icon: siteConfig.icons.workshops,
    description:
      "Vi har holdt workshops for flere hundrede mennesker og ganske få. I flotte omgivelser på herregårde og slotte. Og i uventede kreative rum, hvor alle sidder på gulvet. Vi hjælper dit team til at tale sammen. Om det svære og det sjove. Om dét der gør jer til et team. Og så hjælper vi jer til at løse svære opgaver sammen.",
  },
  {
    slug: "projektudvikling",
    title: "Projektudvikling",
    icon: siteConfig.icons.projektudvikling,
    description:
      "Du har den løse idé, men mangler hjælp og sparring til at gøre projektet til virkelighed. Vi hjælper med både at udvikle koncept, sætte ord og billeder på og kan endda rådgive og assistere i fundraising. Vi har siddet med ved fødslen på masser af spændende projekter, fra Naturmødet i Hirtshals, til LykkeLiga og Aalborgs Plus Busser.",
  },
  {
    slug: "kreative-koncepter",
    title: "Kreative Koncepter",
    icon: siteConfig.icons.kreativeKoncepter,
    description:
      "Om du mangler kreativ sparring til kampagner, projekter, events eller firmafester så hjælper vi processen i mål. Vi har arbejdet med kreativ konceptudvikling i 20 år og arbejder målrettet og fokuseret med idéudvikling.",
  },
  {
    slug: "faellesskab-og-team",
    title: "Fællesskab og team",
    icon: siteConfig.icons.faellesskab,
    description:
      "Fra vores arbejde med LykkeLiga har vi lært at fællesskab og teamfølelse decideret er livsdefinerende. Vi arbejder med at styrke fællesskab i virksomheder - bl.a. gennem spil og kreative workshops.",
  },
] as const;

export type KarmaPillar = (typeof karmaPillars)[number];

export function getKarmaPillarHref(slug: KarmaPillar["slug"]) {
  return `/karma/${slug}`;
}

export function getKarmaPillarBySlug(slug: string) {
  return karmaPillars.find((pillar) => pillar.slug === slug);
}

export const karmaPillarsWithHref = karmaPillars.map((pillar) => ({
  ...pillar,
  href: getKarmaPillarHref(pillar.slug),
}));
