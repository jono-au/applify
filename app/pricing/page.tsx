import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import PricingSections from "@/components/pricing/PricingSections";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Website Pricing & Care Plans",
  description:
    "Clear pricing for website builds, renovations, and ongoing care. No hidden costs. No agency nonsense.",
};

export default function PricingPage() {
  return (
    <>
      <InternalPageHero
        title="Simple Pricing"
        description="Clear pricing for website builds, renovations and ongoing care."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <PricingSections />
      <CTABanner />
      <Footer />
    </>
  );
}
