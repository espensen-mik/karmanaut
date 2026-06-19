import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeartMarker } from "@/components/illustrations/heart-marker";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";

export function IntroSection() {
  return (
    <Section className="overflow-hidden bg-cream">
      <OrbitDecoration
        animate={false}
        className="absolute -right-32 top-1/2 size-96 -translate-y-1/2 opacity-40"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="max-w-xl lg:py-8">
          <p className="eyebrow mb-5">Intro</p>
          <h2 className="text-display-xl font-display text-navy">
            Gode ting med gode mennesker
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-navy/70 lg:text-xl">
            Karmanaut er et menneskeligt og energisk fællesskab, der hjælper
            organisationer med at skabe bevægelse, engagement og meningsfuld
            forandring. Vi kombinerer varme, leg og struktur — så gode intentioner
            bliver til handling.
          </p>
        </div>
        <div className="relative lg:-mr-8">
          <HeartMarker className="absolute -left-6 -top-6 z-10 lg:-left-10" size={44} />
          <PhotoPlaceholder
            variant="editorial"
            label="Future Photography"
            className="lg:translate-x-6"
          />
        </div>
      </Container>
    </Section>
  );
}
