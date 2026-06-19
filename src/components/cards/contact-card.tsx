import { Mail, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants/site";

export function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kontakt os</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-3 text-navy/80 transition-colors hover:text-navy"
        >
          <Mail className="size-5 text-coral" />
          {siteConfig.email}
        </a>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 text-navy/80 transition-colors hover:text-navy"
        >
          <Phone className="size-5 text-coral" />
          {siteConfig.phone}
        </a>
      </CardContent>
    </Card>
  );
}
