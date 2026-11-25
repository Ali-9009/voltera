import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FlaskConical,
  FileCheck2,
  Microscope,
  ShieldCheck,
  Target,
  Layers3,
  UsersRound,
  Check,
  Fingerprint,
  Ban,
  Scale,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us",
  description:
    "Discover Voltera Sciences and our commitment to research excellence, product quality, laboratory testing, and scientific transparency.",
};

const principles = [
  {
    number: "01",
    icon: Target,
    title: "Our Mission",
    subtitle: "Purpose Behind Every Compound",
    description:
      "We built Voltera Sciences because researchers deserve a better sourcing experience. One built on transparency, consistency and respect for the work being done. Our mission is simple. Provide research grade compounds that meet the highest standards of purity and documentation, and deliver a sourcing experience worthy of the research it supports.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "How We Operate",
    subtitle: "Structure. Clarity. Consistency.",
    description:
      "We built Voltera Sciences the way we believe a research supply company should operate. With structure, transparency and respect for the work being done on the other end of every order. Clean product organization. Consistent labeling. Documentation you can actually find and verify. A straightforward process from start to finish. No noise. No confusion. Just research grade compounds organized for the people who need them most.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Who We Serve",
    subtitle: "Built Around Researchers",
    description:
      "Voltera Sciences was built for researchers who take their work seriously. Whether you are an independent researcher, part of a laboratory program or a qualified professional buyer. You know what you need, you know what good sourcing looks like and you don't have time for inflated claims or unnecessary friction. We built this for you. Straightforward sourcing, verified compounds and a buying experience that respects your time and your standards.",
  },
];

const guidelines = [
  {
    icon: Ban,
    title: "Restricted Applications",
    description: "Not for human consumption, clinical use, or veterinary use.",
  },
  {
    icon: ShieldCheck,
    title: "No Therapeutic Claims",
    description:
      "Not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    icon: Microscope,
    title: "Professional Handling",
    description:
      "For handling only by researchers, laboratories, and qualified professionals.",
  },
  {
    icon: Scale,
    title: "Responsible Research",
    description:
      "All purchasing and use must remain within applicable research and legal standards.",
  },
];

