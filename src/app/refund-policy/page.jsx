import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Refund Policy | Voltera Sciences",
  description:
    "Learn about Voltera Sciences refund policies, order cancellations, refund eligibility, and procedures for damaged or incorrect products.",
};

const sections = [
  {
    title: "Refund & Return Policy",
    paragraphs: [
      "Effective Date: April 26, 2026",
      "This Refund & Return Policy outlines how Voltera Sciences handles order issues, shipping concerns, and limited exceptions. Due to the nature of our products, all sales are considered final once an order has been successfully placed.",
    ],
  },
  {
    title: "1. All Sales Are Final",
    paragraphs: [
      "All products offered by Voltera Sciences are intended strictly for laboratory research use only. Due to the sensitive and controlled nature of these materials, we do not accept returns, exchanges, or cancellations once an order has been processed.",
      "By placing an order, you acknowledge and agree that all purchases are final.",
    ],
  },
  {
    title: "2. Order Issues & Exceptions",
    paragraphs: [
      "While all sales are final, we may review limited cases under the following conditions:",
    ],
    items: [
      "Incorrect item received",
      "Damaged products upon delivery",
      "Lost shipments confirmed by carrier",
    ],
    afterItems: [
      "In such cases, we may offer a replacement, reshipment, or store credit at our discretion.",
    ],
  },
  {
    title: "3. Reporting an Issue",
    paragraphs: [
      "Any issue must be reported within 48 hours of delivery. Requests submitted after this timeframe may not be eligible for review.",
      "Customers may be required to provide supporting evidence such as photos of the package, product, or shipping label to assist in verification.",
    ],
  },
  {
    title: "4. Shipping Responsibility",
    paragraphs: [
      "Once an order has been shipped, Voltera Sciences is not responsible for delays caused by carriers, customs processing, or incorrect shipping information provided at checkout.",
      "Customers are responsible for ensuring all shipping details are accurate before completing their order.",
    ],
  },
  {
    title: "5. Non-Returnable Items",
    paragraphs: [
      "For safety, compliance, and quality control reasons, all products are non-returnable and non-refundable. We cannot accept returned items under any circumstances.",
    ],
  },
  {
    title: "6. Policy Updates",
    paragraphs: [
      "Voltera Sciences reserves the right to update or modify this policy at any time without prior notice. Continued use of our website indicates acceptance of these terms.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="Information about order cancellations, damaged shipments, returns, and refund requests."
      sections={sections}
    />
  );
}