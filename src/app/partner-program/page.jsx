"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Handshake,
  TrendingUp,
  FileCheck2,
  Megaphone,
  Users,
  Wallet,
  Gift,
  CalendarDays,
  UserRoundPlus,
  ClipboardList,
  LogIn,
  LayoutDashboard,
  Percent,
  Info,
} from "lucide-react";

const links = {
  register: "https://volterasciences.com/affiliate-registration",
  login: "https://volterasciences.com/affiliate-login",
  dashboard: "https://volterasciences.com/affiliate-area",
  account: "https://volterasciences.com/my-account",
};

const partnership = [
  {
    icon: TrendingUp,
    title: "Benefits & Earnings",
    items: [
      "20% commission on the net value of approved referral sales.",
      "A 10% discount code you can share with your audience.",
      "Free sample opportunities for selected, approved affiliates.",
      "Personal discount codes and wholesale opportunities where eligible.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Program Standards",
    items: [
      "Coupon and discount-code websites are not permitted.",
      "Paid brand bidding using “Voltera Sciences” is not permitted.",
      "Self-referrals and retroactive coupon requests do not qualify.",
      "All content must remain professional and research-use-only.",
    ],
  },
];

const promotion = [
  {
    icon: FileCheck2,
    title: "Content Marketing",
    description:
      "Create educational articles, videos, guides, graphics, and product-focused content featuring your affiliate link.",
  },
  {
    icon: Megaphone,
    title: "Social Promotion",
    description:
      "Share professional brand and product-awareness content across the social channels that best match your audience.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Messaging",
    description:
      "Never promote products for human or animal consumption. Products are strictly for research, laboratory, and analytical use.",
  },
  {
    icon: Users,
    title: "Audience Alignment",
    description:
      "Tailor your promotion to your niche while keeping every message accurate, compliant, and research-focused.",
  },
];

const payouts = [
  {
    icon: Wallet,
    title: "Cash",
    description:
      "Receive your commissions directly to your bank account (US accounts). Clean, simple, no strings.",
  },
  {
    icon: Gift,
    title: "Store Credit",
    description:
      "Take your earnings as Voltera Sciences store credit and receive a 20% bonus on top. $100 earned becomes $120 to spend on any product.",
    badge: "20% Bonus",
  },
  {
    icon: CalendarDays,
    title: "Get Paid",
    description:
      "Commissions are paid once a month, between the 1st and 7th. Choose cash, store credit, or a combination of both.",
  },
];

const steps = [
  {
    icon: UserRoundPlus,
    label: "Account",
    title: "Create a Website Account",
    description:
      "Register a regular Voltera Sciences customer account and make sure you are logged in before starting your application.",
    action: "Create Account",
    href: links.account,
  },
  {
    icon: ClipboardList,
    label: "Application",
    title: "Submit Your Application",
    description:
      "Complete the affiliate registration form with accurate information about you, your audience, and your promotional channels.",
    action: "Apply Now",
    href: links.register,
  },
  {
    icon: FileCheck2,
    label: "Review",
    title: "Wait for Approval",
    description:
      "Our team will review your application. Affiliate access remains private until the application has been approved.",
    badge: "Approval Required",
  },
  {
    icon: LogIn,
    label: "Access",
    title: "Log In as an Affiliate",
    description:
      "After approval, use the dedicated affiliate login to access your affiliate profile securely.",
    action: "Affiliate Login",
    href: links.login,
  },
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    title: "Track Your Performance",
    description:
      "Generate referral links, monitor visits and conversions, and review eligible commissions from your dashboard.",
    action: "Open Dashboard",
    href: links.dashboard,
  },
];

