import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";

export function IntroSection() {
  return (
    <Section className="bg-cream">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
            Intro
          </p>
          <h2 className="font-display text-4xl text-navy sm:text-5xl">
            Gode ting med gode mennesker
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/75">
            Karmanaut er et menneskeligt og energisk fællesskab, der hjælper
            organisationer med at skabe bevægelse, engagement og meningsfuld
            forandring. Vi kombinerer varme, leg og struktur — så gode intentioner
            bliver til handling.
          </p>
        </div>
        <div className="relative">
          <HeartMarker className="absolute -left-2 -top-2 z-10" size={36} />
          <PhotoPlaceholder />
        </div>
      </Container>
    </Section>
  );
}
