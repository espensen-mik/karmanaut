import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Mød Mikael & Charlotte Espensen — Karmanaut er stiftet for at gøre gode projekter og virksomheder bedre.",
};

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

          <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-base leading-[1.75] text-navy/70 lg:space-y-6 lg:text-xl lg:leading-[1.85]">
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

          <div className="mx-auto w-full max-w-md space-y-8 lg:mx-0 lg:ml-auto lg:max-w-lg lg:space-y-10">
            <figure>
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

            <figure>
              <Image
                src={siteConfig.photos.christiansborg}
                alt="Politisk interessevaretagelse og fundraising for LykkeLiga"
                width={1280}
                height={721}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <figcaption className="mt-4 text-sm leading-relaxed text-navy/55">
                Arbejdet med LykkeLiga indebærer bl.a. også politisk
                interessevaretagelse og fundraising
              </figcaption>
            </figure>
          </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
