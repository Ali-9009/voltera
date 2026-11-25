"use client";

import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  FileCheck2,
  FlaskConical,
  Headset,
  LockKeyhole,
  Truck,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Premium Quality Standards",
    description:
      "99%+ purity and uncompromising standards, with every batch 8x tested.",
    icon: BadgeCheck,
  },
  {
    title: "Verified USA Lab Reports",
    description:
      "Transparent COAs, independently tested by accredited US labs.",
    icon: FileCheck2,
  },
  {
    title: "Consistent Results",
    description:
      "The same testing and documentation for every batch, every single time.",
    icon: FlaskConical,
  },
  {
    title: "Fast Same-Day Shipping",
    description:
      "Eligible orders ship the same day. Free ground shipping at $150+.",
    icon: Truck,
  },
  {
    title: "Real People, Here to Help",
    description:
      "Questions about a product, an order or a COA? Talk to our support team.",
    icon: Headset,
  },
  {
    title: "Payment You Can Trust",
    description:
      "Secure payment options, including Zelle, Venmo and major cards.",
    icon: LockKeyhole,
  },
];

function FeatureCard({ feature, number }) {
  const Icon = feature.icon;

  return (
    <article
      data-feature-card
      className="why-card group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] p-5 sm:p-7"
    >
      <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className="pointer-events-none absolute -right-5 -bottom-7 -z-10 size-28 -rotate-12 text-primary opacity-15 transition-transform duration-500 group-hover:-rotate-6 sm:size-36"
      />

      <div className="flex items-start justify-between">
        <span className="why-icon grid size-13 place-items-center rounded-[15px] text-[var(--navy)] sm:size-14">
          <Icon aria-hidden="true" strokeWidth={1.8} className="size-6" />
        </span>

        <span
          aria-hidden="true"
          className="bg-primary rounded-full px-3 py-1.5 text-xs leading-none font-bold text-white tabular-nums"
        >
          {String(number).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-heading text-primary mt-6 text-lg leading-snug font-semibold tracking-[-0.02em] sm:text-xl">
        {feature.title}
      </h3>

      <p className="text-primary-dark/80 mt-2 max-w-[36ch] text-[15px] leading-relaxed">
        {feature.description}
      </p>
    </article>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

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
          className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
