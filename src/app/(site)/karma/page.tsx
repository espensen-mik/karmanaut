import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageHero } from "@/components/hero/page-hero";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { InlineLink } from "@/components/ui/inline-link";
import { karmaPillarsWithHref } from "@/lib/constants/karma-pillars";

export const metadata: Metadata = {
  title: "Karma er...",
  description:
    "Karma er rådgivning, workshops, projektudvikling, kreative koncepter og fællesskab — udviklet til mennesker, ikke powerpoints.",
};

export default function KarmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Karma er…"
        title="Karma uden bullshit"
        description="Hos karmanaut taler vi menneskesprog og udvikler koncepter til mennesker. Her får du klar tale og hjælp, som kan mærkes."
      />

      <Section spacing="compact" className="bg-cream-light">
        <Container className="max-w-3xl">
          <div className="divide-y divide-navy/10">
            {karmaPillarsWithHref.map((pillar) => (
              <article key={pillar.slug} className="py-10 first:pt-0 last:pb-0">
                <div className="grid grid-cols-[5rem_1fr] gap-x-5 sm:grid-cols-[6rem_1fr] sm:gap-x-8">
                  <Image
                    src={pillar.icon}
                    alt=""
                    width={96}
                    height={96}
                    aria-hidden="true"
                    className="size-16 object-contain sm:size-20"
                  />
                  <div className="min-w-0">
                    <h2 className="font-display text-display-lg text-navy">
                      <Link
                        href={pillar.href}
                        className="transition-colors hover:text-navy-light"
                      >
                        {pillar.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-lg leading-[1.8] text-navy/70">
                      {pillar.description}
                    </p>
                    <div className="mt-6">
                      <InlineLink
                        href={pillar.href}
                        className="text-coral hover:text-coral-dark"
                      >
                        Læs mere
                      </InlineLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
