import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  text: string;
};

type SupportCareCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  features: readonly Feature[];
  cta: string;
  href: string;
  accent: "teal" | "gold";
};

export default function SupportCareCard({
  title,
  eyebrow,
  description,
  features,
  cta,
  href,
  accent,
}: SupportCareCardProps) {
  const isTeal = accent === "teal";

  return (
    <article
      className="
        h-full rounded-corners border border-black/5 bg-white/90 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)]
      "
    >
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-center gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              {eyebrow}
            </p>
            <h3 className="heading-h3">{title}</h3>
          </div>
        </div>

        <p className="mb-6 max-w-[52ch] text-body">{description}</p>

        <div className="mb-6 h-px w-full bg-black/8" />

        <ul className="mb-8 space-y-4">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <div
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isTeal
                    ? "bg-[#0ca2a6]/10 text-[#008486]"
                    : "bg-[#ffb846]/20 text-[#ff9a00]"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <span className="list-items">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href={href}
            className={`group/link inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full px-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
              isTeal
                ? "bg-gradient-to-r from-[#0ca2a6] to-[#008486] ]"
                : "bg-gradient-to-r from-[#ffb846] to-[#ff9a00] ]"
            }`}
          >
            <span>{cta}</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
