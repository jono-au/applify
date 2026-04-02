import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import CTAButton from "../ui/CtaButton";

type PricingBlockProps = {
  eyebrow: string;
  heading: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  muted?: boolean;
};

export default function PricingBlock({
  eyebrow,
  heading,
  title,
  description,
  price,
  features,
  image,
  imageAlt,
  reverse = false,
  muted = false,
}: PricingBlockProps) {
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <section className={clsx("py-16 lg:py-20", muted && "bg-[#f3f3f3]")}>
      {" "}
      <Container>
        <div className="mx-auto w-full">
          {eyebrow && <p className="eyebrow text-center ">{eyebrow}</p>}

          <h2 className="heading-h2 text-center mb-8 sm:mb-10 lg:mb-16 max-w-[820px] mx-auto">
            {heading}
          </h2>

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-12">
            {" "}
            <div
              className={clsx(
                "order-2 space-y-6 lg:space-y-0",
                reverse ? "lg:order-2" : "lg:order-1",
              )}
            >
              <div className="lg:hidden">
                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0f0f10] sm:text-4xl">
                  {title}
                </h3>

                <p className="pt-2 text-left text-base font-semibold text-[#0f0f10] sm:text-lg">
                  {price}
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0f0f10] sm:text-4xl">
                    {title}
                  </h3>

                  <p className="text-base font-semibold text-[#0f0f10] sm:shrink-0">
                    {price}
                  </p>
                </div>

                <p className="mt-4 max-w-[600px] text-base leading-7 text-[#3e3e42] sm:text-lg">
                  {description}
                </p>

                <div className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  <ul className="space-y-3">
                    {leftFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] font-medium text-[#0f0f10]"
                      >
                        <span className="mt-[9px] h-2 w-2 rounded-full bg-[#ff8a00]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3">
                    {rightFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] font-medium text-[#0f0f10]"
                      >
                        <span className="mt-[9px] h-2 w-2 rounded-full bg-[#ffb846]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <CTAButton href="/contact">Contact Us </CTAButton>
                </div>
              </div>
            </div>
            <div
              className={clsx("order-1", reverse ? "lg:order-1" : "lg:order-2")}
            >
              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={620}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:hidden">
            <p className="text-base leading-7 text-[#3e3e42] sm:text-lg">
              {description}
            </p>

            <div className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              <ul className="space-y-3">
                {leftFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] font-medium text-[#0f0f10]"
                  >
                    <span className="mt-[9px] h-2 w-2 rounded-full bg-[#ff8a00]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {rightFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[15px] font-medium text-[#0f0f10]"
                  >
                    <span className="mt-[9px] h-2 w-2 rounded-full bg-[#ffb846]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <CTAButton href="/contact">Contact Us </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
