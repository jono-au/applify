import type { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
} & HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 lg:px-10",
        size === "narrow" && "max-w-[980px]",
        size === "default" && "max-w-[1240px]",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
