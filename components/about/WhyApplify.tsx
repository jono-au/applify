import Container from "@/components/ui/Container";
import { whyApplifyPillars } from "@/data/whyApplify";

export default function WhyApplify() {
  return (
    <section className="bg-[#f5f5f3] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <p className="eyebrow">Why Applify</p>

          <h2 className="heading-h2">
            Strategy, execution and performance. Done right.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {whyApplifyPillars.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group h-full rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(15,15,16,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,15,16,0.08)] sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0f0f10]/8 bg-[#f8f8f6]">
                <Icon className="h-7 w-7 text-[#0f0f10]" strokeWidth={1.8} />
              </div>

              <h3 className="mt-7 text-[1.85rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f0f10]">
                {title}
              </h3>

              <p className="mt-5 text-base leading-8 text-[#0f0f10]/68">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
