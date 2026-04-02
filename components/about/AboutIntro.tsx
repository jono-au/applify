import Image from "next/image";
import Container from "@/components/ui/Container";

type AboutIntroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  secondaryDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AboutIntro({
  eyebrow = "Who We Are",
  title = "Helping Australian businesses connect with and serve more customers online.",
  description = "We build custom websites and digital solutions designed support long term growth. Every project is led by a senior developer, with clear communication and practical thinking from start to finish.",
  secondaryDescription = "Whether it's improving your online presence, refining the user journey, or building custom functionality, we focus on solutions that work in the real world.",
  imageSrc = "/images/about/about-team.png",
  imageAlt = "Applify team collaborating around a computer",
}: AboutIntroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="order-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(15,15,16,0.08)]">
              <div className="relative aspect-[4/4.2] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2 max-w-[760px]">
            <p className="eyebrow">{eyebrow}</p>

            <h2 className="heading-h2">{title}</h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#0f0f10]/72 sm:text-lg">
              <p>{description}</p>
              <p>{secondaryDescription}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
