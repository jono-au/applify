export type PortfolioItem = {
  title: string;
  image: string;
  tags: string[];
  href: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

export const portfolioLeftItems: PortfolioItem[] = [
  {
    title: "Business Chamber Queensland",
    image: "/images/portfolio/website-design.jpg",
    tags: ["Responsive", "Design"],
    href: "/portfolio/innovative-website-design",
    wrapperClassName: "md:max-w-[88%]",
    imageClassName: "aspect-[1.03/0.9]",
  },
  {
    title: "Elemeno",
    image: "/images/portfolio/toystory.jpeg",
    tags: ["Dashboard", "UI Design"],
    href: "/portfolio/smart-dashboard-design",
    wrapperClassName: "md:max-w-[104%]",
    imageClassName: "aspect-[1.16/1]",
  },
];

export const portfolioRightItems: PortfolioItem[] = [
  {
    title: "Minn Kota",
    image: "/images/portfolio/minnkota.png",
    tags: ["Logo", "Strategy"],
    href: "/portfolio/brand-identity-makeover",
    wrapperClassName: "md:ml-auto md:max-w-[100%]",
    imageClassName: "aspect-[1.18/0.95]",
  },
  {
    title: "Narangba Timbers",
    image: "/images/portfolio/narangbatimber.jpg",
    tags: ["App", "Interface"],
    href: "/portfolio/custom-mobile-app",
    wrapperClassName: "md:ml-auto md:max-w-[82%]",
    imageClassName: "aspect-[1/1]",
  },
];
