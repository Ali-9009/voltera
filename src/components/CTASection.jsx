import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const floatingProducts = [
  {
    src: "/pngs/trasnparent-1.png",
    position:
      "left-[-45px] top-[5%] w-[125px] sm:left-[-35px] sm:w-[170px] lg:left-[-50px] lg:top-[8%] lg:w-[215px]",
    rotate: "-18deg",
    delay: "0s",
  },
  {
    src: "/pngs/trasnparent-2.png",
    position:
      "right-[-45px] bottom-[5%] w-[125px] sm:right-[-35px] sm:w-[170px] lg:right-[-50px] lg:bottom-[5%] lg:w-[215px]",
    rotate: "16deg",
    delay: "-1.5s",
  },
  {
    src: "/pngs/trasnparent-3.png",
    position:
      "left-[15%] top-[-65px] hidden w-[105px] rotate-[-15deg] opacity-50 md:block lg:left-[22%] lg:w-[125px]",
    rotate: "-12deg",
    delay: "-2s",
  },
  {
    src: "/pngs/trasnparent-4.png",
    position:
      "right-[15%] top-[-65px] hidden w-[105px] opacity-50 md:block lg:right-[22%] lg:w-[125px]",
    rotate: "12deg",
    delay: "-3s",
  },
  {
    src: "/pngs/trasnparent-1.png",
    position:
      "left-[4%] bottom-[-70px] hidden w-[115px] opacity-35 md:block lg:left-[15%] lg:w-[135px]",
    rotate: "14deg",
    delay: "-1s",
  },
  {
    src: "/pngs/trasnparent-2.png",
    position:
      "right-[6%] top-[8%] hidden w-[100px] opacity-35 md:block lg:right-[12%] lg:w-[120px]",
    rotate: "-13deg",
    delay: "-2.5s",
  },
  {
    src: "/pngs/trasnparent-3.png",
    position: "left-[31%] bottom-[-85px] hidden w-[90px] opacity-25 lg:block",
    rotate: "-10deg",
    delay: "-3.5s",
  },
  {
    src: "/pngs/trasnparent-4.png",
    position: "right-[31%] bottom-[-85px] hidden w-[90px] opacity-25 lg:block",
    rotate: "10deg",
    delay: "-4s",
  },
];

export default function CTASection() {
  return (
    <section aria-labelledby="research-cta-heading" className="w-full">
      <div className="relative isolate w-full overflow-hidden bg-[linear-gradient(115deg,#030D27_0%,#071A43_35%,#1746A2_55%,#071A43_80%,#030D27_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.1]"
        />

        <div
          aria-hidden="true"
          className="bg-primary-light/30 pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="via-secondary/70 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {floatingProducts.map((product, index) => (
            <div
              key={`${product.src}-${index}`}
              className={`absolute ${product.position}`}
            >
              <div
                className="cta-product-float"
                style={{
                  "--product-rotation": product.rotate,
                  animationDelay: product.delay,
                }}
              >
                <Image
                  src={product.src}
                  alt=""
                  width={300}
                  height={300}
                  sizes="(max-width: 639px) 125px, (max-width: 1023px) 170px, 215px"
                  className="h-auto w-full object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,39,0.08)_0%,rgba(3,13,39,0.5)_25%,rgba(3,13,39,0.55)_50%,rgba(3,13,39,0.5)_75%,rgba(3,13,39,0.08)_100%)]"
        />

        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[800px] flex-col items-center justify-center px-8 py-16 text-center sm:min-h-[460px] sm:px-12 lg:min-h-[480px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="bg-secondary/70 h-px w-7" />

            <span className="text-accent-light font-sans text-[10px] font-bold tracking-[0.18em] uppercase sm:text-[11px]">
              Discover Voltera Sciences
            </span>

            <span className="bg-secondary/70 h-px w-7" />
          </div>

          <h2
            id="research-cta-heading"
            className="font-heading text-[clamp(28px,4.5vw,54px)] leading-[1.15] tracking-[-0.025em] text-white"
          >
            Research Excellence.
            <br />
            <span className="text-accent-light">Verified in Every Batch.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] font-sans text-[13px] leading-[1.8] text-white/75 sm:text-[15px]">
            Discover laboratory research compounds supported by independent
            testing, quality documentation, and transparent batch verification.
          </p>

          <div className="mt-8 flex w-full items-center justify-center gap-2 sm:gap-3">
            <Link
              href="/shop"
              className="group text-primary hover:bg-accent-light inline-flex h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-2 font-sans text-[13px] font-bold whitespace-nowrap shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:h-[54px] sm:flex-none sm:gap-2.5 sm:px-8 sm:text-[14px]"
            >
              Explore Collection
              <ArrowUpRight
                size={16}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[18px]"
              />
            </Link>

            <Link
              href="/coa"
              className="group inline-flex h-11 min-w-0 flex-1 items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-2 font-sans text-[13px] font-semibold whitespace-nowrap text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/15 sm:h-[54px] sm:flex-none sm:px-8 sm:text-[14px]"
            >
              View COA Library
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 font-sans text-[11px] font-medium text-white/65 sm:text-[12px]">
            <ShieldCheck size={16} className="text-accent-light" />
            Research Use Only
          </div>
        </div>

        <div
          aria-hidden="true"
          className="via-secondary/60 pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent"
        />

        <style>{`
          @keyframes ctaProductFloat {
            0%,
            100% {
              transform: translateY(0) rotate(var(--product-rotation));
            }

            50% {
              transform: translateY(-14px) rotate(var(--product-rotation));
            }
          }

          .cta-product-float {
            animation: ctaProductFloat 5s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .cta-product-float {
              animation: none;
              transform: rotate(var(--product-rotation));
            }
          }
        `}</style>
      </div>
    </section>
  );
}
