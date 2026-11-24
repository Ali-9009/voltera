import CardSlider from "@/components/CardSlider";
import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
// import FiveChecks from "@/components/FiveChecks";
import HowItWork from "@/components/HowItWork";

import ProductGrid from "@/components/ProductGrid";
import ProductVerification from "@/components/ProductVerification";
import PromoMarquee from "@/components/PromoMarquee";
import ResearchShowcase from "@/components/ResearchShowcase";
import USShippingCoverage from "@/components/shipping/USShippingCoverage";
import ShopByCategory from "@/components/ShopByCategory";
import WhyChooseUs from "@/components/WhyChooseUs";

import { ArrowUpRight, ShieldCheck, FlaskConical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="bg-primary-dark relative isolate min-h-[calc(100svh-48px)] w-full overflow-hidden lg:min-h-[calc(100svh-54px)]"
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets-v/voltera-hero-mobile.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-bottom lg:hidden"
          />

          <Image
            src="/assets-v/voltera-hero-1.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 100vw, 1px"
            className="hidden object-cover object-center lg:block"
          />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-48px)] w-full max-w-7xl px-4 sm:px-6 lg:min-h-[calc(100svh-54px)] lg:px-8">
          <div className="flex w-full flex-col items-center justify-start pt-36 pb-10 text-center sm:pt-40 lg:items-start lg:justify-center lg:pt-32 lg:pb-10 lg:text-left">
            <div className="w-full max-w-[580px] lg:max-w-[620px]">
              <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4 lg:justify-start">
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                  <FlaskConical
                    strokeWidth={1.8}
                    className="text-primary-dark size-7 sm:size-9"
                  />

                  <p className="font-heading text-primary-dark text-[29px] leading-none tracking-tight italic sm:text-[36px]">
                    10×
                    <span className="ml-1.5 text-[21px] sm:ml-2 sm:text-[26px]">
                      TESTED
                    </span>
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="bg-primary-dark/30 h-9 w-px shrink-0 sm:h-10"
                />

                <span className="text-primary-dark max-w-[125px] text-left font-sans text-[10px] leading-relaxed font-bold tracking-wider uppercase sm:max-w-[150px] sm:text-[12px]">
                  Precision Without Compromise
                </span>
              </div>

              <h1
                id="hero-heading"
                data-hero-heading
                className="font-heading text-primary-dark text-[clamp(2.5rem,10vw,3.6rem)] leading-[1.08] font-normal tracking-[-0.035em] sm:text-[clamp(3rem,5.5vw,4.2rem)] lg:text-[clamp(3.4rem,4.5vw,4.6rem)]"
              >
                Authenticity
                <br />
                <span className="bg-linear-to-b from-[#ffe4a1] via-[#d6a64f] to-[#a16b20] bg-clip-text text-transparent [-webkit-text-stroke:0.7px_#91601c]">
                  Guaranteed.
                </span>
              </h1>

              <div className="mt-5 hidden items-center gap-3 lg:flex">
                <ShieldCheck
                  size={28}
                  strokeWidth={1.8}
                  className="text-primary-dark shrink-0"
                />

                <p className="text-primary-dark font-sans text-[18px] font-bold italic">
                  With QR & Batch-Verified COA
                </p>
              </div>

              <p
                data-hero-description
                className="text-charcoal mx-auto mt-5 max-w-[540px] font-sans text-base leading-[1.6] sm:text-[17px] lg:mx-0 lg:mt-6 lg:text-[18px]"
              >
                Premium research peptides backed by independent laboratory
                testing, verified purity, and batch-specific Certificates of
                Analysis. Precision in every compound.
              </p>

              <div
                data-hero-buttons
                className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:justify-start"
              >
                <Link
                  href="/shop"
                  className="btn-hero-primary text-sm! sm:text-base!"
                >
                  Explore Collection
                  <ArrowUpRight size={19} strokeWidth={2} />
                </Link>

                <Link
                  href="/about"
                  className="btn-hero-secondary border-accent-light/40! bg-primary-dark! text-sm! text-white! sm:text-base!"
                >
                  Learn More
                  <ArrowUpRight size={19} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoMarquee />

      <ShopByCategory />
      <ProductGrid />

      <WhyChooseUs />

      <section
        aria-labelledby="collection-banner-heading"
        className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      >
        <div className="border-primary/10 bg-primary-soft relative isolate mx-auto max-w-7xl overflow-hidden rounded-[24px] border sm:rounded-[32px]">
          <picture className="absolute inset-0 -z-20">
            <source
              media="(max-width: 767px)"
              srcSet="/assets-v/collection-banner-mobile.png"
            />

            <img
              src="/assets-v/collection-banner-desktop.png"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </picture>

          <div className="relative flex min-h-[600px] flex-col items-center px-5 pt-12 pb-8 text-center sm:px-10 md:min-h-[480px] md:items-start md:justify-center md:px-14 md:py-14 md:text-left lg:min-h-[540px] lg:px-20">
            <div className="w-full max-w-[490px]">
              <span className="text-primary-dark mb-4 hidden items-center gap-3 font-sans text-xs font-bold tracking-[0.18em] uppercase md:flex">
                <span className="bg-primary-dark h-[2px] w-8" />
                Explore Our Collection
              </span>

              <h2
                id="collection-banner-heading"
                className="font-heading text-primary-dark text-[clamp(32px,8vw,46px)] leading-[1.15] font-normal tracking-[-0.035em] md:text-[clamp(38px,3.8vw,54px)]"
              >
                Precision for
                <br className="hidden md:block" /> Your Next
                <br className="hidden md:block" />{" "}
                <span className="text-primary-dark">Research.</span>
              </h2>

              <p className="text-charcoal mx-auto mt-5 max-w-[420px] font-sans text-base leading-[1.6] sm:text-[17px] md:mx-0">
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

      <CardSlider />

      <ProductVerification />

      <ResearchShowcase />

      <HowItWork />

      {/* <FiveChecks /> */}

      <USShippingCoverage />
      <Faqs />
      <CTASection />
    </main>
  );
}
