import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowButton } from "@/components/ui/ArrowBtn";

const services = [
  {
    title: "Website Renovations",
    description:
      "Modern, responsive websites tailored to your brand and goals. We build fast, user-friendly sites that drive engagement and conversions.",
    href: "/services",
  },
  {
    title: "New Website Builds",
    description:
      "Modern, responsive websites tailored to your brand and goals. We build fast, user-friendly sites that drive engagement and conversions.",
    href: "/services",
  },
  {
    title: "Essential Care",
    description:
      "Modern, responsive websites tailored to your brand and goals. We build fast, user-friendly sites that drive engagement and conversions.",
    href: "/services",
  },
  {
    title: "Integrations & Automation",
    description:
      "Modern, responsive websites tailored to your brand and goals. We build fast, user-friendly sites that drive engagement and conversions.",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold text-black/65 md:text-base">
            What We Do
          </p>

          <h2 className="mt-3 text-[2.35rem] font-bold leading-[1.05] tracking-[-0.03em] text-black sm:text-[2.8rem] md:text-5xl lg:text-[4rem] lg:leading-[1.05]">
            Explore Our Full Range of
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Expert Digital{" "}
            <span className="relative inline-block leading-none">
              <span className="relative z-10">Services</span>
              <span className="absolute inset-x-0 top-[0.55em] h-[0.55em] -z-0 rounded-[3px] bg-applify-amber" />
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1100px] flex-col gap-4 md:mt-14">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block rounded-[1.75rem] border border-black/[0.03] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.045)] transition-all duration-300 md:hover:-translate-y-[4px] md:hover:border-black/[0.06] md:hover:bg-applify-amber/90 md:hover:shadow-[0_18px_50px_rgba(255,184,70,0.22)] active:scale-[0.985] active:bg-applify-amber/95 active:shadow-[0_6px_18px_rgba(0,0,0,0.08)] active:transition-none"
            >
              <div className="grid gap-5 px-5 py-6 sm:px-6 md:grid-cols-[72px_minmax(0,1fr)_72px] md:items-center md:gap-6 md:px-8 md:py-7 lg:px-10">
                <div className="flex items-center justify-between md:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl text-black transition-transform duration-300 md:h-16 md:w-16 md:group-hover:-translate-y-0.5 md:group-hover:scale-110">
                    ✦
                  </div>
                  <ArrowButton
                    className="md:hidden"
                    withBorder
                    size="lg"
                    hoverFill
                    invertOnHover
                    variant="white"
                  />
                </div>

                {/* content */}
                <div className="min-w-0">
                  <h3 className="text-[2rem] font-bold leading-tight text-black transition-colors duration-300 md:text-[2.05rem]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[42ch] text-lg leading-[1.55] text-black/60 transition-colors duration-300 md:text-[1.06rem] md:group-hover:text-black/75">
                    {service.description}
                  </p>
                </div>

                {/* desktop arrow */}
                <div className="hidden shrink-0 md:flex md:justify-end">
                  <ArrowButton withBorder size="lg" variant="white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
