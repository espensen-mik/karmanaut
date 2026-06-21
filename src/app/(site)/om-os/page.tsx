import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ContentBlock } from "@/components/sections/content-block";
import { PhotoPlaceholder } from "@/components/sections/photo-placeholder";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Mød Mikael & Charlotte Espensen — Karmanaut er stiftet for at gøre gode projekter og virksomheder bedre.",
};

const values = [
  {
    title: "Menneskelighed",
    description: "Vi møder mennesker med varme, respekt og ægte nysgerrighed.",
  },
  {
    title: "Bevægelse",
    description: "Vi skaber rammer, hvor handling og engagement kan vokse.",
  },
  {
    title: "Leg",
    description: "Optimisme og humor gør forandring lettere at være en del af.",
  },
  {
    title: "Tillid",
    description: "Vi bygger relationer, der holder — ikke one-off events.",
  },
];

export default function OmOsPage() {
  return (
    <>
      <Section
        animate={false}
        spacing="compact"
        className="overflow-hidden bg-cream pt-12 pb-16 lg:pt-16 lg:pb-20"
      >
        <Container>
          <p className="eyebrow mb-6">Om os</p>
          <h1 className="max-w-4xl text-display-xl font-display text-navy">
            Vi er Karmanaut
          </h1>

          <div className="mt-12 grid items-start gap-16 lg:mt-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-lg leading-[1.85] text-navy/70 lg:text-xl">
            <p>
              Karmanaut er stiftet af Mikael & Charlotte Espensen for at gøre gode
              projekter og virksomheder bedre. I næsten 20 år drev vi et af
              Aalborgs mest kreative reklamebureauer og arbejdede sammen med både
              store og små organisationer. Fra Adidas til Sundhedsstyrelsen. Fra
              Københavns- og Brønderslev Kommune til KL. Fra Aalborg Universitet
              til Forbrugerrådet TÆNK.
            </p>
            <p>
              I 2017 var Mikael medstifter og idémand bag LykkeLiga. Projektet var
              inspireret af vores datter Kaya, som har Downs syndrom. LykkeLiga har
              siden udviklet sig til en helt unik succes, som i høj grad er baseret
              på de samme principper, der nu ligger bag Karmanaut. I 2024 solgte vi
              reklamebureauet for begge at dedikere os til LykkeLiga og andre gode
              projekter.
            </p>
            <p>
              Da vi i 2007 blev forældre til Kaya forandrede det vores liv. Kaya
              lærte os at se det gode i alting — og at have fokus på at gøre
              verden bedre. Med LykkeLiga oplevede vi, hvordan det hårde arbejde med
              at bygge et projekt op fra bunden kom tusindfold tilbage. Med
              Karmanaut vil vi engagere os i projekter, der gør verden lidt
              bedre. Om det er en bedre hverdag for medarbejderne i din virksomhed.
              Et nytænkende projekt, der skaber trivsel. Eller kreative
              kommunikation, der får mennesker til at smile. Vi er færdige med at
              sælge for at sælge… Vi vil skabe karma.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-lg">
            <Image
              src={siteConfig.photos.kayaFamily}
              alt="Kaya, Mikael og Charlotte til LykkeCup"
              width={640}
              height={800}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-navy/55">
              Kaya, Mikael og Charlotte til LykkeLigas sæsonafslutning
              &ldquo;LykkeCup&rdquo;
            </figcaption>
          </figure>
          </div>
        </Container>
      </Section>

      <ContentBlock title="Mission" className="bg-cream-light">
        <p>
          Vi hjælper virksomheder og organisationer med at gøre gode ting med
          gode mennesker — gennem Karma, foredrag, programmer og fællesskaber
          der skaber reel bevægelse.
        </p>
      </ContentBlock>

      <Section className="bg-cream">
        <Container>
          <h2 className="text-display-lg font-display text-navy">Værdier</h2>
          <div className="mt-12 max-w-4xl divide-y divide-navy/10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="grid gap-4 py-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-navy/15">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-3xl text-navy lg:text-4xl">
                    {value.title}
                  </h3>
                </div>
                <p className="text-lg leading-[1.75] text-navy/70 lg:pt-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-light">
        <Container>
          <h2 className="text-display-lg font-display text-navy">Team</h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.75] text-navy/70">
            Placeholder: Her kommer teammedlemmer, roller og portrætter.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — team"
              className="lg:mt-12"
            />
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — people"
            />
            <PhotoPlaceholder
              variant="portrait"
              label="Future Photography — collaboration"
              className="lg:-mt-8"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
