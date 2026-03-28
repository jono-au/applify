import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Website Pricing & Care Plans",
  description:
    "Clear pricing for website renovations, new builds and ongoing website care from Applify.",
};

export default function PricingPage() {
  return (
    <>
      <InternalPageHero
        title="Simple Pricing"
        highlightText="Simple"
        description="Clear pricing for website renovations, new builds and ongoing website care from Applify."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <Footer />
    </>
  );
}
