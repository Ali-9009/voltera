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

function VerificationPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_59px,rgba(214,166,79,0.16)_59px,rgba(214,166,79,0.16)_60px)]" />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent_0px,transparent_59px,rgba(214,166,79,0.16)_59px,rgba(214,166,79,0.16)_60px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(239,210,141,0.30)_1px,transparent_1.5px)] bg-size-[42.4px_42.4px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(50,104,197,0.4),transparent_65%)]" />

      <div className="border-secondary/25 absolute -top-44 -right-44 size-[600px] rounded-full border" />

      <div className="border-accent-light/20 absolute -top-32 -right-32 size-[500px] rounded-full border" />

      <div className="border-secondary/15 absolute -top-20 -right-20 size-[400px] rounded-full border" />

      <div className="border-secondary/20 absolute -bottom-40 -left-40 size-[450px] rounded-full border" />

      <div className="border-accent-light/15 absolute -bottom-28 -left-28 size-[350px] rounded-full border" />
    </div>
  );
}

function VerificationCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      data-verification-card
      className="group border-secondary/30 bg-primary-dark/30 hover:border-accent-light/60 hover:bg-primary-dark/45 hover:shadow-primary-dark/10 relative flex min-w-0 items-center gap-4 overflow-hidden rounded-[16px] border p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg sm:gap-5 sm:rounded-[20px] sm:p-5"
    >
      <span
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-linear-to-b opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="text-accent-light/[0.07] pointer-events-none absolute -right-6 -bottom-8 rotate-[-15deg] transition-transform duration-500 group-hover:scale-110"
      >
        <Icon size={130} strokeWidth={0.8} />
      </span>

      <div className="relative shrink-0">
        <span className="border-secondary/35 from-primary-light/60 to-primary-dark/50 text-accent-light group-hover:border-accent-light/60 relative flex size-11 items-center justify-center rounded-[12px] border bg-linear-to-br transition-colors duration-300 group-hover:text-white sm:size-14 sm:rounded-[16px]">
          <Icon strokeWidth={1.8} className="size-5 sm:size-6" />
        </span>

        <span className="border-accent-light from-accent-light via-secondary to-secondary-dark text-primary-dark absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border bg-linear-to-br font-sans text-[9px] font-extrabold shadow-sm sm:size-6 sm:text-[10px]">
          {feature.number}
        </span>
      </div>

      <div className="relative min-w-0 flex-1">
        <h3 className="font-heading text-[13px] leading-[1.4] font-normal text-white sm:text-[16px]">
          {feature.title}
        </h3>

        <p className="mt-1.5 font-sans text-[11px] leading-[1.7] text-white/85 sm:text-[13px]">
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
      className="border-secondary/30 from-primary via-primary-light to-primary relative isolate overflow-hidden border-y bg-linear-to-br px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <VerificationPattern />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-16">
        <figure className="relative mx-auto flex w-full max-w-[280px] flex-col items-center lg:max-w-none">
          <div
            aria-hidden="true"
            className="border-secondary/35 pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:w-[125%]"
          />

          <div
            aria-hidden="true"
            className="border-accent-light/30 pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed sm:w-[110%]"
          />

          <div
            aria-hidden="true"
            className="border-secondary/25 pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          />

          <div
            aria-hidden="true"
            className="bg-primary-light/40 pointer-events-none absolute top-1/2 left-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[55px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2"
          >
            <span className="border-secondary/70 absolute top-0 left-0 size-7 rounded-tl-lg border-t-2 border-l-2" />

            <span className="border-secondary/70 absolute top-0 right-0 size-7 rounded-tr-lg border-t-2 border-r-2" />

            <span className="border-secondary/70 absolute bottom-0 left-0 size-7 rounded-bl-lg border-b-2 border-l-2" />

            <span className="border-secondary/70 absolute right-0 bottom-0 size-7 rounded-br-lg border-r-2 border-b-2" />
          </div>

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
              className="h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(10,32,76,0.4)]"
            />
          </div>

          <figcaption className="relative mt-3 font-sans text-[11px] text-white/70 italic">
            *For demonstration purposes.
          </figcaption>
        </figure>

        <div className="min-w-0">
          <header
            data-verification-heading
            className="mb-6 text-center lg:mb-8 lg:text-left"
          >
            <span className="border-secondary/40 bg-primary-dark/25 text-accent-light mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[9px] font-extrabold tracking-[0.16em] uppercase backdrop-blur-sm sm:text-[10px]">
              <QrCode size={14} strokeWidth={2} />
              Product Verification
            </span>

            <h2 id="verification-heading" className="section-heading !text-white">
              Every Vial.{" "}
              <span className="via-accent-light to-secondary bg-linear-to-b from-[#fff0bb] bg-clip-text text-transparent">
                Every Detail Verified.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary-dark mx-auto mt-4 h-[3px] w-24 rounded-full bg-linear-to-r lg:mx-0"
            />

            <p className="mx-auto mt-4 max-w-[680px] font-sans text-[13px] leading-[1.8] text-white/90 sm:text-[15px] lg:mx-0">
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

      <div
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 top-0 h-[2px] bg-linear-to-r"
      />

      <div
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r"
      />
    </section>
  );
}
