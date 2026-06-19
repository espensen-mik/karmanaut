import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarFeature } from "@/components/cards/pillar-card";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { OrbitBridge } from "@/components/illustrations/orbit-bridge";

const pillars = [
  {
    title: "Rådgivning",
    description:
      "Karmanauterne har gennem mange år i reklamebranchen arbejdet sammen med et utal af kommuner, offentlige organisationer, interesse organisationer og private virksomheder. Vi rådgiver bl.a. om karma, rekruttering, kommunikation, fællesskab og trivsel ud fra karmanautiske principper.",
    align: "left" as const,
  },
  {
    title: "Workshops",
    description:
      "Vi har holdt workshops for flere hundrede mennesker og ganske få. I flotte omgivelser på herregårde og slotte. Og i uventede kreative rum, hvor alle sidder på gulvet. Vi hjælper dit team til at tale sammen. Om det svære og det sjove. Om dét der gør jer til et team. Og så hjælper vi jer til at løse svære opgaver sammen.",
    align: "right" as const,
  },
  {
    title: "Projektudvikling",
    description:
      "Du har den løse idé, men mangler hjælp og sparring til at gøre projektet til virkelighed. Vi hjælper med både at udvikle koncept, sætte ord og billeder på og kan endda rådgive og assistere i fundraising. Vi har siddet med ved fødslen på masser af spændende projekter, fra Naturmødet i Hirtshals, til LykkeLiga og Aalborgs Plus Busser.",
    align: "left" as const,
  },
  {
    title: "Kreative Koncepter",
    description:
      "Om du mangler kreativ sparring til kampagner, projekter, events eller firmafester så hjælper vi processen i mål. Vi har arbejdet med kreativ konceptudvikling i 20 år og arbejder målrettet og fokuseret med idéudvikling.",
    align: "right" as const,
  },
];

export function PillarsSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <OrbitBridge />
      <FloatingPlanet className="absolute right-[6%] top-24 hidden opacity-60 lg:block" />
      <Container className="relative">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <h2 className="text-display-xl font-display text-navy">Karma er…</h2>
        </div>
        <div className="max-w-5xl">
          {pillars.map((pillar, index) => (
            <PillarFeature
              key={pillar.title}
              index={index + 1}
              {...pillar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
