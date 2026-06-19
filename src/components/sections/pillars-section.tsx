import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarFeature } from "@/components/cards/pillar-card";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { karmaPillarsWithHref } from "@/lib/constants/karma-pillars";

export function PillarsSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <FloatingPlanet className="absolute right-[6%] top-24 hidden opacity-60 lg:block" />
      <Container className="relative max-w-3xl">
        <PlanetBadge label="Karma" />
        <h2 className="mt-5 text-display-xl font-display text-navy">Karma er…</h2>

        <div className="mt-12 divide-y divide-navy/10">
          {karmaPillarsWithHref.map((pillar) => (
            <PillarFeature
              key={pillar.slug}
              className="py-10 first:pt-0 last:pb-0"
              {...pillar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
