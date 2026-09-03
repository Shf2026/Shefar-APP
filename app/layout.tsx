import type { Metadata } from "next";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const titre = "Shefar Dashboard";
const description =
  "Centralisez Google Ads, Google Analytics, Google Search Console, Google Business Profile, PageSpeed Insights et Chrome UX Report dans une seule interface de pilotage.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shefar.fr"),
  title: {
    default: titre,
    template: "%s",
  },
  description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Shefar",
    locale: "fr_FR",
    type: "website",
    title: titre,
    description,
    images: ["/logo-sombre.png"],
  },
  twitter: {
    card: "summary",
    title: titre,
    description,
    images: ["/logo-sombre.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- global font in the root layout, applies to every route */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
