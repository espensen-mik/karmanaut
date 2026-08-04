import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PlanetBadge } from "@/components/illustrations/planet-badge";
import { siteConfig } from "@/lib/constants/site";

export function TestimonialSection() {
  return (
    <Section className="overflow-hidden bg-cream-dark pt-20 lg:pt-48">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,16rem)_1fr]">
          <figure className="mx-auto w-40 sm:w-48 lg:mx-0 lg:w-full">
            <Image
              src={siteConfig.photos.kasperBrix}
              alt="Kasper Brix, North Shore Surf"
              width={1080}
              height={1080}
              className="aspect-square h-auto w-full rounded-full object-cover"
              sizes="(max-width: 1024px) 192px, 256px"
            />
          </figure>

          <blockquote className="relative min-w-0">
            <PlanetBadge className="mb-10 lg:mb-12" label="KarmaHistorie" />

            <div className="relative pt-2 lg:pt-4">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 top-0 font-display text-[7rem] leading-none text-coral/35 select-none lg:-left-3 lg:text-[9rem]"
              >
                “
              </span>

              <div className="relative space-y-5 text-base leading-[1.75] text-navy/80 lg:text-lg lg:leading-[1.85]">
                <p>
                  Da vi hos North Shore Surf skulle byde på forpagtningen af{" "}
                  <em className="italic text-navy">De Maritime Huse</em> og
                  genvinde vores surfcafé, hjalp Mikael os med at udvikle og
                  beskrive vores koncept. Vi ledte efter én, der kunne forstå vores
                  rejse – og især de følelser, der er forbundet med 10 års flid og
                  alt, hvad det indebærer.
                </p>
                <p>
                  Samarbejdet var nemt og effektivt, fordi Mikael med sin store
                  erfaringsrygsæk hjalp os med både at komme i mål inden for den
                  aftalte tid og den økonomiske ramme. Vi afleverede et flot,
                  visuelt og gennemarbejdet materiale til kommunen – og vi vandt
                  forpagtningen af caféen.
                </p>
                <p className="font-medium text-navy">
                  Et løkkendarisk samarbejde!
                </p>
              </div>
            </div>

            <footer className="mt-8 border-t border-navy/10 pt-6">
              <cite className="not-italic">
                <span className="block font-display text-2xl tracking-wide text-navy lg:text-3xl">
                  Kasper Brix
                </span>
                <a
                  href="https://www.northshoresurf.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-coral transition-colors hover:text-coral-dark"
                >
                  North Shore Surf
                </a>
              </cite>
            </footer>
          </blockquote>
        </div>
      </Container>
    </Section>
  );
}
