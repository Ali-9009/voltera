"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  LoaderCircle,
  ShoppingCart,
  X,
} from "lucide-react";
import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";

function formatPrice(value) {
  if (value == null || !Number.isFinite(Number(value))) {
    return null;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

function getProductVariants(product) {
  if (Array.isArray(product.variants) && product.variants.length) {
    return product.variants.map((variant, index) => ({
      ...variant,
      label:
        variant.strength ||
        variant.size ||
        variant.label ||
        variant.title ||
        variant.name ||
        `Option ${index + 1}`,
    }));
  }

  return [
    {
      id: product.id,
      label: "Standard",
      price: product.price,
      compareAt: product.compareAt,
    },
  ];
}
function ProductCard({ product }) {
  const { addItem } = useCart();

  const variants = getProductVariants(product);
  const hasMultipleVariants = variants.length > 1;

  const defaultIndex =
    Number.isInteger(product.defaultVariant) &&
    product.defaultVariant >= 0 &&
    product.defaultVariant < variants.length
      ? product.defaultVariant
      : 0;

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [panelOpen, setPanelOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedVariant = variants[selectedIndex] || variants[0];

  const price = selectedVariant?.price;
  const compareAt = selectedVariant?.compareAt;

  const inStock =
    selectedVariant?.available !== false &&
    selectedVariant?.inStock !== false &&
    (selectedVariant?.stock == null || Number(selectedVariant.stock) > 0);

  const hasPrice = price != null && Number.isFinite(Number(price));

  const hasDiscount =
    hasPrice &&
    compareAt != null &&
    Number.isFinite(Number(compareAt)) &&
    Number(compareAt) > Number(price);

  const productUrl = `/products/${product.slug}`;

  const handleAddToCart = async () => {
    if (adding || !inStock || !hasPrice) return;

    setAdding(true);

    try {
      await addItem(product, selectedVariant, 1);

      setAdded(true);
      setPanelOpen(false);

      window.setTimeout(() => {
        setAdded(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to add product to cart:", error);
    } finally {
      setAdding(false);
    }
  };

  const handlePrimaryAction = () => {
    if (hasMultipleVariants && !panelOpen) {
      setPanelOpen(true);
      return;
    }

    handleAddToCart();
  };

  return (
    <article className="group border-primary/10 hover:border-secondary/50 relative flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 sm:rounded-[22px]">
      <Link
        href={productUrl}
        aria-label={`View ${product.name}`}
        className="bg-primary-soft relative block aspect-square w-full shrink-0 overflow-hidden"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FlaskConical
              size={48}
              strokeWidth={1.2}
              className="text-primary/25"
            />
          </div>
        )}

        {hasDiscount && (
          <span className="border-secondary/30 bg-secondary text-primary absolute top-2 left-2 rounded-full border px-2.5 py-1 font-sans text-[9px] font-bold shadow-sm sm:top-3 sm:left-3 sm:text-[10px]">
            SALE
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col px-3 pt-3 pb-3 sm:px-4 sm:pt-4 sm:pb-4">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="bg-secondary h-1.5 w-1.5 shrink-0 rounded-full" />

          <span className="text-primary/55 truncate font-sans text-[8px] font-bold tracking-[0.09em] uppercase sm:text-[10px]">
            {product.category || "Research Compounds"}
          </span>
        </div>

        <Link href={productUrl} className="block">
          <h3 className="font-heading text-primary hover:text-primary-light line-clamp-2 min-h-[38px] text-[13px] leading-[1.45] font-normal transition-colors duration-300 sm:min-h-[45px] sm:text-[16px]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          {hasPrice ? (
            <>
              <span className="text-primary font-sans text-[16px] font-extrabold tracking-tight sm:text-[20px]">
                {formatPrice(price)}
              </span>

              {hasDiscount && (
                <span className="font-sans text-[10px] text-black/40 line-through sm:text-[12px]">
                  {formatPrice(compareAt)}
                </span>
              )}
            </>
          ) : (
            <span className="text-muted font-sans text-[12px]">
              View pricing
            </span>
          )}
        </div>

        {/* <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={handlePrimaryAction}
            disabled={adding || !inStock || !hasPrice}
            className="group/btn border-primary-light/20 relative flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-full border bg-[linear-gradient(120deg,var(--navy-soft)_0%,var(--navy)_65%,var(--navy-deep)_100%)] px-2 font-sans text-[11px] font-semibold text-white shadow-[0_5px_16px_rgba(1,17,59,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_9px_22px_rgba(1,17,59,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:h-11 sm:text-[12px]"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,var(--navy-soft)_0%,var(--navy-soft)_50%,var(--navy)_100%)] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 group-disabled/btn:opacity-0" />

            <span className="relative z-10">
              {adding
                ? "Adding..."
                : added
                  ? "Added to Cart"
                  : !inStock
                    ? "Out of Stock"
                    : !hasPrice
                      ? "Unavailable"
                      : hasMultipleVariants
                        ? "Select Options"
                        : "Add to Cart"}
            </span>

            {!adding && !added && inStock && hasPrice && (
              <ShoppingCart
                size={15}
                strokeWidth={1.8}
                className="relative z-10"
              />
            )}
          </button>
        </div> */}
      </div>

      <div
        data-open={panelOpen}
        aria-hidden={!panelOpen}
        inert={!panelOpen}
        className="border-secondary/30 absolute inset-x-0 bottom-0 z-20 flex h-[50%] min-h-[220px] translate-y-full flex-col rounded-t-[18px] border-t bg-white shadow-[0_-12px_35px_rgba(1,17,59,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[open=true]:translate-y-0 sm:h-[48%] sm:rounded-t-[22px]"
      >
        <div className="bg-primary/15 mx-auto mt-2 h-1 w-9 shrink-0 rounded-full" />

        <div className="flex min-h-0 flex-1 flex-col px-3 pt-3 pb-3 sm:px-4 sm:pb-4">
          <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
            <h4 className="text-primary font-sans text-[10px] font-bold tracking-[0.1em] uppercase sm:text-[11px]">
              Select Strength
            </h4>

            <button
              type="button"
              aria-label="Close strength selection"
              onClick={() => setPanelOpen(false)}
              className="bg-primary-soft text-primary hover:bg-primary flex size-7 shrink-0 items-center justify-center rounded-full transition-colors hover:text-white"
            >
              <X size={15} />
            </button>
          </div>

          <div
            role="group"
            aria-label={`Choose strength for ${product.name}`}
            className="flex min-h-0 flex-col gap-1.5 overflow-y-auto"
          >
            {variants.slice(0, 3).map((variant, index) => {
              const isSelected = selectedIndex === index;

              const isUnavailable =
                variant.available === false ||
                variant.inStock === false ||
                (variant.stock != null && Number(variant.stock) < 1);

              const variantDiscount =
                variant.compareAt != null &&
                variant.price != null &&
                Number(variant.compareAt) > Number(variant.price);

              return (
                <button
                  key={variant.id ?? index}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  disabled={isUnavailable}
                  aria-pressed={isSelected}
                  className={`flex min-h-[34px] w-full shrink-0 items-center justify-between gap-1.5 rounded-lg border px-2 py-1.5 text-left transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-[38px] sm:px-3 ${
                    isSelected
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-primary/10 bg-primary-soft text-primary hover:border-primary/30 hover:bg-white"
                  }`}
                >
                  <span className="min-w-0 truncate font-sans text-[10px] font-bold sm:text-[12px]">
                    {variant.label}
                  </span>

                  <span className="flex shrink-0 items-center gap-1.5">
                    {variantDiscount && (
                      <span
                        className={`font-sans text-[8px] line-through sm:text-[9px] ${
                          isSelected ? "text-white/60" : "text-black/40"
                        }`}
                      >
                        {formatPrice(variant.compareAt)}
                      </span>
                    )}

                    <span className="font-sans text-[10px] font-bold sm:text-[12px]">
                      {formatPrice(variant.price) || "View price"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {variants.length > 3 && (
            <Link
              href={productUrl}
              className="text-primary hover:text-secondary-dark mt-2 inline-flex shrink-0 items-center justify-center gap-1 font-sans text-[10px] font-semibold transition-colors"
            >
              View All {variants.length} Strengths
              <ChevronRight size={13} />
            </Link>
          )}

          <div className="mt-auto shrink-0 pt-3">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={adding || !inStock || !hasPrice}
              className="flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--navy-soft),var(--navy))] px-2 font-sans text-[10px] font-semibold text-white shadow-[0_5px_15px_rgba(1,17,59,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(1,17,59,0.3)] disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-[12px]"
            >
              <span>{adding ? "Adding..." : "Add to Cart"}</span>

              {!adding && hasPrice && (
                <span className="border-l border-white/30 pl-2">
                  {formatPrice(price)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default function CardSlider({
  currentProduct = null,
  title = "New",
  highlight = "Arrivals",
  description = "Explore our most popular research compounds.",
}) {
  const sortedProducts = useMemo(() => {
    const displayProducts = products.filter(
      (product) =>
        product.active !== false && product.slug !== currentProduct?.slug,
    );

    return currentProduct
      ? [...displayProducts].sort((a, b) => {
          const aMatch = a.category === currentProduct.category ? 1 : 0;

          const bMatch = b.category === currentProduct.category ? 1 : 0;

          return bMatch - aMatch;
        })
      : displayProducts;
  }, [currentProduct?.slug, currentProduct?.category]);

  const sliderProducts = useMemo(
    () =>
      sortedProducts.map((product) => ({
        ...product,
        sliderKey: product.id ?? product.slug,
      })),
    [sortedProducts],
  );

  if (!sortedProducts.length) return null;

  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-title"
      className="bg-primary-soft relative overflow-hidden py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-[700px] text-center md:mb-12">
          <h2 id="bestsellers-title" className="section-heading">
            {title} <span className="text-secondary">{highlight}</span>
          </h2>

          <p className="text-muted mx-auto mt-3 max-w-[520px] font-sans">
            {description}
          </p>
        </header>

        <div className="relative isolate">
          <Swiper
            modules={[Autoplay]}
            loop={sliderProducts.length > 4}
            speed={5000}
            autoplay={
              sliderProducts.length > 4
                ? {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    waitForTransition: true,
                  }
                : false
            }
            allowTouchMove
            grabCursor
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={12}
            watchOverflow
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              if (
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                swiper.autoplay?.stop();
              }
            }}
            className="continuous-product-slider !overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8px,black_calc(100%-8px),transparent_100%)] !py-3 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_20px,black_calc(100%-20px),transparent_100%)]"
            aria-label="Research peptide product slider"
          >
            {sliderProducts.map((product) => (
              <SwiperSlide key={product.sliderKey} className="!h-auto">
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
