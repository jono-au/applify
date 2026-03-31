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
        highlightText="Us"
        description="We build digital experiences that drive real results."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <AboutIntro />
      <WhyApplify />
      <ImageBreak imageSrc="/images/image-break.webp" />
      <TeamSection
        eyebrow="Meet Applify"
        title="Meet the people behind the work"
        highlightText="people"
        members={[
          {
            name: "Jonathan Chan",
            role: "Solutions Architect & Developer",
            imageSrc: "/images/about/team-jonathan.jpg",
            imageAlt: "Jonathan Chan portrait",
          },
          {
            name: "Noor Rasoul",
            role: "Operations & Strategy Partner",
            imageSrc: "/images/about/team-jonathan.jpg",
            imageAlt: "Applify representative portrait",
          },
        ]}
      />
      <CTABanner />
      <Footer />
    </>
  );
}
