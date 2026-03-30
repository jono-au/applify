import Container from "@/components/ui/Container";
import {
  BadgeCheck,
  Blocks,
  MessagesSquare,
  UserRoundSearch,
} from "lucide-react";

const pillars = [
  {
    title: "Senior-Led Delivery",
    description:
      "You work directly with experienced people who understand strategy, design and development — not bloated layers, handovers or account-manager fluff.",
    Icon: BadgeCheck,
  },
  {
    title: "Built to Scale",
    description:
      "From brochure sites to custom platforms and integrations, we build with performance, flexibility and future growth in mind from day one.",
    Icon: Blocks,
  },
  {
    title: "Clear Communication",
    description:
      "We keep things straightforward, collaborative and easy to follow, so you always know what’s happening, what matters and what comes next.",
    Icon: MessagesSquare,
  },
  {
    title: "User-First Thinking",
    description:
      "Everything we create is shaped around usability, clarity and real business outcomes — helping your website do more than just look good.",
    Icon: UserRoundSearch,
  },
] as const;

type WhyApplifyProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
};

export default function WhyApplify({
  eyebrow = "Why Applify",
  title = "Our commitment to clear, practical digital solutions",
  highlightText = "digital solutions",
}: WhyApplifyProps) {
  const titleParts = title.split(
    new RegExp(`(${escapeRegExp(highlightText)})`, "gi"),
  );

  return (
    <section className="bg-[#f5f5f3] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f0f10]/70">
            {eyebrow}
          </p>

          <h2 className="mt-5 text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.045em] text-[#0f0f10] sm:text-[3.25rem] lg:text-[4.8rem]">
            {titleParts.map((part, index) => {
              const isHighlight =
                part.toLowerCase() === highlightText.toLowerCase();

              if (!isHighlight) {
                return <span key={`${part}-${index}`}>{part}</span>;
              }

              return (
                <span
                  key={`${part}-${index}`}
                  className="relative inline-block"
                >
                  <span className="relative z-10">{part}</span>
                  <span className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.32em] rounded-sm bg-[#ffb846]" />
                </span>
              );
            })}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {pillars.map(({ title, description, Icon }) => (
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

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
