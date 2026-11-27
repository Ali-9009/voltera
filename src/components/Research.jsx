"use client";

import { useEffect, useRef, useState } from "react";
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

// ==========================================
// RESEARCH FEATURES
// ==========================================

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

// ==========================================
// RESPONSIVE CIRCULAR POSITIONS
// ==========================================

const positions = [
  {
    mobile: { x: 50, y: 8 },
    desktop: { x: 50, y: 9 },
  },
  {
    mobile: { x: 82, y: 19 },
    desktop: { x: 79, y: 20 },
  },
  {
    mobile: { x: 86, y: 50 },
    desktop: { x: 88, y: 50 },
  },
  {
    mobile: { x: 82, y: 81 },
    desktop: { x: 79, y: 80 },
  },
  {
    mobile: { x: 50, y: 92 },
    desktop: { x: 50, y: 91 },
  },
  {
    mobile: { x: 18, y: 81 },
    desktop: { x: 21, y: 80 },
  },
  {
    mobile: { x: 14, y: 50 },
    desktop: { x: 12, y: 50 },
  },
  {
    mobile: { x: 18, y: 19 },
    desktop: { x: 21, y: 20 },
  },
];

// ==========================================
// INDIVIDUAL FEATURE
// ==========================================

function ResearchFeature({ feature, position, index }) {
  const Icon = feature.icon;

  return (
    <article
      style={{
        "--mobile-x": `${position.mobile.x}%`,
        "--mobile-y": `${position.mobile.y}%`,
        "--desktop-x": `${position.desktop.x}%`,
        "--desktop-y": `${position.desktop.y}%`,
      }}
      className="group absolute top-[var(--mobile-y)] left-[var(--mobile-x)] z-10 flex size-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:size-[60px] lg:top-[var(--desktop-y)] lg:left-[var(--desktop-x)] lg:size-[76px]"
    >
      {/* OUTER ICON CIRCLE */}
      <span
        aria-hidden="true"
        className="border-secondary/60 absolute inset-0 rounded-full border bg-white shadow-[0_4px_12px_rgba(1,17,59,0.08)]"
      />

      {/* INNER ICON CIRCLE */}
      <span className="bg-primary relative flex size-[38px] items-center justify-center rounded-full text-[var(--gold-light)] shadow-[0_8px_18px_-8px_rgba(1,17,59,0.5)] transition-transform duration-300 group-hover:scale-105 sm:size-[52px] lg:size-[64px]">
        <Icon
          aria-hidden="true"
          strokeWidth={1.7}
          className="size-[18px] transition-transform duration-300 group-hover:scale-110 sm:size-6 lg:size-7"
        />
      </span>

      {/* FEATURE TEXT */}
      <div
        className={`absolute left-1/2 flex w-[94px] -translate-x-1/2 flex-col items-center bg-white text-center sm:w-[145px] lg:w-[210px] ${"top-full mt-2"} `}
      >
        <h3 className="text-primary group-hover:text-secondary-dark font-sans text-[10px] leading-[1.25] font-extrabold transition-colors duration-300 sm:text-[13px] lg:text-[17px]">
          {feature.title}
        </h3>

        <p className="text-primary-dark/75 mt-1 hidden font-sans leading-[1.3] sm:block sm:text-[11px] lg:text-sm lg:leading-relaxed">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

// ==========================================
// CONNECTING LINES
// WITH A GAP BEFORE EVERY ICON
// ==========================================

function ResearchConnections({ containerRef }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [containerRef]);

  const { width, height } = size;

  if (!width || !height) return null;

  const isDesktop = width >= 900;
  const isTablet = width >= 500 && !isDesktop;

  // Match actual icon sizes.
  const iconRadius = isDesktop ? 38 : isTablet ? 30 : 22;

  // Match the central portal sizes.
  const centerRadius = isDesktop ? 145 : isTablet ? 95 : 56;

  // Keep the line AWAY from the icon.
  const iconGap = isDesktop ? 22 : isTablet ? 16 : 12;

  // Small gap outside the central circle.
  const centerGap = isDesktop ? 12 : 8;

  const centerX = width / 2;
  const centerY = height / 2;

  const lines = positions.map((position) => {
    const point = isDesktop ? position.desktop : position.mobile;

    const targetX = (point.x / 100) * width;
    const targetY = (point.y / 100) * height;

    const dx = targetX - centerX;
    const dy = targetY - centerY;

    const distance = Math.hypot(dx, dy);

    if (!distance) return null;

    const unitX = dx / distance;
    const unitY = dy / distance;

    // Line begins outside the central portal.
    const startDistance = centerRadius + centerGap;

    // Line ends BEFORE reaching the icon.
    const endDistance = distance - iconRadius - iconGap;

    if (endDistance <= startDistance) return null;

    return {
      x1: centerX + unitX * startDistance,
      y1: centerY + unitY * startDistance,
      x2: centerX + unitX * endDistance,
      y2: centerY + unitY * endDistance,
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className="text-secondary/50 pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      {lines.map((line, index) =>
        line ? (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ) : null,
      )}
    </svg>
  );
}

// ==========================================
// CENTER VOLTERA LOGO
// ==========================================

function CenterPortal() {
  return (
    <div className="relative z-20 flex size-[112px] items-center justify-center sm:size-[190px] lg:size-[290px]">
      {/* OUTER CIRCLE */}
      <span
        aria-hidden="true"
        className="border-secondary/25 absolute inset-0 rounded-full border bg-[radial-gradient(circle,#fff_40%,#fbf3df_100%)]"
      />

      {/* MIDDLE CIRCLE */}
      <span
        aria-hidden="true"
        className="border-secondary/50 absolute inset-[7px] rounded-full border sm:inset-3 lg:inset-4"
      />

      {/* LOGO CONTAINER */}
      <div className="relative flex size-[83px] flex-col items-center justify-center rounded-full bg-white p-2 shadow-[0_10px_25px_rgba(1,17,59,0.15)] sm:size-[140px] sm:p-4 lg:size-[195px] lg:p-6">
        <div className="relative h-[45px] w-full sm:h-[75px] lg:h-[105px]">
          <Image
            src="/assets-v/voltera-black.png"
            alt="Voltera Sciences"
            fill
            sizes="(max-width: 639px) 80px, (max-width: 1023px) 140px, 195px"
            className="object-contain"
          />
        </div>

        {/* GOLD UNDERLINE */}
        <span className="from-secondary-dark via-accent-light to-secondary-dark mt-1 h-[2px] w-7 rounded-full bg-linear-to-r sm:mt-2 sm:w-10 lg:mt-3 lg:w-12" />
      </div>
    </div>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function ResearchShowcase() {
  const diagramRef = useRef(null);

  return (
    <section
      aria-labelledby="research-showcase-heading"
      className="relative isolate overflow-hidden bg-white px-3 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <header className="mx-auto max-w-[750px] text-center">
          <h2 id="research-showcase-heading" className="section-heading">
            Precision at <span className="text-secondary">Every Level.</span>
          </h2>

          <p className="text-primary-dark/75 mx-auto mt-3 max-w-[580px] font-sans text-[13px] leading-[1.7] sm:mt-4 sm:text-base">
            Explore the laboratory testing indicators behind compound identity,
            purity, content, and batch-specific quality analysis.
          </p>
        </header>

        {/* CIRCULAR RESEARCH DIAGRAM */}
        <div
          ref={diagramRef}
          className="relative mx-auto mt-0 h-[440px] w-full max-w-[400px] sm:h-[550px] sm:max-w-[650px] md:mt-6 lg:h-[680px] lg:max-w-[1050px]"
        >
          {/* CONNECTING LINES */}
          <ResearchConnections containerRef={diagramRef} />

          {/* CENTER LOGO */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <CenterPortal />
          </div>

          {/* RESEARCH FEATURES */}
          {researchFeatures.map((feature, index) => (
            <ResearchFeature
              key={feature.title}
              feature={feature}
              position={positions[index]}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-8 flex flex-col items-center gap-4 text-center sm:pt-10">
          <Link href="/coa" className="btn-hero-primary">
            Explore COA Library
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
