import Image from "next/image";
import Container from "@/components/ui/Container";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

type TeamSectionProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  members?: TeamMember[];
};

export default function TeamSection({
  eyebrow = "Our Team",
  title = "Meet the people behind the work",
  highlightText = "people",
  members = defaultMembers,
}: TeamSectionProps) {
  const titleParts = title.split(
    new RegExp(`(${escapeRegExp(highlightText)})`, "gi"),
  );

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f0f10]/70">
            {eyebrow}
          </p>

          <h2 className="mt-5 text-[2.4rem] font-semibold leading-[0.96] tracking-[-0.045em] text-[#0f0f10] sm:text-[3.25rem] lg:text-[4.8rem]">
            {titleParts.map((part, index) => {
              const isHighlight =
                part.toLowerCase() === highlightText.toLowerCase();

              if (!isHighlight) {
                return <span key={`${part}-${index}`}>{part}</span>;
              }

              return (
                <span
                  key={`${part}-${index}`}
                  className="relative inline-block"
                >
                  <span className="relative z-10">{part}</span>
                  <span className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.32em] rounded-sm bg-[#ffb846]" />
                </span>
              );
            })}
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-[760px] gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:max-w-[820px]">
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

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
