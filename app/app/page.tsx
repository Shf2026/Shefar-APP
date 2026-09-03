import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

const titre = "Shefar Dashboard | Tableau de bord de performance digitale";
const description =
  "Centralisez Google Ads, Google Analytics, Google Search Console, Google Business Profile, PageSpeed Insights et Chrome UX Report dans une seule interface de pilotage.";

export const metadata: Metadata = {
  title: titre,
  description,
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: titre,
    description,
    url: "/app",
  },
};

export default function Home() {
  return <HomeContent />;
}
