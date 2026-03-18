import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type ArrowButtonProps = {
  variant?: "default" | "white" | "filled" | "ghost";
  size?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
  withBorder?: boolean;
  withBgHover?: boolean;
  hoverFill?: boolean;
  invertOnHover?: boolean;
  className?: string;
};

export function ArrowButton({
  variant = "default",
  size = "md",
  iconSize,
  withBorder = false,
  withBgHover = false,
  hoverFill = false,
  invertOnHover = false,
  className,
}: ArrowButtonProps) {
  const finalIconSize = iconSize || size;

  return (
    <span
      className={clsx(
        "flex items-center justify-center rounded-full transition-all duration-300",

        // Sizes
        size === "sm" && "w-8 h-8",
        size === "md" && "w-11 h-11",
        size === "lg" && "w-14 h-14",

        // Border
        withBorder && "border border-neutral-300/80",

        // Variants
        variant === "default" && "bg-transparent text-neutral-800",
        variant === "white" && "bg-white text-black",
        variant === "filled" && "bg-[#ff5a00] text-white",
        variant === "ghost" && "bg-transparent text-neutral-700",

        // Hover
        "hover:-translate-y-0.5",
        withBgHover && "hover:bg-neutral-100",
        hoverFill && "hover:bg-[#ff5a00]",
        hoverFill && withBorder && "hover:border-[#ff5a00]",
        invertOnHover && "hover:text-white",

        className,
      )}
    >
      <ArrowUpRight
        className={clsx(
          "transition-colors duration-300",
          finalIconSize === "sm" && "w-4 h-4",
          finalIconSize === "md" && "w-5 h-5",
          finalIconSize === "lg" && "w-6 h-6",
        )}
      />
    </span>
  );
}
