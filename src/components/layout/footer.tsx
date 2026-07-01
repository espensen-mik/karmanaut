import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="py-12 text-center lg:py-14">
        <Link href="/forside" className="inline-block">
          <Image
            src={siteConfig.logoNegative}
            alt={siteConfig.name}
            width={720}
            height={405}
            className="mx-auto h-28 w-auto lg:h-48"
          />
        </Link>

        <p className="mx-auto mt-6 max-w-sm font-display text-lg leading-snug tracking-wide text-cream/85 lg:text-xl">
          {siteConfig.footerTagline}
        </p>

        <address className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm not-italic text-cream/50">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors duration-200 hover:text-cream/75"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="transition-colors duration-200 hover:text-cream/75"
          >
            {siteConfig.phone}
          </a>
          <span>
            {siteConfig.address.street}, {siteConfig.address.city}
          </span>
          <span>CVR {siteConfig.cvr}</span>
        </address>

        <div className="mt-10 border-t border-cream/10 pt-5">
          <p className="text-xs text-cream/35">
            © {new Date().getFullYear()} {siteConfig.company}
          </p>
        </div>
      </Container>
    </footer>
  );
}
