import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";

export function WhySection() {
  return (
    <Section className="bg-cream">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <PhotoPlaceholder label="Future Photography — workshops & communities" />
        <div>
          <PlanetBadge className="mb-6" label="Hvorfor Karmanaut" />
          <h2 className="font-display text-4xl text-navy sm:text-5xl">
            Fordi forandring sker med mennesker — ikke mod dem
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/75">
            Vi tror på, at de bedste resultater opstår, når mennesker føler sig
            set, inviteret og inspireret. Karmanaut skaber rammerne for det —
            med humor, varme og et skarpt blik for, hvad der skaber reel
            bevægelse i organisationer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy/75">
            Placeholder: Her kan senere uddybes med cases, tilgang og
            dokumentation af impact.
          </p>
        </div>
      </Container>
    </Section>
  );
}
