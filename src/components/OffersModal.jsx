"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { SALE_ENDS } from "@/data/sale";

const offers = [
  {
    term: "Buy 1, get 1 free",
    text: "Add 2 to your cart, get 1 free. Add 4, get 2 free. Mix and match, lowest priced items are free. Bac Water is excluded from BOGO.",
  },
  {
    term: "An extra 5% off at checkout",
    text: "Pay with Venmo, Cash App or Zelle to save another 5% on your merchandise balance after discounts.",
  },
  {
    term: "Shipping rewards",
    text: "Free ground shipping at $150+. Free two-day shipping at $250+.",
  },
  {
    term: "Savings cap",
    text: "BOGO + coupon savings are capped at 50%.",
  },
];

export default function OffersModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function closeDialog() {
    dialogRef.current.close();
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="black-friday-title"
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
      className="text-primary backdrop:bg-primary-dark/65 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-2xl bg-white p-0"
    >
      <div>
        <header className="border-border bg-primary-soft relative border-b p-5 sm:p-7">
          <button
            type="button"
            onClick={closeDialog}
            aria-label="Close offers"
            className="text-primary absolute top-3 right-3 grid size-11 cursor-pointer place-items-center rounded-lg transition-colors hover:bg-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <h2
            id="black-friday-title"
            className="font-heading pr-10 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Black Friday offers
          </h2>
          <time
            dateTime={new Date(SALE_ENDS).toISOString()}
            className="text-primary/80 mt-2 block text-sm"
          >
            Ends Nov 30 · 11:59 PM PST
          </time>
        </header>

        <div className="p-5 sm:p-7">
          <dl className="divide-border divide-y">
            {offers.map(({ term, text }) => (
              <div key={term} className="py-3 first:pt-0">
                <dt className="font-heading text-base font-semibold">{term}</dt>
                <dd className="text-primary/85 mt-1 text-sm leading-relaxed">
                  {text}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/shop"
            onClick={closeDialog}
            className="navy-cta mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-bold text-white transition-colors"
          >
            Shop the sale
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <p className="text-primary/75 mt-4 text-xs">
            For laboratory research use only.
          </p>
        </div>
      </div>
    </dialog>
  );
}
