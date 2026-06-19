import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/hero/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Karma",
  description:
    "Karma er Karmanauts metode til at skabe bevægelse, engagement og meningsfuld forandring.",
};

export default function KarmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Karma"
        title="Karma skaber bevægelse"
        description="Et koncept og en metode, der forbinder mennesker, handling og mening — og hjælper organisationer med at gøre gode ting med gode mennesker."
      />

      <ContentBlock title="Hvad er Karma?">
        <p>
          Placeholder: Karma er Karmanauts tilgang til at skabe varige forandringer
          gennem engagement, fællesskab og konkret handling. Det handler om at
          møde mennesker, hvor de er — og invitere dem ind i noget større.
        </p>
      </ContentBlock>

      <ContentBlock title="Hvad skaber bevægelse?" className="bg-cream-light">
        <p>
          Placeholder: Bevægelse opstår, når mennesker føler ejerskab, nysgerrighed
          og lyst til at bidrage. Karma skaber rammerne for netop det — med struktur,
          varme og et skarpt blik for, hvad der virker i den enkelte organisation.
        </p>
      </ContentBlock>

      <Section className="bg-cream">
        <Container>
          <h2 className="font-display text-4xl text-navy">Eksempler</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <PhotoPlaceholder label="Future Photography — movement & creativity" />
            <PhotoPlaceholder label="Future Photography — communities" />
          </div>
        </Container>
      </Section>

      <ContentBlock title="Cases" className="bg-cream-light">
        <p>
          Placeholder: Her kommer senere udvalgte cases, der viser, hvordan Karma
          har skabt bevægelse i forskellige organisationer og kontekster.
        </p>
        <Button asChild variant="accent" className="mt-4">
          <Link href="/kontakt">Book en samtale</Link>
        </Button>
      </ContentBlock>

      <ContactCTA />
    </>
  );
}
