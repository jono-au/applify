import PortfolioCard from "@/components/ui/PortfolioCard";
import {
  portfolioLeftItems,
  portfolioRightItems,
} from "@/data/portfolio-items";

export default function PortfolioSection() {
  return (
    <section className="bg-[#f5f3ef] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600">
              Our Work
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Projects we've been proud to work on.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="max-w-md text-base leading-8 text-neutral-600 sm:text-lg">
              High performance, reliable websites built to support your business
              around the clock.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20 lg:gap-x-10">
          <div className="space-y-14 lg:space-y-20">
            {portfolioLeftItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>

          <div className="space-y-14 md:-mt-16 lg:-mt-24 lg:space-y-20">
            {portfolioRightItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
