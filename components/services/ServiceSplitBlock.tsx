import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import CTAButton from "../ui/CtaButton";

type Feature = {
  text: string;
  dotClassName?: string;
};

type ServiceSplitBlockProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  features?: Feature[];
  icon?: React.ReactNode;
  reverse?: boolean;
  eyebrow?: string;
  className?: string;
};

export default function ServiceSplitBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  features = [],
  icon,
  reverse = false,
  eyebrow,
  className,
}: ServiceSplitBlockProps) {
  return (
    <section className={clsx("relative", className)}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className={clsx(reverse ? "lg:order-2" : "lg:order-1")}>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className={clsx(
            reverse ? "lg:order-1" : "lg:order-2",
            "max-w-[620px]",
          )}
        >
          {icon ? <div>{icon}</div> : null}

          {eyebrow ? (
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#008486]">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="heading-h2">{title}</h2>

          <p className="mt-5 max-w-[58ch] text-base leading-8 text-[#4b4b4f] sm:text-lg">
            {description}
          </p>

          {features.length > 0 ? (
            <ul className="mt-7 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-start gap-4 text-base font-medium text-[#0f0f10] sm:text-lg"
                >
                  <span
                    className={clsx(
                      "mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full",
                      feature.dotClassName ?? "bg-[#ff5a00]",
                    )}
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
