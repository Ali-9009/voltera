"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const researchFeatures = [
  {
    number: "01",
    title: "Identity",
    description: "Compound identity verification.",
    image: "/assets/identification.jpg",
  },
  {
    number: "02",
    title: "Purity",
    description: "Advanced purity analysis.",
    image: "/assets/purity.jpg",
  },
  {
    number: "03",
    title: "Endotoxins",
    description: "Laboratory endotoxin screening.",
    image: "/assets/endotoxins.jpg",
  },
  {
    number: "04",
    title: "Net Content",
    description: "Precise content verification.",
    image: "/assets/measurement.jpg",
  },
];

function ResearchFeature({ feature }) {
  return (
    <article
      data-research-feature
      className="group hover:border-secondary/60 relative z-20 flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border border-white/15 bg-white/[0.07] p-3 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:bg-white/[0.11] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:p-4"
    >
      <div
        aria-hidden="true"
        className="via-secondary/60 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="relative flex items-center justify-between">
        <span className="text-accent-light/80 font-sans text-[9px] font-bold tracking-[0.15em] sm:text-[10px]">
          ANALYSIS
        </span>

        <div className="flex items-center gap-1">
          <span className="bg-secondary size-1.5 rounded-full" />
          <span className="size-1 rounded-full bg-white/30" />
          <span className="size-1 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="relative mx-auto mt-3 flex size-[110px] shrink-0 items-center justify-center sm:size-[125px] lg:size-[140px]">
        <div className="border-secondary/50 pointer-events-none absolute inset-0 rounded-full border" />

        <div className="pointer-events-none absolute inset-[5px] rounded-full border border-dashed border-white/25" />

        <div className="border-secondary/60 bg-primary relative size-[calc(100%-16px)] shrink-0 overflow-hidden rounded-full border-[3px]">
          <Image
            src={feature.image}
            alt={`${feature.title} laboratory research illustration`}
            fill
            sizes="(max-width: 639px) 94px, (max-width: 1023px) 109px, 124px"
            className="rounded-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <span className="border-primary bg-secondary absolute top-1/2 -right-1 z-10 size-3 -translate-y-1/2 rounded-full border-2 shadow-[0_0_12px_rgba(201,149,61,0.5)]" />
      </div>

      <div className="mt-3 text-center">
        <h3 className="font-heading text-[12px] leading-[1.3] text-white sm:text-[15px] lg:text-[17px]">
          {feature.title}
        </h3>

        {/* <p className="mx-auto mt-1.5 max-w-[220px] font-sans text-[10px] leading-[1.6] text-white/65 sm:text-[12px]">
          {feature.description}
        </p> */}
      </div>

      {/* <div className="mt-auto flex items-center justify-center gap-2 border-t border-white/10 pt-2">
        <span className="bg-secondary size-1.5 rounded-full" />

        <span className="font-sans text-[9px] font-semibold tracking-[0.1em] text-white/50 uppercase">
          Research Analysis
        </span>
      </div> */}
    </article>
  );
}

function CenterPortal() {
  return (
    <div
      data-showcase-portal
      className="relative mx-auto flex size-[250px] shrink-0 items-center justify-center sm:size-[300px] lg:size-[350px]"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/20 pointer-events-none absolute -inset-12 rounded-full blur-[65px]"
      />

      <div className="border-secondary/20 absolute inset-0 rounded-full border" />

      <div className="showcase-orbit border-secondary/35 absolute inset-[10px] rounded-full border border-dashed" />

      <div className="absolute inset-[25px] rounded-full border border-white/10" />

      <div className="border-secondary/25 absolute inset-[40px] rounded-full border" />

      <div className="border-secondary/35 absolute inset-[52px] rounded-full border bg-[radial-gradient(circle_at_40%_30%,#1746A2_0%,#071A43_55%,#030D27_100%)] shadow-[0_0_50px_rgba(23,70,162,0.25),inset_0_0_35px_rgba(0,0,0,0.2)]" />

      <div className="absolute inset-[60px] rounded-full border border-white/10" />

      <span className="bg-secondary absolute top-[10px] left-1/2 z-20 size-2 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(201,149,61,0.5)]" />

      <span className="bg-secondary absolute bottom-[10px] left-1/2 z-20 size-2 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(201,149,61,0.5)]" />

      <span className="bg-secondary absolute top-1/2 left-[10px] z-20 size-2 -translate-y-1/2 rounded-full" />

      <span className="bg-secondary absolute top-1/2 right-[10px] z-20 size-2 -translate-y-1/2 rounded-full" />

      <div className="relative z-30 flex h-[100px] w-[155px] items-center justify-center sm:h-[120px] sm:w-[185px] lg:h-[140px] lg:w-[210px]">
        <Image
          src="/assets-v/voltera-logo.png"
          alt="Voltera Sciences"
          fill
          sizes="(max-width: 639px) 155px, (max-width: 1023px) 185px, 210px"
          className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
        />
      </div>
    </div>
  );
}

