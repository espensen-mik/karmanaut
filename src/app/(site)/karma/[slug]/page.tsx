import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/hero/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { PrimaryButton } from "@/components/ui/button";
import {
  getKarmaPillarBySlug,
  karmaPillars,
} from "@/lib/constants/karma-pillars";

type KarmaPillarPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return karmaPillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: KarmaPillarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getKarmaPillarBySlug(slug);

  if (!pillar) {
    return { title: "Karma er..." };
  }

  return {
    title: `${pillar.title} | Karma er...`,
    description: pillar.description,
  };
}

export default async function KarmaPillarPage({ params }: KarmaPillarPageProps) {
  const { slug } = await params;
  const pillar = getKarmaPillarBySlug(slug);

  if (!pillar) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Karma er…"
        title={pillar.title}
        description={pillar.description}
      />

      <ContentBlock title={pillar.title} className="bg-cream-light">
        <div className="flex items-start gap-6">
          <Image
            src={pillar.icon}
            alt=""
            width={96}
            height={96}
            aria-hidden="true"
            className="size-20 shrink-0 object-contain sm:size-24"
          />
          <p>{pillar.description}</p>
        </div>
        <PrimaryButton href="/kontakt" className="mt-8">
          Kontakt os
        </PrimaryButton>
      </ContentBlock>
    </>
  );
}
