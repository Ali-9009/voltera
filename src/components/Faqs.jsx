"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  Plus,
  ArrowUpRight,
  MessageCircle,
  FlaskConical,
  ThermometerSnowflake,
  Truck,
  PackageCheck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const faqs = [
  {
    question: "What are research peptides?",
    answer:
      "Research peptides are short chains of amino acids used for laboratory, in-vitro, or analytical science work. They are not approved for human or veterinary use and are intended solely for experimental or research purposes.",
    icon: FlaskConical,
  },
  {
    question: "How should the peptides be stored?",
    answer:
      "Peptides are best kept in cool, dry conditions. Lyophilized (powder) peptides should be protected from moisture and stored according to the product-specific recommendations. After reconstitution, follow laboratory-specific guidance and the storage instructions indicated on the product page.",
    icon: ThermometerSnowflake,
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders placed by 3 PM EST ship the same or next business day. Delivery times depend on the destination; most U.S. orders arrive in 3 business days with standard shipping services.",
    icon: Truck,
  },
  {
    question: "What is your refund / return policy?",
    answer:
      "Because these are specialized research compounds, we do not accept returns once a product has left our facility, unless there is an error on our part or the product fails quality control. If you believe there is a quality issue, contact us with your order number and batch or lot information so we can review the COA and available options.",
    icon: PackageCheck,
  },
  {
    question: "Are you responsible for how your peptides are used?",
    answer:
      "No. All compounds sold by Voltera Sciences are for laboratory research use only and are not intended for human or veterinary consumption. We do not condone, support, or accept any misuse of our products.",
    additional:
      "By purchasing from our site, you agree that you are solely responsible for how these compounds are handled, stored, and used. Voltera Sciences assumes no liability for misuse or non-research applications.",
    icon: ShieldCheck,
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const id = useId();
  const contentId = `${id}-content`;
  const buttonId = `${id}-button`;
  const Icon = faq.icon;

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-[16px] border transition-[border-color,background-color,box-shadow] duration-300 sm:rounded-[20px] ${
        isOpen
          ? "border-secondary/60 bg-white shadow-[0_8px_30px_rgba(18,51,107,0.08)]"
          : "border-border hover:border-secondary/40 bg-white hover:shadow-md"
      }`}
    >
      <span
        aria-hidden="true"
        className={`from-secondary-dark via-accent-light to-secondary-dark pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-linear-to-b transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        aria-hidden="true"
        className={`text-primary/[0.035] pointer-events-none absolute -right-8 -bottom-12 -z-10 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon size={180} strokeWidth={1} />
      </span>

      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="focus-visible:ring-secondary flex w-full items-center gap-3 px-3.5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset sm:gap-4 sm:px-5 sm:py-5"
        >
          <span
            className={`relative flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 sm:size-12 ${
              isOpen
                ? "border-secondary/30 from-secondary/20 to-accent-light/30 text-primary bg-linear-to-br"
                : "border-primary/10 bg-primary-soft text-primary group-hover:border-secondary/30"
            }`}
          >
            <Icon size={21} strokeWidth={1.7} aria-hidden="true" />

            <span
              aria-hidden="true"
              className={`absolute -top-1.5 -right-1.5 flex size-[18px] items-center justify-center rounded-full border border-white font-sans text-[8px] font-extrabold transition-colors duration-300 ${
                isOpen
                  ? "bg-secondary text-primary-dark"
                  : "bg-primary text-white"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </span>

          <span
            className={`flex-1 font-sans text-[13px] leading-[1.5] font-bold transition-colors duration-300 sm:text-[16px] ${
              isOpen ? "text-primary" : "text-charcoal group-hover:text-primary"
            }`}
          >
            {faq.question}
          </span>

          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-9 ${
              isOpen
                ? "border-secondary/50 from-secondary-dark via-accent-light to-secondary-dark text-primary-dark bg-linear-to-r"
                : "border-primary/10 bg-primary-soft text-primary group-hover:border-secondary/40"
            }`}
          >
            <Plus
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
              className={`transition-transform duration-300 motion-reduce:transition-none ${
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
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-primary/10 mx-4 border-t pt-4 pb-5 sm:mr-6 sm:ml-[84px]">
            <p className="text-muted font-sans text-[13px] leading-[1.85] sm:text-[14px]">
              {faq.answer}
            </p>

            {faq.additional && (
              <p className="text-primary mt-3 font-sans text-[13px] leading-[1.85] font-medium sm:text-[14px]">
                {faq.additional}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="from-primary-soft to-primary-light/10 relative isolate overflow-hidden bg-linear-to-br via-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="bg-primary-light/10 pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="bg-secondary/10 pointer-events-none absolute -bottom-40 -left-40 size-[450px] rounded-full blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="border-primary/5 pointer-events-none absolute top-10 -right-32 size-[350px] rotate-45 rounded-[50px] border"
      />

      <div
        aria-hidden="true"
        className="border-primary/5 pointer-events-none absolute top-20 -right-24 size-[350px] rotate-45 rounded-[50px] border"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 xl:gap-20">
        <div className="min-w-0">
          <header className="text-center lg:text-left">
            <h2 id="faq-heading" className="section-heading">
              Frequently
              <br className="hidden lg:block" /> Asked{" "}
              <span className="text-secondary">Questions.</span>
            </h2>

            <p className="text-muted mx-auto mt-5 max-w-[420px] font-sans text-[13px] leading-[1.85] sm:text-[15px] lg:mx-0">
              Find answers to common questions about our research compounds,
              product storage, shipping, and ordering policies.
            </p>
          </header>

          <aside className="group border-secondary/30 from-primary-light via-primary to-primary-dark shadow-primary/10 relative isolate mt-8 hidden overflow-hidden rounded-[24px] border bg-linear-to-br p-7 text-white shadow-xl lg:block">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-14 -right-14 size-44 rotate-45 rounded-[32px] border border-white/10 bg-white/5"
            />

            <span
              aria-hidden="true"
              className="border-accent-light/20 pointer-events-none absolute -top-20 -right-5 size-44 rotate-45 rounded-[32px] border"
            />

            <Headphones
              aria-hidden="true"
              size={180}
              strokeWidth={1}
              className="pointer-events-none absolute -right-8 -bottom-10 text-white/[0.06] transition-transform duration-500 group-hover:scale-110"
            />

            <div className="relative">
              <span className="border-accent-light/30 text-accent-light flex size-13 items-center justify-center rounded-[16px] border bg-white/10">
                <Headphones size={26} strokeWidth={1.6} />
              </span>

              <h3 className="font-heading mt-5 text-[21px] leading-tight">
                Still Have Questions?
              </h3>

              <p className="mt-3 max-w-[300px] font-sans text-[13px] leading-[1.8] text-white/80">
                Our support team is here to help with your product and
                order-related questions.
              </p>

              <div className="mt-6">
                <Link href="/contact" className="btn-hero-primary">
                  Contact Support
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
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

          <div className="mt-3 flex justify-center lg:hidden">
            <Link href="/contact" className="btn-primary h-11 px-6 text-[13px]">
              Contact Support
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
