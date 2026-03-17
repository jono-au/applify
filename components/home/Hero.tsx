import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const points = [
  "Senior-led builds with no agency run-around",
  "Fast turnaround with clear scope and outcomes",
  "Ongoing care available after launch",
];

export default function Hero() {
  return (
    <section className="pt-4 pb-10 md:pt-6 md:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-applify-gradient">
          <div className="grid min-h-[620px] items-center gap-10 px-8 py-12 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-16">
            {/* LEFT */}
            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[3rem] lg:leading-[1.05]">
                Websites that look sharp, load fast and win more customers.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                We build modern WordPress and Shopify websites for Australian
                businesses that are fast, easy to manage and built to convert.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-applify-amber px-7 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  Book a Consultation
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white/80 px-7 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  See pricing
                </Link>
              </div>

              <ul className="mt-10 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-applify-amber text-applify-amber">
                      ✓
                    </span>
                    <span className="text-lg leading-relaxed text-white/95">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex items-end justify-center">
              <Image
                src="/images/hero-placeholder.webp"
                alt="Happy business owner using a phone"
                width={700}
                height={700}
                priority
                className="h-auto w-[300px] md:w-[420px] lg:w-[520px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
