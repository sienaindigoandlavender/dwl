import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-mono",
  display: "swap"
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dancewithlions.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-FQR11PP7DN";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dancing with Lions — Travel technology for people who want to arrive considered",
    template: "%s — Dancing with Lions"
  },
  description:
    "Dancing with Lions is a travel tech company. Six product lines. One quiet idea — that travel, done well, is a considered act.",
  openGraph: {
    title: "Dancing with Lions",
    description:
      "Travel technology for people who want to arrive considered. Six product lines, one umbrella.",
    url: SITE_URL,
    siteName: "Dancing with Lions",
    type: "website"
  },
  robots: { index: true, follow: true },
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
