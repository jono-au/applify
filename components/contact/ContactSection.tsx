"use client";

import { Mail, MapPin, Phone, LucideProps } from "lucide-react";
import CTAButton from "../ui/CtaButton";
import Dot from "@/components/ui/Dot";

type ContactItem = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  lines: string[];
};

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["8 Clunies Ross Crt", "Eight Mile Plains", "QLD 4113 Australia"],
  },
  {
    icon: Mail,
    title: "Email us at",
    lines: ["hello@applify.com.au", "support@applify.com.au"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["0421 238 196", "Mon-Fri, 8:00am-5:00pm"],
  },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-8 md:pb-24 md:pt-12 lg:pb-28">
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20 lg:px-10">
        <div className="space-y-10 md:space-y-12">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="grid grid-cols-[56px_1fr] gap-5 md:grid-cols-[64px_1fr] md:gap-6"
              >
                <div className="flex h-14 w-14 items-start justify-center rounded-full border border-black/10 bg-white/60 pt-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:h-16 md:w-16">
                  <Icon className="h-7 w-7 text-[#0f0f10]" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="heading-h3 text-3xl">{item.title}</h3>

                  <div className="mt-3 space-y-1 list-items">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="max-w-[980px]">
            <h2 className="heading-h2">
              Send us a message
              <Dot variant="orange" />
            </h2>

            <form className="mt-8 md:mt-10">
              <div className="grid gap-x-8 gap-y-7 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
                <FormField
                  label="Name"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
                <FormField
                  label="Phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
                <FormField
                  label="Subject"
                  type="text"
                  name="subject"
                  autoComplete="off"
                />

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-lg font-medium text-black/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 pb-3 pt-0 text-lg text-black outline-none transition-colors duration-200 placeholder:text-black/30 focus:border-black/50 focus:ring-0"
                    placeholder=""
                  />
                </div>
              </div>

              <CTAButton href="#" className="mt-5 border-1 ">
                Send Now
              </CTAButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  type: string;
  name: string;
  autoComplete?: string;
};

function FormField({ label, type, name, autoComplete }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-lg font-medium text-black/80"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="w-full border-0 border-b border-black/15 bg-transparent px-0 pb-3 pt-0 text-lg text-black outline-none transition-colors duration-200 placeholder:text-black/30 focus:border-black/50 focus:ring-0"
        placeholder=""
      />
    </div>
  );
}
