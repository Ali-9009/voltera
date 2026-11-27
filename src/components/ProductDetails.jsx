"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { getCutout } from "@/data/cutouts";
import Link from "next/link";
import { ChevronDown, Download, ExternalLink, FileText } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  FileCheck2,
  FlaskConical,
  Headphones,
  LockKeyhole,
  Minus,
  Package,
  Plus,
  ShoppingBag,
  Truck,
  ZoomIn,
  X,
  ShieldCheck,
} from "lucide-react";
import {
  PACK_OPTIONS,
  getPackPrice,
  formatMoney,
} from "@/data/product-detail-config";

import { useCart } from "@/context/CartContext";
import CardSlider from "./CardSlider";
import ProductResearchSection from "./ProductResearchSection";

const money = (value) => formatMoney(Number(value) || 0);

function Gallery({ product }) {
  const images = useMemo(
    () => [
      ...new Set([product.image, ...(product.gallery || [])].filter(Boolean)),
    ],
    [product.image, product.gallery],
  );
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setActive(0);
    setZoom(false);
  }, [product.slug]);

  useEffect(() => {
    if (!zoom) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event) => event.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [zoom]);

  const current = images[active] || images[0];

  return (
    <div className="w-full min-w-0">
      {/* MAIN PRODUCT IMAGE */}

      <div className="relative h-[350px] w-full overflow-hidden rounded-[26px] bg-[var(--ivory)] sm:h-130 lg:h-160">
        {current ? (
          <Image
            key={current}
            src={current}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-fill transition-transform duration-700 ease-out hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FlaskConical size={80} className="text-primary/25" />
          </div>
        )}
      </div>

      {/* PRODUCT THUMBNAILS */}

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`View image ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className={`relative h-[76px] w-[76px] overflow-hidden rounded-xl border-2 bg-[var(--ivory)] transition-colors ${
                active === index
                  ? "border-primary"
                  : "hover:border-primary/30 border-transparent"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="76px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}

      {/* RESEARCH DISCLAIMER */}

      <p className="mt-4 flex items-center gap-2 text-[11px] text-[#6B7280]">
        <FlaskConical size={15} className="text-primary" />
        For laboratory research only
      </p>
    </div>
  );
}

