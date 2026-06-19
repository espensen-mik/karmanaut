import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarFeature } from "@/components/cards/pillar-card";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { PlanetBadge } from "@/components/illustrations/planet-badge";

const pillars = [
  {
    title: "Rådgivning",
    description:
      "Karmanauterne har gennem mange år i reklamebranchen arbejdet sammen med et utal af kommuner, offentlige organisationer, interesse organisationer og private virksomheder. Vi rådgiver bl.a. om karma, rekruttering, kommunikation, fællesskab og trivsel ud fra karmanautiske principper.",
  },
  {
    title: "Workshops",
    description:
      "Vi har holdt workshops for flere hundrede mennesker og ganske få. I flotte omgivelser på herregårde og slotte. Og i uventede kreative rum, hvor alle sidder på gulvet. Vi hjælper dit team til at tale sammen. Om det svære og det sjove. Om dét der gør jer til et team. Og så hjælper vi jer til at løse svære opgaver sammen.",
  },
  {
    title: "Projektudvikling",
    description:
      "Du har den løse idé, men mangler hjælp og sparring til at gøre projektet til virkelighed. Vi hjælper med både at udvikle koncept, sætte ord og billeder på og kan endda rådgive og assistere i fundraising. Vi har siddet med ved fødslen på masser af spændende projekter, fra Naturmødet i Hirtshals, til LykkeLiga og Aalborgs Plus Busser.",
  },
  {
    title: "Kreative Koncepter",
    description:
      "Om du mangler kreativ sparring til kampagner, projekter, events eller firmafester så hjælper vi processen i mål. Vi har arbejdet med kreativ konceptudvikling i 20 år og arbejder målrettet og fokuseret med idéudvikling.",
  },
];

export function PillarsSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <FloatingPlanet className="absolute right-[6%] top-24 hidden opacity-60 lg:block" />
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,20rem)_1fr] xl:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <PlanetBadge label="Karma" />
            <h2 className="mt-5 text-display-xl font-display text-navy">
              Karma er…
            </h2>
          </div>

          <div className="mt-12 divide-y divide-navy/10 lg:mt-0">
            {pillars.map((pillar, index) => (
              <PillarFeature
                key={pillar.title}
                index={index + 1}
                className="py-10 first:pt-0 last:pb-0 lg:py-12"
                {...pillar}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
