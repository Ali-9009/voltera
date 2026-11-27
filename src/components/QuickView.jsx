"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { getCutout } from "@/data/cutouts";
import {
  ArrowRight,
  Check,
  FlaskConical,
  Minus,
  Plus,
  ShoppingBag,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  PACK_OPTIONS,
  getPackPrice,
  formatMoney,
} from "@/data/product-detail-config";

export default function QuickView({ product, onClose }) {
  const { addItem } = useCart();
  const [cartError, setCartError] = useState("");
  const titleId = useId();
  const [selectedVariant, setSelectedVariant] = useState(
    product.defaultVariant ?? 0,
  );
  const [selectedPack, setSelectedPack] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const variant = product.variants[selectedVariant];

  const pack = PACK_OPTIONS.find((item) => item.quantity === selectedPack);
  const packSize = pack?.quantity ?? 1;

  const hasPrice = variant?.price != null;
  const unitPrice = hasPrice ? Number(variant.price) : 0;

  const bundleActive = Boolean(pack && quantity >= packSize);
  const discount = bundleActive ? pack.discountPercent : 0;

  const extraBottles = bundleActive ? quantity - packSize : 0;

  const totalPrice = bundleActive
    ? Math.round(
        (getPackPrice(unitPrice, packSize, discount) +
          extraBottles * unitPrice) *
          100,
      ) / 100
    : Math.round(quantity * unitPrice * 100) / 100;

  const stock =
    variant?.stock == null ? Infinity : Math.max(0, Number(variant.stock));

  const inStock = variant?.inStock !== false && stock > 0 && quantity <= stock;

  const canAdd =
    hasPrice && Number.isFinite(unitPrice) && unitPrice >= 0 && inStock;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    setQuantity(packSize);
  }, [selectedVariant, packSize]);

  const handleAddToCart = () => {
    if (!canAdd) return;

    try {
      setCartError("");

      if (bundleActive) {
        addItem(product, variant, 1, { packSize });

        if (extraBottles > 0) {
          addItem(product, variant, extraBottles, { packSize: 1 });
        }
      } else {
        addItem(product, variant, quantity, { packSize: 1 });
      }

      onClose();
    } catch (error) {
      setCartError(error?.message || "Unable to add product to cart.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--navy-deep)]/80 p-2 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[95dvh] w-full max-w-[1050px] overflow-y-auto rounded-[20px] bg-white p-2 shadow-[0_25px_90px_rgba(3,13,39,0.35)] sm:p-4 lg:rounded-[26px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="border-primary/10 text-primary hover:bg-primary absolute top-4 right-4 z-30 flex size-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 hover:text-white sm:size-10"
        >
          <X size={19} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="border-primary/10 relative flex min-h-60 flex-col overflow-hidden rounded-[18px] border bg-[linear-gradient(145deg,#F7F9FD_0%,#EEF4FC_100%)] sm:min-h-[380px] md:min-h-[520px]">
            <div className="relative flex flex-1 items-center justify-center">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <FlaskConical
                  size={85}
                  strokeWidth={1}
                  className="text-primary/30"
                />
              )}
            </div>

            <div className="absolute bottom-4 left-4 z-10">
              <span className="border-primary/10 text-primary inline-flex items-center gap-2 rounded-full border bg-white/95 px-3 py-2 font-sans text-[10px] font-semibold">
                <FlaskConical size={14} className="text-secondary-dark" />
                For Laboratory Research Only
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col px-3 py-4 sm:px-5 sm:py-2 md:px-6">
            <div className="pr-9">
              <h2
                id={titleId}
                className="font-heading text-primary text-[25px] leading-[1.15] font-semibold tracking-[-0.025em] sm:text-[28px]"
              >
                {product.name}
              </h2>

              <div
                aria-live="polite"
                className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2"
              >
                <span className="font-heading text-primary text-[22px] leading-none font-semibold sm:text-[25px]">
                  {hasPrice ? formatMoney(totalPrice) : "—"}
                </span>

                {hasPrice && bundleActive && discount > 0 && (
                  <>
                    <span className="text-muted font-sans text-sm font-medium line-through sm:text-base">
                      {formatMoney(unitPrice * quantity)}
                    </span>

                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-sans text-[10px] font-bold text-emerald-700 sm:text-[11px]">
                      Save {formatMoney(unitPrice * quantity - totalPrice)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="border-primary/10 mt-2 border-t pt-2">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-primary font-sans text-[11px] font-bold tracking-[0.12em] uppercase">
                  Select Strength
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {product.variants.map((item, index) => {
                  const selected = selectedVariant === index;

                  return (
                    <button
                      key={item.id || index}
                      type="button"
                      disabled={item.inStock === false}
                      onClick={() => setSelectedVariant(index)}
                      aria-pressed={selected}
                      className={`inline-flex min-h-10 items-center justify-center rounded-lg border px-4 font-sans text-[12px] font-bold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${
                        selected
                          ? "border-primary bg-primary text-white shadow-[0_5px_15px_rgba(1,17,59,0.12)]"
                          : "border-primary/15 text-primary hover:border-secondary hover:bg-secondary/5 bg-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-primary/10 mt-3 border-t pt-2">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-primary text-[16px]">
                    Bundle & Save
                  </h3>
                </div>

                <span className="border-secondary/25 bg-secondary/10 shrink-0 rounded-full border px-3 py-1.5 font-sans text-[10px] font-bold">
                  Up to{" "}
                  {Math.max(
                    ...PACK_OPTIONS.map((item) => item.discountPercent),
                  )}
                  % OFF
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-4 sm:gap-3">
                {PACK_OPTIONS.map((item, index) => {
                  const selected = selectedPack === item.quantity;

                  const discountedUnitPrice =
                    Math.round(
                      unitPrice * (1 - item.discountPercent / 100) * 100,
                    ) / 100;

                  const badges = ["POPULAR", "MOST POPULAR", "BEST VALUE"];

                  return (
                    <button
                      key={item.quantity}
                      type="button"
                      onClick={() =>
                        setSelectedPack(selected ? null : item.quantity)
                      }
                      aria-pressed={selected}
                      disabled={
                        variant?.inStock === false || item.quantity > stock
                      }
                      className={`group relative flex min-w-0 flex-col items-center rounded-[16px] border px-2 pt-4 pb-3 text-center transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3 ${
                        selected
                          ? "border-secondary bg-secondary/5 ring-secondary shadow-[0_4px_16px_rgba(201,149,61,0.12)] ring-1"
                          : "border-border hover:border-secondary/60 hover:bg-secondary/5 bg-white"
                      }`}
                    >
                      <span
                        className={`absolute -top-3 left-1/2 flex h-6 -translate-x-1/2 items-center justify-center rounded-full px-2.5 font-sans text-[8px] font-extrabold tracking-wide whitespace-nowrap shadow-sm sm:px-3 sm:text-[10px] ${
                          index === 0
                            ? "bg-accent text-white"
                            : index === 1
                              ? "from-secondary-dark via-accent-light to-secondary-dark text-primary-dark bg-linear-to-r"
                              : "bg-primary-dark text-white"
                        }`}
                      >
                        {badges[index] ?? "SAVE MORE"}
                      </span>

                      <span className="relative flex h-[70px] w-full items-center justify-center sm:h-[80px]">
                        {Array.from({
                          length: Math.min(item.quantity, 3),
                        }).map((_, index, bottles) => (
                          <span
                            key={index}
                            className="absolute bottom-0 h-full w-[32px] sm:w-[40px]"
                            style={{
                              left: `calc(50% + ${
                                (index - (bottles.length - 1) / 2) * 15
                              }px)`,
                              transform: "translateX(-50%)",
                              zIndex: bottles.length - index,
                            }}
                          >
                            <Image
                              src="/pngs/pack.png"
                              alt=""
                              fill
                              sizes="40px"
                              className="object-contain drop-shadow-[0_3px_4px_rgba(1,17,59,0.15)] transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                          </span>
                        ))}
                      </span>

                      <span className="text-primary mt-2 font-sans text-[13px] leading-tight font-extrabold uppercase sm:text-[17px]">
                        {item.label}
                      </span>

                      <span className="text-accent mt-2 font-sans text-[11px] font-extrabold tracking-wide sm:text-[13px]">
                        {item.discountPercent}% OFF
                      </span>

                      <span className="text-muted mt-1.5 font-sans text-[11px] font-medium sm:text-[12px]">
                        {formatMoney(discountedUnitPrice)} each
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-primary/10 mt-3 border-t pt-3">
              <div className="flex w-full items-center gap-3">
                <div className="border-primary/15 bg-primary-soft flex h-12 shrink-0 items-center rounded-full border px-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="text-primary flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white disabled:opacity-30"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-primary w-8 text-center font-sans text-[14px] font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
                    disabled={variant?.inStock === false || quantity >= stock}
                    aria-label="Increase quantity"
                    className="text-primary flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white disabled:opacity-30"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!canAdd}
                  className="group flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--navy-soft),var(--navy)_65%,var(--navy-deep))] px-3 font-sans text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(1,17,59,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {!inStock
                      ? "Out of Stock"
                      : !hasPrice
                        ? "Unavailable"
                        : `Add to Cart — ${formatMoney(totalPrice)}`}
                  </span>

                  <ArrowRight
                    size={16}
                    className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </button>
              </div>

              {cartError && (
                <p
                  role="alert"
                  className="mt-3 font-sans text-[12px] text-red-600"
                >
                  {cartError}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
