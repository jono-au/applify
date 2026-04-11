"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import CTAButton from "../ui/CtaButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

type HighlightState = {
  x: number;
  width: number;
  opacity: number;
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [highlight, setHighlight] = useState<HighlightState>({
    x: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const setItemRef = (href: string, el: HTMLAnchorElement | null) => {
    itemRefs.current[href] = el;
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const updateHighlight = () => {
    const navEl = navRef.current;
    if (!navEl) return;

    const activeHref = navItems.find((item) => isActive(item.href))?.href;

    if (!activeHref) {
      setHighlight((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const activeItem = itemRefs.current[activeHref];
    if (!activeItem) {
      setHighlight((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setHighlight({
      x: itemRect.left - navRect.left,
      width: itemRect.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    updateHighlight();
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => updateHighlight();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[999] bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <Container>
        <div className="flex items-center py-5">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/applify-logo-black.svg"
              alt="Applify"
              width={180}
              height={60}
              priority
              className="h-auto w-[150px] md:w-[180px]"
            />
          </Link>

          <div className="ml-auto flex items-center gap-4 md:gap-10">
            <nav
              ref={navRef}
              className="relative hidden items-center gap-8 md:flex lg:gap-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[56%] z-0 h-[40%] rounded-[3px] bg-applify-amber/90 transition-[transform,width,opacity] duration-300 ease-out will-change-transform"
                style={{
                  width: `${highlight.width}px`,
                  opacity: highlight.opacity,
                  transform: `translate3d(${highlight.x}px, 0, 0)`,
                }}
              />

              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={(el) => setItemRef(item.href, el)}
                    aria-current={active ? "page" : undefined}
                    className="relative z-10 inline-block px-[2px] py-0 text-base font-semibold leading-none text-black transition-colors duration-200 lg:text-xl"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <CTAButton href="/contact">Contact</CTAButton>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-black/10 p-3 transition-colors duration-200 hover:bg-black/[0.03] md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block h-5 w-5">
                {mobileOpen ? (
                  <>
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
                  </>
                ) : (
                  <>
                    <span className="absolute left-1/2 top-[4px] h-[2px] w-5 -translate-x-1/2 bg-black" />
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-black" />
                    <span className="absolute left-1/2 bottom-[4px] h-[2px] w-5 -translate-x-1/2 bg-black" />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            mobileOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-black/10 pt-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-2xl px-3 py-3 text-lg font-semibold transition-colors duration-200 ${
                      active
                        ? "bg-black/[0.04] text-black"
                        : "text-black hover:bg-black/[0.03]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <CTAButton href="/contact" className="hidden md:inline-flex">
                Contact
              </CTAButton>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
