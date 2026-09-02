import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const titre = "Shefar Dashboard";
const description =
  "Shefar Dashboard centralise les donnees essentielles de votre presence digitale : Google Ads, Analytics, Search Console et Google Business Profile dans une interface unique.";

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
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: titre,
    description,
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
