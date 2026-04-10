export type DotVariant = "maroon" | "orange" | "teal" | "amber";

export type PricingItem = {
  eyebrow: string;
  heading: string;
  price: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  dotVariant?: DotVariant;
  showDot?: boolean;
};

export const pricingItems: PricingItem[] = [
  {
    eyebrow: "No Agency Nonsense",
    heading: "Website builds & renovations for growing businesses",
    price: "Starting from $3500",
    title: "Fixed scope. Delivered by a senior developer.",
    description:
      "Built properly from the start or rebuilt where it matters most. We focus on structure, performance and conversion so your website actually supports your growth. Clear scope. Clean execution. No wasted time.",
    features: [
      "Full website builds or targeted renovations",
      "Shopify migrations & integrations",
      "WordPress redesigns & rebuilds",
      "UX, structure & conversion improvements",
      "Speed, performance & technical optimisation",
      "Clean up of bloated themes, plugins or code",
    ],
    dotVariant: "maroon",
    showDot: true,
    image: "/images/pricing/fix-scope.webp",
    imageAlt: "Website homepage design on a desktop monitor",
  },
  {
    eyebrow: "Ongoing & Adhoc Work",
    heading: "Need updates or fixes?",
    price: "$90/hour ex GST",
    title: "Flexible support. Pay only for what you need.",
    description:
      "For businesses that don't need a full rebuild. Get direct access to a senior developer for updates, fixes and improvements as you need them.",
    features: [
      "Landing pages & small builds",
      "Content updates & page edits",
      "Bug fixes & troubleshooting",
      "Integrations & API connections",
      "Plugin & theme customisation",
      "Form, tracking & analytics setup",
    ],
    showDot: false,
    image: "/images/pricing/fixes.webp",
    imageAlt: "Developer working on a laptop with code on the screen",
  },
  {
    eyebrow: "Essential Care",
    heading: "Keep your website running smoothly",
    price: "$99/month ex GST",
    title: "Ongoing care. Reliable, secure and stress-free.",
    description:
      "Ongoing care for businesses that want peace of mind. We handle updates, monitoring, backups and support so your website stays secure, stable and performing at its best.",
    features: [
      "Optimised hosting",
      "Core, theme and plugin updates",
      "Security monitoring",
      "Daily backups",
      "Uptime & performance monitoring",
      "Priority support",
    ],
    dotVariant: "orange",
    showDot: true,
    image: "/images/pricing/essential-care.webp",
    imageAlt: "Dashboard showing website performance and security monitoring",
  },
];
