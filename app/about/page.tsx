import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import AboutIntro from "@/components/about/AboutIntro";
import CTABanner from "@/components/home/CtaBanner";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Websites | No Agency Nonsense.",
  description:
    "Website renovations, new builds and ongoing website care from Applify.",
};

export default function AboutPage() {
  return (
    <>
      <InternalPageHero
        title="About Us"
        highlightText="Us"
        description="We craft results-driven digital strategies that turn vision into measurable impact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <AboutIntro />
      <CTABanner />
      <Footer />
    </>
  );
}
