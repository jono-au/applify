"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "./CtaButton";

export default function CTABanner() {
  return (
    <motion.section
      className="py-20 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="relative overflow-hidden rounded-[32px] px-8 py-14 sm:px-12 lg:px-16 lg:py-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffb846] via-[#ff9a3d] to-[#ff5a00]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="max-w-[1000px] heading-h2 text-[#ffffff]">
              Ready to build a better website?
            </h2>
            <p className="mt-4 max-w-[600px] text-body text-[#ffffff]">
              Work directly with a senior developer. No agency fluff. Just
              results.
            </p>
            <div className="mt-8">
              {/* <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-[#161616] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Let's get started
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link> */}
              <CTAButton href="/contact" variant="white">
                Let's get started
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
