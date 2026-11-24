"use client";

import { useEffect } from "react";

const promotions = [
  {
    title: "Verified COAs",
    icon: "/icons/wired.json",
  },
  {
    title: "Batch Tested",
    icon: "/icons/sterility.json",
  },
  {
    title: "24/7 Support",
    icon: "/icons/support.json",
  },
  {
    title: "Same-Day Delivery",
    icon: "/icons/truck.json",
  },
];

function PromoItem({ promotion }) {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10">
      <div className="group flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#E8C77B]/30 bg-white/[0.07] transition-colors duration-300 group-hover:border-[#E8C77B]/60 group-hover:bg-white/10 sm:size-11">
          <lord-icon
            src={promotion.icon}
            trigger="loop(1500)"
            colors="primary:#E8C77B,secondary:#FFFFFF"
            stroke="regular"
            speed="0.8"
            className="h-7 w-7 sm:h-[34px] sm:w-[34px]"
            aria-hidden="true"
          />
        </span>

        <span className="font-sans text-[13px] font-bold tracking-[0.025em] whitespace-nowrap text-white sm:text-[15px] lg:text-[16px]">
          {promotion.title}
        </span>
      </div>

      <span aria-hidden="true" className="flex items-center gap-2">
        <span className="h-px w-5 bg-[#E8C77B]/25 sm:w-7" />

        <span className="size-1.5 rotate-45 border border-[#E8C77B]/70 bg-[#E8C77B]/20" />

        <span className="h-px w-5 bg-[#E8C77B]/25 sm:w-7" />
      </span>
    </div>
  );
}

export default function PromoMarquee() {
  useEffect(() => {
    let active = true;

    import("@lordicon/element").then(({ defineElement }) => {
      if (active && !customElements.get("lord-icon")) {
        defineElement();
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      aria-label="Voltera Sciences quality and service highlights"
      className="bg-brand-gradient border-accent-light/20 relative z-30 w-full overflow-hidden border-y py-3.5 sm:py-4"
    >
      <div
        aria-hidden="true"
        className="to-primary-dark/10 pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent"
      />

      <div
        aria-hidden="true"
        className="via-accent-light/60 pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent"
      />

      <div className="promo-marquee relative flex w-full items-center overflow-hidden">
        <div className="promo-marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              inert={copy === 1}
              className="flex shrink-0 items-center"
            >
              {promotions.map((promotion) => (
                <PromoItem
                  key={`${copy}-${promotion.title}`}
                  promotion={promotion}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
