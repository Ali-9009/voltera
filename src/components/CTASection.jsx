"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCutout } from "@/data/cutouts";

export default function CTASection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // The newsletter popup collects consent and sends the request.
    window.dispatchEvent(
      new CustomEvent("newsletter:open", {
        detail: { email: new FormData(event.currentTarget).get("email") },
      }),
    );
  };

  return (
    <section
      aria-labelledby="research-cta-heading"
      className="bg-white px-4 pt-12 pb-12 sm:px-6 md:pt-16 md:pb-16 lg:px-8"
    >
      <div className="cta-band relative mx-auto max-w-7xl overflow-hidden rounded-[24px] px-6 pt-12 pb-28 sm:pt-16 sm:pb-32">
        <div className="cta-vial cta-vial--left" aria-hidden="true">
          <Image
            src={getCutout("vls-3rt")}
            alt=""
            width={444}
            height={916}
            sizes="150px"
          />
        </div>
        <div className="cta-vial cta-vial--right" aria-hidden="true">
          <Image
            src={getCutout("vls-2trz")}
            alt=""
            width={444}
            height={916}
            sizes="150px"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[700px] text-center">
          <h2
            id="research-cta-heading"
            className="font-heading text-primary text-[clamp(22px,2.8vw,38px)] leading-[1.35] font-semibold tracking-[-0.02em] text-balance"
          >
            All the research peptides your lab needs, with the{" "}
            <span className="cta-mark">documentation</span> and batch
            verification at your fingertips.
          </h2>

          <Link
            href="/shop"
            className="hero-btn hero-btn-navy group mt-8 inline-flex h-14 items-center gap-3 rounded-full px-8 text-base font-bold"
          >
            Explore Collection
            <ArrowRight
              size={19}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="cta-notices relative z-10 mx-auto -mt-14 grid w-[calc(100%-24px)] max-w-5xl gap-5 rounded-[20px] px-4 py-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div>
          <h3 className="font-heading text-primary text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            Lab notices from Voltera Sciences
          </h3>
          <p className="text-primary-dark/80 mt-1.5 text-[15px] leading-relaxed">
            New compounds, batch certificates and restock notices for your lab.
            Unsubscribe anytime.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="cta-form flex items-center gap-2 rounded-full bg-white p-1.5"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="Enter your email"
            className="text-primary placeholder:text-primary/60 h-11 w-0 min-w-0 flex-1 bg-transparent px-3 text-base sm:px-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-light h-11 shrink-0 rounded-full px-4 text-sm font-bold text-white sm:px-7"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
