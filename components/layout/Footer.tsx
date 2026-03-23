import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#008486] via-[#0ca2a6] to-[#18b8c3] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[120px] h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-100px] top-[40px] h-[340px] w-[340px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT: LOGO */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-10 rounded-[40px] bg-white/5 blur-2xl" />
              <Image
                src="/images/applify-logo-white.svg"
                alt="Applify"
                width={320}
                height={110}
                className="relative w-[220px] lg:w-[260px]"
              />
            </div>
          </div>

          {/* RIGHT: COPY */}
          <div className="max-w-[720px] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#ffb846]">
              Let’s work together.
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-8 text-white/90">
              Our mission is to help Australian businesses succeed online. We’re
              dedicated to building strong partnerships through clear
              communication and collaboration, delivering innovative technology
              solutions tailored to your needs. As your trusted partner in
              digital growth, we’re here to support your success every step of
              the way.
            </p>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="mt-28 lg:mt-32 flex flex-col gap-6">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <FooterContactItem href="tel:0421238196">
              0421 238 196
            </FooterContactItem>

            <Dot />

            <FooterContactItem href="mailto:hello@applify.com.au">
              hello@applify.com.au
            </FooterContactItem>

            <Dot />

            <FooterContactItem href="https://maps.google.com/?q=8+Clunies+Ross+Crt,+Eight+Mile+Plains,+QLD+4113">
              8 Clunies Ross Crt, Eight Mile Plains, QLD 4113
            </FooterContactItem>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-white/20" />

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* NAV */}
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-white/90">
            {footerNav.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                <Link href={item.href} className="hover:opacity-70 transition">
                  {item.label}
                </Link>

                {i !== footerNav.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/60">©2025 Applify Group</p>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- sub components ---------- */

function FooterContactItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-[-0.02em] text-[#ffb846] hover:opacity-80 transition"
    >
      {children}
    </Link>
  );
}

function Dot() {
  return (
    <span className="hidden lg:inline-block h-3 w-3 rounded-full bg-[#ff5a00]" />
  );
}
