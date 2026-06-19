import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PillarFeature } from "@/components/cards/pillar-card";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { OrbitBridge } from "@/components/illustrations/orbit-bridge";

const pillars = [
  {
    title: "Karma",
    description:
      "Et koncept og en metode, der skaber bevægelse gennem fællesskab, handling og meningsfuld engagement.",
    href: "/karma",
    align: "left" as const,
  },
  {
    title: "Foredrag",
    description:
      "Inspirerende oplæg, der vækker nysgerrighed og giver konkrete perspektiver på mennesker og organisationer.",
    href: "/foredrag",
    align: "right" as const,
  },
  {
    title: "Team Champion",
    description:
      "Et program, der styrker interne ambassadører og hjælper teams med at bære kultur og forandring videre.",
    href: "/om-os",
    align: "left" as const,
  },
];

export function PillarsSection() {
  return (
    <Section className="overflow-hidden bg-cream-light">
      <OrbitBridge />
      <FloatingPlanet className="absolute right-[6%] top-24 hidden opacity-60 lg:block" />
      <Container className="relative">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <p className="eyebrow mb-5">Tre søjler</p>
          <h2 className="text-display-xl font-display text-navy">
            Det vi gør bedst
          </h2>
        </div>
        <div className="max-w-5xl">
          {pillars.map((pillar, index) => (
            <PillarFeature
              key={pillar.title}
              index={index + 1}
              {...pillar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
