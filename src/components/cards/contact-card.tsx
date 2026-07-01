import { Building2, Mail, Phone } from "lucide-react";

import { siteConfig } from "@/lib/constants/site";

export function ContactCard() {
  return (
    <div className="space-y-8 py-2 lg:space-y-10 lg:py-4">
      <div>
        <p className="eyebrow mb-4">Direkte kontakt</p>
        <h2 className="font-display text-display-lg text-navy">Kontakt os</h2>
      </div>
      <div className="space-y-6">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group flex items-center gap-4 text-navy/75 transition-colors hover:text-navy"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-coral/10 text-coral transition-colors group-hover:bg-coral/15">
            <Mail className="size-5" />
          </span>
          <span className="break-all text-base lg:text-lg">{siteConfig.email}</span>
        </a>
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="group flex items-center gap-4 text-navy/75 transition-colors hover:text-navy"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-coral/10 text-coral transition-colors group-hover:bg-coral/15">
            <Phone className="size-5" />
          </span>
          <span className="text-base lg:text-lg">{siteConfig.phone}</span>
        </a>
        <div className="flex items-center gap-4 text-navy/75">
          <span className="flex size-11 items-center justify-center rounded-full bg-coral/10 text-coral">
            <Building2 className="size-5" />
          </span>
          <span className="text-base lg:text-lg">CVR {siteConfig.cvr}</span>
        </div>
      </div>
    </div>
  );
}
