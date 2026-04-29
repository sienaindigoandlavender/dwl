import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-mono",
  display: "swap"
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dancewithlions.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dancing with Lions — Travel tech for a more legible world",
    template: "%s — Dancing with Lions"
  },
  description:
    "Dancing with Lions builds the cultural intelligence layer of the internet — through a portfolio of hospitality, editorial, and archive properties.",
  openGraph: {
    title: "Dancing with Lions",
    description:
      "Travel tech for a more legible world. A portfolio of hospitality, editorial, and archive properties.",
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
      <body>{children}</body>
    </html>
  );
}
