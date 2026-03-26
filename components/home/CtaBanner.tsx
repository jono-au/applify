import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#ffb846] to-[#ff5a00] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          {/* dot pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* soft gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          {/* content */}
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* TEXT */}
            <h2 className="max-w-[720px] text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight tracking-[-0.02em] text-black">
              Ready to make your website{" "}
              <span className="bg-black px-3 py-1 text-white">
                Better for Customers?
              </span>
            </h2>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-black shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Book a Consultation
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
