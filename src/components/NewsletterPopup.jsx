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
  Truck,
  Wallet,
  X,
  Zap,
} from "lucide-react";

import { SALE_ENDS } from "@/data/sale";

const GATE_KEY = "spectrum-researcher-verified-v1";
const POPUP_KEY = "penguin-newsletter-dismissed";

const benefits = [
  {
    title: "Extra 5%",
    description: "Venmo, Cash App or Zelle",
    icon: Wallet,
  },
  {
    title: "$150+",
    description: "Free ground shipping",
    icon: Truck,
  },
  {
    title: "$250+",
    description: "Free two-day shipping",
    icon: Zap,
  },
];

// Stable positions prevent hydration mismatches.
const goldParticles = Array.from({ length: 38 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 19.3) % 100}%`,
  size: `${1.5 + (i % 3)}px`,
  duration: `${6 + (i % 5)}s`,
  delay: `${-(i * 1.4)}s`,
  drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8)}px`,
}));

// ==========================================
// LEFT MARKETING PANEL - DESKTOP ONLY
// ==========================================

function MarketingPanel({ saleActive, onClose }) {
  return (
    <div className="newsletter-marketing relative isolate hidden min-h-[510px] flex-col overflow-hidden px-7 py-7 text-white md:flex lg:px-8">
      {/* DARK GRADIENT + GOLD SNOWFALL */}
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

      {/* LOGO + BADGE */}
      {/* <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex h-[58px] w-[125px] items-center justify-center rounded-xl bg-white px-3 py-2 shadow-lg">
          <Image
            src="/assets-v/voltera-black.png"
            alt="Voltera Sciences"
            width={140}
            height={65}
            priority
            className="h-full w-full object-contain"
          />
        </div>
      </div> */}

      {/* PROMOTIONAL CONTENT */}
      <div className="relative z-10 mt-7">
        {saleActive ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c77b]/30 bg-[#e8c77b]/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#e8c77b] uppercase">
              <Sparkles size={13} />
              {saleActive ? "Black Friday" : "Research Updates"}
            </span>

            {/* HEADLINE + VIALS */}
            <div className="relative mt-3 min-h-[195px]">
              <div className="relative z-10 max-w-[200px]">
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
                  Mix & match across the site.
                </p>
              </div>

              {/* VIALS */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1 right-0 z-0 h-[185px] w-[170px]"
              >
                <div className="absolute top-8 right-4 size-[120px] rounded-full bg-[#c9953d]/10 blur-2xl" />

                <div className="newsletter-vial-left absolute top-5 left-1 h-[157px] w-[82px] drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/pngs/vials/vls-3rt.png"
                    alt=""
                    fill
                    sizes="82px"
                    className="object-contain"
                  />
                </div>

                <div className="newsletter-vial-right absolute top-0 right-0 h-[175px] w-[91px] drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/pngs/vials/vls-2trz.png"
                    alt=""
                    fill
                    sizes="91px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="mt-2 max-w-[350px] text-[11px] leading-relaxed text-white/75">
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
            <p className="text-xs font-bold tracking-widest text-[#e8c77b] uppercase">
              Voltera Sciences
            </p>

            <h2 className="font-heading mt-4 text-[36px] leading-tight font-bold">
              Stay Connected.
              <br />
              <span className="text-[#e8c77b]">Stay Informed.</span>
            </h2>

            <p className="mt-4 max-w-[330px] text-sm leading-relaxed text-white/75">
              Discover new research compounds, documentation updates, and
              product restocks.
            </p>

            <div
              aria-hidden="true"
              className="relative mx-auto mt-5 h-[150px] w-[220px]"
            >
              <Image
                src="/pngs/vials/vls-3rt.png"
                alt=""
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
          </>
        )}
      </div>

      {/* BENEFITS */}
      <div className="relative z-10 mt-auto grid grid-cols-3 gap-2 pt-5">
        {benefits.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex min-w-0 flex-col items-center rounded-xl border border-white/15 bg-white/[0.06] px-1.5 py-3 text-center"
          >
            {/* <span className="flex size-8 items-center justify-center rounded-full border border-[#e8c77b]/25 bg-[#e8c77b]/10 text-[#e8c77b]">
              <Icon size={16} strokeWidth={1.8} />
            </span> */}

            <strong className="font-heading mt-2 text-sm leading-tight text-white">
              {title}
            </strong>

            <span className="mt-1 text-xs leading-[1.4] text-white/70">
              {description}
            </span>
          </div>
        ))}
      </div>

      {/* SHOP CTA */}
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

