"use client";

import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Are Voltera Sciences products third-party tested?",
    answer:
      "Our research compounds undergo independent laboratory testing, with available Certificates of Analysis providing batch-specific quality information.",
  },
  {
    question: "How can I verify a product's COA?",
    answer:
      "Scan the QR code on your product or visit our COA library to review available testing documentation and batch details.",
  },
  {
    question: "Are these products intended for human use?",
    answer:
      "No. All Voltera Sciences products are supplied strictly for laboratory and in-vitro research. They are not intended for human or animal consumption.",
  },
  {
    question: "When will my order be shipped?",
    answer:
      "Eligible orders placed before our daily shipping cutoff may qualify for same-day dispatch. Delivery times depend on the selected shipping method.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-secondary/50 bg-white shadow-[0_10px_35px_rgba(7,26,67,0.09)]"
          : "border-primary/10 hover:border-primary/25 bg-white shadow-[0_4px_20px_rgba(7,26,67,0.03)]"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
        >
          <span
            className={`hidden font-sans text-[12px] font-bold ${
              isOpen ? "text-secondary-dark" : "text-primary/35"
            } sm:block`}
          >
            0{index + 1}
          </span>

          <span
            className={`font-heading flex-1 text-[14px] leading-[1.5] transition-colors duration-300 sm:text-[17px] ${
              isOpen ? "text-primary" : "group-hover:text-primary text-black"
            }`}
          >
            {faq.question}
          </span>

          <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "border-secondary bg-secondary text-primary"
                : "border-primary/10 bg-primary-soft text-primary group-hover:border-secondary/40"
            }`}
          >
            <Plus
              size={19}
              strokeWidth={2}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-primary/10 mx-5 border-t pt-4 pb-6 sm:mx-7">
            <p className="text-muted max-w-[680px] font-sans text-[13px] leading-[1.85] sm:text-[14px]">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-primary-soft relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 size-[400px] rounded-full bg-white/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-[700px] text-center sm:mb-12">
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked <span className="text-secondary">Questions.</span>
          </h2>

          <p className="text-muted mx-auto mt-5 max-w-[540px] font-sans text-[13px] leading-[1.8] sm:text-[15px]">
            Everything you need to know about our research compounds, laboratory
            verification, and ordering process.
          </p>
        </header>

        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
