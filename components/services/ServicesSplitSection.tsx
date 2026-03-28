// import Container from "@/components/ui/Container";
// import { Megaphone, MonitorSmartphone } from "lucide-react";
// import ServiceSplitBlock from "./ServiceSplitBlock";
// import ServiceIconWrap from "./ServiceIconWrap";

// const services = [
//   {
//     title: "Website Renovations",
//     description:
//       "We create data-driven digital marketing strategies that help you attract the right audience, increase engagement, and drive measurable growth. From content and SEO to paid media and analytics, we build campaigns that support real business outcomes.",
//     imageSrc: "/images/services/digital-marketing.png",
//     imageAlt:
//       "Team reviewing digital marketing dashboards on a desktop monitor",
//     href: "/services/website-renovations",
//     reverse: false,
//     features: [
//       {
//         text: "Search Engine Optimisation (SEO)",
//         dotClassName: "bg-[#ff5a00]",
//       },
//       {
//         text: "Content & Social Media Marketing",
//         dotClassName: "bg-[#ffb846]",
//       },
//     ],
//     icon: (
//       <ServiceIconWrap>
//         <Megaphone className="h-8 w-8" strokeWidth={1.8} />
//       </ServiceIconWrap>
//     ),
//   },
//   {
//     title: "New Website Builds",
//     description:
//       "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
//     imageSrc: "/images/services/web-design-development.png",
//     imageAlt: "Designer working on a website layout across multiple screens",
//     href: "/services/new-website-builds",
//     reverse: true,
//     features: [
//       { text: "Custom Website Design", dotClassName: "bg-[#0ca2a6]" },
//       { text: "Responsive Development", dotClassName: "bg-[#008486]" },
//     ],
//     icon: (
//       <ServiceIconWrap>
//         <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
//       </ServiceIconWrap>
//     ),
//   },
// ];

// export default function ServicesSplitSection() {
//   return (
//     <section className="py-20 sm:py-24 lg:py-32">
//       <Container>
//         <div className="space-y-20 sm:space-y-24 lg:space-y-32">
//           {services.map((service, index) => {
//             const isAlt = index % 2 === 1;

//             return (
//               <div
//                 key={service.title}
//                 className={
//                   isAlt
//                     ? "lg:bg-[#f6f6f3] lg:rounded-[32px] lg:px-10 lg:py-20"
//                     : ""
//                 }
//               >
//                 <ServiceSplitBlock
//                   title={service.title}
//                   description={service.description}
//                   imageSrc={service.imageSrc}
//                   imageAlt={service.imageAlt}
//                   href={service.href}
//                   features={service.features}
//                   reverse={service.reverse}
//                   icon={service.icon}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from "@/components/ui/Container";
import { Megaphone, MonitorSmartphone } from "lucide-react";
import ServiceSplitBlock from "./ServiceSplitBlock";
import ServiceIconWrap from "./ServiceIconWrap";

const services = [
  {
    title: "Website Renovations",
    description:
      "We create data-driven digital marketing strategies that help you attract the right audience, increase engagement, and drive measurable growth. From content and SEO to paid media and analytics, we build campaigns that support real business outcomes.",
    imageSrc: "/images/services/digital-marketing.png",
    imageAlt:
      "Team reviewing digital marketing dashboards on a desktop monitor",
    href: "/services/website-renovations",
    reverse: false,
    features: [
      {
        text: "Search Engine Optimisation (SEO)",
        dotClassName: "bg-[#ff5a00]",
      },
      {
        text: "Content & Social Media Marketing",
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
    title: "New Website Builds",
    description:
      "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/new-website-builds",
    reverse: true,
    features: [
      { text: "Custom Website Design", dotClassName: "bg-[#0ca2a6]" },
      { text: "Responsive Development", dotClassName: "bg-[#008486]" },
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
      "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/essential-care",
    reverse: false,
    features: [
      { text: "Custom Website Design", dotClassName: "bg-[#0ca2a6]" },
      { text: "Responsive Development", dotClassName: "bg-[#008486]" },
    ],
    icon: (
      <ServiceIconWrap>
        <MonitorSmartphone className="h-8 w-8" strokeWidth={1.8} />
      </ServiceIconWrap>
    ),
  },
  {
    title: "White-Label Partnerships",
    description:
      "We design and build high-performing websites that are as functional as they are visually compelling. Whether you need a sleek marketing site or a more tailored digital platform, we combine thoughtful design with clean, scalable code.",
    imageSrc: "/images/services/web-design-development.png",
    imageAlt: "Designer working on a website layout across multiple screens",
    href: "/services/white-label-partnerships",
    reverse: true,
    features: [
      { text: "Custom Website Design", dotClassName: "bg-[#0ca2a6]" },
      { text: "Responsive Development", dotClassName: "bg-[#008486]" },
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
