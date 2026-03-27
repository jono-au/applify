import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "We would love to hear from you! Get in touch with Applify for website renovations, new builds, care plans and digital solutions for Australian businesses.",
};

export default function ContactPage() {
  return (
    <>
      <InternalPageHero
        title="Contact Us"
        highlightText="Contact"
        description="Let's talk about your next innovative digital project together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
