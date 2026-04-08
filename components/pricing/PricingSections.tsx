import PricingBlock from "./PricingBlock";
import { pricingItems } from "@/data/pricingData";

export default function PricingSections() {
  return (
    <>
      {pricingItems.map((item, index) => (
        <PricingBlock
          key={item.heading}
          eyebrow={item.eyebrow}
          heading={item.heading}
          title={item.title}
          description={item.description}
          price={item.price}
          features={item.features}
          image={item.image}
          imageAlt={item.imageAlt}
          reverse={index % 2 !== 0}
          muted={index % 2 !== 0}
          dotVariant={item.dotVariant}
          showDot={item.showDot}
        />
      ))}
    </>
  );
}
