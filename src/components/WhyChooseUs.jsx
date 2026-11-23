"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Independent Laboratory Testing",
    description:
      "Every batch undergoes extensive quality checks, including purity, identity, and laboratory verification.",
    icon: "/icons/sterility.json",
  },
  {
    number: "02",
    title: "Batch-Verified COAs",
    description:
      "Access batch-specific Certificates of Analysis with clear, traceable testing documentation.",
    icon: "/icons/varified.json",
  },
  {
    number: "03",
    title: "Research-Grade Consistency",
    description:
      "Research compounds prepared with a focus on quality, consistency, and reliable laboratory analysis.",
    icon: "/icons/wired.json",
  },
  {
    number: "04",
    title: "Same-Day Shipping",
    description:
      "Eligible orders placed before the daily cutoff are prepared for same-day dispatch.",
    icon: "/icons/truck.json",
  },
];

function FeatureCard({ feature }) {
  return (
    <article
      data-feature-card
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#C9953D]/25 bg-[linear-gradient(135deg,#111B38_0%,#071A43_55%,#030D27_100%)] p-5 shadow-[0_8px_30px_rgba(7,26,67,0.12)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#E8C77B]/60 hover:shadow-[0_18px_45px_rgba(7,26,67,0.25)] sm:p-7 lg:rounded-[24px] lg:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#1746A2]/20 blur-[55px]"
      />

      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        <div className="relative shrink-0">
          <div className="flex size-14 items-center justify-center rounded-[16px] border border-[#E8C77B]/30 bg-[#C9953D]/10 transition-colors duration-300 group-hover:border-[#E8C77B]/60 group-hover:bg-[#C9953D]/15 sm:size-16">
            <lord-icon
              src={feature.icon}
              trigger="loop(1800)"
              colors="primary:#E8C77B,secondary:#FFFFFF"
              speed="0.8"
              style={{
                width: "42px",
                height: "42px",
                display: "block",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-[15px] leading-[1.4] font-normal text-white sm:text-[18px] lg:text-[20px]">
            {feature.title}
          </h3>

          <p className="mt-3 font-sans text-[12px] leading-[1.8] text-white/70 sm:text-[14px]">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-sans text-[10px] font-semibold tracking-[0.16em] text-[#E8C77B] uppercase sm:text-[11px]">
          Voltera Standard
        </span>
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    import("@lordicon/element").then(({ defineElement }) => {
      if (!customElements.get("lord-icon")) {
        defineElement();
      }
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const cards = gsap.utils.toArray(
      grid.querySelectorAll("[data-feature-card]"),
    );

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      aria-labelledby="why-title"
      className="bg-primary-soft relative isolate overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="bg-primary-soft/70 pointer-events-none absolute top-0 -left-40 h-[400px] w-[400px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="bg-primary-soft/70 pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-10 max-w-[750px] text-center sm:mb-14">
          <h2
            id="why-title"
            className="font-heading text-primary text-[clamp(28px,4.5vw,52px)] leading-[1.15] font-normal tracking-[-0.025em]"
          >
            Why Choose
            <br />
            <span className="text-secondary">Voltera Sciences?</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-[580px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Quality isn't just a promise. It's the standard behind every
            research compound, every batch, and every order.
          </p>
        </header>

        <div
          ref={gridRef}
          className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
