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
  ArrowRight,
  Check,
  ShieldCheck,
  MoveRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Order Placed",
    description: "Choose your research compounds and complete checkout.",
    detail:
      "Explore the collection, select your preferred product options, and submit your order through our checkout.",
    icon: ShoppingBag,
    label: "Checkout",
  },
  {
    number: "02",
    title: "Order Review",
    description: "Your order details are reviewed before processing.",
    detail:
      "Your order enters the review stage, where the submitted information and product availability can be checked.",
    icon: ClipboardCheck,
    label: "Verification",
  },
  {
    number: "03",
    title: "Carefully Packed",
    description: "Your research materials are prepared for shipment.",
    detail:
      "Products are prepared, labeled, and packaged for transit according to their applicable handling requirements.",
    icon: PackageCheck,
    label: "Preparation",
  },
  {
    number: "04",
    title: "Order Dispatched",
    description: "Your package is handed over to the shipping carrier.",
    detail:
      "Once processing is complete, your package is dispatched using the shipping service selected for your order.",
    icon: Truck,
    label: "Dispatch",
  },
  {
    number: "05",
    title: "Track Your Order",
    description: "Follow your shipment with available tracking updates.",
    detail:
      "When tracking information becomes available, you can use it to follow your package through the carrier's delivery network.",
    icon: MapPin,
    label: "Tracking",
  },
];

