import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2",
        "min-h-[56px] px-6 rounded-full",
        "text-lg font-semibold",
        "shadow-lg transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-xl",
        "active:scale-[0.98]",

        // VARIANTS
        variant === "primary" &&
          "text-white bg-gradient-to-r from-[#ffb846] to-[#ff9a00] border-none",

        variant === "secondary" &&
          "text-white bg-gradient-to-r from-[#0ca2a6] to-[#008486]",

        variant === "white" && "bg-white text-[#0f0f10] border border-black/5",

        className,
      )}
    >
      <span>{children}</span>

      <ArrowUpRight
        className={clsx(
          "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
          variant === "white" ? "text-[#0f0f10]" : "text-white",
        )}
        strokeWidth={2}
      />
    </Link>
  );
}
