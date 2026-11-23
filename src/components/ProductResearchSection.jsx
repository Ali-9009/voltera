"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  FileCheck2,
  FileText,
  FlaskConical,
  Package,
  Plus,
  Minus,
  ShieldCheck,
} from "lucide-react";

const tabs = [
  { id: "record", label: "Product Record" },
  { id: "storage", label: "Storage & Handling" },
  { id: "documentation", label: "Documentation" },
];

function DetailRow({ label, value }) {
  return (
    <div className="border-primary/10 flex items-start justify-between gap-4 border-b py-4 last:border-b-0">
      <dt className="text-muted shrink-0 font-sans text-[11px] font-medium tracking-wide uppercase">
        {label}
      </dt>

      <dd className="text-primary max-w-[65%] text-right font-sans text-[12px] leading-5 font-semibold break-words">
        {value || "Not provided"}
      </dd>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-[17px] border bg-white transition-colors duration-300 ${
        open
          ? "border-secondary/40"
          : "border-primary/10 hover:border-secondary/30"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="font-heading text-primary text-[13px] sm:text-[14px]">
          {title}
        </span>

        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-primary rotate-180 text-white"
              : "bg-primary-soft text-primary"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-primary/10 text-muted border-t px-5 py-5 font-sans text-[12px] leading-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabContent({ activeTab, product, specificationRows }) {
  const specifications = Object.fromEntries(
    specificationRows.map((row) => [row.label.toLowerCase(), row.value]),
  );

  if (activeTab === "record") {
    return (
      <>
        <div className="mb-5">
          <div className="border-secondary/20 bg-secondary/10 text-secondary-dark mb-4 flex size-11 items-center justify-center rounded-xl border">
            <FlaskConical size={21} />
          </div>

          <h3 className="font-heading text-primary text-[20px]">
            Product Record
          </h3>

          <p className="text-muted mt-3 font-sans text-[13px] leading-7">
            Product information and specifications for{" "}
            <span className="text-primary font-semibold">{product.name}</span>.
          </p>
        </div>

        <dl className="border-primary/10 border-t">
          <DetailRow label="Product" value={product.name} />

          <DetailRow
            label="Category"
            value={product.category || "Research Compound"}
          />

          {specificationRows.map((row) => (
            <DetailRow key={row.label} label={row.label} value={row.value} />
          ))}
        </dl>
      </>
    );
  }

  if (activeTab === "storage") {
    return (
      <>
        <div className="mb-5">
          <div className="border-secondary/20 bg-secondary/10 text-secondary-dark mb-4 flex size-11 items-center justify-center rounded-xl border">
            <Package size={21} />
          </div>

          <h3 className="font-heading text-primary text-[20px]">
            Storage & Handling
          </h3>

          <p className="text-muted mt-3 font-sans text-[13px] leading-7">
            Handling information for {product.name}. Follow the product-specific
            documentation when available.
          </p>
        </div>

        <dl className="border-primary/10 border-t">
          <DetailRow label="Form" value={specifications.form} />

          <DetailRow label="Container" value={specifications.container} />

          <DetailRow
            label="Intended Use"
            value={specifications["intended use"]}
          />

          <DetailRow
            label="Storage"
            value={
              product.specifications?.storage ||
              product.storage ||
              "Refer to product documentation"
            }
          />
        </dl>
      </>
    );
  }

  const batch =
    product.specifications?.batch || product.batch || "Not provided";

  const lot = product.specifications?.lot || product.lot || "Not provided";

  const laboratory =
    product.specifications?.laboratory || product.laboratory || "Not provided";

  const method =
    product.specifications?.method || product.method || "Not provided";

  return (
    <>
      <div className="mb-5">
        <div className="border-secondary/20 bg-secondary/10 text-secondary-dark mb-4 flex size-11 items-center justify-center rounded-xl border">
          <FileCheck2 size={21} />
        </div>

        <h3 className="font-heading text-primary text-[20px]">Documentation</h3>

        <p className="text-muted mt-3 font-sans text-[13px] leading-7">
          Available documentation for{" "}
          <span className="text-primary font-semibold">{product.name}</span>{" "}
          appears in the certificate archive. Only provided information is
          displayed.
        </p>
      </div>

      <dl className="border-primary/10 border-t">
        <DetailRow label="Batch" value={batch} />

        <DetailRow label="Lot" value={lot} />

        <DetailRow label="Method" value={method} />

        <DetailRow label="Laboratory" value={laboratory} />
      </dl>
    </>
  );
}

function CertificateArchive({ product, certificatePdf }) {
  const certificateUrl = product.coa || certificatePdf;

  const certificates =
    Array.isArray(product.certificates) && product.certificates.length
      ? product.certificates
          .filter((certificate) => certificate?.url || certificate?.href)
          .map((certificate, index) => ({
            id: certificate.id || index,
            lot: certificate.lot || "Not specified",
            date: certificate.date || "—",
            purity:
              certificate.purity != null ? String(certificate.purity) : "—",
            laboratory: certificate.laboratory || "—",
            url: certificate.url || certificate.href,
          }))
      : certificateUrl
        ? [
            {
              id: "default",
              lot:
                product.specifications?.lot ||
                product.lot ||
                "Product Certificate",
              date: "—",
              purity: "—",
              laboratory:
                product.specifications?.laboratory || product.laboratory || "—",
              url: certificateUrl,
            },
          ]
        : [];

  return (
    <section
      aria-labelledby="certificate-archive-title"
      className="border-primary/10 min-w-0 overflow-hidden rounded-[22px] border bg-[linear-gradient(145deg,#FFFFFF_0%,#F7F9FD_100%)]"
    >
      <header className="flex flex-wrap items-start justify-between gap-4 px-5 pt-6 pb-5 sm:px-6">
        <div>
          <p className="text-secondary-dark font-sans text-[10px] font-bold tracking-[0.16em] uppercase">
            Certificate Archive
          </p>

          <h2
            id="certificate-archive-title"
            className="font-heading text-primary mt-2 text-[19px] leading-tight sm:text-[22px]"
          >
            Certificates of Analysis
          </h2>

          <p className="text-muted mt-2 font-sans text-[12px]">
            {product.name}
          </p>
        </div>

        <span className="bg-primary text-accent-light inline-flex shrink-0 items-center rounded-full px-3 py-2 font-sans text-[10px] font-bold">
          {certificates.length} FILED
        </span>
      </header>

      <div className="px-3 pb-4 sm:px-5 sm:pb-5">
        <div className="border-primary/10 overflow-hidden rounded-[15px] border bg-white">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-left">
              <thead>
                <tr className="bg-primary-soft">
                  <th className="text-primary px-4 py-4 font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                    Lot
                  </th>

                  <th className="text-primary px-3 py-4 font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                    Assayed
                  </th>

                  <th className="text-primary px-3 py-4 font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                    Purity
                  </th>

                  <th className="text-primary px-3 py-4 font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                    Laboratory
                  </th>

                  <th className="text-primary px-4 py-4 text-right font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                    File
                  </th>
                </tr>
              </thead>

              <tbody>
                {certificates.length ? (
                  certificates.map((certificate) => (
                    <tr
                      key={certificate.id}
                      className="border-primary/10 border-t transition-colors duration-200 hover:bg-[#FAFBFE]"
                    >
                      <td className="px-4 py-4">
                        <span className="text-primary font-sans text-[12px] font-semibold">
                          {certificate.lot}
                        </span>
                      </td>

                      <td className="text-muted px-3 py-4 font-sans text-[11px]">
                        {certificate.date}
                      </td>

                      <td className="text-secondary-dark px-3 py-4 font-sans text-[11px] font-bold">
                        {certificate.purity}
                      </td>

                      <td className="text-muted px-3 py-4 font-sans text-[11px]">
                        {certificate.laboratory}
                      </td>

                      <td className="px-4 py-3 text-right">
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary hover:bg-primary-light inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 font-sans text-[11px] font-semibold whitespace-nowrap text-white transition-all duration-300"
                        >
                          View
                          <ArrowUpRight size={14} />
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center">
                      <FileText
                        size={27}
                        className="text-secondary-dark mx-auto"
                      />

                      <p className="text-muted mt-3 font-sans text-[12px]">
                        No certificate files are currently provided.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
          <p className="text-muted font-sans text-[11px] leading-5">
            {certificates.length === 1
              ? "1 available certificate record."
              : `${certificates.length} available certificate records.`}
          </p>

          {certificates.length > 0 && (
            <a
              href={certificates[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-secondary-dark hover:text-primary inline-flex items-center gap-2 font-sans text-[11px] font-bold transition-colors"
            >
              View Certificate
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>

      <footer className="border-primary/10 flex items-start gap-3 border-t bg-white/70 px-5 py-4 sm:px-6">
        <ShieldCheck
          size={18}
          className="text-secondary-dark mt-0.5 shrink-0"
        />

        <p className="text-muted font-sans text-[11px] leading-6">
          Review each certificate for its specific analytical information.
          Missing values are not presented as verified results.
        </p>
      </footer>
    </section>
  );
}

export default function ProductResearchSection({
  product,
  specificationRows = [],
  certificatePdf,
}) {
  const [activeTab, setActiveTab] = useState("documentation");

  return (
    <section
      aria-label={`${product.name} research and documentation`}
      className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8"
    >
      <div className="min-w-0">
        <div
          role="tablist"
          aria-label="Product information"
          className="mb-5 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const selected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`research-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`research-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-4 py-3 font-sans text-[11px] font-bold whitespace-nowrap transition-all duration-300 sm:px-5 sm:text-[12px] ${
                  selected
                    ? "border-primary bg-primary text-white shadow-[0_6px_18px_rgba(7,26,67,0.12)]"
                    : "border-primary/15 text-primary hover:border-secondary bg-white hover:bg-[#FFF9EF]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id={`research-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`research-tab-${activeTab}`}
          tabIndex={0}
          className="border-primary/10 min-w-0 rounded-[20px] border bg-white p-5 sm:p-7"
        >
          <TabContent
            activeTab={activeTab}
            product={product}
            specificationRows={specificationRows}
          />
        </div>

        <div className="mt-4 space-y-3">
          <Accordion title="Research Summary">
            <p>
              {product.description ||
                `${product.name} is provided for appropriate scientific and laboratory research.`}
            </p>
          </Accordion>

          <Accordion title="Handling & Reconstitution">
            <p>
              Follow the handling instructions supplied with the product, where
              available.
            </p>

            <p className="mt-3">
              No product-specific reconstitution procedure has been provided in
              this section.
            </p>
          </Accordion>

          <Accordion title="Research Use & Safety">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={19}
                className="text-secondary-dark mt-1 shrink-0"
              />

              <div>
                <p>
                  This product is intended exclusively for appropriate
                  laboratory and in-vitro research.
                </p>

                <p className="mt-3">
                  Not intended for human consumption, clinical administration,
                  veterinary use, or diagnostic or therapeutic purposes.
                </p>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      <CertificateArchive product={product} certificatePdf={certificatePdf} />
    </section>
  );
}
