"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { formatCartMoney, useCart } from "@/context/CartContext";
import CartLineItem from "./CartLineItem";
import CartSuggestions from "./CartSuggestions";
import FreeShippingProgress from "./FreeShippingProgress";

export default function CartDrawer() {
  const { isOpen, closeCart, items, itemCount, subtotal, hydrated } = useCart();
  const closeRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeCart();
      if (event.key !== "Tab") return;
      const focusables = [
        ...(dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]',
        ) || []),
      ];
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, closeCart]);

  if (!hydrated) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] ${isOpen ? "visible" : "pointer-events-none invisible"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeCart}
        aria-label="Close cart"
        className={`absolute inset-0 cursor-default bg-[#08162b]/55 backdrop-blur-[3px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`absolute inset-y-0 right-0 flex w-full max-w-[600px] flex-col bg-white shadow-[-24px_0_80px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-[#e8edf4] px-5 py-4 sm:px-6">
          <div>
            <h2
              id="cart-drawer-title"
              className="font-heading text-[23px] font-medium tracking-tight text-[#0b1b3f]"
            >
              Research cart
            </h2>
            <p className="mt-0.5 text-xs text-[#8292a6]">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            type="button"
            ref={closeRef}
            onClick={closeCart}
            aria-label="Close cart drawer"
            className="grid size-10 place-items-center rounded-full text-[#0b1b3f] transition-colors hover:bg-[#edf4fc]"
          >
            <X size={21} />
          </button>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[170px_minmax(0,1fr)]">
          {/* Independent scrollable suggestion rail, inspired by the reference. */}
          <aside
            aria-label="Also available"
            className="hidden min-h-0 overflow-y-auto border-r border-[#e9eff5] p-3.5 lg:block"
          >
            <p className="mb-3 px-1 text-sm font-semibold text-[#0b1b3f]">
              Also available
            </p>
            <CartSuggestions />
          </aside>

          <div className="flex min-h-0 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-3.5 pt-3 pb-6 sm:px-5">
              <FreeShippingProgress compact />
              {!items.length ? (
                <div className="flex min-h-56 flex-col items-center justify-center px-2 text-center">
                  <h3 className="font-heading mt-4 text-lg font-medium">
                    Your cart is empty
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-[#788ca5]">
                    Explore the collection and choose a research compound to get
                    started.
                  </p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="group relative mt-5 overflow-hidden rounded-full bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_20px_rgba(7,26,67,0.25)]"
                  >
                    <span className="bg-primary-dark absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10">Continue shopping</span>
                  </button>
                </div>
              ) : (
                <div className="mt-2">
                  {items.map((item) => (
                    <CartLineItem
                      key={item.key}
                      item={item}
                      onNavigate={closeCart}
                    />
                  ))}
                </div>
              )}
            </div>

            <footer className="shrink-0 border-t border-[#e6edf5] bg-white px-3.5 py-4 shadow-[0_-12px_24px_rgba(10,30,60,0.04)] sm:px-5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#0b1b3f]">
                  Total before shipping & tax
                </span>
                <span className="font-heading text-lg font-bold text-[#0b1b3f]">
                  {formatCartMoney(subtotal)}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-[0.8fr_1.2fr] gap-2.5">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="group border-primary/20 text-primary hover:border-secondary hover:bg-secondary/5 flex h-12 min-w-0 items-center justify-center gap-2 rounded-full border bg-white px-3 font-sans text-[12px] font-bold whitespace-nowrap transition-all duration-300 active:scale-[0.98]"
                >
                  View Cart
                  <ArrowRight
                    size={15}
                    className="text-secondary-dark shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="group border-secondary/30 hover:border-secondary relative flex h-12 min-w-0 items-center justify-center gap-2 overflow-hidden rounded-full border bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-3 font-sans text-[12px] font-bold whitespace-nowrap text-white shadow-[0_6px_18px_rgba(7,26,67,0.15)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(7,26,67,0.25)] active:scale-[0.98]"
                >
                  <span className="bg-primary-dark absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 whitespace-nowrap">
                    Proceed to Checkout
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-accent-light relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </aside>
    </div>
  );
}
