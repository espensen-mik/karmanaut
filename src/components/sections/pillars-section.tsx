import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarFeature } from "@/components/cards/pillar-card";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { siteConfig } from "@/lib/constants/site";

const pillars = [
  {
    title: "Rådgivning",
    icon: siteConfig.icons.raadgivning,
    description:
      "Karmanauterne har gennem mange år i reklamebranchen arbejdet sammen med et utal af kommuner, offentlige organisationer, interesse organisationer og private virksomheder. Vi rådgiver bl.a. om karma, rekruttering, kommunikation, fællesskab og trivsel ud fra karmanautiske principper.",
  },
  {
    title: "Workshops",
    icon: siteConfig.icons.workshops,
    description:
      "Vi har holdt workshops for flere hundrede mennesker og ganske få. I flotte omgivelser på herregårde og slotte. Og i uventede kreative rum, hvor alle sidder på gulvet. Vi hjælper dit team til at tale sammen. Om det svære og det sjove. Om dét der gør jer til et team. Og så hjælper vi jer til at løse svære opgaver sammen.",
  },
  {
    title: "Projektudvikling",
    icon: siteConfig.icons.projektudvikling,
    description:
      "Du har den løse idé, men mangler hjælp og sparring til at gøre projektet til virkelighed. Vi hjælper med både at udvikle koncept, sætte ord og billeder på og kan endda rådgive og assistere i fundraising. Vi har siddet med ved fødslen på masser af spændende projekter, fra Naturmødet i Hirtshals, til LykkeLiga og Aalborgs Plus Busser.",
  },
  {
    title: "Kreative Koncepter",
    icon: siteConfig.icons.kreativeKoncepter,
    description:
      "Om du mangler kreativ sparring til kampagner, projekter, events eller firmafester så hjælper vi processen i mål. Vi har arbejdet med kreativ konceptudvikling i 20 år og arbejder målrettet og fokuseret med idéudvikling.",
  },
  {
    title: "Fællesskab og team",
    icon: siteConfig.icons.faellesskab,
    description:
      "Fra vores arbejde med LykkeLiga har vi lært at fællesskab og teamfølelse decideret er livsdefinerende. Vi arbejder med at styrke fællesskab i virksomheder - bl.a. gennem spil og kreative workshops.",
  },
];

export function PillarsSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <FloatingPlanet className="absolute right-[6%] top-24 hidden opacity-60 lg:block" />
      <Container className="relative max-w-3xl">
        <PlanetBadge label="Karma" />
        <h2 className="mt-5 text-display-xl font-display text-navy">Karma er…</h2>

        <div className="mt-12 divide-y divide-navy/10">
          {pillars.map((pillar) => (
            <PillarFeature
              key={pillar.title}
              className="py-10 first:pt-0 last:pb-0"
              {...pillar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
