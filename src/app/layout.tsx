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
    default: "Karmanaut",
    template: "%s | Karmanaut",
  },
  description: siteConfig.description,
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
        width: 1920,
        height: 1080,
        alt: "Karmanaut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmanaut — Vi kommer med karma",
    description: siteConfig.description,
    images: ["/thumb_karmanaut.jpg"],
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
        {children}
      </body>
    </html>
  );
}
