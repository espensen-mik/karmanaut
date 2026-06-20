import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/navigation/header";
import { KarmaModalProvider } from "@/components/karma/karma-modal-provider";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <KarmaModalProvider>
      <div className="flex min-h-full flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </KarmaModalProvider>
  );
}
