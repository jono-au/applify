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
    eyebrow: "Help when you need it",
    description:
      "Fast and reliable help for any project. Perfect for fixes, improvements, and on demand work.",
    features: [
      {
        icon: Wrench,
        text: "Website fixes & troubleshooting",
      },
      {
        icon: PlugZap,
        text: "Integrations & improvements",
      },
      {
        icon: LifeBuoy,
        text: "Landing pages & one off projects",
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
      "No stress. We handle everything so you don't have to worry about the technical stuff.",
    features: [
      {
        icon: Activity,
        text: "Software updates & monitoring",
      },
      {
        icon: HardDriveDownload,
        text: "Daily backups & uptime checks",
      },
      {
        icon: ShieldCheck,
        text: "Security, hosting & direct support",
      },
    ],
    cta: "Start Essential Care",
    href: "/contact",
    accent: "gold",
  },
] as const;
