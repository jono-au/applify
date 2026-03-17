import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Applify"
              width={220}
              height={70}
              priority
              className="h-auto w-[170px] md:w-[210px]"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <nav>
              <ul className="flex items-center gap-10 text-lg font-semibold text-black">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-applify-amber px-7 py-3 text-lg font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              Contact ↗
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
