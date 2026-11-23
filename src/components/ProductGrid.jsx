"use client";

import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";

const PRODUCTS_PER_LOAD = 8;

export default function ProductGrid() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD);

  const activeProducts = products.filter((product) => product.active !== false);

  const visibleProducts = activeProducts.slice(0, visibleCount);

  const hasMore = visibleCount < activeProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + PRODUCTS_PER_LOAD, activeProducts.length),
    );
  };

  return (
    <section
      id="shop"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="section-heading">Explore Collection</h2>

          <p className="text-muted text-md mx-auto mt-5 max-w-2xl font-sans leading-7">
            Discover research peptides and blends in multiple strengths for
            laboratory applications.
          </p>
        </div>

        {activeProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-5">
              {hasMore ? (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="group border-primary bg-primary hover:bg-primary-light inline-flex h-[50px] items-center justify-center gap-3 rounded-full border px-8 font-sans text-[13px] font-semibold text-white shadow-[0_6px_20px_rgba(7,26,67,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(7,26,67,0.25)] active:translate-y-0 sm:h-[54px] sm:px-10 sm:text-[14px]"
                >
                  Load More Products
                  <ArrowDown
                    size={18}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </button>
              ) : (
                <div
                  role="status"
                  className="text-primary flex items-center gap-2 font-sans text-[13px] font-medium"
                >
                  <Check size={17} />
                  You've viewed all products
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="bg-surface rounded-2xl px-6 py-16 text-center">
            <p className="text-muted font-sans text-sm">
              No products are available at the moment.
            </p>
          </div>
        )}
      </div>

      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
