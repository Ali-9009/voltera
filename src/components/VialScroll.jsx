"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  FlaskConical,
  Microscope,
  QrCode,
} from "lucide-react";
import { getCutout } from "@/data/cutouts";

const vials = [
  { slug: "vls-3rt", name: "VLS-3RT" },
  { slug: "vls-2trz", name: "VLS-2TRZ" },
  { slug: "ghk-cu", name: "GHK-CU" },
];

const features = [
  {
    title: "8x Tested",
    description: "Every batch goes through the same testing, every time.",
    icon: FlaskConical,
  },
  {
    title: "99%+ Purity",
    description: "Uncompromising standards behind every research compound.",
    icon: BadgeCheck,
  },
  {
    title: "Accredited US Labs",
    description: "Independent third-party testing, right here in the USA.",
    icon: Microscope,
  },
  {
    title: "Batch Verified COA",
    description: "A QR code links your vial to its testing documentation.",
    icon: QrCode,
  },
];

// Fixed values (not random) so server and client render the same dots.
const particles = Array.from({ length: 60 }, (_, index) => ({
  left: `${(index * 37 + 3) % 100}.${index % 10}%`,
  "--particle-size": `${index % 5 === 0 ? 5 : index % 2 === 0 ? 3 : 2}px`,
  "--particle-duration": `${14 + ((index * 7) % 23) / 2}s`,
  "--particle-delay": `-${((index * 13) % 47) / 2}s`,
}));

function Note({ feature, side }) {
  const Icon = feature.icon;

  return (
    <article className={`vial-note vial-note--${side} min-w-0`}>
      <Icon
        aria-hidden="true"
        strokeWidth={1.6}
        className="vial-note-icon size-6 text-[var(--gold-light)] lg:size-7"
      />
      <h3 className="font-heading mt-2 text-[15px] leading-tight font-semibold tracking-[-0.02em] text-white sm:text-lg lg:mt-3 lg:text-[clamp(20px,1.8vw,26px)]">
        {feature.title}
      </h3>
      <p className="mt-1 text-[13px] leading-snug text-white/80 lg:text-[15px] lg:leading-normal">
        {feature.description}
      </p>
      <span aria-hidden="true" className="vial-note-line mt-3 hidden lg:block" />
    </article>
  );
}

export default function VialScroll() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = section.getBoundingClientRect();
      const height = window.innerHeight;
      setVisible(box.top < height && box.bottom > 0);

      // Pinned: progress through the extra scroll height. Unpinned (short
      // screens, reduced motion): progress of the section past the viewport.
      const travel = box.height - height;
      const pinned = travel > height * 0.5;
      const progress = pinned
        ? -box.top / travel
        : (height - box.top) / (box.height + height);

      setActive(
        Math.min(
          vials.length - 1,
          Math.max(0, Math.floor(progress * vials.length)),
        ),
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vial-scroll"
      aria-labelledby="vial-scroll-heading"
      className="vial-scroll relative text-white"
    >
      <div className="vial-scroll-pin isolate flex flex-col justify-center overflow-hidden px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {vials.map(({ slug }, index) => (
          <div
            key={slug}
            aria-hidden="true"
            data-active={index === active}
            className={`vial-scroll-bg vial-scroll-bg--${index}`}
          />
        ))}

        <div
          aria-hidden="true"
          data-paused={!visible}
          className="sale-particles overflow-hidden"
        >
          {particles.map((style, index) => (
            <span key={index} style={style} />
          ))}
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl text-center">
            <h2
              id="vial-scroll-heading"
              className="font-heading text-[clamp(21px,4vw,54px)] leading-[1.1] font-semibold tracking-[-0.035em]"
            >
              <span className="block">Inside Every Vial.</span>{" "}
              <span className="block text-[var(--gold-light)]">
                The Voltera Sciences Standard.
              </span>
            </h2>
          </header>

          <div className="mt-4 grid grid-cols-2 items-center gap-x-5 gap-y-4 lg:mt-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-[clamp(28px,5vw,80px)]">
            <div className="vial-stage order-first col-span-2 mx-auto lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1">
              <span aria-hidden="true" className="vial-ring vial-ring--outer" />
              <span aria-hidden="true" className="vial-ring vial-ring--inner" />
              <span aria-hidden="true" className="vial-orbit" />

              <div className="vial-stage-float">
                {vials.map(({ slug, name }, index) => (
                  <Image
                    key={slug}
                    src={getCutout(slug)}
                    alt={`Voltera Sciences ${name} vial`}
                    aria-hidden={index !== active}
                    width={444}
                    height={916}
                    sizes="(min-width: 1024px) 270px, 45vw"
                    data-active={index === active}
                    className="vial-stage-image"
                  />
                ))}
              </div>
            </div>

            <div className="contents lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:gap-[clamp(28px,6vh,64px)]">
              <Note feature={features[0]} side="left" />
              <Note feature={features[1]} side="left" />
            </div>
            <div className="contents lg:col-start-3 lg:row-start-1 lg:flex lg:flex-col lg:gap-[clamp(28px,6vh,64px)]">
              <Note feature={features[2]} side="right" />
              <Note feature={features[3]} side="right" />
            </div>
          </div>

          <div className="mt-4 text-center lg:mt-6">
            <Link href="/shop" className="btn-hero-primary h-12!">
              Shop Peptides
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
