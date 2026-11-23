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
import WhyChooseUs from "@/components/WhyChooseUs";

import {
  ArrowUpRight,
  ShieldCheck,
  FlaskConical,
  Truck,
  BadgeCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="relative h-[calc(100svh-110px)] w-full overflow-hidden bg-[#EAF7FA] sm:h-[calc(100svh-115px)] lg:h-[calc(100svh-110px)]"
      >
        <div className="absolute inset-0">
          {/* MOBILE + TABLET */}
          <Image
            src="/assets-v/voltera-hero-mobile.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 1px"
            className="object-cover object-bottom lg:hidden"
          />

          {/* DESKTOP */}
          <Image
            src="/assets-v/voltera-hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 100vw, 1px"
            className="hidden object-cover object-center lg:block"
          />
        </div>

        <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full w-full flex-col items-center justify-start pt-12 text-center sm:pt-10 md:pt-12 lg:items-start lg:justify-center lg:py-0 lg:text-left">
            <div className="relative z-30 w-full max-w-[580px] lg:max-w-[650px]">
              {/* MAIN HEADING */}

              <h1
                id="hero-heading"
                data-hero-heading
                className="font-heading text-[clamp(2.3rem,9vw,3.4rem)] leading-[1.13] font-normal tracking-[-0.035em] text-white sm:text-[clamp(2.8rem,5vw,4rem)] lg:text-[clamp(3.2rem,4.3vw,4.6rem)]"
              >
                Authenticity
                <br />
                Guaranteed.
              </h1>

              {/* SUBTITLE */}

              <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.8}
                  className="shrink-0 text-white"
                />

                <p className="font-sans text-[14px] font-semibold tracking-[0.015em] text-white sm:text-[17px]">
                  With QR & Batch Verified COA
                </p>
              </div>

              {/* DESCRIPTION */}

              <p
                data-hero-description
                className="mx-auto mt-5 max-w-[530px] font-sans text-[13px] leading-[1.8] text-white/80 sm:mt-6 sm:text-[16px] lg:mx-0"
              >
                Discover premium research peptides backed by independent
                laboratory testing, verified purity, and batch-specific
                Certificates of Analysis. Precision and transparency in every
                compound.
              </p>

              <div
                data-hero-buttons
                className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start"
              >
                <Link href="/shop" className="btn-hero-primary">
                  Explore Collection
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/about" className="btn-hero-secondary">
                  Learn More
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:mt-11 sm:gap-x-5 lg:justify-start">
                {[
                  {
                    icon: ShieldCheck,
                    text: "99%+ Purity",
                  },
                  {
                    icon: Truck,
                    text: "Same-Day Shipping",
                  },
                  {
                    icon: Star,
                    text: "3rd Party Tested",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      {index > 0 && (
                        <span
                          aria-hidden="true"
                          className="mr-1 hidden h-5 w-px bg-white/25 sm:block"
                        />
                      )}

                      <div className="group flex items-center gap-2.5">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#C9953D]/25 bg-[#C9953D]/10 transition-colors duration-300 group-hover:bg-[#C9953D]/20">
                          <Icon
                            size={18}
                            strokeWidth={1.8}
                            className="text-[#E8C77B]"
                          />
                        </span>

                        <span className="font-sans text-[11px] font-semibold tracking-[0.01em] whitespace-nowrap text-white sm:text-[13px]">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoMarquee />

      <ProductGrid />

      <WhyChooseUs />

      <section
        aria-labelledby="collection-banner-heading"
        className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      >
        <div className="border-primary/10 bg-primary-soft relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border sm:rounded-[32px]">
          <picture className="absolute inset-0">
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

          <div className="relative z-10 flex min-h-[650px] flex-col items-center px-5 pt-12 pb-8 text-center sm:px-10 md:min-h-[520px] md:items-start md:justify-center md:px-14 md:py-16 md:text-left lg:min-h-[560px] lg:px-20">
            <div className="max-w-[530px]">
              <h2
                id="collection-banner-heading"
                className="font-heading text-[clamp(30px,7vw,46px)] leading-[1.14] font-normal tracking-[-0.035em] text-white md:text-[clamp(36px,4vw,56px)]"
              >
                Find the Right
                <br className="hidden md:block" />
                <span className="text-white"> Research Compound</span>
                <br />
                for Your Next Project.
              </h2>

              <p className="mx-auto mt-5 max-w-[440px] font-sans text-[13px] leading-[1.8] text-white sm:text-[15px] md:mx-0">
                Explore laboratory research compounds in multiple strengths,
                compare available options, and access batch-specific quality
                documentation with confidence.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Link
                  href="/shop"
                  className="group border-secondary/40 text-primary inline-flex h-[50px] items-center justify-center gap-3 rounded-full border bg-[linear-gradient(135deg,#E8C77B_0%,#C9953D_65%,#A9792C_100%)] px-7 font-sans text-[13px] font-bold shadow-[0_6px_20px_rgba(201,149,61,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(201,149,61,0.4)] active:scale-[0.98] sm:h-[54px] sm:px-8 sm:text-[14px]"
                >
                  Shop All Products
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="from-primary via-secondary to-primary-light pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r"
          />
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
