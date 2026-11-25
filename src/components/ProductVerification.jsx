"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  QrCode,
  Hash,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Find the Laboratory Report",
    description:
      "Open the laboratory report library and search for your product or batch number.",
    icon: QrCode,
  },
  {
    number: "02",
    title: "Verify the Batch Details",
    description:
      "Compare the batch number printed on your vial with the information listed on the certificate.",
    icon: Hash,
  },
];

// Fixed values (not random) so server and client render the same dots.
const particles = Array.from({ length: 60 }, (_, index) => ({
  left: `${(index * 37 + 3) % 100}.${index % 10}%`,
  "--particle-size": `${index % 5 === 0 ? 5 : index % 2 === 0 ? 3 : 2}px`,
  "--particle-duration": `${14 + ((index * 7) % 23) / 2}s`,
  "--particle-delay": `-${((index * 13) % 47) / 2}s`,
}));

function VerificationPattern() {
  const ref = useRef(null);

  // Rest the dots while the section is off screen.
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.paused = String(!entry.isIntersecting);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-paused="true"
      className="sale-particles overflow-hidden"
    >
      {particles.map((style, index) => (
        <span key={index} style={style} />
      ))}
    </div>
  );
}

function VerificationCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      data-verification-card
      className="group border-secondary/30 bg-primary-dark/30 hover:border-accent-light/60 hover:bg-primary-dark/45 hover:shadow-primary-dark/10 relative flex min-w-0 items-center gap-4 overflow-hidden rounded-[16px] border p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg sm:gap-6 sm:rounded-[20px] sm:px-7 sm:py-7"
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
        <h3 className="font-heading text-[16px] leading-[1.35] font-semibold text-white sm:text-[20px]">
          {feature.title}
        </h3>

        <p className="mt-1.5 font-sans text-[14px] leading-[1.6] text-white/85 sm:text-[16px]">
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
      className="border-secondary/30 relative isolate overflow-hidden border-y bg-[radial-gradient(60%_80%_at_25%_50%,var(--navy-soft),transparent_75%),linear-gradient(180deg,var(--navy),var(--navy-deep))] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <VerificationPattern />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-16">
        <figure className="relative mx-auto flex w-full max-w-[280px] flex-col items-center lg:max-w-none">
          <div
            ref={imageRef}
            className="relative flex h-[300px] w-full items-center justify-center sm:h-[360px] lg:h-[450px]"
          >
            <Image
              src="/pngs/vials/qr-demo.png"
              alt="Voltera Sciences vial demonstrating QR and batch verification"
              width={522}
              height={1151}
              sizes="260px"
              className="h-full w-auto object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.45)]"
            />
          </div>

          <figcaption className="relative mt-5 font-sans text-[13px] text-white/80 italic">
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
              How to verify{" "}
              <span className="via-accent-light to-secondary bg-linear-to-b from-[#fff0bb] bg-clip-text text-transparent">
                each product.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary-dark mx-auto mt-4 h-[3px] w-24 rounded-full bg-linear-to-r lg:mx-0"
            />

            <p className="mx-auto mt-4 max-w-[680px] font-sans text-[15px] leading-[1.7] text-white/90 sm:text-[17px] lg:mx-0">
              Search our laboratory reports by product or batch number. Check the
              matching report for its testing information.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
            {features.map((feature) => (
              <VerificationCard key={feature.number} feature={feature} />
            ))}
          </div>

          <div className="mt-6 flex justify-center lg:mt-7 lg:justify-start">
            <Link href="/coa" className="btn-hero-primary">
              View Full COA Archive
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
