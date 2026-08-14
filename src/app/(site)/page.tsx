import type { Metadata } from "next";

import { ForsideHero } from "@/components/hero/forside-hero";
import { KarmanauterneSection } from "@/components/sections/karmanauterne-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { WhySection } from "@/components/sections/why-section";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  openGraph: {
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <ForsideHero />
      <KarmanauterneSection />
      <TestimonialSection />
      <PillarsSection />
      <WhySection />
    </>
  );
}
