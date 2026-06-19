import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <Section className="relative overflow-hidden bg-navy text-cream">
      <OrbitDecoration className="absolute -right-16 top-1/2 size-64 -translate-y-1/2 opacity-30" />
      <Container className="relative z-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-coral-light">
          Kontakt
        </p>
        <h2 className="font-display text-4xl sm:text-5xl">
          Klar til at komme med karma?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
          Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe jer med at
          skabe bevægelse og engagement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="accent" size="lg">
            <Link href="/kontakt">Kontakt os</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="border-cream/30 text-cream hover:bg-cream/10"
          >
            <Link href="/karma">Udforsk Karma</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
