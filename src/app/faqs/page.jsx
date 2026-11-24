import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  FlaskConical,
  Package,
  FileCheck2,
  MessageCircle,
  Plus,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Frequently Asked Questions | Voltera Sciences",
  description:
    "Find answers to frequently asked questions about Voltera Sciences research peptides, laboratory testing, product storage, ordering, shipping, and payments.",
};

const groups = [
  {
    title: "Products & Research",
    icon: FlaskConical,
    items: [
      {
        question: "Are your products intended for human use?",
        answer:
          "No. Products in the Voltera Sciences research collection are intended for scientific and laboratory research only, not for human or veterinary use.",
      },
      {
        question: "How do I select a product strength?",
        answer:
          "Open a product page and choose from the available strength options. Pricing and availability update for the selected variant.",
      },
      {
        question: "Do you provide dosing or administration guidance?",
        answer:
          "No. We do not provide dosing, administration, or personal-use guidance. Researchers should follow their applicable laboratory procedures and product documentation.",
      },
      {
        question: "How should products be stored?",
        answer:
          "Storage requirements vary by compound and formulation. Follow the documentation for your specific product and your laboratory's established procedures.",
      },
    ],
  },
  {
    title: "Ordering & Shipping",
    icon: Package,
    items: [
      {
        question: "How do multi-bottle discounts work?",
        answer:
          "On eligible product pages, select a 2-, 5-, or 10-bottle pack. The applicable discount is shown before you add the pack to your cart.",
      },
      {
        question: "When will I see shipping charges?",
        answer:
          "Shipping details and any available delivery estimates are shown during checkout. Final charges depend on the shipping setup for your store.",
      },
      {
        question: "Can I update quantities in my cart?",
        answer:
          "Yes. Use the plus and minus controls in your cart to adjust quantities or remove an item before checkout.",
      },
      {
        question: "How do I ask about an existing order?",
        answer:
          "Visit our Contact page and select Order support. Include your order reference if one is available, but do not send payment card details.",
      },
    ],
  },
  {
    title: "Documentation & Support",
    icon: FileCheck2,
    items: [
      {
        question: "Where can I find a Certificate of Analysis?",
        answer:
          "Open the relevant product page and review its Laboratory Documentation section. Certificates are displayed when available for that product or batch.",
      },
      {
        question: "Why is a certificate not shown for every product?",
        answer:
          "Some products may not have a linked document on the website. Contact our team to ask about available batch documentation rather than assuming a result.",
      },
      {
        question: "How can I contact Voltera Sciences?",
        answer:
          "Use the Contact page to prepare an inquiry about products, documentation, or your order.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-surface min-h-screen">
      <PageHero
        breadcrumb="FAQs"
        subtitle="We're Here to Help"
        title="Frequently Asked"
        highlight="Questions."
        description="Find answers to common questions about our research compounds, quality standards, shipping, and ordering process."
        mobileImage="/assets-v/voltera-faqs-mobile.png"
        desktopImage="/assets-v/voltera-faqs.png"
      />

      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:py-14">
        <aside className="min-w-0 lg:sticky lg:top-28">
          <div className="border-border rounded-2xl border bg-white p-3 sm:p-4">
            <h2 className="font-heading text-primary mb-3 hidden px-3 pt-2 text-base lg:block">
              Browse Topics
            </h2>

            <nav
              aria-label="FAQ topics"
              className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
            >
              {groups.map(({ title, icon: Icon }, index) => (
                <a
                  key={title}
                  href={`#faq-${index}`}
                  className="group bg-primary-soft/60 text-primary hover:border-secondary/30 hover:bg-primary-soft flex shrink-0 items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 lg:whitespace-normal"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="text-secondary-dark shrink-0"
                  />

                  {title}

                  <ChevronRight
                    size={15}
                    className="ml-auto hidden shrink-0 transition-transform group-hover:translate-x-0.5 lg:block"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className="border-secondary/30 from-primary-light via-accent to-primary relative isolate mt-5 hidden overflow-hidden rounded-2xl border bg-linear-to-br p-6 lg:block">
            <MessageCircle
              size={150}
              strokeWidth={0.7}
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-10 -z-10 text-white/10"
            />

            <span className="border-accent-light/30 text-accent-light flex size-12 items-center justify-center rounded-xl border bg-white/10">
              <MessageCircle size={25} strokeWidth={1.6} />
            </span>

            <h3 className="font-heading mt-5 text-lg text-white">
              Need More Help?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/85">
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>

            <Link
              href="/contact"
              className="group text-accent-light mt-5 inline-flex items-center gap-2 text-sm font-bold"
            >
              Contact Support
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </aside>

        <div className="min-w-0 space-y-10">
          {groups.map(({ title, icon: Icon, items }, index) => (
            <section
              key={title}
              id={`faq-${index}`}
              aria-labelledby={`faq-heading-${index}`}
              className="scroll-mt-32"
            >
              <header className="mb-5 flex items-center gap-3 sm:gap-4">
                <span className="border-secondary/30 from-primary-light via-accent to-primary text-accent-light flex size-12 shrink-0 items-center justify-center rounded-xl border bg-linear-to-br">
                  <Icon size={24} strokeWidth={1.6} />
                </span>

                <h2
                  id={`faq-heading-${index}`}
                  className="font-heading text-primary text-xl leading-snug sm:text-2xl"
                >
                  {title}
                </h2>
              </header>

              <div className="space-y-3">
                {items.map(({ question, answer }) => (
                  <details
                    key={question}
                    className="group border-border hover:border-primary/25 open:border-secondary/40 overflow-hidden rounded-xl border bg-white transition-all duration-300 open:shadow-sm"
                  >
                    <summary className="text-charcoal group-open:bg-primary-soft/60 group-open:text-primary flex min-h-18 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-base leading-relaxed font-semibold transition-colors sm:px-6 [&::-webkit-details-marker]:hidden">
                      <span>{question}</span>

                      <span className="border-primary/10 bg-primary-soft text-primary group-open:border-secondary/30 group-open:bg-primary group-open:text-accent-light flex size-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300">
                        <Plus
                          size={20}
                          strokeWidth={1.8}
                          className="transition-transform duration-300 group-open:rotate-45"
                        />
                      </span>
                    </summary>

                    <div className="border-border border-t px-4 py-5 sm:px-6">
                      <p className="border-secondary text-charcoal/80 border-l-2 pl-4 text-base leading-[1.9]">
                        {answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <section className="border-secondary/30 from-primary via-accent to-primary relative isolate overflow-hidden rounded-2xl border bg-linear-to-r p-6 sm:p-8">
            <MessageCircle
              aria-hidden="true"
              size={220}
              strokeWidth={0.6}
              className="pointer-events-none absolute -right-8 -bottom-20 -z-10 text-white/10"
            />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-accent-light mb-2 text-xs font-bold tracking-widest uppercase">
                  We're Here to Help
                </p>

                <h2 className="font-heading text-2xl text-white">
                  Still Have Questions?
                </h2>

                <p className="mt-3 max-w-md text-[15px] leading-7 text-white/85">
                  Get in touch with our team for help with product information,
                  orders, or general inquiries.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-hero-primary h-12 shrink-0 px-6 text-sm"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
