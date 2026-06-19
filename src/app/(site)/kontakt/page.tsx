import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContactCard } from "@/components/cards/contact-card";
import { PageHero } from "@/components/hero/page-hero";
import { InquiryForm } from "@/components/sections/inquiry-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt Karmanaut — vi glæder os til at høre fra dig.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lad os tage en snak"
        description="Uanset om du er nysgerrig på Karma, foredrag eller noget helt tredje — vi er klar til en uforpligtende samtale."
      />

      <Section spacing="compact" className="bg-cream">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ContactCard />
          <InquiryForm />
        </Container>
      </Section>
    </>
  );
}
