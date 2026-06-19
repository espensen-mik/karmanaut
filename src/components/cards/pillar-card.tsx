import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

type PillarCardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function PillarCard({
  title,
  description,
  href,
  className,
}: PillarCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-soft-lg)]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral transition-colors group-hover:text-coral-dark">
            Læs mere
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
