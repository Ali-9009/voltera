"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Check, Clock3, Gift, Tag, X } from "lucide-react";

const offers = [
  {
    label: "BUY 1, GET 1",
    highlight: "FREE",
    detail: "ON SELECT ITEMS",
    icon: Gift,
  },
  {
    label: "35% OFF",
    highlight: null,
    detail: "THE REST OF THE SITE",
    icon: Tag,
  },
];

function OfferBadge({ offer }) {
  const Icon = offer.icon;

  return (
    <span className="bg-primary-dark inline-flex shrink-0 items-center gap-2.5 rounded-[5px] px-3.5 py-2 whitespace-nowrap text-white">
      <Icon size={15} strokeWidth={2} className="text-accent-light shrink-0" />

      <span className="font-sans text-[11px] font-extrabold tracking-[0.04em] sm:text-[12px]">
        {offer.label}{" "}
        {offer.highlight && (
          <span className="text-accent-light">{offer.highlight}</span>
        )}
      </span>

      <span className="hidden h-3 w-px bg-white/25 xl:block" />

      <span className="hidden text-[9px] font-medium tracking-[0.06em] text-white/75 xl:block">
        {offer.detail}
      </span>
    </span>
  );
}

function PromoContent() {
  return (
    <div className="flex shrink-0 items-center gap-4 whitespace-nowrap lg:gap-6">
      <span className="font-heading text-primary text-[17px] leading-none tracking-[-0.015em] italic sm:text-[21px] lg:text-[23px]">
        EARLY BLACK FRIDAY
      </span>

      {offers.map((offer) => (
        <OfferBadge key={offer.label} offer={offer} />
      ))}

      <span className="text-primary inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-bold tracking-[0.04em] sm:text-[11px]">
        <Clock3 size={14} className="text-secondary-dark" />
        ENDS NOV 30
      </span>
    </div>
  );
}

function OffersModal({ onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="bg-primary-dark/65 fixed inset-0 z-[300] flex items-center justify-center p-3 backdrop-blur-[5px] sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="black-friday-title"
        className="border-secondary/30 relative max-h-[92dvh] w-full max-w-[650px] overflow-y-auto rounded-[24px] border bg-[#FFFCF5] shadow-[0_30px_100px_rgba(3,13,39,0.3)]"
      >
        <header className="border-secondary/20 relative overflow-hidden border-b bg-[linear-gradient(135deg,#FFF0C7_0%,#FFFCF5_100%)] px-5 pt-8 pb-7 text-center sm:px-8 sm:pt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg,transparent 0px,transparent 18px,#C9953D 18px,#C9953D 19px)",
            }}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close offers"
            className="border-primary/15 text-primary hover:bg-primary absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full border bg-white transition-colors hover:text-white"
          >
            <X size={18} />
          </button>

          <div className="relative z-10">
            <span className="border-secondary/30 text-secondary-dark inline-flex items-center rounded-full border bg-white px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase">
              Voltera Sciences • Limited-Time Sale
            </span>

            <h2
              id="black-friday-title"
              className="font-heading text-primary mt-5 text-[30px] leading-tight sm:text-[42px]"
            >
              EARLY
              <br />
              <span className="text-secondary-dark">BLACK FRIDAY</span>
            </h2>

            <p className="text-muted mt-3 font-sans text-[13px]">
              Exclusive savings on selected research products.
            </p>
          </div>
        </header>

        <div className="space-y-4 p-4 sm:p-6">
          <article className="border-secondary/30 overflow-hidden rounded-[18px] border bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-secondary-dark" />

              <span className="text-secondary-dark text-[10px] font-bold tracking-[0.14em] uppercase">
                Featured Promotion
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-heading text-primary text-[36px] leading-none sm:text-[46px]">
                BOGO
              </span>

              <span className="bg-primary text-accent-light rounded-md px-3 py-1.5 text-[10px] font-bold tracking-wide">
                SELECT ITEMS
              </span>
            </div>

            <h3 className="font-heading text-primary mt-3 text-[19px] sm:text-[22px]">
              Buy One, Get One Free
            </h3>

            <p className="text-muted mt-3 text-[12px] leading-7">
              Buy one eligible product and get one free on select items.
              Availability and applicable terms are shown with eligible
              products.
            </p>
          </article>

          <article className="border-primary/10 rounded-[18px] border bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-secondary-dark" />

              <span className="text-secondary-dark text-[10px] font-bold tracking-[0.14em] uppercase">
                More Savings
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-heading text-secondary-dark text-[39px] leading-none sm:text-[48px]">
                35% OFF
              </span>
            </div>

            <h3 className="font-heading text-primary mt-3 text-[18px]">
              The Rest of the Site
            </h3>

            <p className="text-muted mt-3 text-[12px] leading-7">
              Enjoy 35% off products outside the selected BOGO promotion.
            </p>
          </article>

          <div className="border-secondary/25 flex items-start gap-3 rounded-[15px] border bg-[#FFF5DA] p-4">
            <Clock3 size={19} className="text-secondary-dark mt-0.5 shrink-0" />

            <div>
              <p className="text-primary font-sans text-[12px] font-bold">
                Limited-Time Event
              </p>

              <p className="text-muted mt-1 text-[12px] leading-6">
                Sale ends Monday, November 30 at 11:59 PM PST.
              </p>
            </div>
          </div>

          <Link
            href="/shop"
            onClick={onClose}
            className="group flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-6 font-sans text-[13px] font-bold text-white transition-all duration-300 hover:shadow-[0_8px_22px_rgba(7,26,67,0.22)]"
          >
            Shop Black Friday Offers
            <ArrowRight
              size={17}
              className="text-accent-light transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="text-muted text-center font-sans text-[10px] leading-5">
            Offers apply to eligible products during the promotional period. For
            laboratory research use only.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function AnnouncementBar() {
  const [showOffers, setShowOffers] = useState(false);

  return (
    <>
      <div className="border-secondary/30 relative isolate z-50 w-full overflow-hidden border-y bg-[#E8C77B]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,transparent 0px,transparent 18px,#A9792C 18px,#A9792C 32px)",
          }}
        />

        <div className="bg-primary/15 pointer-events-none absolute inset-x-0 bottom-0 h-px" />

        {/* DESKTOP: STATIC */}
        <div className="relative mx-auto hidden h-[54px] max-w-[1600px] items-center justify-center gap-5 px-4 lg:flex xl:gap-7 xl:px-8">
          <PromoContent />
        </div>

        {/* MOBILE: MARQUEE */}
        <div className="relative flex h-[48px] items-center lg:hidden">
          <div className="min-w-0 flex-1 overflow-hidden">
            <Marquee speed={35} gradient={false} pauseOnHover autoFill>
              <div className="flex items-center gap-5 px-4">
                <PromoContent />

                <span
                  aria-hidden="true"
                  className="bg-primary/50 size-1.5 shrink-0 rotate-45"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {showOffers && <OffersModal onClose={() => setShowOffers(false)} />}
    </>
  );
}
