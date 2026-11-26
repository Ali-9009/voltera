"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2, X } from "lucide-react";
import { formatCartMoney, useCart } from "@/context/CartContext";
import CartLineItem from "./CartLineItem";
import CartSuggestions from "./CartSuggestions";
import FreeShippingProgress from "./FreeShippingProgress";

export default function CartDrawer() {
  const { isOpen, closeCart, clearCart, items, itemCount, subtotal, hydrated } =
    useCart();

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
      ].filter((element) => element.getClientRects().length > 0);

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
      className={`fixed inset-0 z-[200] ${
        isOpen ? "visible" : "pointer-events-none invisible"
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <button
        type="button"
        tabIndex={-1}
        onClick={closeCart}
        aria-label="Close cart"
        className={`bg-primary-dark/55 absolute inset-0 cursor-default backdrop-blur-[3px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`absolute inset-y-0 right-0 flex w-full max-w-[600px] flex-col bg-white shadow-[-24px_0_80px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="border-border to-primary-soft/60 flex shrink-0 items-center justify-between gap-3 border-b bg-linear-to-r from-white px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="border-secondary/25 bg-secondary/10 text-secondary-dark flex size-10 shrink-0 items-center justify-center rounded-xl border sm:size-12">
              <ShoppingBag size={23} strokeWidth={1.7} />
            </span>

            <div className="min-w-0">
              <h2
                id="cart-drawer-title"
                className="font-heading text-primary text-[17px] leading-tight tracking-tight sm:text-[23px]"
              >
                Research Cart
              </h2>

              <p className="text-muted mt-1 font-sans text-[10px] sm:text-xs">
                {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {items.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    closeRef.current?.focus();
                    clearCart();
                  }}
                  aria-label="Clear all cart items"
                  className="group border-primary/10 text-muted inline-flex h-8 items-center justify-center gap-1.5 rounded-full border bg-white px-2.5 font-sans text-[10px] font-semibold whitespace-nowrap transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:h-9 sm:px-3 sm:text-[11px]"
                >
                  <Trash2
                    size={14}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  Clear Cart
                </button>

                <span
                  aria-hidden="true"
                  className="bg-primary/10 hidden h-6 w-px sm:block"
                />
              </>
            )}

            <button
              ref={closeRef}
              type="button"
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="border-primary/10 bg-primary-soft text-primary hover:border-secondary/30 hover:bg-primary flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:rotate-90 hover:text-white sm:size-10"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[170px_minmax(0,1fr)]">
          <aside
            aria-label="Recommended research compounds"
            className="border-border from-primary-soft/70 hidden min-h-0 overflow-y-auto border-r bg-linear-to-b to-white p-3.5 lg:block"
          >
            <div className="mb-4 px-1">
              <h3 className="font-heading text-primary mt-1.5 text-[13px] leading-tight">
                You May Also Like
              </h3>

              <span
                aria-hidden="true"
                className="from-secondary-dark via-accent-light to-secondary-dark mt-3 block h-[2px] w-8 rounded-full bg-linear-to-r"
              />
            </div>

            <CartSuggestions />
          </aside>

          <div className="flex min-h-0 min-w-0 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto px-3.5 pt-3 pb-6 sm:px-5">
              <FreeShippingProgress compact />

              {!items.length ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center px-3 text-center">
                  <h3 className="font-heading text-primary mt-6 text-lg">
                    Your Cart Is Empty
                  </h3>

                  <p className="text-muted mt-2 max-w-xs font-sans text-[13px] leading-[1.8]">
                    Discover our collection of premium research compounds and
                    find the right products for your next project.
                  </p>

                  <button
                    type="button"
                    onClick={closeCart}
                    className="btn-primary mt-5 h-11 px-6 text-[13px]"
                  >
                    Continue Shopping
                    <ArrowRight size={17} strokeWidth={1.8} />
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

            {items.length > 0 && (
              <footer className="border-border shrink-0 border-t bg-white px-3.5 py-4 shadow-[0_-12px_24px_rgba(1,17,59,0.04)] sm:px-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-primary font-sans text-[13px] font-bold">
                      Cart Subtotal
                    </span>

                    <p className="text-muted mt-1 font-sans text-[10px]">
                      Shipping & taxes calculated at checkout.
                    </p>
                  </div>

                  <span className="font-heading text-primary text-[21px]">
                    {formatCartMoney(subtotal)}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="via-secondary/40 my-4 h-px bg-linear-to-r from-transparent to-transparent"
                />

                <div className="grid grid-cols-[0.8fr_1.2fr] gap-2.5">
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
                    href="/cart"
                    onClick={closeCart}
                    className="btn-primary h-12 min-w-0 gap-2 px-3 text-[12px] whitespace-nowrap"
                  >
                    Checkout
                    <ArrowRight size={16} strokeWidth={1.8} />
                  </Link>
                </div>
              </footer>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
