import type { Metadata } from "next";
import ThemeScript from "@/components/ThemeScript";
import LanguageScript from "@/components/LanguageScript";
import LanguageApplyScript from "@/components/LanguageApplyScript";
import "./globals.css";

const titre = "SHEFAR Dashboard";
const description =
  "Centralize Google Ads, Google Analytics, Google Search Console, Google Business Profile, PageSpeed Insights and Chrome UX Report in a single performance management interface.";

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
    locale: "en_US",
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
    <html lang="en" suppressHydrationWarning>
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
        <LanguageScript />
      </head>
      <body>
        {children}
        <LanguageApplyScript />
      </body>
    </html>
  );
}
