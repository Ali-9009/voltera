import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Voltera Sciences",
  description:
    "Learn how Voltera Sciences collects, uses, protects, and manages your personal information, cookies, and privacy preferences.",
};

const sections = [
  {
    title: "Privacy Policy",
    paragraphs: [
      "Effective Date: April 26, 2026",
      "Voltera Sciences respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard information when you visit our website, place an order, create an account, or communicate with us.",
    ],
  },
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect information you provide directly, including your name, email address, phone number, billing address, shipping address, account details, order history, and customer service communications.",
      "We may also collect limited technical information such as IP address, browser type, device information, website activity, referral source, and cookie data to help improve website performance and security.",
    ],
  },
  {
    title: "2. Payment Information",
    paragraphs: [
      "Payment information is processed securely by third-party payment providers. Voltera Sciences does not store full credit card numbers or sensitive payment credentials on our website servers.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    items: [
      "To process, confirm, and fulfill orders",
      "To send order updates, invoices, and shipping notifications",
      "To provide customer support and respond to inquiries",
      "To verify account activity and maintain website security",
      "To improve website performance, content, and user experience",
      "To comply with applicable legal, tax, and regulatory obligations",
    ],
  },
  {
    title: "4. Research Use Only Notice",
    paragraphs: [
      "Voltera Sciences provides products intended strictly for laboratory research use only. Information collected during checkout may be used to help verify orders, support compliance procedures, prevent misuse, and maintain responsible business records.",
      "Our products are not intended for human consumption, clinical use, diagnostic use, therapeutic use, veterinary use, or any household application. Customers are responsible for ensuring products are handled only by qualified individuals in appropriate research settings.",
    ],
  },
  {
    title: "5. Information Sharing",
    paragraphs: [
      "We do not sell or rent your personal information. We may share limited information only with trusted third-party service providers needed to operate our business.",
    ],
    items: [
      "Payment processors",
      "Shipping and fulfillment providers",
      "Website hosting and security services",
      "Email, SMS, and customer support platforms",
      "Analytics and performance monitoring tools",
    ],
    afterItems: [
      "We may also disclose information when required by law, legal process, fraud prevention, compliance review, or to protect the rights and safety of Voltera Sciences, our customers, or others.",
    ],
  },
  {
    title: "6. Cookies and Tracking",
    paragraphs: [
      "Our website may use cookies, pixels, and similar technologies to remember preferences, support cart functionality, analyze traffic, measure performance, and improve the browsing experience.",
      "You may disable cookies through your browser settings, but some website features may not function properly.",
    ],
  },
  {
    title: "7. Marketing Communications",
    paragraphs: [
      "If you choose to subscribe, we may send promotional emails, product updates, or company announcements. You may unsubscribe at any time by using the opt-out link included in our emails.",
    ],
  },
  {
    title: "8. Data Security",
    paragraphs: [
      "We use reasonable administrative, technical, and physical safeguards to help protect your information. However, no online transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "9. Data Retention",
    paragraphs: [
      "We retain personal information only as long as necessary for business, legal, accounting, tax, security, fraud prevention, and compliance purposes.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have the right to request access, correction, deletion, or restriction of your personal information. Some requests may be limited by legal, tax, compliance, or order recordkeeping requirements.",
    ],
  },
  {
    title: "11. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website means you accept the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Learn how personal information may be collected, used, and protected when interacting with Voltera Sciences."
      sections={sections}
    />
  );
}
