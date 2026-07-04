import type { Metadata } from "next";

import { ForsideHero } from "@/components/hero/forside-hero";
import { KarmanauterneSection } from "@/components/sections/karmanauterne-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { WhySection } from "@/components/sections/why-section";

export const metadata: Metadata = {
  description:
    "Vi kommer med karma. Karmanaut hjælper virksomheder og organisationer med at gøre gode ting med gode mennesker.",
};

export default function HomePage() {
  return (
    <>
      <ForsideHero />
      <KarmanauterneSection />
      <PillarsSection />
      <WhySection />
    </>
  );
}
