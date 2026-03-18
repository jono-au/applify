import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  image: string;
  tags: string[];
  href: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function PortfolioCard({
  title,
  image,
  tags,
  href,
  wrapperClassName,
  imageClassName,
}: PortfolioCardProps) {
  return (
    <article className={cn("group w-full", wrapperClassName)}>
      <Link href={href} className="block focus:outline-none">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]",
            "aspect-[1.08/0.88]",
            imageClassName,
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
      </Link>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-black/5 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-[2rem]">
            <Link
              href={href}
              className="transition-colours hover:text-neutral-700 focus:outline-none"
            >
              {title}
            </Link>
          </h3>
        </div>

        <Link
          href={href}
          aria-label={`View project: ${title}`}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white text-neutral-900 transition duration-300 hover:-translate-y-0.5 hover:border-applify-amber hover:bg-applify-amber hover:text-white"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}
