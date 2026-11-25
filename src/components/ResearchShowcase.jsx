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
  TestTube,
  Biohazard,
  ArrowUpRight,
} from "lucide-react";

// Test names and methods follow the ILS Laboratories COA (lot RT10-11032026).
const researchFeatures = [
  {
    title: "Identity Verification",
    description: "HPLC-RTM",
    icon: Fingerprint,
  },
  {
    title: "Peptide Purity",
    description: "HPLC",
    icon: FlaskConical,
  },
  {
    title: "Net Peptide Content",
    description: "Measured mg per vial",
    icon: Scale,
  },
  {
    title: "Fentanyl Screen",
    description: "Immunoassay",
    icon: ShieldCheck,
  },
  {
    title: "Heavy Metals",
    description: "ICP-MS: As, Cd, Pb, Hg, Cr",
    icon: Atom,
  },
  {
    title: "Sterility Testing",
    description: "PCR",
    icon: TestTube,
  },
  {
    title: "Endotoxin Testing",
    description: "USP <85>",
    icon: Biohazard,
  },
  {
    title: "HPLC Conformity",
    description: "Two samples compared",
    icon: Microscope,
  },
];

const positions = [
  { x: 50, y: 9 },
  { x: 79, y: 20 },
  { x: 88, y: 50 },
  { x: 79, y: 80 },
  { x: 50, y: 91 },
  { x: 21, y: 80 },
  { x: 12, y: 50 },
  { x: 21, y: 20 },
];

function ResearchFeature({ feature, position }) {
  const Icon = feature.icon;

  return (
    <article
      style={{
        "--node-x": `${position.x}%`,
        "--node-y": `${position.y}%`,
      }}
      className="group relative flex min-w-0 flex-col items-center bg-white text-center lg:absolute lg:pb-2 lg:top-[var(--node-y)] lg:left-[var(--node-x)] lg:w-[210px] lg:-translate-x-1/2 lg:-translate-y-1/2"
    >
      <div className="relative flex size-[64px] items-center justify-center sm:size-[76px]">
        <span
          aria-hidden="true"
          className="border-secondary/60 absolute inset-0 rounded-full border"
        />

        <span className="bg-primary relative flex size-[54px] items-center justify-center rounded-full text-[var(--gold-light)] shadow-[0_10px_20px_-8px_rgba(1,17,59,0.5)] transition-transform duration-300 group-hover:scale-105 sm:size-[64px]">
          <Icon
            aria-hidden="true"
            strokeWidth={1.7}
            className="size-6 transition-transform duration-300 group-hover:scale-110 sm:size-7"
          />
        </span>

      </div>

      <h3 className="text-primary group-hover:text-secondary-dark mt-2.5 font-sans text-[15px] leading-tight font-extrabold transition-colors duration-300 sm:text-[17px]">
        {feature.title}
      </h3>

      <p className="text-primary-dark/75 mt-1 font-sans text-[13px] leading-relaxed sm:text-sm">
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
      className="text-secondary/55 pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
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
        className="hidden"
      />

      <span
        aria-hidden="true"
        className="border-secondary/25 absolute inset-0 rounded-full border bg-[radial-gradient(circle,#fff_40%,#fbf3df_100%)]"
      />

      <span
        aria-hidden="true"
        className="border-secondary/50 absolute inset-4 rounded-full border"
      />

      <div className="relative flex size-[155px] flex-col items-center justify-center rounded-full bg-white p-6 shadow-[0_15px_35px_rgba(1,17,59,0.15)] sm:size-[180px] lg:size-[195px]">
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
      className="relative isolate overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-[750px] text-center">
          <h2 id="research-showcase-heading" className="section-heading">
            Precision at <span className="text-secondary">Every Level.</span>
          </h2>

          <p className="text-primary-dark/75 mx-auto mt-4 max-w-[580px] font-sans text-[15px] leading-[1.7] sm:text-base">
            Explore the laboratory testing indicators behind compound identity,
            purity, content, and batch-specific quality analysis.
          </p>
        </header>

        <div className="relative mx-auto mt-10 max-w-[1050px] lg:mt-8 lg:h-[680px]">
          <ResearchConnections />

          <div className="relative mb-10 flex justify-center lg:absolute lg:inset-0 lg:mb-0 lg:items-center">
            <CenterPortal />
          </div>

          <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:static">
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
