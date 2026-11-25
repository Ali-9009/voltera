"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Fingerprint,
  FlaskConical,
  Scale,
  Atom,
  ShieldCheck,
  Microscope,
  Activity,
  Droplets,
  TestTube,
  Biohazard,
  ArrowUpRight,
} from "lucide-react";

const researchFeatures = [
  {
    title: "Identity",
    description: "Compound verification",
    icon: Fingerprint,
  },
  {
    title: "Purity",
    description: "HPLC analysis",
    icon: FlaskConical,
  },
  {
    title: "Net Content",
    description: "Peptide quantification",
    icon: Scale,
  },
  {
    title: "Arsenic",
    description: "Trace metal screening",
    icon: Atom,
  },
  {
    title: "Cadmium",
    description: "ICP-MS analysis",
    icon: Microscope,
  },
  {
    title: "Lead",
    description: "Heavy metal screening",
    icon: ShieldCheck,
  },
  {
    title: "Mercury",
    description: "Trace metal analysis",
    icon: Droplets,
  },
  {
    title: "Chromium",
    description: "ICP-MS screening",
    icon: Activity,
  },
  {
    title: "Sterility",
    description: "PCR testing",
    icon: TestTube,
  },
  {
    title: "Endotoxins",
    description: "USP <85> testing",
    icon: Biohazard,
  },
];

const positions = [
  { x: 50, y: 9 },
  { x: 72, y: 16 },
  { x: 87, y: 36 },
  { x: 87, y: 61 },
  { x: 72, y: 83 },
  { x: 50, y: 91 },
  { x: 28, y: 83 },
  { x: 13, y: 61 },
  { x: 13, y: 36 },
  { x: 28, y: 16 },
];

function ResearchFeature({ feature, position }) {
  const Icon = feature.icon;

  return (
    <article
      style={{
        "--node-x": `${position.x}%`,
        "--node-y": `${position.y}%`,
      }}
      className="group relative flex min-w-0 flex-col items-center text-center lg:absolute lg:top-[var(--node-y)] lg:left-[var(--node-x)] lg:w-[180px] lg:-translate-x-1/2 lg:-translate-y-1/2"
    >
      <div className="relative flex size-[64px] items-center justify-center sm:size-[76px]">
        <span
          aria-hidden="true"
          className="border-primary-light/20 group-hover:border-secondary/60 absolute inset-0 rounded-full border transition-all duration-500 group-hover:scale-110"
        />

        <span
          aria-hidden="true"
          className="border-primary-light/20 absolute inset-[5px] rounded-full border border-dashed motion-safe:animate-[spin_25s_linear_infinite]"
        />

        <span className="to-primary-light/15 text-primary group-hover:border-secondary group-hover:from-accent-light/40 group-hover:to-secondary/20 group-hover:text-secondary-dark relative flex size-[52px] items-center justify-center rounded-full border border-white bg-linear-to-br from-white shadow-[0_5px_15px_rgba(18,51,107,0.12)] transition-all duration-300 group-hover:bg-linear-to-br sm:size-[62px]">
          <Icon
            aria-hidden="true"
            strokeWidth={1.7}
            className="size-6 transition-transform duration-300 group-hover:scale-110 sm:size-7"
          />
        </span>

        <span
          aria-hidden="true"
          className="bg-secondary absolute top-0 right-1 size-2 rounded-full border border-white"
        />
      </div>

      <h3 className="text-primary group-hover:text-secondary-dark mt-2.5 font-sans text-[13px] leading-tight font-extrabold transition-colors duration-300 sm:text-[15px]">
        {feature.title}
      </h3>

      <p className="text-muted mt-1 font-sans text-[10px] leading-relaxed sm:text-[12px]">
        {feature.description}
      </p>
    </article>
  );
}

function ResearchConnections() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="text-primary-light/35 pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      {positions.map((position, index) => (
        <line
          key={index}
          x1="500"
          y1="500"
          x2={position.x * 10}
          y2={position.y * 10}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 7"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function CenterPortal() {
  return (
    <div className="relative mx-auto flex size-[220px] items-center justify-center sm:size-[260px] lg:size-[290px]">
      <span
        aria-hidden="true"
        className="bg-primary-light/10 absolute -inset-5 rounded-full blur-[45px]"
      />

      <span
        aria-hidden="true"
        className="border-primary-light/20 absolute inset-0 rounded-full border"
      />

      <span
        aria-hidden="true"
        className="border-secondary/40 absolute inset-3 rounded-full border border-dashed motion-safe:animate-[spin_40s_linear_infinite]"
      />

      <span
        aria-hidden="true"
        className="border-primary-light/15 absolute inset-7 rounded-full border"
      />

      <span
        aria-hidden="true"
        className="bg-secondary absolute top-0 left-1/2 size-2.5 -translate-x-1/2 rounded-full"
      />

      <span
        aria-hidden="true"
        className="bg-secondary absolute right-0 bottom-1/2 size-2.5 rounded-full"
      />

      <div className="relative flex size-[155px] flex-col items-center justify-center rounded-[24px] border border-white bg-white p-6 shadow-[0_15px_35px_rgba(18,51,107,0.15)] sm:size-[180px] lg:size-[195px]">
        <div className="relative h-[85px] w-full sm:h-[105px]">
          <Image
            src="/assets-v/voltera-black.png"
            alt="Voltera Sciences"
            fill
            sizes="150px"
            className="object-contain"
          />
        </div>

        <span className="from-secondary-dark via-accent-light to-secondary-dark mt-3 h-[2px] w-12 rounded-full bg-linear-to-r" />
      </div>
    </div>
  );
}

export default function ResearchShowcase() {
  return (
    <section
      aria-labelledby="research-showcase-heading"
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-[750px] text-center">
          <h2 id="research-showcase-heading" className="section-heading">
            Precision at <span className="text-secondary">Every Level.</span>
          </h2>

          <p className="text-muted mx-auto mt-4 max-w-[580px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Explore the laboratory testing indicators behind compound identity,
            purity, content, and batch-specific quality analysis.
          </p>
        </header>

        <div className="relative mx-auto mt-10 max-w-[1050px] lg:mt-8 lg:h-[680px]">
          <ResearchConnections />

          <div className="relative mb-10 flex justify-center lg:absolute lg:inset-0 lg:mb-0 lg:items-center">
            <CenterPortal />
          </div>

          <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 lg:static">
            {researchFeatures.map((feature, index) => (
              <ResearchFeature
                key={feature.title}
                feature={feature}
                position={positions[index]}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex flex-col items-center gap-4 text-center lg:mt-8">
          <Link href="/coa" className="btn-hero-primary">
            Explore COA Library
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
