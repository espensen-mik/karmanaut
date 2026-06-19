import { Header } from "@/components/navigation/header";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
