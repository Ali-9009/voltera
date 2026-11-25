"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Truck, Wallet, Zap } from "lucide-react";
import { SALE_ENDS } from "@/data/sale";

const benefits = [
  {
    title: "Extra 5%",
    description: "With Venmo, Cash App or Zelle",
    icon: Wallet,
  },
  { title: "$150+", description: "Free ground shipping", icon: Truck },
  { title: "$250+", description: "Free two-day shipping", icon: Zap },
];

export default function AnnouncementBar() {
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const check = () => setEnded(Date.now() >= SALE_ENDS);
    check();
    const timer = setInterval(check, 1000);
    return () => clearInterval(timer);
  }, []);

  if (ended) return null;

  return (
    <aside
      aria-label="Black Friday sale"
      className="sale-bar relative z-40 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3.5 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
        <div className="min-w-0 lg:max-w-[25rem]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <p className="sale-bar-badge inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.12em] text-[var(--navy)] uppercase">
              <Sparkles size={14} aria-hidden="true" />
              Black Friday
            </p>
            <time
              dateTime={new Date(SALE_ENDS).toISOString()}
              className="text-xs font-semibold whitespace-nowrap text-[var(--gold-light)]"
            >
              Ends Nov 30 · 11:59 PM PST
            </time>
          </div>
          <p className="font-heading mt-2 text-[26px] leading-[1.15] font-bold tracking-[-0.03em] whitespace-nowrap xl:text-[30px]">
            Buy 1, get 1 <span className="sale-bar-free">free.</span>
          </p>
          <p className="mt-1 text-xs leading-snug text-white/80 xl:text-[13px]">
            Mix and match. The lowest-priced item in each pair is free. Bac
            Water is excluded.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:gap-5">
          <dl className="sale-bar-steps grid flex-1 grid-cols-3 gap-2 lg:flex lg:gap-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="sale-bar-step relative flex min-w-0 flex-col items-center gap-1.5 rounded-xl px-1.5 py-2.5 text-center xl:flex-row xl:gap-2.5 xl:px-3 xl:text-left"
              >
                <span
                  aria-hidden="true"
                  className="sale-bar-icon grid size-8 shrink-0 place-items-center rounded-full xl:size-9"
                >
                  <Icon size={17} />
                </span>
                <div className="min-w-0 xl:max-w-[7.2rem]">
                  <dt className="font-heading text-base leading-tight font-bold whitespace-nowrap xl:text-lg">
                    {title}
                  </dt>
                  <dd className="mt-0.5 text-[11px] leading-tight text-white/80 xl:text-xs">
                    {description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="flex shrink-0 items-center gap-5 md:flex-col md:gap-0">
            <Link
              href="/shop"
              className="sale-bar-cta inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold whitespace-nowrap text-[var(--navy)] md:flex-none"
            >
              Shop the sale
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
