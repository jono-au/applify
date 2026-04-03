import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowButton } from "@/components/ui/ArrowBtn";

const services = [
  {
    title: "Website Upgrades",
    description:
      "Turn your existing website into a fast, high performing asset. We clean up the tech, improve performance and rebuild what's holding you back so your site actually converts.",
    href: "/services",
  },
  {
    title: "New Websites",
    description:
      "Custom WordPress and Shopify websites built from the ground up. Clean, scalable and easy to manage, designed to grow with your business.",
    href: "/services",
  },
  {
    title: "Ongoing Care",
    description:
      "Keep your website secure, up to date and performing at its best. Ongoing care with priority support so you can focus on running your business.",
    href: "/services",
  },
  {
    title: "Integrations & Automation",
    description:
      "Connect your systems and automate work slowing you down. We streamline your processes, reduce manual tasks and build efficient workflows that scale with your business.",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <p className="eyebrow">What We Do</p>

          <h2 className="heading-h2">
            Everything you need to build, run and grow online.
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1100px] flex-col gap-4 md:mt-14">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block rounded-[1.75rem] border border-black/[0.03] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.045)] transition-all duration-300 md:hover:-translate-y-[4px] md:hover:border-black/[0.06] md:hover:bg-applify-amber/90 md:hover:shadow-[0_18px_50px_rgba(255,184,70,0.22)] active:scale-[0.985] active:bg-gray-100 active:shadow-[0_6px_18px_rgba(0,0,0,0.08)] active:transition-none"
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
                  <h3 className="heading-h3">{service.title}</h3>

                  <p className="mt-3 text-body transition-colors duration-300 md:group-hover:text-black/75">
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
