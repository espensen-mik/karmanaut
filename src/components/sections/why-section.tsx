import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";

export function WhySection() {
  return (
    <Section className="overflow-hidden bg-cream">
      <FloatingPlanet className="absolute -left-4 top-32 z-10 opacity-80" size={64} />
      <StarCluster className="absolute right-[5%] bottom-24 w-32 opacity-70" />
      <Container className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <PhotoPlaceholder
          variant="editorial-wide"
          label="Future Photography — workshops & communities"
          className="lg:-ml-12"
        />
        <div className="lg:py-12">
          <PlanetBadge className="mb-8" label="Hvorfor Karmanaut" />
          <h2 className="text-display-lg font-display text-navy lg:text-display-xl">
            Fordi forandring sker med mennesker — ikke mod dem
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-navy/70">
            Vi tror på, at de bedste resultater opstår, når mennesker føler sig
            set, inviteret og inspireret. Karmanaut skaber rammerne for det —
            med humor, varme og et skarpt blik for, hvad der skaber reel
            bevægelse i organisationer.
          </p>
          <p className="mt-6 text-lg leading-[1.8] text-navy/70">
            Placeholder: Her kan senere uddybes med cases, tilgang og
            dokumentation af impact.
          </p>
        </div>
      </Container>
    </Section>
  );
}
