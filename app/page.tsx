import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import ImageBreak from "@/components/home/ImageBreak";

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
