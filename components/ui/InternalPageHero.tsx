"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type InternalPageHeroProps = {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  highlightText?: string;
};

export default function InternalPageHero({
  title,
  description,
  breadcrumbs,
  highlightText,
}: InternalPageHeroProps) {
  const parts = highlightText
    ? title.split(new RegExp(`(${escapeRegExp(highlightText)})`, "gi"))
    : [title];

  return (
    <section className="relative  overflow-hidden">
      <Container>
        <div className="relative grid min-h-[420px] items-center gap-12 py-16 md:min-h-[520px] md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:min-h-[620px] lg:py-24">
          <motion.div
            className="relative z-10 max-w-[760px]"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm font-medium text-black/30 md:mb-10"
            >
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li
                      key={`${item.label}-${index}`}
                      className="flex items-center gap-2"
                    >
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="transition-colours duration-200 hover:text-black/55"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className={isLast ? "text-black/45" : ""}>
                          {item.label}
                        </span>
                      )}

                      {!isLast && <span>/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <h1 className="text-[3.8rem] font-black leading-[0.92] tracking-[-0.05em] text-black sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.8rem]">
              {parts.map((part, i) => {
                const isHighlight =
                  highlightText &&
                  part.toLowerCase() === highlightText.toLowerCase();

                if (isHighlight) {
                  return (
                    <span key={i} className="relative inline-block">
                      <span className="absolute bottom-[0.10em] left-0 z-0 h-[0.26em] w-full bg-[#ffb846]" />
                      <span className="relative z-10">{part}</span>
                    </span>
                  );
                }

                return <span key={i}>{part}</span>;
              })}
            </h1>

            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-black/80 md:mt-7 md:text-xl">
              {description}
            </p>
          </motion.div>

          <div className="relative min-h-[360px] md:block lg:min-h-[430px]">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, x: 40, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative ml-auto h-[320px] w-[420px] lg:h-[420px] lg:w-[560px]">
                {/* Small circle */}
                <motion.div
                  className="absolute bottom-[10px] left-[10px] h-[210px] w-[210px] rounded-full bg-[#ffb846] mix-blend-multiply lg:bottom-[18px] lg:left-[10px] lg:h-[250px] lg:w-[250px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Large circle */}
                <motion.div
                  className="absolute right-0 top-0 h-[290px] w-[290px] rounded-full bg-[#ff5a00] mix-blend-multiply lg:h-[430px] lg:w-[430px]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
