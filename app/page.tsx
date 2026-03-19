import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import ImageBreak from "@/components/home/ImageBreak";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applify. Websites That Work. No Agency Nonsense.",
  description:
    "High-converting websites, UX and digital solutions for Australian businesses.",
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <ImageBreak imageSrc="/images/image-break.webp" />
    </main>
  );
}
