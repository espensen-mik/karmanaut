import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { InlineLink } from "@/components/ui/inline-link";
import { siteConfig } from "@/lib/constants/site";

export function KarmanauterneSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="relative lg:-ml-4">
          <HeartMarker className="absolute -right-4 -top-4 z-10 lg:-right-8" size={40} />
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark/30 lg:aspect-[3/4]">
            <Image
              src={siteConfig.photos.mikaelCharlotte}
              alt="Mikael og Charlotte Espensen, Karmanaut"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>

        <div className="max-w-xl lg:py-8">
          <h2 className="text-display-lg font-display text-navy lg:text-display-xl">
            Vi er karmanauterne
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-navy/70 lg:text-xl">
            {siteConfig.karmanauterneDescription}
          </p>
          <div className="mt-10">
            <InlineLink href="/om-os">Læs mere om os</InlineLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
