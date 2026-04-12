"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  imageSrc: string;
};

export default function ImageBreak({ imageSrc }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (rect.top + rect.height) / (windowHeight + rect.height);

      const translate = (0.5 - progress) * 40;

      setOffset(translate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden"
    >
      {/* Parallax image */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={imageSrc}
          alt="Team working"
          fill
          className="object-cover object-right md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Soft gradient polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
    </section>
  );
}
