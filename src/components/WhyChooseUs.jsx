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
      className="group border-secondary/30 from-primary-light via-primary to-primary-dark shadow-primary/10 hover:border-secondary hover:shadow-primary/20 relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border bg-linear-to-br p-4 shadow-lg transition-[border-color,box-shadow] duration-300 hover:shadow-xl sm:rounded-[22px] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="from-primary via-accent to-primary pointer-events-none absolute inset-0 -z-10 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 size-36 rotate-45 rounded-[28px] border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-[55deg]"
      />

      <div
        aria-hidden="true"
        className="border-accent-light/20 pointer-events-none absolute -top-14 -right-3 size-36 rotate-45 rounded-[28px] border"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-8 opacity-[0.06] transition-transform duration-500 group-hover:scale-110"
      >
        <lord-icon
          src={feature.icon}
          colors="primary:#FFFFFF,secondary:#FFFFFF"
          className="block size-32 sm:size-44"
        />
      </div>

      <div className="relative mb-4 flex items-center justify-between sm:mb-6">
        <div className="relative">
          <span
            aria-hidden="true"
            className="border-accent-light/30 absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[14px] border sm:rounded-[18px]"
          />

          <div className="border-accent-light/40 group-hover:border-accent-light group-hover:from-secondary/25 relative flex size-12 items-center justify-center rounded-[14px] border bg-linear-to-br from-white/20 to-white/5 backdrop-blur-sm transition-all duration-300 group-hover:to-white/10 sm:size-16 sm:rounded-[18px]">
            <lord-icon
              src={feature.icon}
              trigger="loop(1800)"
              colors="primary:#EFD28D,secondary:#FFFFFF"
              speed="0.8"
              className="block size-8 sm:size-11"
              aria-hidden="true"
            />
          </div>
        </div>

        <span
          aria-hidden="true"
          className="font-heading group-hover:text-accent-light/30 text-[26px] leading-none text-white/15 transition-colors duration-300 sm:text-[36px]"
        >
          {String(feature.number).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex-1">
        <h3 className="font-heading text-[14px] leading-[1.4] font-normal text-white sm:text-[18px]">
          {feature.title}
        </h3>

        <span
          aria-hidden="true"
          className="from-secondary-dark via-accent-light to-secondary-dark mt-3 block h-[2px] w-8 rounded-full bg-linear-to-r transition-all duration-500 group-hover:w-14"
        />

        <p className="mt-3 font-sans text-[11px] leading-[1.75] text-white/80 sm:text-[13px]">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-5 flex items-center gap-2 border-t border-white/15 pt-3 sm:mt-6 sm:pt-4">
        <span
          aria-hidden="true"
          className="bg-accent-light size-1.5 shrink-0 rotate-45"
        />

        <span className="text-accent-light font-sans text-[8px] font-bold tracking-[0.12em] uppercase sm:text-[10px]">
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
          <h2 id="why-title" className="section-heading">
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
          className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
