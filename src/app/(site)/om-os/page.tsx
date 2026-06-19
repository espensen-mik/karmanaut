import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { PageHero } from "@/components/hero/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Mød Karmanaut — mission, værdier og menneskerne bag.",
};

const values = [
  {
    title: "Menneskelighed",
    description: "Vi møder mennesker med varme, respekt og ægte nysgerrighed.",
  },
  {
    title: "Bevægelse",
    description: "Vi skaber rammer, hvor handling og engagement kan vokse.",
  },
  {
    title: "Leg",
    description: "Optimisme og humor gør forandring lettere at være en del af.",
  },
  {
    title: "Tillid",
    description: "Vi bygger relationer, der holder — ikke one-off events.",
  },
];

export default function OmOsPage() {
  return (
    <>
      <PageHero
        eyebrow="Om os"
        title="Vi er Karmanaut"
        description="Et lille hold med stort hjerte for mennesker, organisationer og den gode forandring, der faktisk varer."
      />

      <Section className="overflow-hidden bg-cream">
        <StarCluster className="absolute right-[10%] top-24 w-32 opacity-60" />
        <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative flex justify-center lg:justify-start">
            <OrbitDecoration
              animate={false}
              className="absolute -left-8 size-72 opacity-50 lg:-left-16 lg:size-96"
            />
            <HeartMarker className="absolute right-4 top-0 z-10 lg:right-12" size={44} />
            <Image
              src={siteConfig.logoNaut}
              alt="Karmanaut astronaut"
              width={420}
              height={420}
              className="relative z-10 w-full max-w-sm lg:max-w-md"
            />
          </div>
          <div>
            <h2 className="text-display-lg font-display text-navy">Historien</h2>
            <p className="mt-8 text-lg leading-[1.8] text-navy/70 lg:text-xl">
              Placeholder: Karmanaut startede med en idé om, at gode intentioner
              fortjener gode rammer. Historien om, hvordan det hele begyndte,
              kommer her.
            </p>
          </div>
        </Container>
      </Section>

      <ContentBlock title="Mission" className="bg-cream-light">
        <p>
          Vi hjælper virksomheder og organisationer med at gøre gode ting med
          gode mennesker — gennem Karma, foredrag, programmer og fællesskaber
          der skaber reel bevægelse.
        </p>
      </ContentBlock>

      <Section className="bg-cream">
        <Container>
          <h2 className="text-display-lg font-display text-navy">Værdier</h2>
          <div className="mt-12 max-w-4xl divide-y divide-navy/10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="grid gap-4 py-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-navy/15">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-3xl text-navy lg:text-4xl">
                    {value.title}
                  </h3>
                </div>
                <p className="text-lg leading-[1.75] text-navy/70 lg:pt-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container>
          <h2 className="text-display-lg font-display text-navy">Team</h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.75] text-navy/70">
            Placeholder: Her kommer teammedlemmer, roller og portrætter.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — team"
              className="lg:mt-12"
            />
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — people"
            />
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — collaboration"
              className="lg:-mt-8"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