function ResearchConnections() {
  return (
    <svg
      viewBox="0 0 1200 480"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      <defs>
        <linearGradient
          id="volteraConnectionGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C9953D" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#E8C77B" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#C9953D" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {[
        "M 290 115 Q 410 115 475 190",
        "M 910 115 Q 790 115 725 190",
        "M 290 365 Q 410 365 475 290",
        "M 910 365 Q 790 365 725 290",
      ].map((path) => (
        <path
          key={path}
          d={path}
          stroke="url(#volteraConnectionGradient)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          fill="none"
        />
      ))}
    </svg>
  );
}

export default function ResearchShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const heading = section.querySelector("[data-showcase-heading]");
      const portal = section.querySelector("[data-showcase-portal]");

      const cards = gsap.utils.toArray(
        section.querySelectorAll("[data-research-feature]"),
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      timeline.fromTo(
        heading,
        {
          autoAlpha: 0,
          y: 25,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
      );

      timeline.fromTo(
        portal,
        {
          autoAlpha: 0,
          scale: 0.7,
          rotation: -8,
        },
        {
          autoAlpha: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.25",
      );

      cards.forEach((card, index) => {
        timeline.fromTo(
          card,
          {
            autoAlpha: 0,
            scale: 0.8,
            y: 25,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.55,
            ease: "back.out(1.6)",
          },
          index === 0 ? "-=0.3" : "-=0.25",
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="research-showcase-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#020817_0%,#071A43_50%,#102B65_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:55px_55px] opacity-[0.12]"
      />

      <div
        aria-hidden="true"
        className="bg-primary-light/15 pointer-events-none absolute top-1/3 -left-60 size-[450px] rounded-full blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="bg-primary-light/20 pointer-events-none absolute -right-60 bottom-0 size-[450px] rounded-full blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="via-secondary/60 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <header
          data-showcase-heading
          className="mx-auto max-w-[700px] text-center"
        >
          <h2
            id="research-showcase-heading"
            className="font-heading text-[clamp(28px,4.5vw,50px)] leading-[1.15] text-white"
          >
            Precision at
            <br />
            <span className="text-accent-light">Every Level.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] font-sans text-[13px] leading-[1.75] text-white/65 sm:text-[15px]">
            Explore the essential quality indicators behind research materials,
            from compound identity and purity to batch-specific analysis.
          </p>
        </header>

        <div className="relative mx-auto mt-8 max-w-[1200px] lg:mt-10 lg:h-[500px]">
          <ResearchConnections />

          <div className="relative z-20 mb-8 flex justify-center lg:absolute lg:inset-0 lg:mb-0 lg:items-center">
            <CenterPortal />
          </div>

          <div className="relative z-30 grid grid-cols-2 gap-3 sm:gap-5 lg:absolute lg:inset-0 lg:grid-cols-[260px_1fr_260px] lg:grid-rows-2 lg:gap-x-4 lg:gap-y-6 xl:grid-cols-[280px_1fr_280px]">
            {researchFeatures.map((feature, index) => {
              const positions = [
                "lg:col-start-1 lg:row-start-1",
                "lg:col-start-3 lg:row-start-1",
                "lg:col-start-1 lg:row-start-2",
                "lg:col-start-3 lg:row-start-2",
              ];

              return (
                <div
                  key={feature.number}
                  className={`${positions[index]} min-w-0`}
                >
                  <ResearchFeature feature={feature} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-30 mt-8 flex justify-center">
          <div className="border-secondary/25 flex items-center gap-3 rounded-full border bg-white/[0.06] px-5 py-3 backdrop-blur-md">
            <span className="bg-secondary size-2 rounded-full" />

            <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-white/80 uppercase sm:text-[11px]">
              Science-Driven Research Standards
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes showcaseOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .showcase-orbit {
          animation: showcaseOrbit 45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .showcase-orbit {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
