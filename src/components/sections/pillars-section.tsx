import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarCard } from "@/components/cards/pillar-card";

const pillars = [
  {
    title: "Karma",
    description:
      "Et koncept og en metode, der skaber bevægelse gennem fællesskab, handling og meningsfuld engagement.",
    href: "/karma",
  },
  {
    title: "Foredrag",
    description:
      "Inspirerende oplæg, der vækker nysgerrighed og giver konkrete perspektiver på mennesker og organisationer.",
    href: "/foredrag",
  },
  {
    title: "Team Champion",
    description:
      "Et program, der styrker interne ambassadører og hjælper teams med at bære kultur og forandring videre.",
    href: "/om-os",
  },
];

export function PillarsSection() {
  return (
    <Section className="bg-cream-light">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
            Tre søjler
          </p>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">
            Det vi gør bedst
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
