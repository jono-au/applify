import Image from "next/image";
import Container from "@/components/ui/Container";
import Dot from "@/components/ui/Dot";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

type TeamSectionProps = {
  members: TeamMember[];
};

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto text-center">
          <p className="eyebrow">Nice to meet you</p>

          <h2 className="heading-h2 max-w-[600px] mx-auto">
            I love working with great people
            <Dot variant="orange" />
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-[760px] gap-x-8 gap-y-10 lg:mt-16 lg:max-w-[820px]">
          {members.map((member) => (
            <article key={member.name} className="text-center">
              <div className="relative mx-auto aspect-[1/1] w-full max-w-[310px] overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,15,16,0.06)]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 310px"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-[#0f0f10]">
                  {member.name}
                </h3>
                <p className="mt-2 text-base text-[#0f0f10]/55">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
