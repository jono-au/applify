import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTAButton from "../ui/CtaButton";
import Dot from "@/components/ui/Dot";

const points = [
  "Senior led builds with no agency run-around",
  "Fast turnaround with clear scope and outcomes",
  "Ongoing care with priority support",
];

export default function Hero() {
  return (
    <section className="pt-4 pb-10 md:pt-6 md:pb-14">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          {/* Background Image */}
          <Image
            src="/images/hero.webp"
            alt="Developer workspace laptop with code on screen and desktop with coffee and plant"
            fill
            priority
            className="object-cover brightness-95 contrast-110 saturate-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(12,162,166,0.98)_0%,rgba(12,162,166,0.95)_45%,rgba(0,132,134,0.9)_75%,rgba(0,132,134,0.85)_100%)] md:bg-[radial-gradient(circle_at_left,rgba(12,162,166,0.95)_0%,rgba(12,162,166,0.8)_35%,rgba(0,132,134,0.65)_70%,rgba(0,132,134,0.4)_100%)]" />
          <div className="grid min-h-[620px] items-center gap-10 px-8 py-12 md:px-12 lg:grid-cols-[1.05fr_0.55fr] lg:px-16 lg:py-16">
            <div className="relative z-10 text-white">
              <h1 className="heading-h2 text-white">
                Websites that look sharp, load fast and convert
                <Dot variant="amber" />
              </h1>

              <p className="mt-6 max-w-[34rem] text-lg leading-8 text-white/90 md:text-xl">
                We build high performing WordPress and Shopify websites for
                Australian businesses. Fast, easy to manage and built to drive
                real results.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="/contact">Book a consultation</CTAButton>
              </div>

              <ul className="mt-10 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-applify-amber text-applify-amber">
                      ✓
                    </span>
                    <span className="text-lg leading-7 text-white/95">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex items-end justify-center">
              {/* <Image
                src="/images/hero-placeholder.webp"
                alt="Happy business owner using a phone"
                width={700}
                height={700}
                priority
                className="h-auto w-[300px] md:w-[420px] lg:w-[520px]"
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
