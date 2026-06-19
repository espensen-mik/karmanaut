"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export function ForsideHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-12 pb-20 lg:min-h-[92vh] lg:pt-16 lg:pb-28">
      <OrbitDecoration
        animate
        className="absolute -left-24 top-32 size-[28rem] opacity-60 lg:-left-16 lg:top-20 lg:size-[36rem]"
      />
      <FloatingPlanet className="absolute left-[8%] top-[18%] hidden lg:block" size={56} />
      <StarCluster className="absolute right-[12%] top-[14%] w-36 lg:w-44" />
      <FloatingPlanet
        className="absolute right-[18%] bottom-[22%] opacity-70"
        size={40}
      />

      <Container className="relative">
        <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20 max-w-4xl pt-8 lg:pt-16"
          >
            <p className="eyebrow mb-6">Velkommen til Karmanaut</p>
            <h1 className="text-display-hero font-display text-navy">
              Vi kommer med KARMA
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-[1.75] text-navy/70 lg:mt-10 lg:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 lg:mt-14">
              <PrimaryButton href="/karma">Karma</PrimaryButton>
              <SecondaryButton href="/foredrag">Foredrag</SecondaryButton>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
            <OrbitDecoration
              animate
              className="absolute -right-8 top-1/2 size-80 -translate-y-1/2 lg:-right-16 lg:size-[26rem]"
            />
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 lg:-mr-8 lg:translate-y-6"
            >
              <Image
                src={siteConfig.logoNaut}
                alt="Karmanaut astronaut"
                width={520}
                height={520}
                priority
                className="h-auto w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
              />
            </motion.div>
            <StarCluster className="absolute -bottom-4 left-0 w-28 opacity-80 lg:-left-12" />
          </div>
        </div>
      </Container>
    </section>
  );
}
