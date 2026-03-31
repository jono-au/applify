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
  title = "Helping Australian businesses connect with and serve more customers online.",
  highlightText = "digital experiences",
  description = "We build custom websites and digital solutions designed support long term growth. Every project is led by a senior developer, with clear communication and practical thinking from start to finish.",
  secondaryDescription = "Whether it's improving your online presence, refining the user journey, or building custom functionality, we focus on solutions that work in the real world.",
  imageSrc = "/images/about/about-team.png",
  imageAlt = "Applify team collaborating around a computer",
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

            <h2 className="text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#0f0f10] sm:text-[3.25rem] lg:text-[4.4rem]">
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
          </div>
        </div>
      </Container>
    </section>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
