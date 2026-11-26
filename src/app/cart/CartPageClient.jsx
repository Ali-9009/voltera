"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
  LockKeyhole,
  Trash2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { formatCartMoney, useCart } from "@/context/CartContext";
import CartLineItem from "@/components/cart/CartLineItem";
import FreeShippingProgress from "@/components/cart/FreeShippingProgress";

function EmptyCart() {
  return (
    <div className="border-border via-primary-soft to-primary-light/15 flex min-h-[420px] flex-col items-center justify-center rounded-3xl border bg-linear-to-br from-white px-5 py-12 text-center sm:min-h-[480px]">
      <div className="relative mb-7">
        <span className="border-secondary/30 from-primary-light via-accent to-primary text-accent-light shadow-primary/15 flex size-24 items-center justify-center rounded-[26px] border bg-linear-to-br shadow-xl">
          <ShoppingBag size={42} strokeWidth={1.4} />
        </span>

        <span className="border-accent-light from-accent-light to-secondary-dark text-primary-dark absolute -top-2 -right-2 flex size-9 items-center justify-center rounded-full border bg-linear-to-br shadow-md">
          <Sparkles size={18} />
        </span>
      </div>

      <p className="text-secondary-dark mb-3 text-xs font-bold tracking-widest uppercase">
        Your Research Collection Awaits
      </p>

      <h2 className="font-heading text-primary text-[clamp(26px,4vw,36px)] leading-tight">
        Your Cart Is Empty<span className="text-secondary">.</span>
      </h2>

      <p className="text-muted mt-4 max-w-[400px] text-base leading-[1.8]">
        Your next discovery starts here. Explore our research collection and add
        products to your cart.
      </p>

      <Link href="/shop" className="btn-primary mt-7 h-12 gap-3 px-7 text-base">
        Explore Collection
        <ArrowUpRight size={19} />
      </Link>
    </div>
  );
}

