import type { Metadata } from "next";
import InternalPageHero from "@/components/ui/InternalPageHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhyApplify from "@/components/about/WhyApplify";
import ImageBreak from "@/components/ui/ImageBreak";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/ui/CtaBanner";
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
        description="We build digital experiences that drive real results."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <AboutIntro />
      <WhyApplify />
      <ImageBreak imageSrc="/images/cbd-min.webp" />
      <TeamSection
        members={[
          {
            name: "Jonathan Chan",
            role: "Senior Consultant & Developer",
            imageSrc: "/images/about/jonathan.webp",
            imageAlt:
              "Portrait of founder Jonathan senior consultant and developer at Applify",
          },
        ]}
      />
      <CTABanner />
      <Footer />
    </>
  );
}
