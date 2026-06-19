import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <Link
              href="/forside"
              className="font-display text-3xl tracking-wide text-cream"
            >
              KARMANAUT
            </Link>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/80">
              {siteConfig.footerTagline}
            </p>
          </div>

          <address className="not-italic text-cream/80">
            <p className="font-semibold text-cream">{siteConfig.company}</p>
            <p className="mt-3 leading-relaxed">{siteConfig.address.street}</p>
            <p className="leading-relaxed">{siteConfig.address.city}</p>
            <p className="mt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-200 hover:text-cream"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="transition-colors duration-200 hover:text-cream"
              >
                {siteConfig.phone}
              </a>
            </p>
          </address>
        </div>
      </Container>
    </footer>
  );
}
