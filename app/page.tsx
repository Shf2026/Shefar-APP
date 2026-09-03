import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

const titre = "SHEFAR Dashboard | Digital Performance Management Platform";
const description =
  "Centralize Google Ads, Google Analytics, Google Search Console, Google Business Profile, PageSpeed Insights and Chrome UX Report in a single performance management interface.";

export const metadata: Metadata = {
  title: titre,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: titre,
    description,
    url: "/",
  },
};

export default function RootPage() {
  return <HomeContent />;
}
