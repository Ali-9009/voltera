"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Mail,
  Sparkles,
  X,
} from "lucide-react";

import { SALE_ENDS } from "@/data/sale";

const GATE_KEY = "spectrum-researcher-verified-v1";
const POPUP_KEY = "penguin-newsletter-dismissed";

const benefits = [
  {
    title: "Extra 5%",
    description: "Venmo, Cash App or Zelle",
  },
  {
    title: "$150+",
    description: "Free ground shipping",
  },
  {
    title: "$250+",
    description: "Free two-day shipping",
  },
];

const goldParticles = Array.from({ length: 38 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 19.3) % 100}%`,
  size: `${1.5 + (i % 3)}px`,
  duration: `${6 + (i % 5)}s`,
  delay: `${-(i * 1.4)}s`,
  drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8)}px`,
}));

function GoldParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {goldParticles.map((particle, index) => (
        <span
          key={index}
          className="newsletter-gold-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
            "--gold-drift": particle.drift,
          }}
        />
      ))}
    </div>
  );
}

// DESKTOP MARKETING PANEL
function MarketingPanel({ saleActive, onClose }) {
  return (
    <div className="newsletter-marketing relative isolate hidden min-h-[510px] flex-col overflow-hidden px-8 py-7 text-white md:flex">
      <GoldParticles />

      <div className="relative z-10">
        {saleActive ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c77b]/30 bg-[#e8c77b]/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#e8c77b] uppercase">
              <Sparkles size={13} />
              Black Friday
            </span>

            {/* HEADLINE AND SINGLE VIAL */}
            <div className="relative mt-5 min-h-[205px]">
              <div className="relative z-10 w-fit">
                <h2 className="font-heading text-[44px] leading-[1.03] font-black tracking-[-0.04em] text-white lg:text-[49px]">
                  BUY 1
                  <br />
                  <span className="text-[#e8c77b]">
                    GET 1
                    <br />
                    FREE.
                  </span>
                </h2>

                <p className="mt-3 text-xs font-semibold text-white/85">
                  Mix &amp; match across the site.
                </p>
              </div>

              {/* SINGLE VIAL ON RIGHT */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 -right-2 z-0 flex h-[230px] w-[175px] items-center justify-center"
              >
                {/* Soft gold glow */}
                <div className="absolute inset-5 rounded-full bg-[#c9953d]/10 blur-2xl" />

                {/* Bigger floating vial */}
                <div className="newsletter-vial-float relative h-[220px] w-[140px] drop-shadow-[0_16px_16px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/pngs/vials/vls-3rt.png"
                    alt=""
                    fill
                    sizes="140px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="mt-2 max-w-[340px] text-[11px] leading-relaxed text-white/75">
              The lowest-priced item in each pair is free. Bac Water is
              excluded.
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#e8c77b]/25 bg-[#e8c77b]/10 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-[#e8c77b]" />
              <span className="text-[10px] font-semibold text-[#e8c77b]">
                Ends Nov 30 · 11:59 PM PST
              </span>
            </div>
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e8c77b]/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#e8c77b] uppercase">
              <Sparkles size={13} />
              Research Updates
            </span>

            <div className="relative mt-7 min-h-[225px]">
              <h2 className="font-heading relative z-10 text-[37px] leading-[1.12] font-bold">
                Stay Connected.
                <br />
                <span className="text-[#e8c77b]">Stay Informed.</span>
              </h2>

              <p className="relative z-10 mt-4 max-w-[200px] text-xs leading-relaxed text-white/75">
                Discover new compounds, batch updates, and restocks.
              </p>

              <div
                aria-hidden="true"
                className="newsletter-vial-float pointer-events-none absolute top-12 right-0 h-[180px] w-[115px]"
              >
                <Image
                  src="/pngs/vials/vls-3rt.png"
                  alt=""
                  fill
                  sizes="115px"
                  className="object-contain"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* BENEFITS */}
      <div className="relative z-10 mt-auto grid grid-cols-3 gap-2 pt-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-1.5 py-4 text-center"
          >
            <strong className="font-heading text-sm leading-tight text-white">
              {benefit.title}
            </strong>

            <span className="mt-1 text-[11px] leading-[1.4] text-white/70">
              {benefit.description}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/shop"
        onClick={onClose}
        className="group relative z-10 mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#e8c77b,#c9953d)] px-5 text-xs font-bold text-[#071a43] shadow-md transition-all duration-300 hover:brightness-110"
      >
        {saleActive ? "Shop Black Friday Sale" : "Explore Collection"}

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}

// MOBILE PROMOTIONAL HEADER
function MobileMarketing({ saleActive }) {
  return (
    <div className="newsletter-marketing relative isolate overflow-hidden px-5 pt-5 pb-4 text-white md:hidden">
      <GoldParticles />

      <div className="relative z-10">
        {saleActive ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c77b]/30 bg-[#e8c77b]/10 px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#e8c77b] uppercase">
              <Sparkles size={11} />
              Black Friday
            </span>

            <div className="relative mt-3 flex min-h-[145px] items-center">
              <div className="relative z-10 min-w-0 flex-1">
                <h2 className="font-heading text-[clamp(30px,9vw,43px)] leading-[1.04] font-black tracking-[-0.04em]">
                  BUY 1
                {" "}
                  <span className="text-[#e8c77b]">
                    GET 1
                    <br />
                    FREE.
                  </span>
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none relative h-[145px] w-[125px] shrink-0"
              >
                <div className="absolute inset-4 rounded-full bg-[#c9953d]/15 blur-2xl" />

                <div className="newsletter-vial-float relative h-full w-full drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/pngs/vials/vls-3rt.png"
                    alt=""
                    fill
                    sizes="125px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="mt-1 text-[10px] leading-relaxed text-white/75">
              Mix &amp; match. Lowest-priced item free. Bac Water excluded.
            </p>

            <p className="mt-1.5 text-[10px] font-semibold text-[#e8c77b]">
              Ends Nov 30 · 11:59 PM PST
            </p>
          </>
        ) : (
          <div className="flex min-h-[135px] items-center gap-4">
            <div className="min-w-0 flex-1">
              <span className="text-[9px] font-bold tracking-widest text-[#e8c77b] uppercase">
                Voltera Sciences
              </span>

              <h2 className="font-heading mt-2 text-[25px] leading-tight font-bold">
                Stay Connected.
                <br />
                <span className="text-[#e8c77b]">Stay Informed.</span>
              </h2>

              <p className="mt-2 text-[11px] leading-relaxed text-white/75">
                Research updates and restock alerts.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="newsletter-vial-float relative h-[125px] w-[105px] shrink-0"
            >
              <Image
                src="/pngs/vials/vls-3rt.png"
                alt=""
                fill
                sizes="105px"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notice, setNotice] = useState("");
  const [saleActive, setSaleActive] = useState(false);

  const timerRef = useRef(null);
  const closeButtonRef = useRef(null);

  // SALE STATUS
  useEffect(() => {
    const checkSale = () => {
      setSaleActive(Date.now() < SALE_ENDS);
    };

    checkSale();

    const interval = window.setInterval(checkSale, 60000);

    return () => window.clearInterval(interval);
  }, []);

  // AUTOMATIC POPUP
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
    setNotice("");
    setIsOpen(true);
  };

  // OPEN FROM OTHER NEWSLETTER FORMS
  useEffect(() => {
    const handleOpen = (event) => {
      setEmail(event.detail?.email ?? "");
      setNotice("");
      setIsOpen(true);
    };

    window.addEventListener("newsletter:open", handleOpen);

    return () => window.removeEventListener("newsletter:open", handleOpen);
  }, []);

  // SCROLL LOCK AND ESCAPE KEY
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

  // SUBSCRIBE
  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim() || !agreed) return;

    const subject = "Voltera Sciences - Research Updates Subscription";

    const body = `Please add the following email to your research updates list:

Email: ${email.trim()}

I agree to receive research updates, restock alerts, and offers from Voltera Sciences.`;

    window.location.href = `mailto:support@volterasciences.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setNotice(
      "Your email application should open. Send the prepared message to request a subscription.",
    );
  };

  return (
    <>
      {/* ORIGINAL FLOATING BUTTON - UNCHANGED */}
      <button
        type="button"
        onClick={openPopup}
        aria-label="Open Voltera Sciences newsletter"
        title="Research Updates"
        className="group border-secondary/50 from-primary-light via-accent to-primary-light shadow-primary/20 hover:border-accent-light hover:shadow-primary/30 fixed bottom-[calc(1.25rem+var(--sticky-cart-offset,0px))] left-5 isolate z-40 flex size-15 items-center justify-center rounded-full border bg-linear-to-br text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 sm:bottom-[calc(1.75rem+var(--sticky-cart-offset,0px))] sm:left-7 lg:bottom-7"
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

      {/* POPUP */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#020817]/80 p-3 backdrop-blur-[6px] sm:p-5"
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
            className="relative my-auto grid max-h-[calc(100dvh-24px)] w-full max-w-[420px] overflow-y-auto rounded-[22px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:max-h-[calc(100dvh-40px)] md:max-w-[880px] md:grid-cols-2 md:rounded-[24px]"
          >
            {/* CLOSE BUTTON */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closePopup}
              aria-label="Close newsletter popup"
              className="absolute top-3 right-3 z-30 flex size-8 items-center justify-center rounded-full border border-[#071a43]/10 bg-white text-[#071a43] shadow-md transition-all duration-300 hover:bg-[#071a43] hover:text-white md:top-4 md:right-4 md:size-9"
            >
              <X size={18} />
            </button>

            {/* DESKTOP MARKETING */}
            <MarketingPanel saleActive={saleActive} onClose={closePopup} />

            {/* MOBILE MARKETING HEADER */}
            <MobileMarketing saleActive={saleActive} />

            {/* NEWSLETTER FORM */}
            <div className="relative flex flex-col justify-center bg-white px-5 pt-5 pb-6 sm:px-8 sm:pb-8 md:px-8 md:pt-14 md:pb-10 lg:px-10">
              {/* DESKTOP-ONLY INTRO */}
              <div className="hidden md:block">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#c9953d]/25 bg-[#c9953d]/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#a9792c] uppercase">
                  <FlaskConical size={14} />
                  Research Updates
                </span>

                <h2
                  id="newsletter-heading"
                  className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#071a43]"
                >
                  Join Our
                  <br />
                  <span className="text-[#c9953d]">Research Community.</span>
                </h2>

                <div className="mt-4 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#a9792c,#e8c77b,#c9953d)]" />

                <p
                  id="newsletter-description"
                  className="mt-4 max-w-[360px] text-[13px] leading-[1.75] text-[#596477]"
                >
                  Receive research updates, new compound announcements, restock
                  alerts, and exclusive offers.
                </p>
              </div>

              {/* MOBILE-ONLY ACCESSIBLE HEADING */}
              <h2 id="newsletter-mobile-heading" className="sr-only md:hidden">
                Subscribe to Voltera Sciences Research Updates
              </h2>

              {/* FORM */}
              <form onSubmit={handleSubscribe} className="md:mt-6">
                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block text-[11px] font-bold text-[#071a43] md:text-xs"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#071a43]/60"
                  />

                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    className="h-[47px] w-full rounded-xl border border-[#dce4f0] bg-[#f7f9fc] pr-4 pl-11 text-[13px] text-[#071a43] transition-all outline-none placeholder:text-[#596477]/60 focus:border-[#1746a2] focus:bg-white focus:ring-2 focus:ring-[#1746a2]/10 md:h-[50px]"
                  />
                </div>

                {/* CONSENT */}
                <div className="mt-3 flex items-start gap-2.5 md:mt-4 md:gap-3">
                  <input
                    id="newsletter-consent"
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                    className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#071a43]"
                  />

                  <label
                    htmlFor="newsletter-consent"
                    className="cursor-pointer text-[10px] leading-[1.6] text-[#596477] md:text-[11px]"
                  >
                    I agree to receive research updates, restock alerts, and
                    offers from Voltera Sciences. I can unsubscribe anytime. See
                    our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-[#071a43] underline underline-offset-2 hover:text-[#c9953d]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* SUBSCRIBE BUTTON */}
                <button
                  type="submit"
                  disabled={!agreed || !email.trim()}
                  className="group mt-4 flex h-[47px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#071a43,#1746a2)] px-5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 md:mt-6 md:h-[50px]"
                >
                  Subscribe to Updates
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {notice && (
                  <div
                    role="status"
                    className="mt-4 flex items-start gap-2 rounded-xl border border-[#dce4f0] bg-[#eef4fc] p-3 text-[11px] leading-5 text-[#071a43]"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    {notice}
                  </div>
                )}

                <p className="mt-4 text-center text-[10px] text-[#596477] md:mt-5">
                  No spam. Research updates only.
                </p>
              </form>
            </div>
          </section>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx global>{`
        .newsletter-marketing {
          background:
            radial-gradient(
              ellipse 75% 65% at 0% 0%,
              rgba(23, 70, 162, 0.32),
              transparent 75%
            ),
            radial-gradient(
              ellipse 80% 75% at 100% 100%,
              rgba(22, 35, 76, 0.65),
              transparent 75%
            ),
            linear-gradient(
              125deg,
              #020611 0%,
              #07152f 30%,
              #14254b 55%,
              #0a1632 75%,
              #020611 100%
            );
        }

        .newsletter-gold-particle {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            #fff6d3 0%,
            #e8c77b 55%,
            #c9953d 100%
          );
          box-shadow:
            0 0 4px rgba(232, 199, 123, 0.65),
            0 0 9px rgba(201, 149, 61, 0.25);
          opacity: 0;
          animation-name: newsletter-gold-snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes newsletter-gold-snowfall {
          0% {
            transform: translate3d(0, -45px, 0);
            opacity: 0;
          }

          15% {
            opacity: 0.85;
          }

          75% {
            opacity: 0.7;
          }

          100% {
            transform: translate3d(var(--gold-drift, 15px), 250px, 0);
            opacity: 0;
          }
        }

        .newsletter-vial-float {
          animation: newsletter-vial-float 4.5s ease-in-out infinite;
        }

        @keyframes newsletter-vial-float {
          0%,
          100% {
            transform: translateY(0) rotate(-11deg);
          }

          50% {
            transform: translateY(-7px) rotate(-8deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .newsletter-gold-particle,
          .newsletter-vial-float {
            animation: none;
          }

          .newsletter-gold-particle {
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}
