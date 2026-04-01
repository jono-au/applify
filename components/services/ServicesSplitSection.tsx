import Container from "@/components/ui/Container";
import { Megaphone, MonitorSmartphone } from "lucide-react";
import ServiceSplitBlock from "./ServiceSplitBlock";
import ServiceIconWrap from "./ServiceIconWrap";

const services = [
  {
    title: "Website Renovations",
    description:
      "We refine and rebuild the parts of your website that matter most. From structure and speed to usability and conversion, every improvement is focused on making your site easier to use and more effective at turning visitors into customers.",
    imageSrc: "/images/services/digital-marketing.png",
    imageAlt:
      "Team reviewing digital marketing dashboards on a desktop monitor",
    href: "/services/website-renovations",
    reverse: false,
    features: [
      {
        text: "UX & Conversion Improvements",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Page Structure & Content Flow",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Speed & Core Web Vitals",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Technical Cleanup & Code Optimisation",
        dotClassName: "bg-[#ffb846]",
      },
    ],
    icon: (
      <ServiceIconWrap>
        <Megaphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
  {
    title: "Custom Websites",
    description:
      "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/new-website-builds",
    reverse: true,
    features: [
      {
        text: "WordPress, Shopify or Fully Custom Builds",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Conversion-Driven Layouts & User Flows",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Mobile-First, Responsive Across All Devices",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Clean Code & Long-Term Maintainability",
        dotClassName: "bg-[#008486]",
      },
    ],
    icon: (
      <ServiceIconWrap>
        <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
  {
    title: "Integrations & Automation",
    description:
      "Your website shouldn't operate in isolation. We connect it to your systems, automate the manual work, and build smarter workflows so your business runs more efficiently.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/essential-care",
    reverse: false,
    features: [
      {
        text: "CRM & Lead Management Integrations",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "API & Third-Party System Connections",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Ecommerce, Payments & Fulfilment Flows",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Automation of Repetitive Tasks & Workflows",
        dotClassName: "bg-[#008486]",
      },
    ],
    icon: (
      <ServiceIconWrap>
        <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
  {
    title: "Essential Care",
    description:
      "Ongoing maintenance and support to keep your website running smoothly behind the scenes. We manage updates and monitor performance so your site stays reliable, secure, and always ready to support your business.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/essential-care",
    reverse: true,
    features: [
      {
        text: "Hosting, Updates & Technical Maintenance",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "Security Monitoring & Daily Backups",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Uptime Monitoring & Performance Checks",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Priority Support when you need it",
        dotClassName: "bg-[#008486]",
      },
    ],
    icon: (
      <ServiceIconWrap>
        <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
  {
    title: "White Label Partnerships",
    description:
      "Scale your agency without increasing overhead. We handle the technical delivery behind the scenes so you can focus on clients, sales, and growth.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/white-label-partnerships",
    reverse: false,
    features: [
      {
        text: "Website Builds, Renovations & Technical Work",
        dotClassName: "bg-[#0ca2a6]",
      },
      {
        text: "Ongoing Care & Support Delivered Under Your Brand",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Fast, Reliable Turnaround You Can Trust",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Flexible Engagement to Suit Your Workflow",
        dotClassName: "bg-[#008486]",
      },
      {
        text: "Direct Access to a Senior Developer",
        dotClassName: "bg-[#008486]",
      },
    ],
    icon: (
      <ServiceIconWrap>
        <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
];

export default function ServicesSplitSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28">
      <Container>
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => {
            const isAlt = index % 2 === 1;

            return (
              <div
                key={service.title}
                className={
                  isAlt
                    ? "lg:rounded-[36px] lg:bg-[#fafafa] lg:px-10 lg:py-16 xl:px-14 xl:py-20"
                    : ""
                }
              >
                <ServiceSplitBlock
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  href={service.href}
                  features={service.features}
                  reverse={service.reverse}
                  icon={service.icon}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
