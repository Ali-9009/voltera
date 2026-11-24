"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function LegalPage({ title, sections }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const getSectionId = (index) => `policy-section-${index + 1}`;
  const getTitle = (text) => text.replace(/^\d+\.\s*/, "");

  const navigation = (
    <nav aria-label="Policy sections" className="space-y-1 p-3">
      {sections.map((section, index) => (
        <a
          key={index}
          href={`#${getSectionId(index)}`}
          onClick={() => setMobileNavOpen(false)}
          className="group text-charcoal/80 hover:bg-primary-soft hover:text-primary flex items-start gap-3 rounded-lg px-3 py-3 text-sm leading-relaxed transition-colors duration-300"
        >
          <span className="text-secondary-dark shrink-0 font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{getTitle(section.title)}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <main className="bg-surface min-h-screen">
      <header className="border-border from-primary-soft to-primary-soft border-b bg-linear-to-r via-white px-4 pt-28 pb-10 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-12">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="text-muted mb-5 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <span aria-current="page" className="text-primary font-semibold">
              {title}
            </span>
          </nav>

          <p className="text-secondary-dark mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase">
            <span className="bg-secondary size-1.5 rounded-full" />
            Policies & Information
          </p>

          <h1 className="font-heading text-primary text-[clamp(28px,5vw,48px)] leading-tight tracking-tight">
            {title}
          </h1>

          <div
            aria-hidden="true"
            className="from-secondary-dark via-accent-light to-secondary-dark my-4 h-[3px] w-24 rounded-full bg-linear-to-r"
          />

          <p className="text-muted max-w-2xl text-[15px] leading-relaxed sm:text-base">
            Important information about our policies, research products, and
            customer guidelines.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:py-12">
        <aside className="min-w-0 lg:sticky lg:top-28">
          <div className="border-border hidden overflow-hidden rounded-xl border bg-white lg:block">
            <div className="border-border bg-primary-soft/60 flex items-center gap-3 border-b px-5 py-4">
              <FileText
                size={20}
                strokeWidth={1.7}
                className="text-secondary-dark"
              />

              <h2 className="font-heading text-primary text-base">
                On This Page
              </h2>
            </div>

            <div className="max-h-[50vh] overflow-y-auto">{navigation}</div>
          </div>

          <div className="border-border overflow-hidden rounded-xl border bg-white lg:hidden">
            <button
              type="button"
              onClick={() => setMobileNavOpen((previous) => !previous)}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-policy-navigation"
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
            >
              <span className="text-primary flex items-center gap-3 font-sans text-sm font-bold">
                <FileText size={19} className="text-secondary-dark" />
                Jump to Section
              </span>

              <ChevronDown
                size={19}
                className={`text-primary transition-transform duration-300 ${
                  mobileNavOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="mobile-policy-navigation"
              hidden={!mobileNavOpen}
              className="border-border max-h-[320px] overflow-y-auto border-t"
            >
              {navigation}
            </div>
          </div>

          <div className="border-secondary/25 bg-secondary/5 mt-5 hidden rounded-xl border p-5 lg:block">
            <Mail size={25} strokeWidth={1.6} className="text-secondary-dark" />

            <h3 className="font-heading text-primary mt-3 text-base">
              Need Assistance?
            </h3>

            <p className="text-muted mt-2 text-sm leading-relaxed">
              Have questions about our policies? Our support team is here to
              help.
            </p>

            <Link
              href="/contact"
              className="group text-primary hover:text-secondary-dark mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            >
              Contact Support
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </aside>

        <article className="border-border min-w-0 rounded-2xl border bg-white px-5 sm:px-8 lg:px-10">
          {sections.map((section, index) => (
            <section
              key={index}
              id={getSectionId(index)}
              aria-labelledby={`${getSectionId(index)}-heading`}
              className="border-border scroll-mt-32 border-b py-7 last:border-b-0 sm:py-9"
            >
              <div className="mb-5 flex items-center gap-3 sm:gap-4">
                <span className="border-secondary/25 bg-primary-soft font-heading text-primary flex size-9 shrink-0 items-center justify-center rounded-lg border text-sm sm:size-10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  id={`${getSectionId(index)}-heading`}
                  className="font-heading text-primary text-lg leading-snug sm:text-[22px]"
                >
                  {getTitle(section.title)}
                </h2>
              </div>

              <div className="space-y-4">
                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-charcoal/80 font-sans text-[15px] leading-[1.9] sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items?.length > 0 && (
                  <ul className="space-y-3 pl-1">
                    {section.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-charcoal/80 flex items-start gap-3 font-sans text-[15px] leading-[1.8] sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="bg-secondary mt-[10px] size-1.5 shrink-0 rounded-full"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </article>

        <section className="border-secondary/30 from-primary via-accent to-primary flex flex-col gap-5 rounded-xl border bg-linear-to-r p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7 lg:col-start-2">
          <div>
            <h2 className="font-heading text-accent-light text-lg sm:text-xl">
              Still Have Questions?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Contact our team for assistance with our policies and customer
              guidelines.
            </p>
          </div>

          <Link href="/contact" className="btn-hero-primary shrink-0">
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}
