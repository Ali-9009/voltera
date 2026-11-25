"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShoppingBag,
  ClipboardCheck,
  PackageCheck,
  Truck,
  MapPin,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Order Placed",
    description: "Choose your research compounds and complete checkout.",
    icon: ShoppingBag,
    label: "Confirmed",
  },
  {
    number: "02",
    title: "Order Review",
    description: "Your order details are reviewed before processing.",
    icon: ClipboardCheck,
    label: "Reviewed",
  },
  {
    number: "03",
    title: "Carefully Packed",
    description: "Your research materials are prepared for shipment.",
    icon: PackageCheck,
    label: "Packed",
  },
  {
    number: "04",
    title: "Order Dispatched",
    description: "Your package is handed over to the shipping carrier.",
    icon: Truck,
    label: "Dispatched",
  },
  {
    number: "05",
    title: "Track Your Order",
    description: "Follow your shipment with available tracking updates.",
    icon: MapPin,
    label: "Tracking",
  },
];

const STEP_DURATION = 1300;

function StepCard({ step, index, activeStep }) {
  const Icon = step.icon;

  const active = index === activeStep;
  const completed = index < activeStep;
  const reached = index <= activeStep;

  return (
    <li className="relative flex min-w-0 items-start gap-4 lg:flex-col lg:gap-5">
      <div className="relative z-10 flex size-[50px] shrink-0 items-center justify-center">
        {active && (
          <>
            <span
              aria-hidden="true"
              className="border-primary-light/20 absolute -inset-3 rounded-full border motion-safe:animate-ping"
            />

            <span
              aria-hidden="true"
              className="bg-primary-light/10 absolute -inset-1.5 rounded-full"
            />
          </>
        )}

        <span
          className={`relative flex size-[50px] items-center justify-center rounded-full border transition-all duration-500 ${
            reached
              ? "border-primary-light/30 from-accent to-primary ring-primary-light/10 bg-linear-to-br text-white shadow-[0_5px_18px_rgba(1,17,59,0.3)] ring-4"
              : "border-border text-primary/40 bg-white"
          }`}
        >
          <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </div>

      <article
        className={`relative flex min-h-[125px] w-full min-w-0 flex-1 flex-col rounded-[18px] border p-4 transition-all duration-500 sm:p-5 ${
          active
            ? "border-secondary bg-white shadow-[0_12px_30px_rgba(1,17,59,0.12)] lg:-translate-y-1"
            : completed
              ? "border-primary/15 bg-white shadow-[0_6px_20px_rgba(1,17,59,0.06)]"
              : "border-primary/10 bg-white/40 opacity-60"
        }`}
      >
        {active && (
          <span
            aria-hidden="true"
            className="via-secondary absolute inset-x-5 top-0 h-[2px] rounded-full bg-linear-to-r from-transparent to-transparent"
          />
        )}

        <span
          className={`font-sans text-[10px] font-extrabold tracking-[0.15em] uppercase ${
            reached ? "text-primary" : "text-muted"
          }`}
        >
          Step {step.number}
        </span>

        <span
          className={`mt-2 w-fit rounded-full border px-2.5 py-1 font-sans text-[10px] leading-none font-semibold transition-colors duration-500 ${
            active
              ? "border-secondary/30 bg-secondary/10 text-secondary-dark"
              : reached
                ? "border-primary/10 bg-primary-soft text-primary"
                : "border-border bg-primary-soft text-muted"
          }`}
        >
          {step.label}
        </span>

        <h3 className="text-primary mt-3 font-sans text-[15px] leading-[1.35] font-extrabold sm:text-[16px]">
          {step.title}
        </h3>

        <p className="text-muted mt-1.5 font-sans text-[12px] leading-[1.6]">
          {step.description}
        </p>
      </article>
    </li>
  );
}

export default function HowItWork() {
  const sectionRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotion = () => {
      setReducedMotion(media.matches);
    };

    updateMotion();

    media.addEventListener("change", updateMotion);

    return () => {
      media.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || reducedMotion) return;

    const timer = window.setTimeout(
      () => {
        setActiveStep((previous) =>
          previous === steps.length - 1 ? 0 : previous + 1,
        );
      },
      activeStep === steps.length - 1 ? STEP_DURATION + 500 : STEP_DURATION,
    );

    return () => window.clearTimeout(timer);
  }, [activeStep, isVisible, reducedMotion]);

  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="from-primary-soft via-surface to-primary-light/10 relative isolate overflow-hidden bg-linear-to-br px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/10 pointer-events-none absolute -top-40 -right-32 size-[450px] rounded-full blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="bg-secondary/10 pointer-events-none absolute -bottom-40 -left-32 size-[450px] rounded-full blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-[700px] text-center lg:mb-14">
          <h2 id="how-it-works-heading" className="section-heading">
            From Order to <span className="text-secondary">Delivery.</span>
          </h2>

          <p className="text-muted mx-auto mt-4 max-w-[560px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            A clear, straightforward ordering process—from choosing your
            research products to receiving shipment updates.
          </p>
        </header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="bg-primary/10 absolute top-[24px] right-[calc(20%-25px)] left-[25px] hidden h-[2px] rounded-full lg:block"
          >
            <div
              className={`from-primary-light via-accent to-secondary relative h-full rounded-full bg-linear-to-r ${
                activeStep === 0
                  ? "transition-none"
                  : "transition-[width] duration-[900ms] ease-in-out motion-reduce:transition-none"
              }`}
              style={{
                width: `${progress}%`,
              }}
            >
              {activeStep > 0 && (
                <span className="bg-secondary absolute top-1/2 right-0 size-3 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_10px_rgba(214,166,79,0.6)]" />
              )}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="bg-primary/10 absolute top-[25px] bottom-20 left-[24px] w-[2px] rounded-full lg:hidden"
          />

          <ol className="relative grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-4 xl:gap-5">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                activeStep={reducedMotion ? steps.length - 1 : activeStep}
              />
            ))}
          </ol>
        </div>

        <div className="mt-9 flex flex-col items-center gap-5 sm:mt-10">
          <Link href="/shop" className="btn-hero-primary">
            Explore Collection
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
