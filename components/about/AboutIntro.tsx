import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

type AboutIntroProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  secondaryDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function AboutIntro({
  eyebrow = "Who We Are",
  title = "Helping businesses grow with smart digital experiences",
  highlightText = "smart digital experiences",
  description = "At Applify, we help Australian businesses build websites, digital tools and online experiences that feel polished, perform properly and support real growth. We focus on clear communication, practical strategy and senior-led delivery from start to finish.",
  secondaryDescription = "Whether you need a stronger online presence, a better user journey or custom functionality behind the scenes, we build solutions that are designed to work in the real world — not just look good in a mock-up.",
  imageSrc = "/images/about/about-team.png",
  imageAlt = "Applify team collaborating around a computer",
  ctaLabel = "Learn More",
  ctaHref = "/contact",
}: AboutIntroProps) {
  const titleParts = title.split(
    new RegExp(`(${escapeRegExp(highlightText)})`, "gi"),
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          {/* Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(15,15,16,0.08)]">
              <div className="relative aspect-[4/4.2] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 max-w-[760px]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#0f0f10]/70">
              {eyebrow}
            </p>

            <h2 className="max-w-[12ch] text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#0f0f10] sm:text-[3.25rem] lg:text-[4.4rem]">
              {titleParts.map((part, index) => {
                const isHighlight =
                  part.toLowerCase() === highlightText.toLowerCase();

                if (!isHighlight) {
                  return <span key={`${part}-${index}`}>{part}</span>;
                }

                return (
                  <span
                    key={`${part}-${index}`}
                    className="relative inline-block"
                  >
                    <span className="relative z-10">{part}</span>
                    <span className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.34em] rounded-sm bg-[#ffb846]" />
                  </span>
                );
              })}
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#0f0f10]/72 sm:text-lg">
              <p>{description}</p>
              <p>{secondaryDescription}</p>
            </div>

            <div className="mt-10">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 rounded-full border border-[#0f0f10]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0f0f10] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0f0f10] hover:shadow-[0_12px_30px_rgba(15,15,16,0.08)]"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
