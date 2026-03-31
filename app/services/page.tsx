import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import ServicesSplitSection from "@/components/services/ServicesSplitSection";
import CTABanner from "@/components/ui/CtaBanner";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Website Renovations, New Builds & Ongoing Care",
  description:
    "Applify helps Australian businesses with website renovations, new website builds, care plans and digital improvements.",
};

export default function ServicesPage() {
  return (
    <>
      <InternalPageHero
        title="Our Services"
        highlightText="Services"
        description="Just smart digital solutions that deliver results."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesSplitSection />
      <CTABanner />
      <Footer />
    </>
  );
}
