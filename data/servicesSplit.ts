import { Megaphone, MonitorSmartphone, type LucideIcon } from "lucide-react";

export type ServiceFeature = {
  text: string;
  dotClassName: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  reverse: boolean;
  icon: LucideIcon;
  features: ServiceFeature[];
};

export const servicesSplit: ServiceItem[] = [
  {
    title: "Website Renovations",
    description:
      "We refine and rebuild the parts of your website that matter most. From structure and speed to usability and conversion, every improvement is focused on making your site easier to use and more effective at turning visitors into customers.",
    imageSrc: "/images/services/renovations-min.webp",
    imageAlt:
      "Webpage showing two website old version and new version side by side for comparison",
    href: "/services/website-renovations",
    reverse: false,
    icon: Megaphone,
    features: [
      {
        text: "UX & conversion improvements",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Page structure & content flow",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Speed & core web vitals",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Technical cleanup & code optimisation",
        dotClassName: "bg-[#ff5a00]",
      },
    ],
  },
  {
    title: "Custom Websites",
    description:
      "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
    imageSrc: "/images/services/custom-websites.webp",
    imageAlt:
      "A mobile website mockup showing a custom designed website on a smartphone screen",
    href: "/services/new-website-builds",
    reverse: true,
    icon: MonitorSmartphone,
    features: [
      {
        text: "WordPress, Shopify or fully custom builds",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "Conversion driven layouts & user flows",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "Mobile first, responsive across all devices",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "Clean code & long term maintainability",
        dotClassName: "bg-[#0ca2a6]",
      },
    ],
  },
  {
    title: "Integrations & Automation",
    description:
      "Your website should not operate in isolation. We connect it to your systems, automate the manual work, and build smarter workflows so your business runs more efficiently.",
    imageSrc: "/images/services/integrations.webp",
    imageAlt:
      "Man sitting at a desk working on a laptop with various integration icons floating around him",
    href: "/services/integrations-automation",
    reverse: false,
    icon: MonitorSmartphone,
    features: [
      {
        text: "CRM & lead management integrations",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "API & third party system connections",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Ecommerce, payments & fulfilment flows",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Automation of repetitive tasks & workflows",
        dotClassName: "bg-[#ffb846]",
      },
    ],
  },
  {
    title: "Essential Care",
    description:
      "Ongoing maintenance and support to keep your website running smoothly behind the scenes. We manage updates and monitor performance so your site stays reliable, secure, and always ready to support your business.",
    imageSrc: "/images/services/care.webp",
    imageAlt:
      "Google lighthouse performance report showing high scores across all categories indicating a well optimised website",
    href: "/services/essential-care",
    reverse: true,
    icon: MonitorSmartphone,
    features: [
      {
        text: "Hosting, updates & technical maintenance",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Security monitoring & daily backups",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Uptime monitoring & performance checks",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Priority support when you need it",
        dotClassName: "bg-[#008486]",
      },
    ],
  },
  {
    title: "White Label Partnerships",
    description:
      "Scale your agency without increasing overhead. We handle the technical delivery behind the scenes so you can focus on clients, sales, and growth.",
    imageSrc: "/images/services/partnerships.webp",
    imageAlt:
      "Male and female professional sitting down together at a desk reviewing a website.",
    href: "/services/white-label-partnerships",
    reverse: false,
    icon: MonitorSmartphone,
    features: [
      {
        text: "Website builds, renovations & technical work",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Ongoing care & support delivered under your brand",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Fast, reliable turnaround you can trust",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Flexible engagement to suit your workflow",
        dotClassName: "bg-[#ffb846]",
      },
      {
        text: "Direct access to a senior developer",
        dotClassName: "bg-[#ffb846]",
      },
    ],
  },
];
