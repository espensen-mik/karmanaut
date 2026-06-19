import Image from "next/image";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { StarCluster } from "@/components/illustrations/star-cluster";
import { navItems } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type FooterContactItemProps = {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

function FooterContactItem({
  icon,
  href,
  children,
  className,
}: FooterContactItemProps) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-cream/10 text-coral-light transition-colors duration-200 group-hover:bg-cream/15">
        {icon}
      </span>
      <span className="pt-0.5 leading-relaxed">{children}</span>
    </>
  );

  const itemClass = cn(
    "group flex items-start gap-4 text-cream/75 transition-colors duration-200 hover:text-cream",
    className,
  );

  if (href) {
    return (
      <a href={href} className={itemClass}>
        {content}
      </a>
    );
  }

  return <div className={itemClass}>{content}</div>;
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <StarCluster className="pointer-events-none absolute right-[6%] top-12 w-28 text-coral-light/40" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.55fr_0.9fr] lg:gap-16">
          <div>
            <Link href="/forside" className="inline-block">
              <Image
                src={siteConfig.logoNegative}
                alt={siteConfig.name}
                width={240}
                height={135}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-8 max-w-sm font-display text-3xl leading-tight tracking-wide text-cream lg:text-4xl">
              {siteConfig.footerTagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow mb-5 text-coral-light">Sider</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-cream/75 transition-colors duration-200 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5 text-coral-light">Kontakt</p>
            <div className="space-y-5">
              <FooterContactItem icon={<Building2 className="size-4" strokeWidth={2} />}>
                {siteConfig.company}
              </FooterContactItem>
              <FooterContactItem icon={<MapPin className="size-4" strokeWidth={2} />}>
                <>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}
                </>
              </FooterContactItem>
              <FooterContactItem
                icon={<Mail className="size-4" strokeWidth={2} />}
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </FooterContactItem>
              <FooterContactItem
                icon={<Phone className="size-4" strokeWidth={2} />}
                href={`tel:${siteConfig.phoneHref}`}
              >
                {siteConfig.phone}
              </FooterContactItem>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-8">
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} {siteConfig.company}
          </p>
        </div>
      </Container>
    </footer>
  );
}
