import {
  ShieldCheck,
  Wrench,
  HardDriveDownload,
  Activity,
  LifeBuoy,
  PlugZap,
} from "lucide-react";

export const supportPlans = [
  {
    title: "Ad-hoc Support",
    eyebrow: "Flexible help when needed",
    description:
      "Perfect for small updates, fixes, landing pages, and one-off technical jobs without committing to ongoing care.",
    features: [
      {
        icon: Wrench,
        text: "Website fixes & troubleshooting",
      },
      {
        icon: PlugZap,
        text: "Integrations & small improvements",
      },
      {
        icon: LifeBuoy,
        text: "Hourly support for one-off work",
      },
    ],
    cta: "Get Ad-hoc Support",
    href: "/contact",
    accent: "teal",
  },
  {
    title: "Essential Care",
    eyebrow: "Ongoing support & protection",
    description:
      "For businesses that need reliable maintenance, monitoring, backups, security, and support to keep their website running smoothly.",
    features: [
      {
        icon: Activity,
        text: "Software updates & monitoring",
      },
      {
        icon: HardDriveDownload,
        text: "Backups & uptime checks",
      },
      {
        icon: ShieldCheck,
        text: "Security, hosting & support",
      },
    ],
    cta: "Get Essential Care",
    href: "/contact",
    accent: "gold",
  },
] as const;
