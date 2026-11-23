"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "spectrum-researcher-verified-v1";

export default function ResearcherGate() {
  const [phase, setPhase] = useState("checking");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [researchConfirmed, setResearchConfirmed] = useState(false);

  const firstCheckboxRef = useRef(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "accepted") {
        setPhase("accepted");
        return;
      }
    } catch {}

    setPhase("prompt");
  }, []);

  useEffect(() => {
    if (phase !== "prompt") return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    firstCheckboxRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [phase]);

  const handleContinue = () => {
    if (!ageConfirmed || !researchConfirmed) return;

    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}

    setPhase("accepted");

    window.dispatchEvent(new Event("researcher-gate:accepted"));
  };

  if (phase === "accepted" || phase === "checking") return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto bg-white lg:overflow-hidden">
      <main className="grid min-h-screen grid-cols-1 lg:h-screen lg:grid-cols-2">
        <section
          aria-label="Voltera Sciences welcome"
          className="bg-primary-dark relative hidden overflow-hidden lg:block lg:h-full lg:min-h-0"
        >
          <Image
            src="/assets-v/gate.png"
            alt="Voltera Sciences research products"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(3,13,39,0.85)_100%)]" />

          <div className="absolute bottom-7 left-6 z-10 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
            <span className="border-secondary/40 bg-primary-dark/60 text-accent-light inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase backdrop-blur-md">
              <FlaskConical size={15} />
              For Research Use Only
            </span>

            <h2 className="font-heading mt-4 max-w-[470px] text-[28px] leading-[1.15] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[42px]">
              Advancing Discovery.
              <span className="text-accent-light block">
                Supporting Research.
              </span>
            </h2>

            <p className="mt-3 hidden max-w-[390px] font-sans text-[13px] leading-7 text-white/75 sm:block">
              Voltera Sciences supplies research compounds intended exclusively
              for scientific and laboratory applications.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="verification-title"
          aria-describedby="verification-description"
          className="flex min-h-0 items-center justify-center bg-[linear-gradient(145deg,#FFFFFF_0%,#F7F9FD_100%)] px-5 py-9 sm:px-10 sm:py-12 lg:h-full lg:overflow-y-auto lg:px-10 xl:px-16"
        >
          <div className="w-full max-w-[510px]">
            <div className="border-secondary/25 mb-5 inline-flex items-center gap-2 rounded-full border bg-[#FFF8EC] px-3.5 py-2">
              <ShieldCheck
                size={15}
                className="text-secondary-dark"
                strokeWidth={1.8}
              />

              <span className="text-secondary-dark text-[10px] font-bold tracking-[0.12em] uppercase">
                Researcher Access
              </span>
            </div>

            <h1
              id="verification-title"
              className="font-heading text-primary text-[32px] leading-[1.12] tracking-[-0.035em] sm:text-[40px] xl:text-[44px]"
            >
              Researcher <span className="text-secondary">Verification</span>
            </h1>

            <p
              id="verification-description"
              className="text-muted mt-4 max-w-[465px] font-sans text-[13px] leading-7 sm:text-[14px]"
            >
              Welcome to Voltera Sciences. Our products are supplied exclusively
              for laboratory and scientific research. Please review and confirm
              the following requirements before entering our website.
            </p>

            <div className="mt-7 space-y-3">
              <label
                className={`flex cursor-pointer items-start gap-3.5 rounded-[15px] border p-4 transition-all duration-300 sm:p-5 ${
                  ageConfirmed
                    ? "border-secondary/50 bg-[#FFF9EF]"
                    : "border-primary/10 hover:border-secondary/40 bg-white"
                }`}
              >
                <input
                  ref={firstCheckboxRef}
                  type="checkbox"
                  checked={ageConfirmed}
                  onChange={(event) => setAgeConfirmed(event.target.checked)}
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[#C9953D]"
                />

                <span className="text-muted font-sans text-[13px] leading-6 sm:text-[14px]">
                  I confirm that I am at least{" "}
                  <strong className="text-primary font-bold">
                    21 years of age.
                  </strong>
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-start gap-3.5 rounded-[15px] border p-4 transition-all duration-300 sm:p-5 ${
                  researchConfirmed
                    ? "border-secondary/50 bg-[#FFF9EF]"
                    : "border-primary/10 hover:border-secondary/40 bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={researchConfirmed}
                  onChange={(event) =>
                    setResearchConfirmed(event.target.checked)
                  }
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[#C9953D]"
                />

                <span className="text-muted font-sans text-[13px] leading-6 sm:text-[14px]">
                  I confirm that I am a{" "}
                  <strong className="text-primary font-bold">
                    qualified researcher
                  </strong>{" "}
                  purchasing products exclusively for{" "}
                  <strong className="text-primary font-bold">
                    in-vitro or laboratory research
                  </strong>
                  , and not for human consumption, clinical, or veterinary use.
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!ageConfirmed || !researchConfirmed}
              className="group border-secondary/30 hover:border-secondary relative mt-6 flex h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full border bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-5 font-sans text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(7,26,67,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(7,26,67,0.25)] active:scale-[0.98] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-[#DCE4F0] disabled:bg-none disabled:text-[#81939C] disabled:shadow-none disabled:hover:translate-y-0 sm:text-sm"
            >
              <span className="bg-primary-dark pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-disabled:opacity-0" />

              <span className="relative z-10">Enter Voltera Sciences</span>

              <ArrowRight
                size={19}
                className="text-accent-light relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0 group-disabled:text-[#81939C]"
              />
            </button>

            <p className="text-muted mt-5 font-sans text-[11px] leading-6">
              By continuing, you confirm that the information above is accurate.
              All products are intended strictly for research purposes and are
              not approved for human consumption, veterinary use, or diagnostic
              or therapeutic applications.
            </p>

            <div className="border-primary/10 mt-7 flex flex-wrap items-center justify-between gap-3 border-t pt-5">
              <a
                href="https://www.google.com/"
                className="text-primary hover:text-secondary-dark font-sans text-[12px] font-semibold underline underline-offset-4 transition-colors"
              >
                Not a Researcher? Exit Site
              </a>

              <span className="text-muted flex items-center gap-1.5 font-sans text-[11px]">
                <LockKeyhole size={13} className="text-secondary-dark" />
                Researcher Verification
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
