"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowRight, Clock3, Gift, Tag, X } from "lucide-react";

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
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-[5px] border border-white/20 bg-white/10 px-3.5 py-2 whitespace-nowrap text-white shadow-sm backdrop-blur-sm">
      <Icon size={15} strokeWidth={2} className="shrink-0 text-[#A8CBFF]" />

      <span className="font-sans text-[11px] font-extrabold tracking-[0.04em] sm:text-[12px]">
        {offer.label}{" "}
        {offer.highlight && (
          <span className="text-[#A8CBFF]">{offer.highlight}</span>
        )}
      </span>

      <span className="hidden h-3 w-px bg-white/25 xl:block" />

      <span className="hidden text-xs font-semibold tracking-[0.06em] text-white/85 xl:block">
        {offer.detail}
      </span>
    </span>
  );
}

function PromoContent() {
  return (
    <div className="flex shrink-0 items-center gap-4 whitespace-nowrap lg:gap-6">
      <span className="font-heading text-[17px] leading-none font-semibold tracking-[-0.015em] text-white italic sm:text-[21px] lg:text-[23px]">
        EARLY <span className="text-[#B7D4FF]">BLACK FRIDAY</span>
      </span>

      {offers.map((offer) => (
        <OfferBadge key={offer.label} offer={offer} />
      ))}

      <span className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-bold tracking-[0.04em] text-white/90 sm:text-[11px]">
        <Clock3 size={14} className="text-[#A8CBFF]" />
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
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[#071A43]/65 p-3 backdrop-blur-[5px] sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="black-friday-title"
        className="border-primary/20 relative max-h-[92dvh] w-full max-w-[650px] overflow-y-auto rounded-[24px] border bg-[#F5F8FF] shadow-[0_30px_100px_rgba(7,26,67,0.3)]"
      >
        <header className="border-primary-light/30 relative isolate overflow-hidden border-b bg-[linear-gradient(135deg,#071A43_0%,#1746A2_50%,#071A43_100%)] px-5 pt-8 pb-7 text-center sm:px-8 sm:pt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_28px,rgba(168,203,255,0.14)_28px,rgba(168,203,255,0.14)_29px)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[350px] rounded-full border border-white/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 -z-10 size-[280px] rounded-full border border-white/10"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close offers"
            className="hover:text-primary absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white"
          >
            <X size={18} />
          </button>

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#B7D4FF] uppercase">
              Voltera Sciences • Limited-Time Sale
            </span>

            <h2
              id="black-friday-title"
              className="font-heading mt-5 text-[30px] leading-tight text-white sm:text-[42px]"
            >
              EARLY
              <br />
              <span className="bg-linear-to-b from-white via-[#A8CBFF] to-[#6495EE] bg-clip-text text-transparent">
                BLACK FRIDAY
              </span>
            </h2>

            <div className="mx-auto my-4 h-[2px] w-24 rounded-full bg-linear-to-r from-transparent via-[#A8CBFF] to-transparent" />

            <p className="font-sans text-[13px] text-white/85">
              Exclusive savings on selected research products.
            </p>
          </div>
        </header>

        <div className="space-y-4 p-4 sm:p-6">
          <article className="border-primary/15 to-primary-soft/60 relative overflow-hidden rounded-[18px] border bg-linear-to-br from-white p-5 sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-[#071A43] via-[#3D75D8] to-[#071A43]"
            />

            <div className="flex items-center gap-2">
              <Gift size={18} className="text-[#1746A2]" />

              <span className="text-[10px] font-bold tracking-[0.14em] text-[#1746A2] uppercase">
                Featured Promotion
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-heading bg-linear-to-br from-[#1746A2] to-[#071A43] bg-clip-text text-[36px] leading-none text-transparent sm:text-[46px]">
                BOGO
              </span>

              <span className="rounded-md bg-linear-to-br from-[#1746A2] to-[#071A43] px-3 py-1.5 text-[10px] font-bold tracking-wide text-white">
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

          <article className="border-primary/15 relative overflow-hidden rounded-[18px] border bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-[#1746A2]" />

              <span className="text-[10px] font-bold tracking-[0.14em] text-[#1746A2] uppercase">
                More Savings
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="font-heading bg-linear-to-br from-[#1746A2] via-[#285BB8] to-[#071A43] bg-clip-text text-[39px] leading-none text-transparent sm:text-[48px]">
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

          <div className="border-primary/15 flex items-start gap-3 rounded-[15px] border bg-[#EAF1FF] p-4">
            <Clock3 size={19} className="mt-0.5 shrink-0 text-[#1746A2]" />

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
            className="btn-primary group h-[50px] w-full gap-2 px-6 text-[13px]"
          >
            Shop Black Friday Offers
            <ArrowRight size={17} />
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
      <div className="relative isolate z-50 w-full overflow-hidden border-y border-[#3D75D8]/40 bg-[linear-gradient(110deg,#071A43_0%,#1746A2_50%,#071A43_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_25px,rgba(168,203,255,0.12)_25px,rgba(168,203,255,0.12)_26px)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_center,rgba(61,117,216,0.30),transparent_70%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#A8CBFF]/60 to-transparent"
        />

        <div className="relative mx-auto hidden h-[54px] max-w-[1600px] items-center justify-center gap-5 px-4 lg:flex xl:gap-7 xl:px-8">
          <PromoContent />
        </div>

        <div className="relative flex h-[48px] items-center lg:hidden">
          <div className="min-w-0 flex-1 overflow-hidden">
            <Marquee speed={35} gradient={false} pauseOnHover autoFill>
              <div className="flex items-center gap-5 px-4">
                <PromoContent />

                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rotate-45 bg-[#A8CBFF]/70"
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
