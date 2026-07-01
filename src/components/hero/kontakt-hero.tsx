import Image from "next/image";

import { Container } from "@/components/layout/container";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { siteConfig } from "@/lib/constants/site";

type KontaktHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function KontaktHero({ eyebrow, title, description }: KontaktHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-10 pb-6 lg:pb-8 lg:pt-16">
      <div className="pointer-events-none absolute -right-20 top-16 hidden size-64 rounded-full bg-coral/[0.04] blur-3xl lg:block" />
      <StarCluster className="absolute right-[10%] top-[14%] hidden w-32 opacity-70 lg:block lg:w-40" />

      <Container className="relative">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div className="relative z-20 max-w-2xl lg:-translate-y-6">
            {eyebrow ? <p className="eyebrow mb-4 lg:mb-6">{eyebrow}</p> : null}
            <h1 className="text-display-xl font-display text-navy">{title}</h1>
            {description ? (
              <p className="mt-6 text-base leading-[1.7] text-navy/70 lg:mt-8 lg:text-xl lg:leading-[1.75]">
                {description}
              </p>
            ) : null}
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
            <OrbitDecoration
              animate={false}
              className="absolute -right-6 top-1/2 hidden size-72 -translate-y-1/2 opacity-50 lg:block lg:-right-12 lg:size-96"
            />
            <div className="relative z-10 lg:-mr-4">
              <Image
                src={siteConfig.photos.karmanautKontakt}
                alt="Karmanaut ved computeren"
                width={520}
                height={520}
                priority
                className="h-auto w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
