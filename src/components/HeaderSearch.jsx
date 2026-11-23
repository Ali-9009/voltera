"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  ArrowUpRight,
  Search,
  X,
  PackageSearch,
  FlaskConical,
  TrendingUp,
} from "lucide-react";

import { products } from "@/data/products";

const formatPrice = (price) => {
  if (price == null) return null;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price));
};

export default function HeaderSearch({ open, onClose }) {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
  const panelRef = useRef(null);

  /* ==============================================
     AVAILABLE PRODUCTS
  ============================================== */

  const availableProducts = useMemo(
    () => products.filter((product) => product.active !== false),
    [],
  );

  /* ==============================================
     SEARCH RESULTS
  ============================================== */

  const searchResults = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return [];

    return availableProducts
      .map((product) => {
        const name = product.name?.toLowerCase() || "";
        const slug = product.slug?.toLowerCase() || "";

        const searchableText = [
          product.name,
          product.slug,
          product.category,
          product.description,
          product.badge,
          ...(product.variants || []).map((variant) => variant.label),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(search)) return null;

        // Prioritize exact and partial product-name matches.
        const score =
          name === search
            ? 100
            : name.startsWith(search)
              ? 80
              : name.includes(search)
                ? 60
                : slug.includes(search)
                  ? 40
                  : 20;

        return {
          ...product,
          searchScore: score,
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(0, 6);
  }, [query, availableProducts]);

  /* ==============================================
     SUGGESTED PRODUCTS
  ============================================== */

  const suggestedProducts = useMemo(() => {
    const featured = availableProducts.filter((product) =>
      /featured|best.?sell|popular/i.test(product.badge || ""),
    );

    return (featured.length ? featured : availableProducts).slice(0, 2);
  }, [availableProducts]);

  /* ==============================================
     CLOSE SEARCH
  ============================================== */

  const closeSearch = () => {
    setQuery("");
    onClose?.();
  };

  /* ==============================================
     FOCUS ON OPEN
  ============================================== */

  useEffect(() => {
    if (!open) return;

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timeout);
  }, [open]);

  /* ==============================================
     CLICK OUTSIDE / ESCAPE
  ============================================== */

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      // The header search trigger has its own toggle handler.
      if (event.target.closest("[data-header-search-trigger]")) {
        return;
      }

      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /* ==============================================
     SUBMIT SEARCH
  ============================================== */

  const handleSearch = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    // Only navigate when an actual matching product exists.
    const firstMatch = searchResults[0];

    if (!firstMatch) return;

    router.push(`/products/${firstMatch.slug}`);

    closeSearch();
  };

  /* ==============================================
     PRODUCT RESULT
  ============================================== */

  const ProductResult = ({ product }) => {
    const variants = product.variants || [];

    const variant = variants[product.defaultVariant ?? 0] || variants[0];

    const inStock =
      variant?.inStock !== false &&
      (variant?.stock == null || Number(variant.stock) > 0);

    return (
      <Link
        href={`/products/${product.slug}`}
        onClick={closeSearch}
        className="group hover:bg-primary-soft flex items-center gap-3 rounded-[15px] px-3 py-3 transition-all duration-300 sm:gap-4"
      >
        {/* IMAGE */}

        <div className="bg-primary-soft relative h-[65px] w-[65px] shrink-0 overflow-hidden rounded-[13px] sm:h-[75px] sm:w-[75px]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="75px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <FlaskConical size={25} className="text-primary/30" />
            </div>
          )}
        </div>

        {/* PRODUCT INFORMATION */}

        <div className="min-w-0 flex-1">
          <span className="text-secondary font-sans text-[9px] font-bold tracking-[0.12em] uppercase">
            {product.category || "Research Compound"}
          </span>

          <h3 className="font-heading text-primary mt-1 truncate text-[14px] font-bold tracking-[-0.03em] transition-colors sm:text-[16px]">
            {product.name}
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {variant?.label && (
              <span className="text-primary bg-primary-soft rounded-full px-2 py-1 font-sans text-[10px] font-semibold">
                {variant.label}
              </span>
            )}

            <span
              className={`flex items-center gap-1.5 font-sans text-[10px] font-semibold ${
                inStock ? "text-emerald-600" : "text-red-500"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  inStock ? "bg-emerald-500" : "bg-red-500"
                }`}
              />

              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>

        {/* PRICE */}

        <div className="flex shrink-0 items-center gap-3">
          {variant?.price != null && (
            <span className="font-heading text-primary text-[14px] font-bold sm:text-[17px]">
              {formatPrice(variant.price)}
            </span>
          )}

          <span className="text-primary group-hover:bg-primary bg-primary-soft hidden h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:text-white sm:flex">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div
      ref={panelRef}
      id="header-search"
      role="region"
      aria-label="Product search"
      aria-hidden={!open}
      inert={!open}
      className={`border-primary/10 absolute top-full right-0 left-0 z-[100] overflow-hidden border-b bg-white shadow-[0_25px_60px_rgba(17,21,35,0.12)] transition-all duration-300 ease-out ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <form
          onSubmit={handleSearch}
          role="search"
          className="mx-auto max-w-3xl pt-6 pb-6 sm:pt-8 sm:pb-8"
        >
          <div className="mb-3 flex items-center justify-between">
            <label
              htmlFor="product-search"
              className="text-primary font-sans text-[11px] font-bold tracking-[0.15em] uppercase"
            >
              Search Our Collection
            </label>

            <span className="hidden font-sans text-[11px] text-black/50 sm:inline">
              Find your research compounds
            </span>
          </div>

          <div className="border-primary/15 focus-within:border-primary flex items-center gap-3 rounded-xl border bg-white px-3 py-2 transition-all duration-300 focus-within:shadow-[0_0_0_3px_rgba(17,21,35,0.06)] sm:gap-4 sm:px-5">
            <Search
              size={21}
              strokeWidth={1.8}
              className="text-primary shrink-0"
            />

            <input
              ref={inputRef}
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search peptides, compounds, strengths..."
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent py-2 font-sans text-[14px] font-medium text-black outline-none placeholder:text-black/40 sm:text-[16px] [&::-webkit-search-cancel-button]:hidden"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="hover:bg-primary/5 hover:text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-black/50 transition-colors duration-300"
              >
                <X size={17} />
              </button>
            )}

            <button
              type="submit"
              disabled={!query.trim() || searchResults.length === 0}
              aria-label={
                searchResults.length > 0
                  ? `View ${searchResults[0].name}`
                  : "No matching product"
              }
              className="bg-primary hover:bg-primary-dark flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11"
            >
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>
        </form>

        <div className="border-primary/10 mx-auto max-w-3xl border-t">
          {!query.trim() && (
            <div className="py-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />

                  <h2 className="font-sans text-[11px] font-bold tracking-[0.13em] text-black uppercase">
                    Suggested Products
                  </h2>
                </div>

                <span className="font-sans text-[11px] text-black/50">
                  Explore our collection
                </span>
              </div>

              <div className="max-h-[350px] space-y-1.5 overflow-y-auto pb-5">
                {suggestedProducts.map((product) => (
                  <ProductResult key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {query.trim() && (
            <div className="py-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Search size={15} className="text-primary" />

                  <h2 className="font-sans text-[11px] font-bold tracking-[0.13em] text-black uppercase">
                    Search Results
                  </h2>
                </div>

                <span className="border-primary/10 bg-primary/5 text-primary rounded-full border px-2.5 py-1 font-sans text-[11px]">
                  {searchResults.length}{" "}
                  {searchResults.length === 1 ? "result" : "results"}
                </span>
              </div>

              {searchResults.length > 0 ? (
                <div className="max-h-[380px] space-y-1.5 overflow-y-auto pb-5">
                  {searchResults.map((product) => (
                    <ProductResult key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="border-primary/10 bg-primary/[0.025] flex flex-col items-center justify-center rounded-2xl border px-5 py-12 text-center">
                  <span className="border-primary/10 bg-primary/5 text-primary flex h-16 w-16 items-center justify-center rounded-2xl border">
                    <PackageSearch size={29} strokeWidth={1.5} />
                  </span>

                  <h3 className="font-heading mt-5 text-[20px] font-normal text-black">
                    No Products Found
                  </h3>

                  <p className="mt-3 max-w-[320px] font-sans text-[13px] leading-relaxed text-black/60">
                    We couldn't find a matching product. Try another compound
                    name, category, or strength.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="border-primary text-primary hover:bg-primary mt-5 rounded-lg border bg-white px-5 py-2.5 font-sans text-[12px] font-semibold transition-colors duration-300 hover:text-white"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-primary/10 mx-auto h-px max-w-3xl" />
      </div>
    </div>
  );
}
