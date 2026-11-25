import {
  ArrowUpRight,
  ArrowRight,
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
      <p
        className={`mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.15em] uppercase ${
          dark ? "text-accent-light" : "text-secondary-dark"
        }`}
      >
        <span className="bg-secondary h-px w-8" />
        {eyebrow}
        <span className="bg-secondary h-px w-8" />
      </p>

      <h2
        className={`font-heading text-[clamp(28px,4vw,42px)] leading-[1.2] tracking-tight ${
          dark ? "text-white" : "text-primary"
        }`}
      >
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

function GoldenPattern({ icon: Icon }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_48px,rgba(214,166,79,0.22)_48px,rgba(214,166,79,0.22)_49px)]" />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_148px,rgba(239,210,141,0.30)_148px,rgba(239,210,141,0.30)_150px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(10,34,80,0.9),transparent_75%)]" />

      <div className="border-secondary/30 absolute -right-28 -bottom-48 size-[450px] rounded-full border" />

      <div className="border-accent-light/25 absolute -right-12 -bottom-48 size-[380px] rounded-full border" />

      <div className="border-secondary/20 absolute -right-44 -bottom-52 size-[550px] rounded-full border" />

      {Icon && (
        <Icon
          strokeWidth={0.6}
          className="text-accent-light/10 absolute -right-10 -bottom-20 size-80 rotate-[-15deg] sm:right-12 sm:size-[450px]"
        />
      )}
    </div>
  );
}

