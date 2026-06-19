import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/hero/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { PrimaryButton } from "@/components/ui/button";

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
        <PrimaryButton href="/kontakt">Book foredrag</PrimaryButton>
      </PageHero>

      <ContentBlock title="Om foredragene">
        <p>
          Placeholder: Vores foredrag kombinerer fortælling, indsigt og
          interaktion. De er designet til at føles nære, energiske og relevante
          — uden corporate slides og tomme floskler.
        </p>
      </ContentBlock>

      <Section className="bg-cream-light">
        <Container className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-display-lg font-display text-navy">Emner</h2>
            <ul className="mt-10 space-y-0">
              {topics.map((topic, index) => (
                <li
                  key={topic}
                  className="border-t border-navy/10 py-6 text-lg text-navy/75 first:border-t-0 first:pt-0"
                >
                  <span className="mr-4 font-display text-2xl text-navy/20">
                    0{index + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder
            variant="editorial"
            label="Future Photography — talks & stages"
            className="lg:mt-8"
          />
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <h2 className="text-display-lg font-display text-navy">Målgrupper</h2>
          <div className="mt-12 max-w-4xl divide-y divide-navy/10">
            {audiences.map((audience) => (
              <div key={audience} className="grid gap-4 py-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12">
                <h3 className="font-display text-3xl text-navy lg:text-4xl">
                  {audience}
                </h3>
                <p className="text-lg leading-[1.75] text-navy/70">
                  Placeholder: Tilpasset indhold og format for denne målgruppe.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
