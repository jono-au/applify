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
    tags: ["WordPress", "Responsive", "Integrations"],
    href: "/portfolio/innovative-website-design",
    wrapperClassName: "md:max-w-[88%]",
    imageClassName: "aspect-[1.03/0.9]",
  },
  {
    title: "Elemeno",
    image: "/images/portfolio/toystory.jpeg",
    tags: ["Shopify", "Ecommerce"],
    href: "/portfolio/smart-dashboard-design",
    wrapperClassName: "md:max-w-[104%]",
    imageClassName: "aspect-[1.16/1]",
  },
];

export const portfolioRightItems: PortfolioItem[] = [
  {
    title: "Minn Kota",
    image: "/images/portfolio/minnkota.png",
    tags: ["WooCommerce", "Custom Theme", "User Experience"],
    href: "/portfolio/brand-identity-makeover",
    wrapperClassName: "md:ml-auto md:max-w-[100%]",
    imageClassName: "aspect-[1.18/0.95]",
  },
  {
    title: "Narangba Timbers",
    image: "/images/portfolio/narangbatimber.jpg",
    tags: ["WooCommerce", "Ecommerce"],
    href: "/portfolio/custom-mobile-app",
    wrapperClassName: "md:ml-auto md:max-w-[82%]",
    imageClassName: "aspect-[1/1]",
  },
];
