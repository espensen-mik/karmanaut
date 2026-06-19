import type { Metadata } from "next";

import { ContactCTA } from "@/components/sections/contact-cta";
import { ForsideHero } from "@/components/hero/forside-hero";
import { IntroSection } from "@/components/sections/intro-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { WhySection } from "@/components/sections/why-section";

export const metadata: Metadata = {
  title: "Forside",
  description:
    "Vi kommer med KARMA. Karmanaut hjælper virksomheder og organisationer med at gøre gode ting med gode mennesker.",
};

export default function ForsidePage() {
  return (
    <>
      <ForsideHero />
      <IntroSection />
      <PillarsSection />
      <WhySection />
      <ContactCTA />
    </>
  );
}
