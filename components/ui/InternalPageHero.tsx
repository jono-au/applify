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
};

export default function InternalPageHero({
  title,
  description,
  breadcrumbs,
}: InternalPageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative grid min-h-[420px] items-center gap-12 py-16 md:min-h-[520px] md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:min-h-[620px] lg:py-24">
          <motion.div
            className="relative z-10 max-w-[760px] pr-10 sm:pr-16 md:pr-0"
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
                          className="transition-colors duration-200 hover:text-black/55"
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

            <h1 className="heading-h1">{title}</h1>

            <p className="mt-6 text-body md:mt-7">{description}</p>
          </motion.div>

          <div className="absolute inset-x-0 top-[80px] z-0 min-h-[220px] sm:top-[190px] sm:min-h-[300px] md:relative md:inset-auto md:-top-6 md:min-h-[360px] lg:top-0 lg:min-h-[430px]">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, x: 40, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative ml-auto mr-[-36px] h-[220px] w-[280px] sm:mr-[-18px] sm:h-[280px] sm:w-[360px] md:mr-0 md:h-[320px] md:w-[420px] lg:h-[420px] lg:w-[560px]">
                <motion.div
                  className="absolute bottom-[78px] left-[18px] h-[120px] w-[120px] rounded-full bg-[#ffb846] mix-blend-multiply sm:bottom-[92px] sm:left-[20px] sm:h-[160px] sm:w-[160px] md:bottom-[10px] md:left-[10px] md:h-[210px] md:w-[210px] lg:bottom-[18px] lg:left-[10px] lg:h-[250px] lg:w-[250px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute right-0 top-[-8px] h-[180px] w-[180px] rounded-full bg-[#ff5a00] mix-blend-multiply sm:top-[-28px] sm:h-[240px] sm:w-[240px] md:top-0 md:h-[290px] md:w-[290px] lg:h-[430px] lg:w-[430px]"
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
