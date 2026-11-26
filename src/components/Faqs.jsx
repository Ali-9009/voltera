import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are research peptides?",
    answer:
      "Research peptides are short chains of amino acids used for laboratory, in-vitro, or analytical science work. They are not approved for human or veterinary use and are intended solely for experimental or research purposes.",
  },
  {
    question: "How should the peptides be stored?",
    answer:
      "Peptides are best kept in cool, dry conditions. Lyophilized (powder) peptides should be protected from moisture and stored according to the product-specific recommendations. After reconstitution, follow laboratory-specific guidance and the storage instructions indicated on the product page.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders placed by 3 PM EST ship the same or next business day. Delivery times depend on the destination; most U.S. orders arrive in 3 business days with standard shipping services.",
  },
  {
    question: "What is your refund / return policy?",
    answer:
      "Because these are specialized research compounds, we do not accept returns once a product has left our facility, unless there is an error on our part or the product fails quality control. If you believe there is a quality issue, contact us with your order number and batch or lot information so we can review the COA and available options.",
  },
  {
    question: "Are you responsible for how your peptides are used?",
    answer:
      "No. All compounds sold by Voltera Sciences are for laboratory research use only and are not intended for human or veterinary consumption. We do not condone, support, or accept any misuse of our products.",
    additional:
      "By purchasing from our site, you agree that you are solely responsible for how these compounds are handled, stored, and used. Voltera Sciences assumes no liability for misuse or non-research applications.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-14 sm:px-6 md:py-20 my-4"
    >
      <div className="mx-auto max-w-[816px]">
        <header className="mb-9 text-center sm:mb-12">
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>

          <p className="text-primary-dark/75 mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.7] sm:text-base">
            Find answers to common questions about our research compounds,
            product storage, shipping, and ordering policies.
          </p>
        </header>

        <div className="border-primary/15 border-t">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item border-primary/15 border-b">
              <summary className="font-heading text-primary hover:text-secondary-dark flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base leading-[1.35] font-semibold transition-colors sm:text-lg">
                <span>{faq.question}</span>
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full">
                  <ChevronDown size={17} aria-hidden="true" />
                </span>
              </summary>

              <div className="text-primary-dark/80 space-y-3 pb-6 text-[15px] leading-[1.7] sm:pr-12 sm:text-base">
                <p>{faq.answer}</p>
                {faq.additional && <p>{faq.additional}</p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