function StepCard({ step, index, active, onSelect }) {
  const Icon = step.icon;

  return (
    <button
      type="button"
      data-step-card
      aria-pressed={active}
      onClick={onSelect}
      className={`group relative flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-[18px] border p-3.5 text-left transition-[background-color,border-color,box-shadow] duration-300 sm:gap-4 sm:p-4 lg:p-5 ${
        active
          ? "border-secondary/60 bg-[linear-gradient(120deg,#071A43_0%,#102A59_100%)] shadow-[0_15px_35px_rgba(7,26,67,0.16)]"
          : "border-primary/10 hover:border-secondary/45 bg-white shadow-[0_5px_20px_rgba(7,26,67,0.035)] hover:shadow-[0_12px_30px_rgba(7,26,67,0.09)]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-[3px] transition-colors duration-300 ${
          active ? "bg-secondary" : "bg-transparent"
        }`}
      />

      <span
        className={`flex size-[48px] shrink-0 items-center justify-center rounded-[14px] border transition-all duration-300 sm:size-[56px] ${
          active
            ? "border-secondary/30 bg-secondary/15 text-accent-light"
            : "border-primary/10 bg-primary-soft text-primary group-hover:border-secondary/30 group-hover:bg-secondary/10 group-hover:text-secondary-dark"
        }`}
      >
        <Icon
          size={23}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={`mb-1.5 flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.12em] uppercase ${
            active ? "text-accent-light" : "text-secondary-dark"
          }`}
        >
          Step {step.number}
          <span
            className={`h-px w-4 ${
              active ? "bg-secondary/60" : "bg-secondary/30"
            }`}
          />
          <span
            className={`hidden text-[9px] font-medium tracking-[0.08em] sm:inline ${
              active ? "text-white/55" : "text-muted/70"
            }`}
          >
            {step.label}
          </span>
        </span>

        <span
          className={`font-heading block text-[14px] leading-[1.3] sm:text-[17px] ${
            active ? "text-white" : "text-primary"
          }`}
        >
          {step.title}
        </span>

        <span
          className={`mt-1.5 block max-w-[330px] font-sans text-[11px] leading-[1.6] sm:text-[12px] ${
            active ? "text-white/65" : "text-muted"
          }`}
        >
          {step.description}
        </span>
      </span>

      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          active
            ? "border-secondary bg-secondary text-primary"
            : "border-primary/10 bg-primary-soft text-primary/60 group-hover:border-secondary/40 group-hover:text-secondary-dark"
        }`}
      >
        {active ? (
          <Check size={16} strokeWidth={2.5} />
        ) : (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </span>

      {active && (
        <span
          aria-hidden="true"
          className="bg-secondary/10 pointer-events-none absolute -right-16 -bottom-20 size-44 rounded-full blur-[45px]"
        />
      )}
    </button>
  );
}

function StepDetails({ step, activeIndex }) {
  const Icon = step.icon;

  return (
    <div
      key={step.number}
      className="how-detail-enter border-secondary/20 relative overflow-hidden rounded-[20px] border bg-[linear-gradient(135deg,#071A43_0%,#030D27_100%)] p-5 text-white sm:p-6"
    >
      <div
        aria-hidden="true"
        className="border-secondary/15 pointer-events-none absolute -top-12 -right-12 size-44 rounded-full border"
      />

      <div
        aria-hidden="true"
        className="border-secondary/10 pointer-events-none absolute -top-5 -right-5 size-32 rounded-full border"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-accent-light text-[10px] font-bold tracking-[0.16em] uppercase">
            Step {step.number} / 05
          </span>

          <span className="border-secondary/25 bg-secondary/10 text-accent-light flex size-10 items-center justify-center rounded-xl border">
            <Icon size={19} strokeWidth={1.8} />
          </span>
        </div>

        <h3 className="font-heading mt-5 text-[22px] leading-[1.2] sm:text-[26px]">
          {step.title}
        </h3>

        <p className="mt-3 max-w-[440px] font-sans text-[12px] leading-[1.85] text-white/65 sm:text-[13px]">
          {step.detail}
        </p>

        <div className="mt-6 flex items-center gap-2">
          {steps.map((item, index) => (
            <span
              key={item.number}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                index <= activeIndex ? "bg-secondary" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWork() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !intro || !cardsContainer) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const cards = gsap.utils.toArray(
        cardsContainer.querySelectorAll("[data-step-card]"),
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        })
        .from(intro, {
          autoAlpha: 0,
          x: -35,
          duration: 0.75,
          ease: "power3.out",
        })
        .from(
          cards,
          {
            autoAlpha: 0,
            y: 35,
            scale: 0.94,
            duration: 0.65,
            stagger: 0.11,
            ease: "back.out(1.35)",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.35",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative isolate w-full overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F9FD_55%,#FFFFFF_100%)] px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/[0.035] pointer-events-none absolute top-1/4 -left-40 size-[400px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="bg-secondary/[0.035] pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-20">
        <div ref={introRef} className="min-w-0 lg:sticky lg:top-28">
          <h2 id="how-it-works-heading" className="section-heading">
            From Order
            <br />
            to <span className="text-secondary">Delivery.</span>
          </h2>

          <p className="text-muted mt-5 max-w-[460px] font-sans text-[13px] leading-[1.85] sm:text-[15px]">
            A clear, straightforward ordering process—from choosing your
            research products to receiving shipment updates.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-secondary-dark" />

              <span className="text-primary text-[12px] font-medium">
                Clear Process
              </span>
            </div>

            <div className="flex items-center gap-2">
              <PackageCheck size={17} className="text-secondary-dark" />

              <span className="text-primary text-[12px] font-medium">
                Order Updates
              </span>
            </div>
          </div>

          <Link
            href="/shop"
            className="group mt-8 inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-7 font-sans text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(7,26,67,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(7,26,67,0.2)]"
          >
            Explore Collection
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <div className="mt-9 hidden lg:block">
            <StepDetails step={currentStep} activeIndex={activeStep} />
          </div>
        </div>

        <div ref={cardsRef} className="relative min-w-0">
          <div className="from-secondary/50 via-primary/15 to-secondary/50 absolute top-8 bottom-8 left-[38px] hidden w-px bg-gradient-to-b sm:block lg:left-[43px]" />

          <div className="relative flex flex-col gap-3 sm:gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                active={activeStep === index}
                onSelect={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className="mt-5 lg:hidden">
            <StepDetails step={currentStep} activeIndex={activeStep} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes howDetailEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .how-detail-enter {
          animation: howDetailEnter 0.35s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .how-detail-enter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
