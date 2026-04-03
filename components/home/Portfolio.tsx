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
            <p className="eyebrow">Our Work</p>

            <h2 className="heading-h2">
              Projects we've been proud to work on.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-body">
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
