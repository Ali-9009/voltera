"use client";

import { Truck, Check, Sparkles } from "lucide-react";

import { CART_SETTINGS, formatCartMoney, useCart } from "@/context/CartContext";

export default function FreeShippingProgress({ compact = false }) {
  const { remaining, freeShippingProgress, qualifiesForFreeShipping } =
    useCart();

  const progress = Math.max(0, Math.min(100, freeShippingProgress));

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[18px] border border-[#C9953D]/20 bg-[linear-gradient(125deg,var(--navy-deep)_0%,var(--navy)_55%,var(--navy-soft)_100%)] text-white shadow-[0_8px_25px_rgba(1,17,59,0.12)] ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full border border-[#E8C77B]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-6 size-24 rounded-full border border-[#E8C77B]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C77B]/60 to-transparent"
      />

      <div className="relative z-10 flex items-start gap-3">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
            qualifiesForFreeShipping
              ? "border-[#E8C77B]/40 bg-[#C9953D]/20 text-[#E8C77B]"
              : "border-white/15 bg-white/10 text-[#E8C77B]"
          }`}
        >
          {qualifiesForFreeShipping ? (
            <Check size={19} strokeWidth={2.2} />
          ) : (
            <Truck size={19} strokeWidth={1.8} />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-sans text-[12px] leading-[1.7] font-semibold text-white sm:text-[13px]">
            {qualifiesForFreeShipping ? (
              <span className="flex flex-wrap items-center gap-1.5">
                You've unlocked free shipping!
                <Sparkles
                  size={15}
                  className="text-[#E8C77B]"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <>
                You're{" "}
                <strong className="font-bold text-[#E8C77B]">
                  {formatCartMoney(remaining)}
                </strong>{" "}
                away from free shipping
              </>
            )}
          </p>

          <div
            role="progressbar"
            aria-label="Free shipping progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-3 h-[7px] overflow-hidden rounded-full bg-white/15"
          >
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#C9953D_0%,#D9AA57_55%,#E8C77B_100%)] transition-[width] duration-700 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
            <p className="font-sans text-[11px] leading-relaxed text-white/65 sm:text-[12px]">
              Free shipping over{" "}
              <span className="font-semibold text-white/90">
                {formatCartMoney(CART_SETTINGS.freeShippingThreshold)}
              </span>{" "}
              · Before taxes
            </p>

            <span className="font-sans text-[11px] font-bold text-[#E8C77B]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
