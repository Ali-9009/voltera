import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  ArrowRight,
  ShieldAlert,
  FlaskConical,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import { Visa, Mastercard, Paypal } from "react-payment-logos/dist/flat";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "COA", href: "/coa" },
      { label: "Partner Program", href: "/partner-program" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Research Disclaimer", href: "/research-disclaimer" },
    ],
  },
];

const paymentMethods = [
  { name: "Visa", Icon: Visa },
  { name: "Mastercard", Icon: Mastercard },
  { name: "PayPal", Icon: Paypal },
];

const decorativeSquares = [
  {
    className:
      "left-[3%] top-[12%] size-20 rotate-12 bg-white/[0.035] border-white/[0.08]",
  },
  {
    className:
      "left-[9%] top-[25%] size-12 rotate-12 bg-secondary/[0.07] border-secondary/15",
  },
  {
    className:
      "left-[30%] top-[8%] size-16 -rotate-12 bg-white/[0.025] border-white/[0.07]",
  },
  {
    className:
      "right-[5%] top-[12%] size-28 rotate-[20deg] bg-white/[0.035] border-white/[0.09]",
  },
  {
    className:
      "right-[15%] top-[32%] size-14 rotate-[20deg] bg-secondary/[0.06] border-secondary/15",
  },
  {
    className:
      "left-[5%] bottom-[15%] size-24 -rotate-12 bg-primary-light/[0.08] border-white/[0.08]",
  },
  {
    className:
      "left-[43%] bottom-[8%] size-12 rotate-12 bg-secondary/[0.06] border-secondary/15",
  },
  {
    className:
      "right-[6%] bottom-[12%] size-20 rotate-12 bg-white/[0.03] border-white/[0.08]",
  },
];

function FooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#020817_0%,#071A43_50%,#10265B_100%)]" />

      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] opacity-30" />

      <div className="absolute -top-40 left-[20%] size-[450px] rounded-full bg-[#1746A2]/15 blur-[110px]" />

      <div className="absolute right-[10%] -bottom-48 size-[450px] rounded-full bg-[#1746A2]/15 blur-[110px]" />

      {decorativeSquares.map((square, index) => (
        <span
          key={index}
          className={`absolute rounded-[10px] border ${square.className}`}
        />
      ))}

      <div className="absolute top-12 -right-12 grid grid-cols-5 gap-3 opacity-35">
        {Array.from({ length: 25 }, (_, index) => (
          <span
            key={index}
            className={`size-4 rounded-[3px] ${
              index % 4 === 0
                ? "bg-secondary/25"
                : "border border-white/15 bg-white/[0.04]"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-16 -left-12 grid grid-cols-4 gap-3 opacity-25">
        {Array.from({ length: 16 }, (_, index) => (
          <span
            key={index}
            className={`size-5 rounded-[3px] ${
              index % 3 === 0
                ? "bg-secondary/20"
                : "border border-white/15 bg-white/[0.04]"
            }`}
          />
        ))}
      </div>

      <div className="via-secondary absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
}

function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-8">
      {footerLinks.map((column) => (
        <nav
          key={column.title}
          aria-label={`${column.title} footer navigation`}
          className="min-w-0"
        >
          <h3 className="font-heading text-[15px] text-white sm:text-[17px]">
            {column.title}
          </h3>

          <span className="bg-secondary mt-3 block h-[2px] w-8 rounded-full" />

          <ul className="mt-6 space-y-4">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group hover:text-accent-light inline-flex items-start gap-2 font-sans text-[12px] leading-[1.6] text-white/65 transition-colors duration-300 sm:text-[13px]"
                >
                  <ArrowRight
                    size={13}
                    className="text-secondary mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}

function FooterPayments() {
  return (
    <div className="flex flex-col gap-5 border-t border-white/15 py-7 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="border-secondary/30 bg-secondary/10 text-accent-light flex size-10 shrink-0 items-center justify-center rounded-lg border">
          <LockKeyhole size={19} strokeWidth={1.7} />
        </span>

        <div>
          <h3 className="font-heading text-[14px] text-white">
            Secure Payment Options
          </h3>

          <p className="mt-1 font-sans text-[11px] text-white/55">
            Available payment methods are confirmed at checkout.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {paymentMethods.map(({ name, Icon }) => (
          <div
            key={name}
            role="img"
            aria-label={name}
            title={name}
            className="flex h-[44px] w-[72px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 sm:h-[48px] sm:w-[78px]"
          >
            <Icon width={68} height={44} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden text-white">
      <FooterBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.15fr_1.5fr] lg:gap-20 lg:pb-16">
          <div className="max-w-[390px]">
            <Link
              href="/"
              aria-label="Voltera Sciences homepage"
              className="inline-flex items-center"
            >
              <Image
                src="/assets-v/voltera-logo.png"
                alt="Voltera Sciences"
                width={230}
                height={100}
                className="h-auto w-[175px] object-contain sm:w-[205px]"
              />
            </Link>

            <p className="mt-6 max-w-[355px] font-sans text-[13px] leading-[1.9] text-white/65">
              Built for precision-driven research. Explore laboratory compounds
              with clear product information and accessible quality
              documentation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-accent-light inline-flex items-center gap-2 font-sans text-[11px] font-medium">
                <FlaskConical size={16} strokeWidth={1.7} />
                Research Focused
              </span>

              <span className="text-accent-light inline-flex items-center gap-2 font-sans text-[11px] font-medium">
                <ShieldCheck size={16} strokeWidth={1.7} />
                Quality Focused
              </span>
            </div>

            <Link
              href="/shop"
              className="group text-accent-light mt-7 inline-flex items-center gap-2 font-sans text-[13px] font-semibold transition-colors duration-300 hover:text-white"
            >
              Explore Collection
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <FooterNavigation />
        </div>

        <section
          aria-labelledby="footer-disclaimer-heading"
          className="border-t border-white/15 py-7"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-accent-light flex size-10 shrink-0 items-center justify-center">
              <ShieldAlert size={23} strokeWidth={1.6} />
            </span>

            <div>
              <h3
                id="footer-disclaimer-heading"
                className="font-heading text-[14px] text-white sm:text-[16px]"
              >
                Research Use Disclaimer
              </h3>

              <p className="mt-2 max-w-[1050px] font-sans text-[12px] leading-[1.85] text-white/55 sm:text-[13px]">
                All products offered by Voltera Sciences are intended strictly
                for laboratory and in-vitro research purposes. They are not
                intended for human or animal consumption, medical treatment,
                clinical administration, veterinary use, or diagnostic
                applications. These products have not been evaluated or approved
                by the United States Food and Drug Administration. Nothing
                offered or described here is intended to diagnose, treat, cure,
                mitigate, or prevent any disease or health condition.
              </p>
            </div>
          </div>
        </section>

        <FooterPayments />

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-[11px] text-white/50 sm:text-[12px]">
            © {new Date().getFullYear()} Voltera Sciences. All rights reserved.
          </p>

          <p className="text-accent-light font-sans text-[10px] font-semibold tracking-[0.13em] uppercase sm:text-[11px]">
            Purity • Precision • Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
