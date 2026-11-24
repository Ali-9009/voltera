import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Voltera Sciences",
  description:
    "Review the terms and conditions governing the use of the Voltera Sciences website, product purchases, research use requirements, and customer responsibilities.",
};

const sections = [
  {
    title: "Terms & Conditions",
    paragraphs: [
      "Understand your responsibilities when browsing Voltera Sciences, placing an order, and purchasing research products. This page explains permitted uses, eligibility, payments, shipping, and other important terms.",
      "Existing policy effective date: April 26, 2026",
      "Please read before placing an order. These Terms govern your relationship with Voltera Sciences when you access the website or purchase Products. They should be read alongside our Shipping, Return, and Privacy policies.",
    ],
  },
  {
    title: "01. Acceptance & Definitions",
    paragraphs: [
      "These Terms & Conditions govern access to the Voltera Sciences website, the placement and acceptance of orders, and the purchase, receipt, and use of products. By accessing this website or submitting an order, you agree to these Terms and the policies expressly referenced on this page.",
      'For these Terms, "Voltera Sciences," "we," or "us" refers to Voltera Sciences; "Buyer" or "you" refers to the person or organization using the website or placing an order; "Products" refers to research materials and related items offered through the website; and "Research Use Only" ("RUO") means use solely in appropriate laboratory research or analytical settings.',
      "If you do not agree to these Terms, do not use this website or purchase Products.",
    ],
  },
  {
    title: "02. Research Use Only",
    paragraphs: [
      "All products sold by Voltera Sciences are intended strictly for laboratory research, in vitro testing, and analytical purposes only. Products are not intended for human consumption, clinical use, diagnostic use, therapeutic use, veterinary use, or household application.",
      "By purchasing from us, you acknowledge the research-only designation and represent that the Products will be used solely for lawful, appropriate research purposes by persons qualified to handle them.",
    ],
    items: [
      "No human or animal consumption, administration, or other personal use.",
      "No clinical treatment, diagnosis, therapeutic use, or veterinary application.",
      "No use as a dietary supplement, cosmetic, medicine, or household product.",
    ],
    afterItems: [
      "Important: These Products are not offered as treatments or cures for any condition. No website content should be interpreted as medical or veterinary advice.",
    ],
  },
  {
    title: "03. Eligibility & Qualified Purchasers",
    paragraphs: [
      "By visiting the website or placing an order, you confirm that you are at least 18 years old and legally permitted to purchase, receive, and possess the Products in your jurisdiction.",
      "You further affirm that you have the qualifications, authority, laboratory setting, knowledge, and equipment needed to handle research materials responsibly, or that you are purchasing on behalf of an appropriately qualified organization.",
    ],
    items: [
      "Purchases must be for legitimate laboratory research or analytical work.",
      "The Buyer must be able to comply with applicable handling, storage, and disposal requirements.",
      "Any information supplied for an order must be complete and accurate.",
    ],
  },
  {
    title: "04. Buyer Responsibility & Safe Handling",
    paragraphs: [
      "The Buyer accepts responsibility for the lawful receipt, handling, storage, use, transfer, and disposal of Products, including establishing appropriate safety procedures and preventing unauthorized access or misuse.",
      "You are responsible for evaluating hazards, training relevant personnel, maintaining suitable facilities and equipment, and following applicable research-material handling requirements.",
    ],
    items: [
      "Implement appropriate laboratory safety and hygiene controls.",
      "Communicate potential hazards to persons who may handle the Products.",
      "Store Products securely and prevent unauthorized access.",
      "Arrange lawful disposal and comply with all applicable regulations.",
    ],
    afterItems: [
      "Buyer responsibility: To the extent permitted by applicable law, the Buyer agrees to defend, indemnify, and hold Voltera Sciences harmless from third-party claims caused by the Buyer's unlawful handling, misuse, or violation of these Terms.",
    ],
  },
  {
    title: "05. Prohibited Uses & No Usage Guidance",
    paragraphs: [
      "Products may not be administered to, ingested by, injected into, inhaled by, or applied to humans or animals. Products must not be marketed, repackaged, compounded, or resold for unauthorized medical, supplement, cosmetic, or veterinary use.",
      "Voltera Sciences does not provide instructions, recommendations, or protocols for human or animal dosing, administration, preparation for personal use, or clinical application. Website materials and customer support are not substitutes for professional research oversight.",
      "Third-party comments, reviews, social-media posts, or independently published materials should not be treated as authorized instructions from Voltera Sciences.",
    ],
  },
  {
    title: "06. Orders & Acceptance",
    paragraphs: [
      "All orders are subject to review, acceptance, and product availability. Voltera Sciences may refuse or cancel an order at its discretion, including where there is suspected misuse, inaccurate information, fraudulent activity, regulatory concerns, or a violation of these Terms.",
      "As stated in our current policy, orders cannot be cancelled once submitted and processed. If you discover an order error, contact support promptly; any changes depend on the processing status and our ability to accommodate the request.",
      "An order acknowledgment does not necessarily constitute final acceptance of an order.",
    ],
  },
  {
    title: "07. Pricing & Payments",
    paragraphs: [
      "Prices are displayed in U.S. dollars (USD) and may be changed without notice. Applicable charges and available payment methods are shown during checkout.",
      "Payments are processed by third-party payment service providers. Voltera Sciences does not store customers' full payment-card details on its website servers. Payment approval, fraud checks, and other processing conditions may affect order acceptance.",
    ],
  },
  {
    title: "08. Shipping & Delivery",
    paragraphs: [
      "Shipping dates and transit times are estimates, not guaranteed arrival dates, unless a specific service explicitly states otherwise. Delivery may be affected by carriers, weather, destination restrictions, customs procedures where applicable, or incorrect information provided by the Buyer.",
      "Customers must provide accurate shipping details. Consistent with our existing Terms, risk of loss transfers to the customer once an order has shipped, subject to any overriding applicable law.",
      "For current processing cutoffs, delivery choices, tracking, and shipment-related issues, refer to our Shipping Policy.",
    ],
  },
  {
    title: "09. Returns & Refunds",
    paragraphs: [
      "Due to the nature of our research products, all sales are final except for limited circumstances addressed in the Voltera Sciences Refund & Return Policy.",
      "Any request regarding an incorrect, damaged, delayed, or otherwise problematic order must be reviewed under the applicable published policy. Contact support with your order details for assistance.",
    ],
  },
  {
    title: "10. Sales Restrictions & Enforcement",
    paragraphs: [
      "Voltera Sciences reserves the right to limit quantities, restrict sales, suspend service, or decline transactions when reasonably necessary for legal compliance, fraud prevention, safety, or enforcement of these Terms.",
      "We may request additional order information, review suspected misuse, preserve relevant transaction records, or respond to lawful requests from regulators and authorities as permitted or required by law.",
    ],
    items: [
      "Orders may be declined or cancelled for suspected unlawful or prohibited use.",
      "Fraudulent, misleading, or incomplete order information may result in account or order restrictions.",
      "We may take reasonable steps to protect the website, customers, and business operations.",
    ],
  },
  {
    title: "11. Payment Disputes & Chargebacks",
    paragraphs: [
      "If you have a billing, fulfillment, or order concern, we encourage you to contact Voltera Sciences support before initiating a payment dispute. Our team can review order information and available resolution options.",
      "If a chargeback or other payment dispute is initiated, we may provide the payment provider with relevant order confirmations, transaction records, shipping details, delivery information, and support communications to respond to the dispute.",
      "We may restrict future transactions in cases involving verified fraud or repeated misuse of the payment dispute process, as permitted by law.",
    ],
  },
  {
    title: "12. Compliance with Applicable Laws",
    paragraphs: [
      "Buyers are responsible for confirming that purchase, receipt, possession, storage, use, and disposal of Products are permitted in their location and intended laboratory setting.",
      "You must comply with all applicable local, state, federal, and international laws, safety requirements, and restrictions governing the particular Products. Depending on the Product and activity, relevant requirements may include the Federal Food, Drug, and Cosmetic Act, the Toxic Substances Control Act, and other applicable rules.",
      "Products must not be used or introduced into commerce in a manner that violates applicable law.",
    ],
  },
  {
    title: "13. Product Disclaimers & No Warranties",
    paragraphs: [
      "Voltera Sciences sells research materials for laboratory and analytical purposes. The Products are not marketed for diagnosis, treatment, cure, or prevention of disease, and website information is not intended to provide medical advice.",
      'As stated in our existing Terms, Products are provided "as is," without warranties of any kind, express or implied, to the fullest extent permitted by applicable law. Any rights that cannot legally be excluded remain unaffected.',
    ],
  },
  {
    title: "14. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Voltera Sciences shall not be liable for direct, indirect, incidental, special, or consequential damages arising from use or misuse of Products or this website, including damages associated with prohibited uses or failure to comply with these Terms.",
      "Nothing in these Terms excludes or limits any liability or consumer right that cannot lawfully be excluded or limited.",
    ],
  },
  {
    title: "15. Intellectual Property",
    paragraphs: [
      "All content made available through the Voltera Sciences website—including copy, graphics, logos, product imagery, page designs, and other materials—is owned by or licensed to Voltera Sciences unless otherwise indicated.",
      "You may not copy, reproduce, distribute, republish, or commercially exploit protected website materials without prior written permission, except where applicable law expressly allows it.",
    ],
  },
  {
    title: "16. Privacy & Communications",
    paragraphs: [
      "Personal information associated with website visits, accounts, support requests, and transactions is handled under the Voltera Sciences Privacy Policy. This may include information needed for billing, shipping, account security, customer service, and lawful business operations.",
      "If you subscribe to promotional communications, you may unsubscribe using the instructions provided in those messages. Transactional and service-related messages may still be necessary for order fulfillment or account support.",
    ],
  },
  {
    title: "17. Other Legal Provisions",
    paragraphs: [
      "Events beyond reasonable control: Voltera Sciences may experience interruptions or delays caused by carrier disruptions, natural disasters, severe weather, network outages, government actions, or similar circumstances beyond its reasonable control.",
      "Severability: If a provision of these Terms is held invalid or unenforceable, the remaining provisions continue to apply to the extent permitted by law.",
      "Related policies: Our Shipping Policy, Refund & Return Policy, and Privacy Policy provide additional details about particular aspects of our services.",
    ],
  },
  {
    title: "18. Changes to Terms",
    paragraphs: [
      "Voltera Sciences may revise these Terms & Conditions from time to time. The updated terms will be published on this website, and continued use of the website after an update constitutes acceptance of the revised terms, to the extent permitted by applicable law.",
      "Please review this page periodically. The effective date displayed above should be updated when revised terms are adopted.",
    ],
  },
  {
    title: "19. Questions & Contact",
    paragraphs: [
      "If you have questions about these Terms, permitted research use, order status, payments, or a related policy, contact the Voltera Sciences support team.",
      "Email: support@volterasciences.com  ·  Call or text: (754) 335-5276.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Please review the conditions governing website access, product purchases, and responsible use of our research collection."
      sections={sections}
    />
  );
}
