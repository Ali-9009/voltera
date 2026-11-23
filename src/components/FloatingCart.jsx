"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { openCart, itemCount, hydrated } = useCart();

  const cartCount = hydrated ? itemCount : 0;

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open shopping cart, ${cartCount} items`}
      title="View Cart"
      className="group fixed right-5 bottom-5 z-40 flex h-15 w-15 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(135deg,#1B2030_0%,#111523_45%,#030B1D_100%)] text-white shadow-[0_8px_25px_rgba(17,21,35,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_32px_rgba(17,21,35,0.35)] active:scale-95 sm:right-7 sm:bottom-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[4px] rounded-full border border-white/10"
      />

      <ShoppingBag
        size={25}
        strokeWidth={1.8}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      {cartCount > 0 && (
        <span className="bg-primary absolute -top-1.5 -right-1.5 z-20 flex h-[22px] min-w-[22px] items-center justify-center rounded-full border-2 border-white px-1 font-sans text-[10px] font-bold text-white shadow-[0_3px_10px_rgba(17,21,35,0.2)]">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </button>
  );
}
