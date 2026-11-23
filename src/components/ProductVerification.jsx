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
  BadgeCheck,
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
      className="group border-primary/10 hover:border-secondary/50 relative flex min-h-[170px] flex-col overflow-hidden rounded-[20px] border bg-white p-5 shadow-[0_8px_30px_rgba(7,26,67,0.06)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_16px_40px_rgba(7,26,67,0.12)] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#E8C77B,#C9953D,#A9792C)]"
      />

      <div className="mb-4 flex items-center justify-between">
        <span className="border-secondary/20 bg-secondary/10 text-secondary-dark flex size-12 items-center justify-center rounded-xl border">
          <Icon size={23} strokeWidth={1.7} />
        </span>
      </div>

      <h3 className="font-heading text-primary text-[15px] leading-[1.4] font-normal sm:text-[17px]">
        {feature.title}
      </h3>

      <p className="text-muted mt-3 font-sans text-[12px] leading-[1.8] sm:text-[13px]">
        {feature.description}
      </p>
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

    const cards = section.querySelectorAll("[data-verification-card]");
    const heading = section.querySelector("[data-verification-heading]");

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      timeline.fromTo(
        heading,
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
      );

      timeline.fromTo(
        image,
        {
          autoAlpha: 0,
          scale: 0.8,
          y: 35,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.6)",
        },
        "-=0.3",
      );

      timeline.fromTo(
        cards,
        {
          autoAlpha: 0,
          scale: 0.75,
          y: 35,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );

      gsap.to(image, {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product-verification"
      aria-labelledby="verification-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="bg-primary-soft pointer-events-none absolute top-1/3 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header
          data-verification-heading
          className="mx-auto mb-10 max-w-[720px] text-center sm:mb-14"
        >
          <h2
            id="verification-heading"
            className="font-heading text-primary text-[clamp(28px,4.5vw,52px)] leading-[1.15] font-normal tracking-[-0.03em]"
          >
            Every Vial.
            <span className="text-secondary"> Every Detail Verified.</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-[590px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Transparency is at the heart of our research standards. Explore
            batch-specific documentation and verify the information behind your
            Voltera Sciences compounds.
          </p>
        </header>

        <div className="grid items-center gap-6 lg:grid-cols-[1fr_340px_1fr] lg:gap-7">
          <div className="order-2 grid gap-5 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            <VerificationCard feature={features[0]} />
            <VerificationCard feature={features[1]} />
          </div>

          <figure
            ref={imageRef}
            className="relative order-1 mx-auto flex w-full max-w-[340px] flex-col items-center lg:order-2"
          >
            <div className="relative flex h-[340px] w-full items-center justify-center sm:h-[420px] lg:h-[470px]">
              <Image
                src="/assets-v/vari-qr.png"
                alt="Voltera Sciences research vial demonstrating QR and batch verification"
                width={310}
                height={440}
                sizes="(max-width: 639px) 260px, 310px"
                className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(7,26,67,0.2)]"
              />
            </div>
          </figure>

          <div className="order-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <VerificationCard feature={features[2]} />
            <VerificationCard feature={features[3]} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14">
          <div className="text-primary flex items-center gap-2 font-sans text-[12px] font-semibold">
            <BadgeCheck size={18} className="text-secondary" />
            Batch-Specific Documentation
          </div>

          <Link href="/coa" className="btn-hero-primary">
            Explore COA Library
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
