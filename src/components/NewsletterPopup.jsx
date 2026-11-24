"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  FlaskConical,
  Mail,
  PackageCheck,
  X,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GATE_KEY = "spectrum-researcher-verified-v1";
const POPUP_KEY = "penguin-newsletter-dismissed";

const benefits = [
  { label: "New Compounds", icon: FlaskConical },
  { label: "Restock Alerts", icon: PackageCheck },
  { label: "Exclusive Offers", icon: Bell },
];

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notice, setNotice] = useState("");

  const timerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const schedulePopup = () => {
      if (timerRef.current !== null) return;

      try {
        if (sessionStorage.getItem(POPUP_KEY) === "true") return;
      } catch {}

      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        setIsOpen(true);
      }, 3000);
    };

    try {
      if (localStorage.getItem(GATE_KEY) === "accepted") {
        schedulePopup();
      }
    } catch {}

    window.addEventListener("researcher-gate:accepted", schedulePopup);

    return () => {
      window.removeEventListener("researcher-gate:accepted", schedulePopup);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);

    try {
      sessionStorage.setItem(POPUP_KEY, "true");
    } catch {}
  };
  const openPopup = () => {
    setIsOpen(true);
    setNotice("");
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim() || !agreed) return;

    const subject = "Penguin Peptides - Research Updates Subscription";

    const body = `Please add the following email to your research updates list:

Email: ${email.trim()}

I agree to receive research updates, restock alerts, and offers from Penguin Peptides.`;

    window.location.href = `mailto:support@penguinpeptides.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setNotice(
      "Your email application should open. Send the prepared message to request a subscription.",
    );
  };

return (
  <>
    <button
      type="button"
      onClick={openPopup}
      aria-label="Open Voltera Sciences newsletter"
      title="Research Updates"
      className="group border-secondary/50 from-primary-light via-accent to-primary-light shadow-primary/20 hover:border-accent-light hover:shadow-primary/30 fixed bottom-5 left-5 isolate z-[9998] flex size-15 items-center justify-center rounded-full border bg-linear-to-br text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 sm:bottom-7 sm:left-7"
    >
      <span
        aria-hidden="true"
        className="from-accent via-primary to-accent pointer-events-none absolute inset-0 -z-10 rounded-full bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="border-accent-light/30 group-hover:border-accent-light/70 pointer-events-none absolute inset-[4px] rounded-full border transition-colors duration-300"
      />

      <Mail
        size={25}
        strokeWidth={1.8}
        className="text-accent-light relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      <span
        aria-hidden="true"
        className="from-accent-light to-secondary-dark absolute -top-1 -right-1 z-20 size-[15px] rounded-full border-2 border-white bg-linear-to-br"
      />
    </button>

    {isOpen && (
      <div
        className="bg-primary/75 fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto px-4 py-4 backdrop-blur-[6px] sm:px-6 sm:py-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closePopup();
          }
        }}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-heading"
          aria-describedby="newsletter-description"
          className="border-primary/10 relative my-auto w-full max-w-[540px] overflow-hidden rounded-[24px] border bg-white shadow-[0_30px_100px_rgba(17,21,35,0.25)] sm:rounded-[28px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#030B1D_0%,#1B2030_50%,#030B1D_100%)]"
          />

          <div
            aria-hidden="true"
            className="border-primary/5 pointer-events-none absolute -top-24 -left-24 size-56 rounded-full border"
          />

          <div
            aria-hidden="true"
            className="border-primary/5 pointer-events-none absolute -top-14 -left-14 size-40 rounded-full border"
          />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closePopup}
            aria-label="Close newsletter popup"
            className="border-primary/10 bg-primary-soft text-primary hover:bg-primary absolute top-4 right-4 z-30 flex size-9 items-center justify-center rounded-full border transition-all duration-300 hover:rotate-90 hover:text-white"
          >
            <X size={18} />
          </button>

          <div className="relative z-10 px-5 pt-12 pb-8 sm:px-9 sm:pt-12 sm:pb-10">
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="newsletter-float-left pointer-events-none absolute top-14 -left-3 z-0 h-[65px] w-[45px] drop-shadow-[0_8px_12px_rgba(18,51,107,0.15)] sm:top-8 sm:-left-6 sm:h-[110px] sm:w-[75px]"
              >
                <Image
                  src="/pngs/quick-view-2.png"
                  alt=""
                  fill
                  sizes="(max-width: 639px) 45px, 75px"
                  className="object-contain"
                />
              </div>

              <div
                aria-hidden="true"
                className="newsletter-float-right pointer-events-none absolute top-14 -right-3 z-0 h-[65px] w-[45px] drop-shadow-[0_8px_12px_rgba(18,51,107,0.15)] sm:top-8 sm:-right-6 sm:h-[110px] sm:w-[75px]"
              >
                <Image
                  src="/pngs/quick-view.png"
                  alt=""
                  fill
                  sizes="(max-width: 639px) 45px, 75px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-10 mx-auto text-center">
                <span className="border-secondary/25 bg-secondary/10 text-secondary-dark inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-sans text-[9px] font-bold tracking-[0.12em] uppercase">
                  <FlaskConical size={13} strokeWidth={1.8} />
                  Stay Connected
                </span>

                <h2
                  id="newsletter-heading"
                  className="font-heading text-primary-dark mt-4 text-[23px] leading-[1.2] font-normal tracking-[-0.025em] sm:text-[30px]"
                >
                  Join Our
                  <span className="text-primary block">Research Community</span>
                </h2>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="to-secondary/70 h-px w-12 bg-linear-to-r from-transparent" />

                  <span className="bg-secondary size-1.5 rotate-45" />

                  <span className="to-secondary/70 h-px w-12 bg-linear-to-l from-transparent" />
                </div>

                <p
                  id="newsletter-description"
                  className="text-muted mx-auto mt-4 max-w-[300px] px-9 font-sans text-[12px] leading-[1.8] sm:max-w-[320px] sm:px-4 sm:text-[14px]"
                >
                  Discover new research compounds, receive restock alerts, and
                  stay informed about exclusive Voltera Sciences updates.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="mt-8">
              <label
                htmlFor="newsletter-email"
                className="mb-2 block font-sans text-[12px] font-semibold text-black"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="text-primary pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
                />

                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="border-primary/15 bg-primary-soft focus:border-primary focus:ring-primary/10 h-[54px] w-full rounded-xl border pr-4 pl-12 font-sans text-[13px] text-black transition-all duration-300 outline-none placeholder:text-black/40 focus:bg-white focus:ring-2 sm:text-sm"
                />
              </div>

              <div className="mt-5 flex items-start gap-3">
                <input
                  id="newsletter-consent"
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="accent-primary mt-0.5 size-[17px] shrink-0 cursor-pointer"
                />

                <label
                  htmlFor="newsletter-consent"
                  className="cursor-pointer font-sans text-[12px] leading-[1.7] text-black/65"
                >
                  I agree to receive research updates, restock alerts, and
                  exclusive offers from Voltera Sciences by email. I can
                  unsubscribe at any time. See our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:text-primary-light font-semibold underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreed || !email.trim()}
                className="btn-primary mt-7 h-[54px] w-full gap-3 px-6 text-[13px] sm:text-sm"
              >
                Subscribe to Updates
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>

              {notice && (
                <div
                  role="status"
                  className="border-primary/15 bg-primary-soft text-primary mt-5 flex items-start gap-2 rounded-xl border p-3 font-sans text-[12px] leading-5"
                >
                  <CheckCircle2
                    size={17}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  {notice}
                </div>
              )}

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="bg-primary/15 h-px w-8" />

                <p className="font-sans text-[11px] text-black/50">
                  No spam. Research updates only.
                </p>

                <span className="bg-primary/15 h-px w-8" />
              </div>
            </form>
          </div>

          <style jsx>{`
            @keyframes newsletterFloatLeft {
              0%,
              100% {
                transform: translateY(0) rotate(-13deg);
              }

              50% {
                transform: translateY(-12px) rotate(-9deg);
              }
            }

            @keyframes newsletterFloatRight {
              0%,
              100% {
                transform: translateY(0) rotate(13deg);
              }

              50% {
                transform: translateY(-15px) rotate(17deg);
              }
            }

            .newsletter-float-left {
              animation: newsletterFloatLeft 4.5s ease-in-out infinite;
            }

            .newsletter-float-right {
              animation: newsletterFloatRight 5.2s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .newsletter-float-left,
              .newsletter-float-right {
                animation: none;
              }
            }
          `}</style>
        </section>
      </div>
    )}
  </>
);
}
