import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

import { siteConfig } from "@/lib/constants/site";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Karmanaut — Vi kommer med karma",
    template: "%s | Karmanaut",
  },
  description: siteConfig.description,
  authors: siteConfig.authors.map((name) => ({ name })),
  creator: siteConfig.authors.join(" & "),
  publisher: siteConfig.company,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Karmanaut — Vi kommer med karma",
    description: siteConfig.description,
    images: [
      {
        url: "/thumb_karmanaut.jpg",
        secureUrl: `${siteConfig.url}/thumb_karmanaut.jpg`,
        width: 1920,
        height: 1080,
        type: "image/jpeg",
        alt: "Karmanaut — Vi kommer med karma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmanaut — Vi kommer med karma",
    description: siteConfig.description,
    images: [`${siteConfig.url}/thumb_karmanaut.jpg`],
  },
  other: {
    "article:author": siteConfig.authors.join(", "),
    "article:published_time": siteConfig.publishedAt,
    "article:modified_time": siteConfig.publishedAt,
  },
  icons: {
    icon: [
      { url: "/hjerte_fav_512.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${inter.variable} ${bebasNeue.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              legalName: siteConfig.company,
              url: siteConfig.url,
              email: siteConfig.email,
              founder: siteConfig.authors.map((name) => ({
                "@type": "Person",
                name,
              })),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
