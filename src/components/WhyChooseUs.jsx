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
    icon: "/icons/content.json",
  },
  {
    title: "Verified USA Lab Reports",
    description:
      "Transparent COAs, independently tested by accredited US labs.",
    icon: "/icons/varified.json",
  },
  {
    title: "Consistent Results",
    description: "The same testing and documentation for every batch.",
    icon: "/icons/sterility.json",
  },
  {
    title: "Fast Same-Day Shipping",
    description: "Eligible orders ship the same day.",
    icon: "/icons/truck.json",
  },
  {
    title: "Real People, Here to Help",
    description: "Questions? Talk to our support team.",
    icon: "/icons/support.json",
  },
  {
    title: "Payment You Can Trust",
    description: "Secure and reliable checkout.",
    icon: "/icons/payment.json",
  },
];

function FeatureCard({ feature }) {
  return (
    <article
      data-feature-card
      className="why-card group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] p-5 sm:p-7"
    >
      <div className="flex items-start">
        <span className="grid size-14 place-items-center rounded-[18px] border border-white/15 bg-[#071a43] sm:size-15">
          <lord-icon
            src={feature.icon}
            trigger="loop"
            delay="1000"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{
              width: "45px",
              height: "45px",
            }}
          />
        </span>
      </div>

      <h3 className="font-heading text-primary mt-6 text-md leading-snug font-semibold tracking-[-0.02em] sm:text-xl">
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
            <span className="text-primary">Voltera Sciences?</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-[580px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Quality isn't just a promise. It's the standard behind every
            research compound, every batch, and every order.
          </p>
        </header>

        <div
          ref={gridRef}
          className="grid items-stretch grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
