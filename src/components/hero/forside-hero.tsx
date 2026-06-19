"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { OrbitDecoration } from "@/components/illustrations/orbit-decoration";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export function ForsideHero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
            Velkommen til Karmanaut
          </p>
          <h1 className="font-display text-5xl leading-none text-navy sm:text-6xl lg:text-7xl">
            Vi kommer med KARMA
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/75">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/karma">Karma</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/foredrag">Foredrag</Link>
            </Button>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <OrbitDecoration className="absolute size-72 lg:size-96" />
          <StarCluster className="absolute -top-2 right-8 w-24" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Image
              src={siteConfig.logoNaut}
              alt="Karmanaut astronaut"
              width={420}
              height={420}
              priority
              className="relative z-10 h-auto w-full max-w-sm"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
