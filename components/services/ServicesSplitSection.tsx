import Container from "@/components/ui/Container";
import { servicesSplit } from "@/data/servicesSplit";
import ServiceSplitBlock from "./ServiceSplitBlock";
import ServiceIconWrap from "./ServiceIconWrap";

export default function ServicesSplitSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28">
      <Container>
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {servicesSplit.map((service, index) => {
            const isAlt = index % 2 === 1;
            const Icon = service.icon;

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
                  icon={
                    <ServiceIconWrap>
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </ServiceIconWrap>
                  }
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
