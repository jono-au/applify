import {
  BadgeCheck,
  Blocks,
  MessagesSquare,
  UserRoundSearch,
} from "lucide-react";

export const whyApplifyPillars = [
  {
    title: "Senior Led",
    description:
      "Work directly with experienced developers who understand strategy, design and development. No layers, no handovers, no account manager fluff.",
    Icon: BadgeCheck,
  },
  {
    title: "Built to Scale",
    description:
      "From simple websites to custom platforms and integrations, everything we build is designed for performance, flexibility and future growth from day one.",
    Icon: Blocks,
  },
  {
    title: "Clear Communication",
    description:
      "We keep things straightforward, collaborative and easy to follow, so you always know what is happening, what matters and what comes next.",
    Icon: MessagesSquare,
  },
  {
    title: "User First Thinking",
    description:
      "Everything we build is easy to use, clear and focused on real business outcomes. Built for real users with your business in mind.",
    Icon: UserRoundSearch,
  },
] as const;