function PrincipleCard({ principle }) {
  const Icon = principle.icon;

  return (
    <article className="group border-primary/10 hover:border-secondary/50 hover:shadow-primary/10 relative isolate flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div
        aria-hidden="true"
        className="from-primary-light/10 pointer-events-none absolute inset-0 -z-10 bg-linear-to-bl via-transparent to-transparent"
      />

      <div
        aria-hidden="true"
        className="border-primary/10 bg-primary-soft/40 pointer-events-none absolute -top-16 -right-16 size-48 rotate-45 rounded-[32px] border transition-transform duration-500 group-hover:rotate-[60deg]"
      />

      <div
        aria-hidden="true"
        className="border-secondary/20 pointer-events-none absolute -top-20 -right-5 size-44 rotate-45 rounded-[28px] border"
      />

      <div className="relative flex items-start justify-between">
        <span className="border-secondary/40 from-primary-light via-accent to-primary text-accent-light shadow-primary/15 flex size-16 items-center justify-center rounded-2xl border bg-linear-to-br shadow-lg transition-transform duration-500 group-hover:scale-105">
          <Icon size={30} strokeWidth={1.5} />
        </span>

        <span
          aria-hidden="true"
          className="font-heading text-[68px] leading-none text-transparent opacity-15 transition-opacity duration-300 [-webkit-text-stroke:1px_var(--color-primary)] group-hover:opacity-35"
        >
          {principle.number}
        </span>
      </div>

      <div className="relative mt-7">
        <p className="text-secondary-dark text-xs font-bold tracking-widest uppercase">
          {principle.subtitle}
        </p>

        <h3 className="font-heading text-primary mt-3 text-[24px] leading-tight sm:text-[27px]">
          {principle.title}
        </h3>

        <div className="from-secondary-dark via-accent-light to-secondary-dark my-5 h-[3px] w-12 rounded-full bg-linear-to-r transition-all duration-500 group-hover:w-24" />

        <p className="text-charcoal/80 font-sans text-[15px] leading-[1.9] sm:text-base">
          {principle.description}
        </p>
      </div>

      <footer className="text-primary mt-auto flex items-center gap-2 pt-7 text-sm font-semibold">
        <Check size={17} className="text-secondary-dark" />
        The Voltera Sciences Standard
      </footer>

      <span
        aria-hidden="true"
        className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-6 bottom-0 h-[3px] origin-center scale-x-0 rounded-full bg-linear-to-r transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}

function GuidelineCard({ guideline }) {
  const Icon = guideline.icon;

  return (
    <article className="group hover:border-accent-light/50 flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 transition-all duration-300 hover:bg-white/10 sm:p-6">
      <span className="border-accent-light/30 bg-accent-light/10 text-accent-light flex size-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
        <Icon size={24} strokeWidth={1.6} />
      </span>

      <div>
        <h3 className="font-sans text-base font-bold text-white">
          {guideline.title}
        </h3>

        <p className="mt-2 text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
          {guideline.description}
        </p>
      </div>
    </article>
  );
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb="About Us"
        subtitle="Discover Our Story"
        title="About"
        highlight="Voltera Sciences."
        description="A research supply brand built on transparency, consistency, and respect for the work being done."
        mobileImage="/assets-v/voltera-about-mobile.png"
        desktopImage="/assets-v/voltera-about.png"
      />

      <section
        aria-labelledby="about-heading"
        className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <span className="border-secondary/25 bg-secondary/10 text-secondary-dark mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <Fingerprint size={17} strokeWidth={1.7} />
              Who We Are
            </span>

            <h2 id="about-heading" className="section-heading">
              Voltera <span className="text-secondary">Sciences.</span>
            </h2>

            <div className="from-secondary-dark via-accent-light to-secondary-dark my-5 h-[3px] w-24 rounded-full bg-linear-to-r" />

            <p className="font-heading text-primary text-[21px] leading-relaxed sm:text-[26px]">
              Less noise. More clarity.
              <br />
              Research without compromise.
            </p>

            <div className="text-charcoal/80 mt-6 space-y-4 font-sans text-base leading-[1.9]">
              <p>
                Voltera Sciences exists because we saw a gap between what
                researchers needed and what the market was offering. Too many
                brands, too many claims, not enough proof.
              </p>

              <p>
                We built Voltera Sciences to be the exception. A research supply
                brand where quality is verified, documentation is accessible and
                the experience matches the standard of the work being done.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary h-12 px-6 text-sm">
                Explore Collection
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/coa"
                className="group border-primary/20 text-primary hover:border-secondary hover:bg-primary-soft inline-flex h-12 items-center justify-center gap-2 rounded-full border bg-white px-6 text-sm font-semibold transition-all duration-300"
              >
                View Certificates
                <ArrowUpRight
                  size={18}
                  className="text-secondary-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="group border-primary/10 bg-primary-soft shadow-primary/10 relative aspect-square w-full overflow-hidden rounded-[28px] border shadow-xl">
            <Image
              src="/assets-v/voltera-about-section.png"
              alt="Voltera Sciences research products"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none"
            />

            <div
              aria-hidden="true"
              className="ring-secondary/20 pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="quality-heading"
        className="border-secondary/30 from-primary via-primary-light to-primary relative isolate overflow-hidden border-y bg-linear-to-br px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(30deg,transparent_49%,rgba(214,166,79,0.17)_50%,transparent_51%),linear-gradient(150deg,transparent_49%,rgba(214,166,79,0.17)_50%,transparent_51%)] bg-size-[72px_124px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(239,210,141,0.35)_1px,transparent_2px)] bg-size-[36px_62px]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <header>
            <p className="text-accent-light mb-4 flex items-center gap-3 text-xs font-bold tracking-widest uppercase">
              <span aria-hidden="true" className="bg-secondary h-px w-8" />
              Quality &amp; Transparency
            </p>
            <h2
              id="quality-heading"
              className="font-heading text-[clamp(28px,4vw,44px)] leading-tight text-white"
            >
              Confidence starts with{" "}
              <span className="text-accent-light">clarity.</span>
            </h2>
            <div
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary-dark my-5 h-[3px] w-24 rounded-full bg-linear-to-r"
            />
            <p className="max-w-xl text-base leading-[1.85] text-white/90 sm:text-[17px]">
              Research sourcing should be straightforward. Explore available
              documentation, review product information, and make informed
              decisions based on the requirements of your work.
            </p>
            <Link
              href="/coa"
              className="btn-hero-primary mt-7 inline-flex h-12 gap-2 px-6 text-sm"
            >
              Explore COA Library <ArrowUpRight size={18} />
            </Link>
          </header>
          <div className="grid gap-4">
            {[
              {
                icon: FileCheck2,
                title: "Accessible Documentation",
                description:
                  "Explore available Certificates of Analysis and batch-specific laboratory information.",
              },
              {
                icon: Fingerprint,
                title: "Batch Identification",
                description:
                  "Use product labels and batch details to locate the corresponding documentation where available.",
              },
              {
                icon: FlaskConical,
                title: "Research-Focused Standards",
                description:
                  "Review product details in the context of laboratory and analytical research requirements.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group border-accent-light/30 bg-primary-dark/35 hover:border-accent-light/70 relative flex items-start gap-4 overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-colors sm:p-6"
              >
                <span className="border-secondary/40 text-accent-light flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white/10">
                  <Icon size={25} strokeWidth={1.7} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg text-white">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-white/85">
                    {description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="font-heading hidden text-4xl text-transparent [-webkit-text-stroke:1px_rgba(239,210,141,0.4)] sm:block"
                >
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r"
        />
      </section>

      <section
        aria-labelledby="principles-heading"
        className="border-border from-primary-soft to-primary-light/10 relative isolate overflow-hidden border-y bg-linear-to-br via-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="bg-primary-light/10 pointer-events-none absolute -top-48 -right-48 -z-10 size-[500px] rounded-full blur-[100px]"
        />

        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-secondary-dark mb-3 text-xs font-bold tracking-widest uppercase">
              Our Foundation
            </p>

            <h2 id="principles-heading" className="section-heading">
              What Defines <span className="text-secondary">Voltera Sciences.</span>
            </h2>

            <div className="from-secondary-dark via-accent-light to-secondary-dark mx-auto my-5 h-[3px] w-20 rounded-full bg-linear-to-r" />

            <p className="text-muted text-base leading-relaxed">
              Our purpose, our approach, and the research community we are built
              to serve.
            </p>
          </header>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {principles.map((principle) => (
              <PrincipleCard key={principle.number} principle={principle} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-secondary-dark mb-3 text-xs font-bold tracking-widest uppercase">
              The Voltera Sciences Experience
            </p>
            <h2 id="experience-heading" className="section-heading">
              Designed around{" "}
              <span className="text-secondary">your research.</span>
            </h2>
            <div
              aria-hidden="true"
              className="from-secondary-dark via-accent-light to-secondary-dark mx-auto my-5 h-[3px] w-24 rounded-full bg-linear-to-r"
            />
            <p className="text-charcoal/80 text-base leading-7">
              From exploring our collection to finding documentation, our
              approach is built around clarity and respect for your time.
            </p>
          </header>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "Organized Sourcing",
                description:
                  "Explore our research collection and compare available product options without unnecessary complexity.",
                href: "/shop",
                action: "Explore Collection",
              },
              {
                icon: FileCheck2,
                title: "Information Within Reach",
                description:
                  "Find available product documentation and review batch information as part of your sourcing process.",
                href: "/coa",
                action: "View Certificates",
              },
              {
                icon: UsersRound,
                title: "Research-Focused Support",
                description:
                  "Connect with our team for questions about products, orders, and documentation.",
                href: "/contact",
                action: "Contact Our Team",
              },
            ].map(({ icon: Icon, title, description, href, action }, index) => (
              <article
                key={title}
                className="group border-border relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="from-secondary-dark via-accent-light to-secondary-dark absolute inset-x-0 top-0 h-[3px] bg-linear-to-r"
                />
                <div className="flex items-center justify-between">
                  <span className="border-secondary/30 from-primary via-primary-light to-primary text-accent-light flex size-14 items-center justify-center rounded-2xl border bg-linear-to-br">
                    <Icon size={27} strokeWidth={1.7} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-heading text-5xl text-transparent [-webkit-text-stroke:1px_var(--color-border)]"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-primary mt-6 text-xl leading-snug">
                  {title}
                </h3>
                <p className="text-charcoal/80 mt-3 flex-1 text-base leading-[1.8]">
                  {description}
                </p>
                <Link
                  href={href}
                  className="border-border text-primary hover:text-secondary-dark mt-6 inline-flex w-fit items-center gap-2 border-t pt-5 text-sm font-bold transition-colors"
                >
                  {action}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="research-heading"
        className="px-4 py-12 sm:px-6 md:py-18 lg:px-8"
      >
        <div className="border-secondary/30 from-primary via-primary-light to-primary shadow-primary/10 relative isolate mx-auto max-w-7xl overflow-hidden rounded-[28px] border bg-linear-to-br px-5 py-9 shadow-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 -right-48 -z-10 size-[550px] rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="border-accent-light/15 pointer-events-none absolute -top-32 -right-32 -z-10 size-[400px] rounded-full border"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_48px,rgba(214,166,79,0.20)_48px,rgba(214,166,79,0.20)_49px)]"
          />

          <ShieldCheck
            aria-hidden="true"
            size={420}
            strokeWidth={0.6}
            className="pointer-events-none absolute -right-20 -bottom-30 -z-10 rotate-[-15deg] text-white/5"
          />

          <header className="mx-auto max-w-3xl text-center">
            <span className="border-accent-light/30 bg-accent-light/10 text-accent-light mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck size={17} />
              Research Guidelines
            </span>

            <h2
              id="research-heading"
              className="font-heading text-[clamp(28px,4vw,44px)] leading-tight text-white"
            >
              Research <span className="text-accent-light">Use Only.</span>
            </h2>

            <div className="via-accent-light mx-auto my-5 h-[3px] w-24 rounded-full bg-linear-to-r from-transparent to-transparent" />

            <p className="font-sans text-[17px] leading-relaxed font-semibold text-white sm:text-xl">
              All products are supplied strictly for laboratory and research use
              only.
            </p>
          </header>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 sm:gap-5">
            {guidelines.map((guideline) => (
              <GuidelineCard key={guideline.title} guideline={guideline} />
            ))}
          </div>

          <div className="border-accent-light/25 bg-primary-dark/30 mt-8 flex items-start gap-3 rounded-xl border p-4 sm:p-5">
            <FlaskConical
              size={24}
              strokeWidth={1.6}
              className="text-accent-light mt-0.5 shrink-0"
            />

            <p className="text-[15px] leading-[1.8] text-white/85">
              Voltera Sciences presents all materials strictly in a research-use
              context and does not make consumer, wellness, or therapeutic
              claims.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