function Strengths({ variants, index, setIndex }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#29232D]">
          Select Strength
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {variants.map((variant, i) => {
          const selected = i === index;
          const soldOut = variant.inStock === false;

          return (
            <button
              key={variant.id || i}
              type="button"
              disabled={soldOut}
              aria-pressed={selected}
              onClick={() => setIndex(i)}
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[12px] font-semibold transition-all duration-300 ${
                selected
                  ? "border-primary bg-primary text-white"
                  : "hover:border-primary hover:text-primary border-[#E8DCEA] bg-white text-[#514653]"
              } disabled:cursor-not-allowed disabled:opacity-40`}
            >
              {variant.label}
              {soldOut && (
                <span className="ml-1.5 text-[10px] font-normal">
                  (Sold out)
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Packs({ product, price, selectedPack, setSelectedPack, stock }) {
  const maxDiscount = Math.max(
    0,
    ...PACK_OPTIONS.map((pack) => pack.discountPercent),
  );

  const badges = ["POPULAR", "MOST POPULAR", "BEST VALUE"];

  return (
    <section aria-labelledby="packs-title">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-secondary-dark text-[11px] font-semibold tracking-[0.12em] uppercase">
            More bottles. More savings.
          </p>

          <h2
            id="packs-title"
            className="font-heading text-primary mt-1 text-[22px] font-medium tracking-tight"
          >
            Bundle & Save
          </h2>
        </div>

        <span className="bg-primary rounded-full px-3 py-1.5 text-[11px] font-semibold text-white">
          UP TO {maxDiscount}% OFF
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 pt-4 sm:gap-3">
        {PACK_OPTIONS.map((pack, index) => {
          const selected = selectedPack === pack.quantity;
          const unavailable = pack.quantity > stock;
          const bottleCount = Math.min(pack.quantity, 3);

          const discountedUnitPrice =
            Math.round(price * (1 - pack.discountPercent / 100) * 100) / 100;

          return (
            <button
              key={pack.quantity}
              type="button"
              disabled={unavailable}
              aria-pressed={selected}
              onClick={() => setSelectedPack(selected ? null : pack.quantity)}
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

              <span className="relative flex h-[60px] w-full items-center justify-center sm:h-[70px]">
                {Array.from({ length: bottleCount }).map((_, index) => (
                  <span
                    key={index}
                    className="absolute bottom-0 h-full w-[26px] sm:w-[34px]"
                    style={{
                      left: `calc(50% + ${
                        (index - (bottleCount - 1) / 2) * 13
                      }px)`,
                      transform: "translateX(-50%)",
                      zIndex: bottleCount - index,
                    }}
                  >
                    <Image
                      src="/pngs/pack.png"
                      alt=""
                      fill
                      sizes="34px"
                      className="object-contain opacity-90 blur-[0.3px] drop-shadow-[0_3px_4px_rgba(1,17,59,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </span>
                ))}
              </span>

              <span className="text-primary mt-2 font-sans text-[13px] leading-tight font-extrabold uppercase sm:text-[17px]">
                {pack.label}
              </span>

              <span className="text-accent mt-2 font-sans text-[11px] font-extrabold tracking-wide sm:text-[13px]">
                {pack.discountPercent}% OFF
              </span>

              <span className="text-muted mt-1.5 font-sans text-[11px] font-medium sm:text-[12px]">
                {formatMoney(discountedUnitPrice)} each
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Quantity({ value, onChange, max = 99 }) {
  return (
    <div className="flex h-10 w-[100px] items-center justify-between rounded-full border border-[#E6DCE8] bg-white px-1 sm:h-13 sm:w-[112px]">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= 1}
        onClick={() => onChange(Math.max(1, value - 1))}
        className="text-primary hover:bg-primary-soft grid size-7 shrink-0 place-items-center rounded-full transition-colors disabled:opacity-30 sm:size-8"
      >
        <Minus size={14} />
      </button>

      <span className="font-heading text-primary text-[13px] font-semibold">
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="text-primary hover:bg-primary-soft grid size-7 shrink-0 place-items-center rounded-full transition-colors disabled:opacity-30 sm:size-8"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

function Assurance({ product }) {
  const rows = [
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Carefully packed for delivery.",
    },
    {
      icon: Truck,
      title: "Reliable Shipping",
      description: "Options shown at checkout.",
    },
    {
      icon: FileCheck2,
      title: "Documentation",
      description: product.coa
        ? "Certificate available."
        : "Available on request.",
      href: product.coa || "/contact",
      external: Boolean(product.coa),
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "We're here to help.",
      href: "/contact",
    },
  ];

  return (
    <section aria-label="Product services" className="mt-5">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {rows.map((row) => {
          const Icon = row.icon;

          const content = (
            <div className="flex min-w-0 items-start gap-2.5">
              <span className="text-primary flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#D0EAF0] bg-white sm:size-9">
                <Icon size={17} strokeWidth={1.7} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-primary text-xs leading-5 font-semibold sm:text-sm">
                  {row.title}
                </h3>

                <p className="mt-0.5 text-[11px] leading-[1.5] text-[#68818D] sm:text-xs">
                  {row.description}
                </p>
              </div>
            </div>
          );

          const className =
            "block min-w-0 rounded-xl border border-[#D7EAF0] bg-[linear-gradient(135deg,#FFFFFF_0%,#EFF9FB_100%)] p-3 transition-colors duration-200 hover:border-[#B8DCE6] sm:p-3.5";

          if (row.href) {
            return row.external ? (
              <a
                key={row.title}
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                aria-label={row.title}
              >
                {content}
              </a>
            ) : (
              <Link
                key={row.title}
                href={row.href}
                className={className}
                aria-label={row.title}
              >
                {content}
              </Link>
            );
          }

          return (
            <article key={row.title} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProductAccordion({ title, children }) {
  return (
    <details className="group border-b border-[#EEE7EF]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="font-heading text-primary text-[16px] font-semibold sm:text-[17px]">
          {title}
        </span>

        <span className="text-primary bg-primary-soft flex size-9 shrink-0 items-center justify-center rounded-full">
          <ChevronDown
            size={18}
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </span>
      </summary>

      <div className="pb-6 text-sm leading-7 text-[#756B78]">{children}</div>
    </details>
  );
}

export default function ProductDetails({ product }) {
  const variants = product.variants || [];

  const [variantIndex, setVariantIndex] = useState(product.defaultVariant ?? 0);
  const [selectedPack, setSelectedPack] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  const addToCartRef = useRef(null);
  const [showStickyCart, setShowStickyCart] = useState(false);

  useEffect(() => {
    const button = addToCartRef.current;
    if (!button) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const passedButton = entry.boundingClientRect.bottom <= 0;
        setShowStickyCart(!entry.isIntersecting && passedButton);
      },
      { threshold: 0 },
    );

    observer.observe(button);

    return () => observer.disconnect();
  }, []);

  // ✅ ADD THIS NEW useEffect
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sticky-cart-offset",
      showStickyCart ? "70px" : "0px",
    );

    return () => {
      document.documentElement.style.removeProperty("--sticky-cart-offset");
    };
  }, [showStickyCart]);

  const { addItem } = useCart();

  useEffect(() => {
    setVariantIndex(product.defaultVariant ?? 0);
    setSelectedPack(null);
    setQuantity(1);
    setCartMessage("");
  }, [product.slug, product.defaultVariant]);

  useEffect(() => {
    if (!cartMessage) return;

    const id = setTimeout(() => setCartMessage(""), 3500);

    return () => clearTimeout(id);
  }, [cartMessage]);

  const variant = variants[variantIndex] || variants[0];

  const pack = PACK_OPTIONS.find((item) => item.quantity === selectedPack);
  const packSize = pack?.quantity ?? 1;

  const unitPrice = Number(variant?.price ?? 0);
  const hasPrice = variant?.price != null && Number.isFinite(unitPrice);

  const bundleActive = Boolean(pack && quantity >= packSize);
  const discountPercent = bundleActive ? pack.discountPercent : 0;

  const extraBottles = bundleActive ? quantity - packSize : 0;

  const totalPrice = bundleActive
    ? Math.round(
        (getPackPrice(unitPrice, packSize, discountPercent) +
          extraBottles * unitPrice) *
          100,
      ) / 100
    : Math.round(quantity * unitPrice * 100) / 100;

  const totalBottles = quantity;

  const stock =
    variant?.stock == null ? Infinity : Math.max(0, Number(variant.stock));

  const maxQuantity = Math.min(99, stock);

  const canAdd =
    hasPrice &&
    variant?.inStock !== false &&
    quantity >= 1 &&
    quantity <= maxQuantity;

  // Use product-specific specifications when available.
  // These fallback values are the specifications you supplied.
  // Replace them with the correct values for each product.
  const specifications = {
    casNumber: product.specifications?.casNumber ?? "137525-51-0",

    molecularWeight: product.specifications?.molecularWeight ?? "1419.5 g/mol",

    molecularFormula:
      product.specifications?.molecularFormula ?? "C62H98N16O22",

    strengths: product.specifications?.strengths ?? variant?.label ?? "10 MG",

    form: product.specifications?.form ?? "Lyophilised powder",

    container: product.specifications?.container ?? "Sealed glass vial",

    intendedUse:
      product.specifications?.intendedUse ?? "In-vitro research only",
  };

  const specificationRows = [
    {
      label: "CAS Number",
      value: specifications.casNumber,
    },
    {
      label: "Molecular Weight",
      value: specifications.molecularWeight,
    },
    {
      label: "Molecular Formula",
      value: specifications.molecularFormula,
    },
    {
      label: "Strengths",
      value: specifications.strengths,
    },
    {
      label: "Form",
      value: specifications.form,
    },
    {
      label: "Container",
      value: specifications.container,
    },
    {
      label: "Intended Use",
      value: specifications.intendedUse,
    },
  ];

  // Example:
  // coaPdf: "/certificates/product-coa.pdf"
  const certificatePdf = "/assets/certificate.pdf";

  const changeVariant = (index) => {
    setVariantIndex(index);
    setQuantity(selectedPack ?? 1);
  };

  const changePack = (size) => {
    setSelectedPack(size);
    setQuantity(size ?? 1);
  };
  const handleAddToCart = () => {
    if (!variant || !canAdd) {
      setCartMessage("Selected quantity is unavailable.");
      return;
    }

    try {
      if (bundleActive) {
        addItem(product, variant, 1, { packSize });

        if (extraBottles > 0) {
          addItem(product, variant, extraBottles, { packSize: 1 });
        }
      } else {
        addItem(product, variant, quantity, { packSize: 1 });
      }

      setCartMessage("");
    } catch (error) {
      setCartMessage(error?.message || "Unable to add product to cart.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 ">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10">
            <div className="min-w-0 lg:sticky lg:top-[110px] lg:self-start">
              <Gallery product={product} />
            </div>

            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="bg-secondary size-1.5 rounded-full" />

                <span className="text-secondary-dark font-sans text-[11px] font-bold tracking-[0.15em] uppercase">
                  {product.category || "Research Compound"}
                </span>
              </div>

              <header>
                <h1 className="font-heading text-primary text-[clamp(28px,3.2vw,45px)] leading-[1.12] font-semibold tracking-[-0.025em]">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap items-end gap-3">
                  <p className="font-heading text-primary text-[clamp(20px,2vw,28px)] leading-none font-semibold">
                    {hasPrice ? money(totalPrice) : "Unavailable"}
                  </p>
                </div>

                <p className="text-muted mt-4 max-w-xl font-sans text-[13px] leading-[1.8] sm:text-sm">
                  {product.description ||
                    `${product.name} is intended for appropriate scientific and laboratory research.`}
                </p>
              </header>

              <p className="hero-badge my-5 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-white">
                <span className="hero-badge-mark grid size-10 shrink-0 place-items-center rounded-full text-[var(--navy)]">
                  <FlaskConical size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="font-heading text-lg leading-none font-bold tracking-[-0.02em] sm:text-xl">
                  8x Tested
                </span>
                <span aria-hidden="true" className="h-5 w-px bg-white/30" />
                <span className="text-sm leading-none font-semibold text-[var(--gold-light)] sm:text-base">
                  For all batches
                </span>
              </p>

              <div className="mt-3 flex flex-nowrap items-center gap-1.5 sm:flex-wrap sm:gap-2">
                {[
                  {
                    icon: FlaskConical,
                    label: "PURITY > 99%",
                    style:
                      "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100",
                  },
                  {
                    icon: FileCheck2,
                    label: "Lot-linked COA",
                    style:
                      "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Research use only",
                    style:
                      "border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200",
                  },
                ].map(({ icon: Icon, label, style }) => (
                  <span
                    key={label}
                    className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-2 py-1.5 font-sans text-[11px] font-semibold whitespace-nowrap shadow-sm transition-colors duration-300 sm:px-3.5 sm:py-2 sm:text-[12px] ${style}`}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="hidden shrink-0 sm:block"
                    />

                    {label}
                  </span>
                ))}
              </div>

              <div className="border-primary/10 mt-6 border-t pt-5">
                <Strengths
                  variants={variants}
                  index={variantIndex}
                  setIndex={changeVariant}
                />
              </div>

              <div className="border-primary/10 from-surface to-primary-soft relative isolate mt-6 overflow-hidden rounded-[18px] border bg-linear-to-br via-white p-4 sm:p-5">
                <div
                  aria-hidden="true"
                  className="border-primary/5 bg-primary-light/5 pointer-events-none absolute -top-16 -right-16 -z-10 size-40 rotate-45 rounded-[28px] border"
                />

                <div
                  aria-hidden="true"
                  className="via-secondary/60 pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent"
                />

                <Packs
                  product={product}
                  price={unitPrice}
                  selectedPack={selectedPack}
                  setSelectedPack={changePack}
                  stock={variant?.inStock === false ? 0 : stock}
                />
              </div>

              <div className="mt-6">
                <div className="flex w-full min-w-0 items-center gap-2 sm:gap-3">
                  <div className="shrink-0">
                    <Quantity
                      value={quantity}
                      onChange={setQuantity}
                      max={maxQuantity}
                    />
                  </div>

                  <button
                    ref={addToCartRef}
                    type="button"
                    disabled={!canAdd}
                    onClick={handleAddToCart}
                    className="btn-primary h-10 min-w-0 flex-1 gap-2 px-3 text-[12px] whitespace-nowrap sm:h-[52px] sm:gap-3 sm:px-4 sm:text-[13px]"
                  >
                    <ShoppingBag size={17} strokeWidth={1.8} />

                    <span>{canAdd ? "Add to Cart" : "Unavailable"}</span>

                    {canAdd && (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-4 w-px shrink-0 bg-white/30"
                        />

                        <span className="font-bold tabular-nums">
                          {money(totalPrice)}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {cartMessage && (
                  <p
                    role="status"
                    className="border-primary/10 bg-primary-soft text-primary mt-3 rounded-xl border px-4 py-3 font-sans text-[12px] font-semibold"
                  >
                    {cartMessage}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-primary/10 mt-12 border-t pt-10 lg:mt-16">
            <ProductResearchSection
              product={product}
              specificationRows={specificationRows}
              certificatePdf={certificatePdf}
            />
          </div>
        </div>
      </section>

      <CardSlider
        currentProduct={product}
        title="Research"
        highlight="Compounds"
        description="Explore more compounds for your research."
      />

      <div
        className={`border-primary/10 fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-8px_30px_rgba(1,17,59,0.08)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          showStickyCart
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
        inert={!showStickyCart}
      >
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-muted truncate font-sans text-[11px]">
              {variant?.label} · {totalBottles} bottles
            </p>

            <p className="font-heading text-primary text-xl">
              {hasPrice ? money(totalPrice) : "Unavailable"}
            </p>
          </div>

          <button
            type="button"
            disabled={!canAdd}
            onClick={handleAddToCart}
            className="btn-primary h-12 shrink-0 gap-2 px-4 text-xs sm:gap-3 sm:px-5"
          >
            <ShoppingBag size={17} strokeWidth={1.8} />

            <span>{canAdd ? "Add to Cart" : "Unavailable"}</span>

            {canAdd && (
              <>
                <span
                  aria-hidden="true"
                  className="h-4 w-px shrink-0 bg-white/30"
                />

                <span className="font-bold tabular-nums">
                  {money(totalPrice)}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
