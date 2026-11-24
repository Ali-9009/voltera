"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  ArrowUpRight,
  FileCheck2,
  FileSearch,
  FlaskConical,
} from "lucide-react";

import { products } from "@/data/products";
import { coaRecords } from "@/data/coa-records";
import CustomSelect from "../CustomSelect";
import PageHero from "../PageHero";

const SHOW_DEMO = process.env.NODE_ENV === "development";

const columns = [
  "Research Product",
  "Batch Number",
  "Purity",
  "Test Date",
  "Laboratory",
  "Documents",
];

const catalog = products
  .filter((product) => product.active !== false)
  .flatMap((product, productIndex) =>
    (product.variants?.length ? product.variants : [null]).map(
      (variant, index) => {
        const actual = coaRecords[`${product.slug}:${variant?.id}`];
        const record = actual && !actual.demo ? actual : null;

        const sample = {
          lot: `DEMO-${String(productIndex + 1).padStart(3, "0")}-${index + 1}`,
          purity: `${(99 + ((productIndex * 7 + index * 3) % 95) / 100).toFixed(2)}%`,
          testDate: "Nov 12, 2026",
          laboratory: "Sample Laboratory",
          demo: true,
        };

        return {
          key: `${product.slug}-${variant?.id ?? index}`,
          product,
          variant,
          record: record || (SHOW_DEMO ? sample : null),
        };
      },
    ),
  );

const categories = [
  ...new Set(catalog.map(({ product }) => product.category).filter(Boolean)),
];

