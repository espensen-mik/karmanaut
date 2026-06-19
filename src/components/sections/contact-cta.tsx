import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <Section
      animate={false}
      spacing="compact"
      className="relative overflow-hidden bg-navy text-cream"
    >
      <OrbitDecoration
        animate={false}
        className="absolute -left-20 top-1/2 size-80 -translate-y-1/2 text-cream/10"
      />
      <StarCluster className="absolute right-[8%] top-[20%] w-36 text-coral-light/60" />
      <Container className="relative z-10 py-8 text-center lg:py-12">
        <p className="eyebrow mb-6 text-coral-light">Kontakt</p>
        <h2 className="mx-auto max-w-3xl text-display-xl font-display">
          Klar til at komme med karma?
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.75] text-cream/75 lg:text-xl">
          Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe jer med at
          skabe bevægelse og engagement.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/kontakt" surface="dark">
            Kontakt os
          </PrimaryButton>
          <SecondaryButton href="/karma" surface="dark">
            Udforsk Karma
          </SecondaryButton>
        </div>
      </Container>
    </Section>
  );
}