export default function CartPageClient() {
  const { items, itemCount, subtotal, hydrated, clearCart } = useCart();

  const hasItems = hydrated && items.length > 0;

  const bundleSavings = items.reduce((total, item) => {
    const packSize = Number(item.packSize) || 1;
    const unitPrice = Number(item.unitPrice);

    if (!Number.isFinite(unitPrice)) return total;

    const regularPackPrice = unitPrice * packSize;
    const packPrice = Number(item.price) || 0;

    return total + Math.max(0, regularPackPrice - packPrice) * item.quantity;
  }, 0);

  return (
    <main className="bg-surface min-h-screen">
      <header className="relative isolate overflow-hidden border-b border-[#1746A2]/30 bg-[linear-gradient(115deg,#030D27_0%,#071A43_50%,#10265B_100%)] px-4 pt-28 pb-8 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(23,70,162,0.20),transparent_60%)]" />

          <ShoppingBag
            strokeWidth={0.7}
            className="absolute -right-10 -bottom-20 size-72 rotate-[-15deg] text-[#A8CBFF]/10 sm:right-12 sm:size-96"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-white/80"
          >
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#A8CBFF]"
            >
              Home
            </Link>

            <ChevronRight
              size={15}
              aria-hidden="true"
              className="text-[#A8CBFF]/70"
            />

            <span aria-current="page" className="font-semibold text-[#B7D4FF]">
              Shopping Cart
            </span>
          </nav>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2.5 font-sans text-xs font-bold tracking-[0.15em] text-[#A8CBFF] uppercase">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-[#A8CBFF]"
                />
                Voltera Sciences
              </p>

              <h1 className="section-heading text-white!">
                Shopping Cart
                <span className="text-[#A8CBFF]">.</span>
              </h1>

              <p
                aria-live="polite"
                className="mt-4 font-sans text-base leading-[1.8] text-white/85 sm:text-[17px]"
              >
                {!hydrated
                  ? "Loading your cart..."
                  : itemCount === 0
                    ? "Your cart is currently empty."
                    : `${itemCount} ${
                        itemCount === 1 ? "bottle" : "bottles"
                      } in your cart`}
              </p>
            </div>

            <Link
              href="/shop"
              className="group inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-[#A8CBFF]/30 bg-white/[0.07] px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#A8CBFF]/70 hover:bg-white/15"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.8}
                className="text-[#A8CBFF] transition-transform duration-300 group-hover:-translate-x-1"
              />
              Continue Shopping
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[minmax(0,1fr)_390px] xl:gap-10">
          <section aria-labelledby="cart-items-heading" className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2
                id="cart-items-heading"
                className="font-heading text-primary text-xl sm:text-2xl"
              >
                Selected Products
              </h2>

              {hasItems && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </button>
              )}
            </div>

            {!hydrated ? (
              <div
                role="status"
                className="border-border text-muted flex min-h-[240px] items-center justify-center gap-3 rounded-2xl border bg-white text-base"
              >
                <span className="border-primary/15 border-t-primary size-5 animate-spin rounded-full border-2 motion-reduce:animate-none" />
                Loading your cart...
              </div>
            ) : hasItems ? (
              <div className="border-border overflow-hidden rounded-2xl border bg-white px-4 shadow-sm sm:px-6">
                {items.map((item) => (
                  <CartLineItem key={item.key} item={item} />
                ))}
              </div>
            ) : (
              <EmptyCart />
            )}
          </section>

          <aside
            aria-label="Order summary"
            className="min-w-0 lg:sticky lg:top-28"
          >
            <div className="border-primary/15 shadow-primary/5 overflow-hidden rounded-2xl border bg-white shadow-lg">
              <header className="border-secondary/30 from-primary-light via-accent to-primary relative border-b bg-linear-to-r px-5 py-6 sm:px-6">
                <div
                  aria-hidden="true"
                  className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 top-0 h-[3px] bg-linear-to-r"
                />

                <div className="flex items-center gap-3">
                  <span className="border-accent-light/30 text-accent-light flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white/10">
                    <ShoppingBag size={24} strokeWidth={1.6} />
                  </span>

                  <div>
                    <h2 className="font-heading text-xl text-white">
                      Order Summary
                    </h2>

                    <p className="mt-1 text-sm text-white/85">
                      Review products before payment
                    </p>
                  </div>
                </div>
              </header>

              <div className="space-y-6 p-5 sm:p-6">
                <FreeShippingProgress />

                <dl className="border-border space-y-4 border-b pb-6">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted text-base">Subtotal</dt>

                    <dd className="text-primary text-base font-bold">
                      {formatCartMoney(subtotal)}
                    </dd>
                  </div>

                  {bundleSavings > 0 && (
                    <div className="border-secondary/25 bg-secondary/10 flex items-center justify-between gap-3 rounded-xl border px-3 py-3">
                      <dt className="text-secondary-dark flex items-center gap-2 text-sm font-semibold">
                        <Sparkles size={17} />
                        Bundle Savings
                      </dt>

                      <dd className="text-secondary-dark text-sm font-bold">
                        -{formatCartMoney(bundleSavings)}
                      </dd>
                    </div>
                  )}

                  {["Shipping", "Taxes"].map((label) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4"
                    >
                      <dt className="text-muted text-[15px]">{label}</dt>

                      <dd className="text-muted text-right text-sm">
                        Calculated at checkout
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="border-primary/10 bg-primary-soft/60 flex items-center justify-between gap-4 rounded-xl border p-4">
                  <span className="font-heading text-primary text-lg">
                    Total
                  </span>

                  <strong className="font-heading text-primary text-[clamp(26px,3vw,32px)]">
                    {formatCartMoney(subtotal)}
                  </strong>
                </div>

                <Link
                  href={hasItems ? "/cart" : "/shop"}
                  className="btn-primary h-13 w-full gap-3 px-5 text-base"
                >
                  <LockKeyhole size={18} />

                  {hasItems ? "Proceed to Checkout" : "Explore Products"}

                  <ArrowUpRight size={19} />
                </Link>

                <p className="text-muted flex items-center justify-center gap-2 text-center text-xs font-medium sm:text-sm">
                  <LockKeyhole
                    size={15}
                    className="text-secondary-dark shrink-0"
                  />
                  Secure checkout · Research use only
                </p>
              </div>
            </div>

            <Link
              href="/shop"
              className="group text-primary hover:text-secondary-dark mt-5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
            >
              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
              />
              Continue Shopping
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
