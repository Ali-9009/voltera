"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const availableProducts = products.filter(
  (product) => product.active !== false,
);

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price));

function ProductResult({ product, onClose }) {
  const variants = product.variants || [];
  const variant = variants[product.defaultVariant ?? 0] || variants[0];

  const inStock =
    variant?.inStock !== false &&
    (variant?.stock == null || Number(variant.stock) > 0);

  return (
    <Link
      href={`/products/${product.slug}`}
      onClick={onClose}
      className="group border-border hover:border-secondary/50 hover:bg-primary-soft/60 flex min-w-0 items-center gap-3 rounded-xl border bg-white p-2.5 transition-all duration-300 sm:gap-4"
    >
      <div className="border-primary/10 bg-primary-soft relative size-12 shrink-0 overflow-hidden rounded-lg border sm:size-14">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="56px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <FlaskConical size={24} className="text-primary/40" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-primary text-sm leading-snug sm:text-base">
          {product.name}
        </h3>

        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          {variant?.label && (
            <span className="bg-primary-soft text-primary rounded-md px-2 py-0.5 text-xs font-semibold">
              {variant.label}
            </span>
          )}

          <span
            className={`flex items-center gap-1.5 text-xs font-medium ${
              inStock ? "text-emerald-700" : "text-red-600"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                inStock ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {variant?.price != null && (
          <span className="font-heading text-primary text-sm sm:text-base">
            {formatPrice(variant.price)}
          </span>
        )}

        <span className="border-primary/10 bg-primary-soft text-primary group-hover:border-secondary/30 group-hover:bg-primary group-hover:text-accent-light hidden size-8 items-center justify-center rounded-full border transition-colors duration-300 sm:flex">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
}

export default function HeaderSearch({ open, onClose }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
  const panelRef = useRef(null);

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

        return { ...product, searchScore: score };
      })
      .filter(Boolean)
      .sort((a, b) => b.searchScore - a.searchScore);
  }, [query]);

  const suggestedProducts = useMemo(() => {
    const featured = availableProducts.filter((product) =>
      /featured|best.?sell|popular/i.test(product.badge || ""),
    );

    return (featured.length ? featured : availableProducts).slice(0, 2);
  }, []);

  const closeSearch = useCallback(() => {
    setQuery("");
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const timeout = setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 100);

    return () => clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (event.target.closest("[data-header-search-trigger]")) return;

      if (!panelRef.current?.contains(event.target)) {
        closeSearch();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeSearch]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchResults.length) return;

    router.push(`/products/${searchResults[0].slug}`);
    closeSearch();
  };

  const hasQuery = Boolean(query.trim());

  const displayedProducts = hasQuery
    ? searchResults.slice(0, 3)
    : suggestedProducts;

  return (
    <div
      ref={panelRef}
      id="header-search"
      role="region"
      aria-label="Product search"
      aria-hidden={!open}
      inert={!open}
      className={`border-primary/15 via-primary-soft absolute top-full left-1/2 z-[100] mt-23 w-[calc(100%_-_24px)] max-w-[700px] -translate-x-1/2 rounded-[22px] border bg-linear-to-br from-white to-white shadow-[0_15px_45px_rgba(18,51,107,0.15)] transition-all duration-300 ease-out ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <div className="via-secondary absolute inset-x-6 top-0 h-[2px] rounded-full bg-linear-to-r from-transparent to-transparent" />

      <div className="p-4 sm:p-5">
        <header className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-heading text-primary flex items-center gap-2 text-base sm:text-lg">
            <Search size={19} className="text-secondary-dark" />
            Search Our Collection
          </h2>

          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="border-primary/10 text-primary hover:border-secondary hover:bg-secondary/10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-white transition-colors duration-300"
          >
            <X size={17} />
          </button>
        </header>

        <form onSubmit={handleSearch} role="search">
          <div className="border-primary/20 focus-within:border-primary focus-within:ring-primary/10 flex items-center gap-2 rounded-full border bg-white p-1.5 pl-4 transition-all duration-300 focus-within:ring-2 sm:gap-3">
            <Search
              size={20}
              strokeWidth={1.8}
              className="text-primary shrink-0"
            />

            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>

            <input
              ref={inputRef}
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              autoComplete="off"
              className="text-charcoal placeholder:text-muted min-w-0 flex-1 bg-transparent py-2 font-sans text-base outline-none [&::-webkit-search-cancel-button]:hidden"
            />

            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="text-muted hover:bg-primary-soft hover:text-primary flex size-7 shrink-0 items-center justify-center rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}

            <button
              type="submit"
              disabled={!searchResults.length}
              aria-label="Open first matching product"
              className="from-primary-light via-accent to-primary text-accent-light hover:bg-primary-dark flex size-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowRight size={19} strokeWidth={1.8} />
            </button>
          </div>
        </form>

        <section className="border-primary/10 mt-4 border-t pt-3">
          <header className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-primary flex items-center gap-2 font-sans text-sm font-bold">
              {hasQuery ? (
                <PackageSearch size={17} className="text-secondary-dark" />
              ) : (
                <TrendingUp size={17} className="text-secondary-dark" />
              )}

              {hasQuery ? "Search Results" : "Suggested Products"}
            </h3>

            {hasQuery && (
              <span
                aria-live="polite"
                className="text-muted text-xs font-semibold"
              >
                {searchResults.length} Results
              </span>
            )}
          </header>

          {displayedProducts.length > 0 ? (
            <div className="space-y-2">
              {displayedProducts.map((product) => (
                <ProductResult
                  key={product.id}
                  product={product}
                  onClose={closeSearch}
                />
              ))}
            </div>
          ) : (
            <div className="border-primary/20 flex flex-col items-center rounded-xl border border-dashed bg-white px-4 py-6 text-center">
              <PackageSearch
                size={30}
                strokeWidth={1.5}
                className="text-primary/50"
              />

              <h3 className="font-heading text-primary mt-3 text-lg">
                No Products Found
              </h3>

              <p className="text-muted mt-2 text-sm">
                Try another product name or strength.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="text-primary hover:text-secondary-dark mt-3 text-sm font-semibold"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        <footer className="border-primary/10 mt-3 flex justify-center border-t pt-3">
          <Link
            href="/shop"
            onClick={closeSearch}
            className="group text-primary hover:text-secondary-dark inline-flex items-center gap-2 text-sm font-bold transition-colors"
          >
            View All Products
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </footer>
      </div>
    </div>
  );
}
