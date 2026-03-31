import Image from "next/image";
import Container from "@/components/ui/Container";
import SupportCareCard from "./SupportCareCard";
import { supportPlans } from "@/data/supportCareData";

export default function SupportCareSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-[#ffb846]/12 blur-3xl" />
        <div className="absolute right-[-120px] top-16 h-80 w-80 rounded-full bg-[#0ca2a6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-[760px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-600">
              Support & Care
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl">
              Priority support
              <span className="relative inline-block">
                {" "}
                when you need it
                <span className="absolute bottom-2 left-0 h-3 w-full rounded-full bg-[#ffb846]/80 -z-10" />
              </span>
            </h2>

            <p className="mt-8 max-w-[62ch] text-lg leading-8 text-black/65 md:text-xl">
              Keep your website secure, updated, and performing at its best with
              fast, reliable support. We handle the technical side so you can
              focus on running your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-black/60">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
                Fast turnaround
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
                Australian based
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">
                Senior developer
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[1/1]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffb846]/25 to-[#ff5a00]/10 blur-3xl" />

              <div className="relative mx-auto h-full w-full">
                <Image
                  src="/images/care-support.webp"
                  alt="Friendly support specialist"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {supportPlans.map((plan) => (
            <SupportCareCard
              key={plan.title}
              title={plan.title}
              eyebrow={plan.eyebrow}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              href={plan.href}
              accent={plan.accent}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
