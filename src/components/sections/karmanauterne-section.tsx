import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { PrimaryButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export function KarmanauterneSection() {
  return (
    <Section
      animate
      spacing="compact"
      className="relative -mt-6 bg-white pt-4 lg:-mt-12 lg:pt-8"
    >
      <Container>
        <PlanetBadge label="Karmanauterne" />

        <div className="mt-5 grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-display-lg font-display text-navy lg:text-display-xl">
              Vi er karmanauterne
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-navy/70 lg:mt-8 lg:text-xl lg:leading-[1.85]">
              {siteConfig.karmanauterneDescription}
            </p>
            <div className="mt-10">
              <PrimaryButton href="/om-os">Læs mere om os</PrimaryButton>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-xs lg:mx-0 lg:ml-auto lg:max-w-sm">
            <div className="relative">
              <HeartMarker
                className="absolute -bottom-5 -right-5 z-10 size-[7.5rem] lg:-bottom-10 lg:-right-10 lg:size-[9.125rem]"
                size={146}
              />
              <Image
                src={siteConfig.photos.mikaelCharlotte}
                alt="Mikael og Charlotte Espensen, Karmanaut"
                width={480}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 80vw, 384px"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-navy/55">
              Karmanaut er startet af Mikael & Charlotte Espensen med erfaring
              fra reklamebranchen og udviklingen af LykkeLiga.
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
