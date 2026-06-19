import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/hero/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Foredrag",
  description:
    "Karmanatiske foredrag der inspirerer, udfordrer og skaber bevægelse.",
};

const topics = [
  "Karma og engagement i organisationer",
  "Kultur, fællesskab og forandring",
  "Mennesker i bevægelse",
  "Ledelse med varme og retning",
];

const audiences = [
  "Ledelsesteams",
  "HR og People",
  "Konferencer og events",
  "Netværk og fællesskaber",
];

export default function ForedragPage() {
  return (
    <>
      <PageHero
        eyebrow="Foredrag"
        title="Karmanatiske foredrag"
        description="Inspirerende oplæg med varme, energi og perspektiv — skabt til at vække nysgerrighed og give konkrete takeaways."
      >
        <Button asChild variant="accent" size="lg">
          <Link href="/kontakt">Book foredrag</Link>
        </Button>
      </PageHero>

      <ContentBlock title="Om foredragene">
        <p>
          Placeholder: Vores foredrag kombinerer fortælling, indsigt og
          interaktion. De er designet til at føles nære, energiske og relevante
          — uden corporate slides og tomme floskler.
        </p>
      </ContentBlock>

      <Section className="bg-cream-light">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-navy">Emner</h2>
            <ul className="mt-6 space-y-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-2xl border border-cream-dark bg-cream px-5 py-4 text-navy/80"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder label="Future Photography — talks & stages" />
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <h2 className="font-display text-4xl text-navy">Målgrupper</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <Card key={audience}>
                <CardHeader>
                  <CardTitle className="text-2xl">{audience}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    Placeholder: Tilpasset indhold og format for denne målgruppe.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