function CertificateRow({ item }) {
  const { product, variant, record } = item;

  const purity =
    record?.purity ??
    record?.results?.find((result) =>
      result.name?.toLowerCase().includes("purity"),
    )?.value;

  const laboratory =
    record?.laboratory ||
    record?.lab ||
    record?.results?.find((result) =>
      result.name?.toLowerCase().includes("laboratory"),
    )?.value;

  const details = [
    ["Batch Number", record?.lot],
    ["Purity", purity ? `${String(purity).replace(/%$/, "")}%` : null],
    ["Test Date", record?.testDate],
    ["Laboratory", laboratory],
  ];

  return (
    <article className="group border-border hover:border-secondary/50 hover:bg-primary-soft/40 relative grid min-w-0 gap-4 rounded-2xl border bg-white p-4 transition-all duration-300 hover:shadow-md xl:grid-cols-[2fr_1fr_0.7fr_1fr_1.1fr_1.6fr] xl:items-center xl:gap-4 xl:rounded-xl xl:px-5 xl:py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="border-primary/10 bg-primary-soft relative size-17 shrink-0 overflow-hidden rounded-xl border">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="68px"
              className="object-cover"
            />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-primary font-sans text-base leading-snug font-bold">
            {product.name}
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {variant?.label && (
              <span className="bg-primary-soft text-primary rounded-md px-2 py-1 text-sm font-semibold">
                {variant.label}
              </span>
            )}

            {record?.demo && (
              <span className="text-secondary-dark text-xs font-semibold">
                Sample
              </span>
            )}
          </div>
        </div>
      </div>

      <dl className="bg-primary-soft/60 grid grid-cols-2 gap-x-3 gap-y-4 rounded-xl p-3 xl:contents">
        {details.map(([label, value]) => (
          <div key={label} className="min-w-0">
            <dt className="text-muted mb-1 text-sm font-medium xl:sr-only">
              {label}
            </dt>

            <dd
              className={`text-[15px] font-semibold wrap-break-word ${
                label === "Purity" && value
                  ? "text-emerald-700"
                  : "text-primary"
              }`}
            >
              {value || "Not provided"}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="group/link border-primary/20 text-primary hover:border-secondary hover:bg-secondary/5 flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border bg-white px-3 text-sm font-semibold whitespace-nowrap transition-all"
        >
          Product
          <ArrowUpRight
            size={16}
            className="text-secondary-dark transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>

        {record?.pdfUrl && !record.demo ? (
          <a
            href={record.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-11 flex-1 gap-2 px-3 text-sm whitespace-nowrap"
          >
            COA
            <FileCheck2 size={17} />
          </a>
        ) : (
          <span className="border-border bg-surface text-muted flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold whitespace-nowrap">
            {record?.demo ? "Sample COA" : "No PDF"}
          </span>
        )}
      </div>
    </article>
  );
}

export default function CoALibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [limit, setLimit] = useState(15);

  const filtered = catalog.filter(({ product, variant, record }) => {
    const matchesCategory = category === "all" || product.category === category;

    const matchesQuery =
      `${product.name} ${variant?.label || ""} ${record?.lot || ""} ${record?.accession || ""}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb="COA"
        subtitle="Quality & Transparency"
        title="Verified Quality."
        highlight="Proven Precision."
        description="Explore our batch-specific Certificates of Analysis and independent laboratory testing documentation."
        mobileImage="/assets-v/voltera-coa-mobile.png"
        desktopImage="/assets-v/voltera-coa.png"
      />

      <section className="bg-primary-soft/60 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 text-center">
            <h2 className="section-heading">
              Certificate <span className="text-secondary">Library.</span>
            </h2>

            <p className="text-muted mx-auto mt-3 max-w-xl text-[15px] leading-relaxed">
              Explore laboratory results and batch-specific documentation for
              our research compounds.
            </p>
          </header>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xl">
              <Search
                size={20}
                className="text-primary pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
              />

              <input
                type="search"
                aria-label="Search products or batch numbers"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setLimit(15);
                }}
                placeholder="Search product or batch number..."
                className="border-primary/20 text-primary placeholder:text-muted focus:border-primary focus:ring-primary/10 h-13 w-full rounded-xl border bg-white pr-11 pl-12 text-base transition-all outline-none focus:ring-2 [&::-webkit-search-cancel-button]:hidden"
              />

              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    setLimit(15);
                  }}
                  className="text-primary hover:bg-primary-soft absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <CustomSelect
              id="coa-category"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setLimit(15);
              }}
              placeholder="All Categories"
              className="w-full text-base sm:w-[240px]"
              options={[
                { value: "all", label: "All Categories" },
                ...categories.map((name) => ({
                  value: name,
                  label: name,
                })),
              ]}
            />
          </div>

          <div className="mt-6 mb-4 flex flex-wrap items-center justify-between gap-2">
            <p aria-live="polite" className="text-muted text-sm sm:text-base">
              Showing{" "}
              <strong className="text-primary">{filtered.length}</strong>{" "}
              product records
            </p>

            {SHOW_DEMO && (
              <span className="border-secondary/30 bg-secondary/10 text-secondary-dark rounded-lg border px-3 py-1.5 text-sm font-semibold">
                Development Preview
              </span>
            )}
          </div>

          <div className="border-secondary from-primary via-accent to-primary mb-3 hidden grid-cols-[2fr_1fr_0.7fr_1fr_1.1fr_1.6fr] gap-4 rounded-xl border-t-[3px] bg-linear-to-r px-5 py-5 xl:grid">
            {columns.map((column) => (
              <span
                key={column}
                className="text-[15px] font-semibold text-white"
              >
                {column}
              </span>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
              {filtered.slice(0, limit).map((item) => (
                <CertificateRow key={item.key} item={item} />
              ))}
            </div>
          ) : (
            <div className="border-border flex min-h-64 flex-col items-center justify-center rounded-2xl border bg-white text-center">
              <FileSearch size={40} className="text-primary/40" />

              <h3 className="font-heading text-primary mt-4 text-xl">
                No Matching Records
              </h3>

              <p className="text-muted mt-2 text-base">
                Try a different product or batch number.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setLimit(15);
                }}
                className="btn-primary mt-5 h-11 px-6 text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}

          {limit < filtered.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setLimit((previous) => previous + 15)}
                className="btn-primary h-12 px-8 text-base"
              >
                Load More Records
              </button>
            </div>
          )}

          <p className="border-primary/10 text-muted mt-8 flex items-start gap-3 rounded-xl border bg-white p-4 text-sm leading-relaxed">
            <FileCheck2 size={22} className="text-secondary-dark shrink-0" />

            {SHOW_DEMO
              ? "Sample values are for development and layout testing only. They are not actual laboratory results."
              : "Certificates of Analysis are specific to their corresponding products and batches. All compounds are intended for research use only."}
          </p>
        </div>
      </section>
    </main>
  );
}