function PartnerHero() {
  return (
    <header className="from-primary via-primary-light to-primary relative isolate overflow-hidden bg-linear-to-r px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8 lg:pt-44 lg:pb-20">
      <GoldenPattern icon={Handshake} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="min-w-0">
          <p className="text-accent-light mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase sm:text-sm">
            <span className="bg-secondary h-[2px] w-8 shrink-0 rounded-full" />
            Voltera Sciences Partner Network
          </p>

          <h1 className="font-heading text-[clamp(36px,5vw,62px)] leading-[1.12] tracking-[-0.035em] text-white">
            Build influence.
            <span className="via-accent-light to-secondary mt-2 block bg-linear-to-b from-[#fff0bb] bg-clip-text text-transparent">
              Earn with Voltera Sciences.
            </span>
          </h1>

          <div className="from-secondary-dark via-accent-light to-secondary-dark my-6 h-[3px] w-24 rounded-full bg-linear-to-r" />

          <p className="max-w-xl font-sans text-base leading-[1.85] text-white/90 sm:text-[18px]">
            Partner with a research-focused brand built around quality,
            precision, and trust. Share Voltera Sciences with your audience and
            earn commission from approved referral sales.
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
              className="hover:border-accent-light inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Login
              <LogIn size={17} />
            </a>

            <a
              href={links.dashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold transition-colors hover:text-white"
            >
              Affiliate Dashboard
              <ArrowUpRight size={17} />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-6">
            {[
              "Simple application",
              "Private approval",
              "Transparent tracking",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <CheckCircle2
                  size={17}
                  className="text-accent-light shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-labelledby="program-overview"
          className="border-secondary/40 to-primary-soft shadow-primary-dark/20 relative overflow-hidden rounded-[24px] border bg-linear-to-br from-white via-white shadow-2xl"
        >
          <div className="from-secondary-dark via-accent-light to-secondary-dark h-[4px] bg-linear-to-r" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2
                id="program-overview"
                className="font-heading text-primary text-xl"
              >
                Program Overview
              </h2>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Open
              </span>
            </div>

            <div className="border-primary/10 from-primary-soft mt-7 rounded-2xl border bg-linear-to-br to-white p-5 sm:p-6">
              <div className="text-primary flex items-center gap-2 text-sm font-semibold">
                <Percent size={19} className="text-secondary-dark" />
                Referral commission
              </div>

              <p className="font-heading text-primary mt-4 text-[72px] leading-none tracking-[-0.05em] sm:text-[86px]">
                20<span className="text-secondary text-[0.6em]">%</span>
              </p>

              <p className="text-charcoal/75 mt-4 text-base leading-7">
                Earn commission from eligible, approved referral purchases.
              </p>
            </div>

            <dl className="divide-border mt-6 grid grid-cols-2 divide-x">
              <div className="pr-4">
                <dt className="text-muted text-sm font-medium">
                  Audience Offer
                </dt>
                <dd className="font-heading text-primary mt-2 text-xl sm:text-2xl">
                  20% Off
                </dd>
              </div>

              <div className="pl-5">
                <dt className="text-muted text-sm font-medium">Commitment</dt>
                <dd className="font-heading text-primary mt-2 text-xl sm:text-2xl">
                  No Contract
                </dd>
              </div>
            </dl>

            <div className="border-border mt-6 flex items-center gap-3 border-t pt-5">
              <ShieldCheck size={22} className="text-secondary-dark shrink-0" />
              <p className="text-primary text-sm font-semibold">
                Research-use-focused partnerships
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r"
      />
    </header>
  );
}

function PartnershipSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Partnership"
          title="Built to reward"
          highlight="credible promotion."
          description="Everything you need to promote professionally, paired with clear standards that protect both our partners and the Voltera Sciences brand."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {partnership.map(({ icon: Icon, title, items }, index) => (
            <article
              key={title}
              className="group border-border to-primary-soft/50 hover:shadow-primary/5 relative overflow-hidden rounded-[24px] border bg-linear-to-br from-white p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8"
            >
              <div className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 top-0 h-[3px] bg-linear-to-r" />

              <div className="flex items-center justify-between">
                <div className="border-secondary/30 bg-primary-soft text-primary flex size-14 items-center justify-center rounded-2xl border">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <span className="font-heading text-[58px] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-border)]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-heading text-primary mt-6 text-2xl">
                {title}
              </h3>

              <ul className="divide-border mt-6 divide-y">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4">
                    <CheckCircle2
                      size={20}
                      strokeWidth={1.8}
                      className="text-secondary-dark mt-0.5 shrink-0"
                    />

                    <p className="text-charcoal/80 text-base leading-7">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromotionSection() {
  return (
    <section className="border-border bg-surface border-y px-4 py-14 sm:px-6 md:py-20 lg:px-8">
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

                <span className="font-heading text-[40px] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-border)]">
                  0{index + 1}
                </span>
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
    <section className="from-primary via-primary-light to-primary relative isolate overflow-hidden bg-linear-to-r px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <GoldenPattern icon={Wallet} />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Flexible Payouts"
          title="Get paid"
          highlight="your way."
          description="Choose the payout option that works best for you, including cash, enhanced store credit, or a combination of both."
          dark
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {payouts.map(({ icon: Icon, title, description, badge }, index) => (
            <article
              key={title}
              className={`relative overflow-hidden rounded-[22px] border p-6 backdrop-blur-md sm:p-7 ${
                badge
                  ? "border-secondary/70 bg-white/15"
                  : "border-white/20 bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="border-secondary/40 bg-primary-dark/20 text-accent-light flex size-14 items-center justify-center rounded-xl border">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <span className="font-heading text-[46px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(239,210,141,0.45)]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-heading mt-6 text-2xl text-white">{title}</h3>

              {badge && (
                <span className="border-secondary/50 bg-secondary/15 text-accent-light mt-3 inline-flex rounded-full border px-3 py-1.5 text-xs font-bold">
                  {badge}
                </span>
              )}

              <p className="mt-4 text-base leading-[1.85] text-white/90">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r"
      />
    </section>
  );
}

function GettingStarted() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Getting Started"
          title="Your path to becoming"
          highlight="an affiliate."
          description="Create your customer account first, submit your application, and begin promoting after your affiliate profile has been approved."
        />

        <ol className="relative mx-auto mt-12 max-w-5xl space-y-5">
          <div
            aria-hidden="true"
            className="from-secondary via-border to-secondary absolute top-8 bottom-8 left-7 hidden w-px bg-linear-to-b sm:block"
          />

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
