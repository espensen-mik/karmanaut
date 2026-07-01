"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { FloatingPlanet } from "@/components/illustrations/floating-planet";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { InlineLink } from "@/components/ui/inline-link";
import { siteConfig } from "@/lib/constants/site";

export function ForsideHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 lg:min-h-0 lg:pb-20 lg:pt-16">
      <OrbitDecoration
        animate
        className="absolute -left-24 top-32 hidden size-[28rem] opacity-60 lg:block lg:-left-16 lg:top-20 lg:size-[36rem]"
      />
      <FloatingPlanet className="absolute left-[8%] top-[18%] hidden lg:block" size={56} />
      <StarCluster className="absolute right-[12%] top-[14%] w-28 lg:w-44" />
      <FloatingPlanet
        className="absolute right-[18%] bottom-[22%] hidden opacity-70 lg:block"
        size={40}
      />

      <Container className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20 max-w-4xl pt-4 lg:pt-16"
          >
            <p className="eyebrow mb-4 lg:mb-6">Velkommen til Karmanaut</p>
            <h1 className="font-display text-[clamp(2.75rem,11vw,7rem)] leading-[0.92] text-navy lg:text-[clamp(3.5rem,8.5vw,7rem)]">
              Vi kommer med karma
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-navy/70 lg:mt-10 lg:text-xl lg:leading-[1.8]">
              {siteConfig.heroDescription}
            </p>
            <div className="mt-8 lg:mt-12">
              <InlineLink
                href="/karma"
                className="text-coral hover:text-coral-dark"
              >
                Læs mere om, hvordan vi skaber karma
              </InlineLink>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
            <OrbitDecoration
              animate
              className="absolute -right-8 top-1/2 hidden size-80 -translate-y-1/2 lg:block lg:-right-16 lg:size-[26rem]"
            />
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 lg:-mr-8 lg:translate-y-6"
            >
              {siteConfig.forsideHeroNaut.useAnimatedNaut ? (
                <>
                  <Image
                    src={siteConfig.forsideHeroNaut.static}
                    alt="Karmanaut astronaut"
                    width={520}
                    height={520}
                    priority
                    className="h-auto w-full max-w-lg lg:hidden lg:max-w-xl xl:max-w-2xl"
                  />
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Karmanaut astronaut"
                    className="hidden h-auto w-full max-w-lg lg:block lg:max-w-xl xl:max-w-2xl"
                  >
                    <source
                      src={siteConfig.forsideHeroNaut.animated}
                      type="video/webm"
                    />
                  </video>
                </>
              ) : (
                <Image
                  src={siteConfig.forsideHeroNaut.static}
                  alt="Karmanaut astronaut"
                  width={520}
                  height={520}
                  priority
                  className="h-auto w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
                />
              )}
            </motion.div>
            <StarCluster className="absolute -bottom-4 left-0 hidden w-28 opacity-80 lg:block lg:-left-12" />
          </div>
        </div>
      </Container>
    </section>
  );
}