function SectionHeading({ eyebrow, title, highlight, description, dark }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* <p
        className={`mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.15em] uppercase ${
          dark ? "text-accent-light" : "text-secondary-dark"
        }`}
      >
        <span className="bg-secondary h-px w-8" />
        {eyebrow}
        <span className="bg-secondary h-px w-8" />
      </p> */}

      <h2 className={`section-heading ${dark ? "text-white!" : ""}`}>
        {title}{" "}
        <span className={dark ? "text-accent-light" : "text-secondary-dark"}>
          {highlight}
        </span>
      </h2>

      <p
        className={`mt-5 font-sans text-base leading-[1.85] sm:text-[17px] ${
          dark ? "text-white/90" : "text-charcoal/75"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function PartnerHero() {
  const [referralSales, setReferralSales] = useState(0);

  const commission = referralSales * 0.2;

  const currency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <header className="relative isolate overflow-hidden border-b border-white/10 bg-[linear-gradient(120deg,#030D27_0%,#071A43_45%,#10265B_100%)] px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8 lg:pt-44 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(23,70,162,0.30),transparent_60%)]" />

        <div className="absolute -bottom-48 -left-48 size-[500px] rounded-full bg-[#1746A2]/15 blur-[120px]" />

        <div className="partner-gold-particles absolute inset-0">
          {Array.from({ length: 45 }, (_, index) => (
            <span
              key={index}
              className="partner-gold-particle"
              style={{
                "--particle-left": `${(index * 37.7 + 5) % 100}%`,
                "--particle-size": `${2 + (index % 4)}px`,
                "--particle-duration": `${10 + (index % 9)}s`,
                "--particle-delay": `${-(index * 1.7)}s`,
                "--particle-drift": `${(index % 2 === 0 ? 1 : -1) * (20 + (index % 5) * 10)}px`,
                "--particle-opacity": 0.2 + (index % 5) * 0.13,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="min-w-0">
          <h1 className="section-heading text-white!">
            Build Influence.
            <span className="mt-2 block bg-linear-to-b from-[#FFF0BD] via-[#E8C77B] to-[#C9953D] bg-clip-text text-transparent">
              Earn with Voltera.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base leading-[1.85] text-white/85 sm:text-[18px]">
            Partner with Voltera Sciences, share quality research products, and
            earn commissions on approved referrals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.register}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary h-12 gap-2 px-6 text-sm"
            >
              Register
              <ArrowUpRight size={18} />
            </a>

            <a
              href={links.login}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E8C77B]/60 hover:bg-white/15"
            >
              Login
              <LogIn size={17} />
            </a>

            <a
              href={links.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-[#E8C77B] transition-colors duration-300 hover:text-white"
            >
              Affiliate Dashboard
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <ul className="mt-4 flex flex-nowrap items-center justify-between gap-2 border-t border-white/15 pt-6 sm:flex-wrap sm:justify-start sm:gap-x-5 sm:gap-y-3">
            {[
              { mobile: "Easy Apply", desktop: "Simple application" },
              { mobile: "Private Review", desktop: "Private approval" },
              { mobile: "Clear Tracking", desktop: "Transparent tracking" },
            ].map(({ mobile, desktop }) => (
              <li
                key={desktop}
                className="flex items-center gap-1 text-xs font-medium whitespace-nowrap text-white/85 sm:gap-2 sm:text-sm"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-[#E8C77B] sm:size-[17px]"
                />

                <span className="sm:hidden">{mobile}</span>
                <span className="hidden sm:inline">{desktop}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-labelledby="program-overview"
          className="relative overflow-hidden rounded-[26px] border border-[#E8C77B]/30 bg-[linear-gradient(145deg,rgba(23,46,95,0.95),rgba(3,13,39,0.96))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-[#A9792C] via-[#FFE9A8] to-[#A9792C]"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2
              id="program-overview"
              className="font-heading text-md font-semibold text-white"
            >
              Program Overview
            </h2>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Open
            </span>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <p className="font-heading bg-linear-to-b from-[#FFF0BD] via-[#E8C77B] to-[#C9953D] bg-clip-text text-[50px] leading-none font-semibold tracking-tight text-transparent">
              20<span className="text-[0.6em]">%</span>
            </p>

            <div>
              <p className="font-semibold text-white">Referral commission</p>

              <p className="mt-1 text-sm leading-6 text-white/65">
                On eligible, approved referral purchases.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="flex size-9 items-center justify-center rounded-lg border border-[#E8C77B]/25 bg-[#E8C77B]/10 text-[#E8C77B]">
                <Percent size={18} />
              </span>
              Earnings Calculator
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="referral-sales"
                className="text-sm font-medium text-white/80"
              >
                Qualifying referral sales
              </label>

              <span className="rounded-lg border border-white/15 bg-white/[0.07] px-3 py-1.5 font-semibold text-white tabular-nums">
                {currency(referralSales)}
              </span>
            </div>

            <input
              id="referral-sales"
              type="range"
              min={0}
              max={10000}
              step={100}
              value={referralSales}
              onChange={(event) => setReferralSales(Number(event.target.value))}
              className="mt-5 w-full cursor-pointer accent-[#E8C77B]"
            />

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="text-sm font-medium text-white/80">
                Estimated commission
              </span>

              <output
                htmlFor="referral-sales"
                aria-live="polite"
                className="font-heading text-3xl font-semibold text-[#E8C77B] tabular-nums"
              >
                {currency(commission)}
              </output>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 divide-x divide-white/15">
            <div className="pr-4">
              <dt className="text-sm font-medium text-white/60">
                Audience Offer
              </dt>

              <dd className="font-heading mt-2 text-xl font-semibold text-white">
                20% Off
              </dd>
            </div>

            <div className="pl-4">
              <dt className="text-sm font-medium text-white/60">Commitment</dt>

              <dd className="font-heading mt-2 text-xl font-semibold text-white">
                No Contract
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </header>
  );
}

function PartnershipSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Partnership"
          title="Built to reward"
          highlight="credible promotion."
          description="Everything you need to promote professionally, paired with clear standards that protect both our partners and the Voltera Sciences brand."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-7">
          {partnership.map(({ icon: Icon, title, items }, index) => (
            <article
              key={title}
              className="group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#35466A] bg-[linear-gradient(145deg,#101D3D_0%,#07132D_55%,#030D27_100%)] p-6 shadow-[0_8px_30px_rgba(3,13,39,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D6A64F]/50 hover:shadow-[0_15px_40px_rgba(3,13,39,0.22)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(61,117,216,0.18),transparent_65%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(214,166,79,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#E8C77B]/25 bg-white/[0.06] text-[#E8C77B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-colors duration-300 group-hover:border-[#E8C77B]/50 group-hover:bg-[#E8C77B]/10 sm:size-16">
                  <Icon size={28} strokeWidth={1.6} />
                </span>

                <div className="min-w-0">
                  <p className="mb-1.5 font-sans text-[10px] font-semibold tracking-[0.15em] text-[#E8C77B] uppercase">
                    {index === 0 ? "Partner Rewards" : "Partner Guidelines"}
                  </p>

                  <h3 className="font-heading text-[21px] leading-tight font-semibold text-white sm:text-[26px]">
                    {title}
                  </h3>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="my-6 h-px w-full bg-linear-to-r from-[#E8C77B]/40 via-white/15 to-transparent"
              />

              <ul className="divide-y divide-white/10">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#E8C77B]"
                    />

                    <p className="font-sans text-[14px] leading-[1.8] text-white/85 sm:text-[16px]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-0 h-[2px] bg-linear-to-r from-transparent via-[#E8C77B]/80 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromotionSection() {
  return (
    <section className="border-border bg-surface border-y px-4 py-8 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Promote With Purpose"
          title="Share the science."
          highlight="Strengthen the brand."
          description="Focus on product awareness, research-use applications, brand quality, and helping qualified customers discover Voltera Sciences."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {promotion.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group border-border hover:border-secondary/50 hover:shadow-primary/5 relative overflow-hidden rounded-[20px] border bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="border-secondary/25 bg-primary-soft text-primary flex size-13 items-center justify-center rounded-xl border">
                  <Icon size={25} strokeWidth={1.7} />
                </div>
              </div>

              <div className="bg-secondary mt-6 h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-16" />

              <h3 className="font-heading text-primary mt-5 text-xl leading-snug">
                {title}
              </h3>

              <p className="text-charcoal/75 mt-4 text-base leading-[1.8]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PayoutSection() {
  return (
    <section className="payout-animated-bg relative isolate overflow-hidden px-4 py-8 sm:px-6 md:py-14 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(61,117,216,0.15),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Flexible Payouts"
          title="Get paid"
          highlight="your way."
          description="Choose the payout option that works best for you, including cash, enhanced store credit, or a combination of both."
          dark
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {payouts.map(({ icon: Icon, title, description, badge }) => (
            <article
              key={title}
              className="group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white/[0.07] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A8CBFF]/40 hover:bg-white/[0.12] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-white/[0.08] via-transparent to-white/[0.02]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(100,149,238,0.20),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-linear-to-br from-white/15 to-white/5 text-[#B7D4FF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#A8CBFF]/40 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </span>

                {badge && (
                  <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    {badge}
                  </span>
                )}
              </div>

              <h3 className="font-heading mt-6 text-2xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-4 font-sans text-[15px] leading-[1.85] text-white/85 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Getting Started"
          title="Your path to becoming"
          highlight="an affiliate."
          description="Create your customer account first, submit your application, and begin promoting after your affiliate profile has been approved."
        />

        <ol className="sm:before:bg-secondary/40 relative mx-auto mt-12 max-w-5xl space-y-5 sm:before:absolute sm:before:top-8 sm:before:bottom-8 sm:before:left-7 sm:before:w-px">
          {steps.map(
            (
              { icon: Icon, label, title, description, action, href, badge },
              index,
            ) => (
              <li key={title} className="relative sm:pl-20">
                <span className="border-secondary/40 bg-primary font-heading text-accent-light absolute top-6 left-0 hidden size-14 items-center justify-center rounded-full border text-xl shadow-sm sm:flex">
                  0{index + 1}
                </span>

                <article className="border-border to-primary-soft/40 hover:border-secondary/40 rounded-[20px] border bg-linear-to-r from-white p-5 transition-colors sm:p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="border-secondary/25 bg-primary-soft text-primary flex size-12 shrink-0 items-center justify-center rounded-xl border">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p className="text-secondary-dark mb-2 text-xs font-bold tracking-widest uppercase">
                          <span className="sm:hidden">0{index + 1} — </span>
                          {label}
                        </p>

                        <h3 className="font-heading text-primary text-xl leading-snug">
                          {title}
                        </h3>

                        <p className="text-charcoal/75 mt-3 max-w-xl text-base leading-7">
                          {description}
                        </p>
                      </div>
                    </div>

                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary h-11 w-fit shrink-0 gap-2 px-5 text-sm"
                      >
                        {action}
                        <ArrowUpRight size={17} />
                      </a>
                    )}

                    {badge && (
                      <span className="border-secondary/30 bg-secondary/10 text-secondary-dark inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold">
                        <ShieldCheck size={17} />
                        {badge}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            ),
          )}
        </ol>

        <aside className="border-secondary/30 bg-secondary/5 mx-auto mt-8 flex max-w-5xl items-start gap-4 rounded-2xl border p-5 sm:p-6">
          <Info size={24} className="text-secondary-dark mt-0.5 shrink-0" />

          <p className="text-charcoal/85 text-base leading-7">
            <strong className="text-primary font-bold">
              Before you apply:
            </strong>{" "}
            You must create and log into your regular website account before
            submitting the affiliate application. Dashboard access is available
            only after approval.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function PartnerProgramPage() {
  return (
    <main className="bg-background min-h-screen">
      <PartnerHero />
      <PartnershipSection />
      <PromotionSection />
      <PayoutSection />
      <GettingStarted />
    </main>
  );
}
