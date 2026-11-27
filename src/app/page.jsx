import AnimatedIcon from "@/components/AnimatedIcon";
import CardSlider from "@/components/CardSlider";
import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
import HeroVialStage from "@/components/HeroVialStage";
// import FiveChecks from "@/components/FiveChecks";
import HowItWork from "@/components/HowItWork";

import ProductGrid from "@/components/ProductGrid";
import ProductVerification from "@/components/ProductVerification";
import ResearchShowcase from "@/components/ResearchShowcase";
import USShippingCoverage from "@/components/shipping/USShippingCoverage";
import ShopByCategory from "@/components/ShopByCategory";
import VialScroll from "@/components/VialScroll";
import WhyChooseUs from "@/components/WhyChooseUs";

import { ArrowUpRight, FlaskConical, LockKeyhole } from "lucide-react";
import Image from "next/image";
import { Amex, Mastercard, Visa } from "react-payment-logos/dist/flat";
import Link from "next/link";

const trustPoints = [
  { value: "99%+", label: "Purity", icon: "/icons/content.json" },
  { value: "Same-Day", label: "Shipping", icon: "/icons/truck.json" },
  { value: "3rd Party", label: "Tested", icon: "/icons/sterility.json" },
];

const paymentOptions = [
  { name: "Zelle", image: "/assets/zelle-logo.svg", width: 23, height: 23 },
  { name: "Venmo", image: "/assets/venmo-logo.svg", width: 44, height: 9 },
  { name: "Mastercard", Logo: Mastercard },
  { name: "Visa", Logo: Visa },
  { name: "American Express", Logo: Amex },
];

