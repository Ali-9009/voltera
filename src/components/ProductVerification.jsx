"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  QrCode,
  Fingerprint,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Scan & Verify",
    description:
      "Scan your vial's QR code to access its Certificate of Analysis.",
    icon: QrCode,
  },
  {
    number: "02",
    title: "Batch Verification",
    description: "Match your vial's batch number with its COA records.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Quality You Can Trust",
    description: "Review laboratory testing results for every research batch.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Verified Confidence",
    description: "Access transparent documentation for reliable research.",
    icon: ShieldCheck,
  },
];

function VerificationCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      data-verification-card
      className="group hover:border-secondary/60 relative flex min-w-0 items-center gap-4 overflow-hidden rounded-[16px] border border-white/80 bg-white/90 p-3.5 shadow-[0_4px_20px_rgba(18,51,107,0.05)] transition-[border-color,background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_8px_25px_rgba(18,51,107,0.1)] sm:gap-5 sm:rounded-[20px] sm:p-5"
    >
      <span
        aria-hidden="true"
        className="text-primary/[0.035] pointer-events-none absolute -right-6 -bottom-8 rotate-[-15deg] transition-transform duration-500 group-hover:scale-110"
      >
        <Icon size={130} strokeWidth={1} />
      </span>

      <div className="relative shrink-0">
        <span className="border-primary/10 from-primary-soft to-primary-light/15 text-primary group-hover:border-secondary/40 group-hover:bg-secondary/10 group-hover:text-secondary-dark relative flex size-11 items-center justify-center rounded-[12px] border bg-linear-to-br transition-colors duration-300 sm:size-14 sm:rounded-[16px]">
          <Icon strokeWidth={1.8} className="size-5 sm:size-6" />
        </span>

        <span className="border-accent-light from-accent-light via-secondary to-secondary-dark text-primary-dark absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border bg-linear-to-br font-sans text-[9px] font-extrabold shadow-sm sm:size-6 sm:text-[10px]">
          {feature.number}
        </span>
      </div>

      <div className="relative min-w-0 flex-1">
        <h3 className="font-heading text-primary text-[13px] leading-[1.4] font-normal sm:text-[16px]">
          {feature.title}
        </h3>

        <p className="text-muted mt-1.5 font-sans text-[11px] leading-[1.7] sm:text-[13px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

export default function ProductVerification() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .fromTo(
          "[data-verification-heading]",
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
        )
        .fromTo(
          image,
          { autoAlpha: 0, y: 30, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
          },
          "-=0.35",
        )
        .fromTo(
          "[data-verification-card]",
          { autoAlpha: 0, x: 25 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.4",
        );

      timeline.add(() => {
        gsap.to(image, {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product-verification"
      aria-labelledby="verification-heading"
      className="from-primary-light/20 via-primary-soft to-accent/15 relative isolate overflow-hidden bg-linear-to-br px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/15 pointer-events-none absolute -top-32 -left-32 size-[450px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="bg-primary-light/15 pointer-events-none absolute -right-32 -bottom-32 size-[450px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="border-primary/5 pointer-events-none absolute top-10 -right-16 size-64 rotate-45 rounded-[40px] border"
      />

      <div
        aria-hidden="true"
        className="border-primary/5 pointer-events-none absolute top-20 -right-8 size-64 rotate-45 rounded-[40px] border"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-16">
        <figure className="relative mx-auto flex w-full max-w-[280px] flex-col items-center lg:max-w-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[55px]"
          />

          <div
            ref={imageRef}
            className="relative flex h-[240px] w-full items-center justify-center sm:h-[300px] lg:h-[440px]"
          >
            <Image
              src="/assets-v/vari-qr.png"
              alt="Voltera Sciences research vial demonstrating QR and batch verification"
              width={310}
              height={440}
              sizes="(max-width: 639px) 180px, (max-width: 1023px) 240px, 310px"
              className="h-full w-auto object-contain drop-shadow-[0_18px_24px_rgba(18,51,107,0.2)]"
            />
          </div>

          <figcaption className="text-muted relative mt-3 font-sans text-[11px] italic">
            *For demonstration purposes.
          </figcaption>
        </figure>

        <div className="min-w-0">
          <header
            data-verification-heading
            className="mb-6 text-center lg:mb-8 lg:text-left"
          >
            <span className="text-primary mb-4 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 font-sans text-[9px] font-extrabold tracking-[0.16em] uppercase shadow-sm sm:text-[10px]">
              <QrCode size={14} strokeWidth={2} />
              Product Verification
            </span>

            <h2
              id="verification-heading"
              className="font-heading text-primary text-[clamp(26px,4vw,44px)] leading-[1.2] font-normal tracking-[-0.03em]"
            >
              Every Vial.{" "}
              <span className="from-secondary-dark via-secondary to-secondary-dark bg-linear-to-r bg-clip-text text-transparent">
                Every Detail Verified.
              </span>
            </h2>

            <p className="text-muted mx-auto mt-4 max-w-[680px] font-sans text-[13px] leading-[1.8] sm:text-[15px] lg:mx-0">
              Transparency is at the heart of our research standards. Explore
              batch-specific documentation and verify the information behind
              your Voltera Sciences compounds.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
            {features.map((feature) => (
              <VerificationCard key={feature.number} feature={feature} />
            ))}
          </div>

          <div className="mt-6 flex justify-center lg:mt-7 lg:justify-start">
            <Link href="/coa" className="btn-hero-primary">
              Explore COA Library
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
