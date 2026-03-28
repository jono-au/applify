// import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";
// import { ArrowUpRight } from "lucide-react";

// type Feature = {
//   text: string;
//   dotClassName?: string;
// };

// type ServiceSplitBlockProps = {
//   title: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   href: string;
//   features?: Feature[];
//   icon?: React.ReactNode;
//   reverse?: boolean;
//   eyebrow?: string;
//   className?: string;
// };

// export default function ServiceSplitBlock({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   href,
//   features = [],
//   icon,
//   reverse = false,
//   eyebrow,
//   className,
// }: ServiceSplitBlockProps) {
//   return (
//     <section className={clsx("relative", className)}>
//       <div
//         className={clsx("grid items-center gap-10 lg:gap-16", "lg:grid-cols-2")}
//       >
//         <div
//           className={clsx(reverse ? "lg:order-2" : "lg:order-1", "relative")}
//         >
//           <div className="relative overflow-hidden rounded-[32px]">
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               width={900}
//               height={700}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         <div
//           className={clsx(
//             reverse ? "lg:order-1" : "lg:order-2",
//             "max-w-[620px]",
//           )}
//         >
//           {icon ? <div className="mb-5">{icon}</div> : null}

//           {eyebrow ? (
//             <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#008486]">
//               {eyebrow}
//             </p>
//           ) : null}

//           <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#0f0f10] sm:text-5xl">
//             {title}
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-[#4b4b4f]">{description}</p>

//           {features.length > 0 ? (
//             <ul className="mt-8 space-y-4">
//               {features.map((feature) => (
//                 <li
//                   key={feature.text}
//                   className="flex items-start gap-4 text-lg font-medium text-[#0f0f10]"
//                 >
//                   <span
//                     className={clsx(
//                       "mt-[11px] h-2.5 w-2.5 shrink-0 rounded-full",
//                       feature.dotClassName ?? "bg-[#ff5a00]",
//                     )}
//                   />
//                   <span>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : null}

//           <div className="mt-10">
//             <Link
//               href={href}
//               className="group inline-flex items-center gap-2 rounded-full border border-[#1d1d20]/30 px-7 py-4 text-sm font-semibold text-[#0f0f10] transition-all duration-300 hover:border-[#0f0f10] hover:bg-[#0f0f10] hover:text-white"
//             >
//               <span>Read More</span>
//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type Feature = {
  text: string;
  dotClassName?: string;
};

type ServiceSplitBlockProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  features?: Feature[];
  icon?: React.ReactNode;
  reverse?: boolean;
  eyebrow?: string;
  className?: string;
};

export default function ServiceSplitBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  features = [],
  icon,
  reverse = false,
  eyebrow,
  className,
}: ServiceSplitBlockProps) {
  return (
    <section className={clsx("relative", className)}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className={clsx(reverse ? "lg:order-2" : "lg:order-1")}>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className={clsx(
            reverse ? "lg:order-1" : "lg:order-2",
            "max-w-[620px]",
          )}
        >
          {icon ? <div>{icon}</div> : null}

          {eyebrow ? (
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#008486]">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mt-6 text-[2.25rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#0f0f10] sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h2>

          <p className="mt-5 max-w-[58ch] text-base leading-8 text-[#4b4b4f] sm:text-lg">
            {description}
          </p>

          {features.length > 0 ? (
            <ul className="mt-7 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-start gap-4 text-base font-medium text-[#0f0f10] sm:text-lg"
                >
                  <span
                    className={clsx(
                      "mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full",
                      feature.dotClassName ?? "bg-[#ff5a00]",
                    )}
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-9">
            <Link
              href={href}
              className="group inline-flex items-center gap-2 rounded-full border border-[#1d1d20]/25 px-7 py-4 text-sm font-semibold text-[#0f0f10] transition-all duration-300 hover:border-[#0f0f10] hover:bg-[#0f0f10] hover:text-white"
            >
              <span>Read More</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