export default function HomePage() {
  return (
    <main className="section-flow">
      <section
        aria-labelledby="hero-heading"
        className="voltera-floating-hero text-primary-dark relative isolate w-full overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 pt-24 pb-5 sm:px-6 sm:pt-28 lg:min-h-[clamp(37rem,49vw,49rem)] lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:pt-28 lg:pb-12">
          <div className="hero-copy w-full max-w-[640px] min-w-0">
            <p className="hero-badge mb-5 mt-6 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-white">
              <span className="hero-badge-mark grid size-10 shrink-0 place-items-center rounded-full text-[var(--navy)]">
                <FlaskConical size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="font-heading text-lg leading-none font-bold tracking-[-0.02em] sm:text-xl">
                8x Tested
              </span>
              <span aria-hidden="true" className="h-5 w-px bg-white/30" />
              <span className="text-sm leading-none font-semibold text-[var(--gold-light)] sm:text-base">
                For all batches
              </span>
            </p>

            <h1
              id="hero-heading"
              data-hero-heading
              className="font-heading text-[clamp(1.6rem,9vw,4.1rem)] leading-[1.04] font-bold tracking-[-0.045em] lg:text-[clamp(2.65rem,4.5vw,4.1rem)]"
            >
              <span className="block whitespace-nowrap">
                Driven by Science.
              </span>
              <span className="block whitespace-nowrap">
                Defined by <span className="hero-gold">Quality.</span>
              </span>
            </h1>

            <p
              data-hero-description
              className="text-primary-dark/80 mt-5 max-w-[46ch] text-base leading-[1.6] lg:text-lg"
            >
              Uncompromising standards. Accredited US lab testing. Every
              compound verified and documented.
            </p>

            <div
              data-hero-buttons
              className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:gap-4"
            >
              <Link
                href="/shop"
                className="hero-btn hero-btn-navy inline-flex h-14 items-center justify-center gap-1.5 rounded-full px-2 text-sm font-bold whitespace-nowrap min-[360px]:text-[15px] sm:gap-3 sm:px-8 sm:text-base"
              >
                Shop Peptides
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="shrink-0"
                />
              </Link>
              <Link
                href="/coa"
                className="hero-btn hero-btn-gold inline-flex h-14 items-center justify-center gap-1.5 rounded-full px-2 text-sm font-bold whitespace-nowrap min-[360px]:text-[15px] sm:gap-3 sm:px-8 sm:text-base"
              >
                View COA
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="shrink-0"
                />
              </Link>
            </div>

            <ul
              aria-label="Product and shipping standards"
              className="hero-facts mt-8 hidden max-w-[35rem] grid-cols-[0.8fr_1.2fr_1fr] sm:grid"
            >
              {trustPoints.map(({ value, label, icon }) => (
                <li
                  key={label}
                  className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
                >
                  <AnimatedIcon
                    src={icon}
                    className="block size-9 shrink-0 xl:size-11"
                  />
                  <span className="min-w-0">
                    <strong className="font-heading text-primary block text-[15px] leading-tight font-bold tracking-[-0.02em] whitespace-nowrap sm:text-[17px] xl:text-xl">
                      {value}
                    </strong>{" "}
                    <span className="text-primary-dark/80 block text-sm leading-snug">
                      {label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 hidden max-w-[35rem] flex-col gap-2.5 sm:flex sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <p className="text-primary flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
                <LockKeyhole
                  size={16}
                  aria-hidden="true"
                  className="text-[var(--gold-deep)]"
                />
                Secure Payment Options
              </p>
              <ul aria-label="Payment options" className="flex gap-2">
                {paymentOptions.map(({ name, image, width, height, Logo }) => (
                  <li
                    key={name}
                    className="hero-pay grid h-8 w-12 place-items-center overflow-hidden rounded-lg bg-white xl:h-9 xl:w-[54px]"
                  >
                    {image ? (
                      <Image
                        src={image}
                        width={width}
                        height={height}
                        alt={name}
                        className="max-h-6 max-w-[38px] object-contain xl:max-w-[43px]"
                      />
                    ) : (
                      <Logo
                        role="img"
                        aria-label={name}
                        className="h-full w-full"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <HeroVialStage />
        </div>
      </section>

      <ProductGrid />
      <ShopByCategory />

      <section
        aria-labelledby="collection-banner-heading"
        className="mt-10 bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      >
        <div className="border-primary/10 bg-primary relative isolate mx-auto max-w-7xl overflow-hidden rounded-[24px] border sm:rounded-[32px]">
          <picture className="absolute inset-0 -z-20">
            <source
              media="(max-width: 767px)"
              srcSet="/assets-v/voltera-hero-golden-mobile.png"
            />

            <img
              src="/assets-v/voltera-hero-golden-desktop.png"
              alt=""
              className="h-full w-full object-cover object-bottom md:object-[88%_50%]"
            />
          </picture>

          <div className="relative flex min-h-[600px] flex-col items-center px-5 pt-12 pb-8 text-center sm:px-10 md:min-h-[480px] md:items-start md:justify-center md:px-10 md:py-14 md:text-left lg:min-h-[540px] lg:px-20">
            <div className="w-full max-w-[490px]">
              <span className="mb-4 hidden items-center gap-3 font-sans text-xs font-bold tracking-[0.18em] text-[var(--gold-light)] uppercase md:flex">
                <span className="h-[2px] w-8 bg-[var(--gold-light)]" />
                Explore Our Collection
              </span>

              <h2
                id="collection-banner-heading"
                className="font-heading text-[clamp(32px,8vw,46px)] leading-[1.15] font-normal tracking-[-0.035em] text-white md:text-[clamp(38px,3.8vw,54px)]"
              >
                Precision for
                <br className="hidden md:block" /> Your Next
                <br className="hidden md:block" />{" "}
                <span className="text-[var(--gold-light)]">Research.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[420px] font-sans text-base leading-[1.6] text-white/90 sm:text-[17px] md:mx-0 md:max-w-[230px] lg:max-w-[340px] xl:max-w-[420px]">
                Explore premium research compounds with verified purity,
                multiple strengths, and batch-specific COAs.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 md:justify-start">
                <Link href="/shop" className="btn-hero-primary">
                  Shop All Products
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CardSlider />

      <ProductVerification />

      <ResearchShowcase />

      <VialScroll />

      <HowItWork />

      {/* <FiveChecks /> */}

      <USShippingCoverage />
      <Faqs />
      <CTASection />
    </main>
  );
}
