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
      className="group border-secondary/50 from-primary-light via-accent to-primary-light shadow-primary/20 hover:border-accent-light hover:shadow-primary/30 fixed right-5 bottom-[calc(1.25rem+var(--sticky-cart-offset,0px))] isolate z-40 flex size-15 items-center justify-center rounded-full border bg-linear-to-br text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 sm:right-7 sm:bottom-[calc(1.75rem+var(--sticky-cart-offset,0px))] lg:bottom-7"
    >
      <span
        aria-hidden="true"
        className="from-accent via-primary to-accent pointer-events-none absolute inset-0 -z-10 rounded-full bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="border-accent-light/30 group-hover:border-accent-light/70 pointer-events-none absolute inset-[4px] rounded-full border transition-colors duration-300"
      />

      <ShoppingBag
        size={25}
        strokeWidth={1.8}
        className="text-accent-light relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      {cartCount > 0 && (
        <span className="from-secondary-dark via-accent-light to-secondary-dark text-primary-dark shadow-primary/20 absolute -top-1.5 -right-1.5 z-20 flex h-[23px] min-w-[23px] items-center justify-center rounded-full border-2 border-white bg-linear-to-r px-1 font-sans text-[10px] font-extrabold shadow-md">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </button>
  );
}
