import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Shipping Policy | Voltera Sciences",
  description:
    "Learn about Voltera Sciences shipping policies, order processing, delivery timelines, shipping charges, and order tracking.",
};

const sections = [
  {
    title: "Shipping Policy",
    paragraphs: [
      "At Voltera Sciences, we aim to make every shipment clear, reliable, and easy to track. This policy explains our shipping process, available delivery options, order processing, tracking, and important information you should know before placing an order.",
    ],
  },
  {
    title: "01. Complimentary Ground Shipping",
    paragraphs: [
      "Voltera Sciences offers complimentary ground shipping on qualifying orders with an eligible merchandise total of $150 or more.",
      "Eligibility is determined using the qualifying order amount after applicable product discounts or coupon reductions.",
      "Please note: Shipping eligibility, carrier availability, and delivery service may vary based on destination, promotional conditions, or operational availability.",
    ],
  },
  {
    title: "02. Order Processing & Same-Day Shipping",
    paragraphs: [
      "We work to process eligible orders as quickly as possible. Orders submitted Monday through Friday before 3:00 PM CT, or Saturday before 2:00 PM CT, may qualify for same-day processing.",
      "Orders received after the applicable cutoff, on Sundays, or during holidays may be processed on the next available business day.",
    ],
  },
  {
    title: "03. Expedited Shipping Options",
    paragraphs: [
      "When available, customers may select expedited shipping services during checkout.",
    ],
    items: [
      "Available shipping services are displayed during checkout.",
      "Shipping prices are calculated based on the destination and selected delivery method.",
      "Estimated transit times begin once the carrier receives the shipment.",
      "Delivery estimates are carrier estimates and should not be considered guaranteed arrival times unless specifically stated by the selected carrier service.",
    ],
  },
  {
    title: "04. Carrier Selection & Address Restrictions",
    paragraphs: [
      "Shipping services available for an order may vary depending on the destination, package requirements, and selected delivery speed.",
    ],
    items: [
      "Carrier availability may differ by destination.",
      "Certain addresses may have limited shipping service options.",
      "P.O. boxes and other restricted address types may only be available when supported by the applicable shipping service.",
      "Please enter a complete and accurate delivery address during checkout to help avoid delays or returned shipments.",
    ],
  },
  {
    title: "05. Tracking & Delivery Confirmation",
    paragraphs: [
      "Once your shipment has been prepared and accepted by the carrier, tracking information will normally be sent to the email address associated with your order.",
      "Carrier tracking pages should be used for the latest package movement and delivery status after dispatch.",
      "Tracking information may require some time to become active after a shipping label has been generated.",
    ],
  },
  {
    title: "06. Shipping Delays",
    paragraphs: [
      "While we work to ensure orders are prepared and transferred to the carrier promptly, certain events are outside of our direct control.",
    ],
    items: [
      "Carrier delays or network disruptions",
      "Severe weather or natural events",
      "Incorrect or incomplete delivery information",
      "Holiday or high-volume shipping periods",
      "Service interruptions or other carrier-related circumstances",
    ],
    afterItems: [
      "Important: Transit times and delivery estimates may change after a package has been transferred to the shipping carrier.",
    ],
  },
  {
    title: "07. Address Accuracy & Order Review",
    paragraphs: [
      "Customers are responsible for entering a complete and accurate shipping address at checkout.",
      "Incorrect apartment numbers, postal codes, street details, names, or other information may result in delayed, misrouted, or returned packages.",
      "Review your shipping details carefully before submitting your order. If you notice an error after ordering, contact our support team as quickly as possible.",
    ],
  },
  {
    title: "08. Delayed, Damaged & Delivery Issues",
    paragraphs: [
      "We highly recommend adding shipping protection to your order at checkout. This optional feature can help ensure a smoother resolution if your package is delayed, damaged, or undeliverable.",
      "If your tracking information shows an unexpected delay, delivery exception, or other issue, first review the carrier's current tracking details.",
      "If additional assistance is required, contact Voltera Sciences support at (email address) and provide the relevant order information so our team can review the situation.",
    ],
  },
  {
    title: "09. Questions?",
    paragraphs: [
      "If you have questions regarding shipping options, tracking, delivery timing, or an existing shipment, our support team is available to assist.",
    ],
  },
];


export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      description="Important information about order processing, shipping methods, delivery times, and shipment tracking."
      sections={sections}
    />
  );
}