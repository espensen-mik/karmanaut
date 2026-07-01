import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { InlineLink } from "@/components/ui/inline-link";
import { siteConfig } from "@/lib/constants/site";

export function WhySection() {
  return (
    <Section className="overflow-hidden bg-cream">
      <FloatingPlanet className="absolute -left-4 top-32 z-10 hidden opacity-80 lg:block" size={64} />
      <StarCluster className="absolute right-[5%] bottom-24 hidden w-32 opacity-70 lg:block" />
      <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <figure className="lg:-ml-12">
          <Image
            src={siteConfig.photos.karmanautMoon}
            alt="Karmanaut på månen"
            width={960}
            height={600}
            className="aspect-[16/10] h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </figure>
        <div className="lg:py-12">
          <PlanetBadge className="mb-8" label="Derfor Karmanaut" />
          <h2 className="text-display-lg font-display text-navy lg:text-display-xl">
            Karma uden bullshit
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-navy/70 lg:mt-8 lg:text-lg lg:leading-[1.8]">
            Hos karmanaut taler vi menneskesprog og udvikler koncepter til
            mennesker. Her får du altså ingen stakeholder alignment, synergier
            og transformative processer. I stedet får du klar tale og hjælp, som
            kan mærkes.
          </p>
          <div className="mt-8">
            <InlineLink
              href="/om-os"
              className="text-coral hover:text-coral-dark"
            >
              Læs mere
            </InlineLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