// ==========================================
// NEWSLETTER POPUP
// ==========================================

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

  // CLOSE POPUP
  const closePopup = () => {
    setIsOpen(false);

    try {
      sessionStorage.setItem(POPUP_KEY, "true");
    } catch {}
  };

  // OPEN POPUP
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

  // BODY SCROLL LOCK + ESCAPE
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
      {/* ======================================
          ORIGINAL FLOATING BUTTON - UNCHANGED
      ====================================== */}

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

      {/* ======================================
          POPUP
      ====================================== */}

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
            className="relative my-auto grid max-h-[calc(100dvh-24px)] w-full max-w-[460px] overflow-y-auto rounded-[20px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:max-h-[calc(100dvh-40px)] sm:rounded-[24px] md:max-w-[880px] md:grid-cols-2"
          >
            {/* CLOSE BUTTON */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closePopup}
              aria-label="Close newsletter popup"
              className="absolute top-3 right-3 z-30 flex size-9 items-center justify-center rounded-full border border-[#071a43]/10 bg-white text-[#071a43] shadow-md transition-all duration-300 hover:bg-[#071a43] hover:text-white md:top-4 md:right-4"
            >
              <X size={18} />
            </button>

            {/* LEFT - HIDDEN ON MOBILE */}
            <MarketingPanel saleActive={saleActive} onClose={closePopup} />

            {/* RIGHT - NEWSLETTER FORM */}
            <div className="relative flex flex-col justify-center bg-white px-5 pt-14 pb-8 sm:px-8 sm:pt-12 sm:pb-10 md:px-8 lg:px-10">
              {/* TOP BADGE */}
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#c9953d]/25 bg-[#c9953d]/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#a9792c] uppercase">
                <FlaskConical size={14} />
                Research Updates
              </span>

              {/* HEADING */}
              <h2
                id="newsletter-heading"
                className="font-heading text-[26px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#071a43] sm:text-[32px]"
              >
                Join Our
                <br />
                <span className="text-[#c9953d]">Research Community.</span>
              </h2>

              {/* GOLD UNDERLINE */}
              <div className="mt-4 h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#a9792c,#e8c77b,#c9953d)]" />

              {/* DESCRIPTION */}
              <p
                id="newsletter-description"
                className="mt-4 max-w-[360px] text-[13px] leading-[1.75] text-[#596477]"
              >
                Receive research updates, new compound announcements, restock
                alerts, and exclusive offers.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubscribe} className="mt-6">
                {/* EMAIL */}
                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block text-xs font-bold text-[#071a43]"
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
                    className="h-[50px] w-full rounded-xl border border-[#dce4f0] bg-[#f7f9fc] pr-4 pl-11 text-[13px] text-[#071a43] transition-all outline-none placeholder:text-[#596477]/60 focus:border-[#1746a2] focus:bg-white focus:ring-2 focus:ring-[#1746a2]/10"
                  />
                </div>

                {/* CONSENT */}
                <div className="mt-4 flex items-start gap-3">
                  <input
                    id="newsletter-consent"
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                    className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#071a43]"
                  />

                  <label
                    htmlFor="newsletter-consent"
                    className="cursor-pointer text-[11px] leading-[1.6] text-[#596477]"
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
                  className="group mt-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#071a43,#1746a2)] px-5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Subscribe to Updates
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* NOTICE */}
                {notice && (
                  <div
                    role="status"
                    className="mt-4 flex items-start gap-2 rounded-xl border border-[#dce4f0] bg-[#eef4fc] p-3 text-[11px] leading-5 text-[#071a43]"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    {notice}
                  </div>
                )}

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-7 bg-[#071a43]/15" />

                  <p className="text-center text-[10px] text-[#596477]">
                    No spam. Research updates only.
                  </p>

                  <span className="h-px w-7 bg-[#071a43]/15" />
                </div>
              </form>
            </div>
          </section>
        </div>
      )}

      {/* ======================================
          ANIMATIONS
      ====================================== */}

      <style jsx global>{`
        .newsletter-marketing {
          background:
            radial-gradient(
              ellipse 75% 65% at 0% 0%,
              rgba(23, 70, 162, 0.35),
              transparent 75%
            ),
            radial-gradient(
              ellipse 80% 75% at 100% 100%,
              rgba(22, 35, 76, 0.75),
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
            transform: translate3d(var(--gold-drift, 15px), 180px, 0);
            opacity: 0;
          }
        }

        .newsletter-vial-left {
          animation: newsletter-vial-float-left 4.5s ease-in-out infinite;
        }

        .newsletter-vial-right {
          animation: newsletter-vial-float-right 5.2s ease-in-out infinite;
        }

        @keyframes newsletter-vial-float-left {
          0%,
          100% {
            transform: translateY(0) rotate(-12deg);
          }

          50% {
            transform: translateY(-8px) rotate(-9deg);
          }
        }

        @keyframes newsletter-vial-float-right {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }

          50% {
            transform: translateY(-10px) rotate(15deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .newsletter-gold-particle,
          .newsletter-vial-left,
          .newsletter-vial-right {
            animation: none;
          }

          .newsletter-gold-particle {
            opacity: 0.45;
          }
        }
      `}</style>
    </>
  );
}
