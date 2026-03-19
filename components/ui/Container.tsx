import type { ReactNode, HTMLAttributes } from "react";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
