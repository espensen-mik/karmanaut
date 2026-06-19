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
        <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <ContactCard />
          <div className="lg:border-l lg:border-navy/10 lg:pl-16">
            <InquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
