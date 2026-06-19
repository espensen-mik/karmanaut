import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { PageHero } from "@/components/hero/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { siteConfig } from "@/lib/constants/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <Section className="bg-cream">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center">
            <OrbitDecoration className="absolute size-64" />
            <HeartMarker className="absolute right-8 top-0" size={40} />
            <Image
              src={siteConfig.logoNaut}
              alt="Karmanaut astronaut"
              width={360}
              height={360}
              className="relative z-10 max-w-xs"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-navy">Historien</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
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
          <h2 className="font-display text-4xl text-navy">Værdier</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container>
          <h2 className="font-display text-4xl text-navy">Team</h2>
          <p className="mt-4 max-w-2xl text-lg text-navy/75">
            Placeholder: Her kommer teammedlemmer, roller og portrætter.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoPlaceholder aspect="portrait" label="Future Photography — team" />
            <PhotoPlaceholder aspect="portrait" label="Future Photography — people" />
            <PhotoPlaceholder aspect="portrait" label="Future Photography — collaboration" />
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
