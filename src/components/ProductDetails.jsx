"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
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

      <div className="relative h-[350px] w-full overflow-hidden rounded-[26px] bg-[#EAF4F7] sm:h-130 lg:h-160">
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
              className={`relative h-[76px] w-[76px] overflow-hidden rounded-xl border-2 bg-[#F5FAFC] transition-colors ${
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
  return (
    <section aria-labelledby="packs-title">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-secondary text-[11px] font-semibold tracking-[0.12em] uppercase">
            More bottles. More savings.
          </p>
          <h2
            id="packs-title"
            className="font-heading mt-1 text-[22px] font-medium tracking-tight text-[#29232D]"
          >
            Bundle & Save
          </h2>
        </div>
        <span className="bg-primary rounded-full px-3 py-1.5 text-[11px] font-semibold text-white">
          UP TO 20% OFF
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-4">
        {PACK_OPTIONS.map((pack) => {
          const selected = selectedPack === pack.quantity;
          const unavailable = pack.quantity > stock;
          const bottleCount = pack.quantity === 2 ? 2 : 3;
          const total = getPackPrice(
            price,
            pack.quantity,
            pack.discountPercent,
          );

          return (
            <button
              key={pack.quantity}
              type="button"
              disabled={unavailable}
              aria-pressed={selected}
              onClick={() => setSelectedPack(selected ? null : pack.quantity)}
              className={`group flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3 ${
                selected
                  ? "border-primary bg-primary-soft"
                  : "hover:border-primary/40 border-[#EAE3EB] bg-white"
              }`}
            >
              <div className="relative h-15 w-[85px] shrink-0 sm:h-16 sm:w-[100px]">
                {Array.from({ length: bottleCount }).map((_, index) => {
                  const bottleWidth = 38;
                  const bottleHeight = 75;
                  const stepX = 17;
                  const groupWidth = bottleWidth + (bottleCount - 1) * stepX;

                  return (
                    <div
                      key={index}
                      className="absolute bottom-0"
                      style={{
                        width: `${bottleWidth * 0.8}px`,
                        height: `${bottleHeight * 0.8}px`,
                        left: `calc(50% - ${groupWidth / 2}px + ${index * stepX}px)`,
                        zIndex: bottleCount - index,
                      }}
                    >
                      <Image
                        src="/pngs/quick-view.png"
                        alt=""
                        fill
                        sizes="38px"
                        className="object-contain drop-shadow-[0_3px_3px_rgba(45,15,55,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex min-w-0 flex-col items-center gap-1">
                <p className="font-heading text-primary text-sm leading-tight font-semibold whitespace-nowrap">
                  {pack.label}
                </p>
                <p className="text-xs font-semibold whitespace-nowrap text-emerald-600">
                  {pack.discountPercent}% OFF
                </p>
              </div>
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
      <section className="px-4 pt-6 pb-12 sm:px-6 lg:px-8 lg:pt-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10">
            {/* PRODUCT GALLERY */}
            <div className="min-w-0 lg:sticky lg:top-[110px] lg:self-start">
              <div>
                <Gallery product={product} />
              </div>
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="min-w-0">
              {/* CATEGORY */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-secondary-dark text-xs font-semibold tracking-[0.18em] uppercase">
                  {product.category || "Research Compound"}
                </span>
              </div>

              {/* NAME AND PRICE */}
              <header>
                <h1 className="font-heading text-primary text-[clamp(28px,3.2vw,45px)] leading-[1.12] tracking-[-0.025em]">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap items-end gap-3">
                  <p className="font-heading text-primary text-[clamp(20px,2vw,28px)] leading-none">
                    {hasPrice ? money(totalPrice) : "Unavailable"}
                  </p>
                </div>

                <p className="text-muted mt-4 max-w-xl font-sans text-[13px] leading-[1.8]">
                  {product.description ||
                    `${product.name} is intended for appropriate scientific and laboratory research.`}
                </p>
              </header>

              {/* PRODUCT INFORMATION TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="border-primary/15 text-primary inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-semibold">
                  <FileCheck2 size={16} className="text-secondary-dark" />
                  Research Use Only
                </span>

                <span className="border-primary/15 text-primary inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-semibold">
                  <Package size={16} className="text-secondary-dark" />
                  Secure Packaging
                </span>

                <span className="border-primary/15 text-primary inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-semibold">
                  <Truck size={16} className="text-secondary-dark" />
                  Shipping at Checkout
                </span>
              </div>

              {/* STRENGTH */}
              <div className="border-primary/10 mt-6 border-t pt-5">
                <Strengths
                  variants={variants}
                  index={variantIndex}
                  setIndex={changeVariant}
                />
              </div>

              {/* BUNDLE OPTIONS */}
              <div className="border-primary/10 mt-6 rounded-[18px] border bg-[#FAFBFE] p-4 sm:p-5">
                <Packs
                  product={product}
                  price={unitPrice}
                  selectedPack={selectedPack}
                  setSelectedPack={changePack}
                  stock={variant?.inStock === false ? 0 : stock}
                />
              </div>

              {/* QUANTITY + ADD TO CART */}
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
                    className="group border-secondary/30 hover:border-secondary relative flex h-10 min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden rounded-full border bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-3 font-sans text-[12px] font-semibold whitespace-nowrap text-white shadow-[0_8px_20px_rgba(7,26,67,0.14)] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(7,26,67,0.22)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:h-[52px] sm:px-4 sm:text-[13px]"
                  >
                    <span className="bg-primary-dark absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-disabled:opacity-0" />

                    <ShoppingBag size={17} className="relative z-10 shrink-0" />

                    <span className="relative z-10">
                      {canAdd ? "Add to Cart" : "Unavailable"}
                    </span>
                  </button>
                </div>

                {cartMessage && (
                  <p
                    role="status"
                    className="border-primary/10 bg-primary-soft text-primary mt-3 rounded-xl border px-4 py-3 text-[12px] font-semibold"
                  >
                    {cartMessage}
                  </p>
                )}
              </div>

              {/* QUICK SPECIFICATIONS */}
              <section
                aria-label="Product specifications"
                className="border-primary/10 mt-6 overflow-hidden rounded-[16px] border bg-white"
              >
                <div className="border-primary/10 flex items-center justify-between border-b bg-[#FAFBFE] px-4 py-3">
                  <h2 className="font-heading text-primary text-[14px]">
                    Product Specifications
                  </h2>

                  <FileCheck2 size={17} className="text-secondary-dark" />
                </div>

                <dl className="divide-primary/10 divide-y px-4">
                  {specificationRows.slice(0, 5).map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[110px_minmax(0,1fr)] gap-3 py-3 sm:grid-cols-[145px_minmax(0,1fr)]"
                    >
                      <dt className="text-muted text-sm">{row.label}</dt>

                      <dd className="text-primary min-w-0 text-right text-sm break-words">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>

          {/* LOWER PRODUCT SECTION */}
          <div className="border-primary/10 mt-12 border-t pt-10 lg:mt-16">
            <ProductResearchSection
              product={product}
              specificationRows={specificationRows}
              certificatePdf={certificatePdf}
            />

            {/* <div className="mt-6">
              <Assurance product={product} />
            </div> */}
          </div>
        </div>
      </section>

      {/* EXISTING PRODUCT SLIDER */}
      <CardSlider />

      {/* EXISTING MOBILE STICKY CART */}
      <div
        className={`border-primary/10 fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-8px_30px_rgba(7,26,67,0.08)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          showStickyCart
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-muted truncate text-[11px]">
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
            className="group border-secondary/30 relative flex h-12 items-center gap-2 overflow-hidden rounded-full border bg-[linear-gradient(135deg,#1746A2_0%,#071A43_60%,#030D27_100%)] px-4 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 sm:px-5"
          >
            <span className="bg-primary-dark absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-disabled:opacity-0" />

            <ShoppingBag size={17} className="relative z-10" />

            <span className="relative z-10">Add to Cart</span>

            <ArrowUpRight size={16} className="relative z-10" />
          </button>
        </div>
      </div>
    </main>
  );
}
