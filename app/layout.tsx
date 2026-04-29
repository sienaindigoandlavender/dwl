import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema, SITE_URL } from "@/lib/seo";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-mono",
  display: "swap"
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-FQR11PP7DN";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dancing with Lions — Travel technology for people who want to arrive considered",
    template: "%s — Dancing with Lions"
  },
  description:
    "Dancing with Lions is a travel tech company. Six product lines. One quiet idea — that travel, done well, is a considered act.",
  applicationName: "Dancing with Lions",
  authors: [{ name: "Dancing with Lions", url: SITE_URL }],
  creator: "Dancing with Lions",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dancing with Lions",
    description:
      "Travel technology for people who want to arrive considered. Six product lines, one umbrella.",
    url: SITE_URL,
    siteName: "Dancing with Lions",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dancing with Lions",
    description:
      "Travel technology for people who want to arrive considered. Six product lines, one umbrella."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" }
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plexMono.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
        <style>{`:root { --font-instrument-serif: 'Instrument Serif', ui-serif, Georgia, serif; }`}</style>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
