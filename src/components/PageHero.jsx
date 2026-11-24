import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PageHero({
  title,
  highlight,
  description,
  features = [],
  breadcrumb,
  subtitle,
  mobileImage,
  desktopImage,
}) {
  return (
    <header className="border-border bg-primary-soft relative isolate flex min-h-[580px] items-start overflow-hidden border-b px-4 pt-28 pb-60 sm:min-h-[380px] sm:px-6 sm:pt-32 sm:pb-10 md:min-h-[400px] lg:min-h-[max(380px,28vw)] lg:items-center lg:px-8 lg:pt-36 lg:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {mobileImage && (
          <Image
            src={mobileImage}
            alt=""
            fill
            priority
            sizes="(max-width: 639px) 100vw, 1px"
            className="object-cover object-bottom sm:hidden"
          />
        )}

        {desktopImage && (
          <Image
            src={desktopImage}
            alt=""
            fill
            priority
            sizes="(min-width: 640px) 100vw, 1px"
            className="hidden object-cover object-center sm:block"
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white/85 from-0% via-white/40 via-45% to-transparent sm:bg-linear-to-r sm:from-white/90 sm:via-white/40 sm:via-40% sm:to-transparent sm:to-75%"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <nav
            aria-label="Breadcrumb"
            className="text-muted mb-5 flex flex-wrap items-center gap-2 font-sans text-[12px]"
          >
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>

            <ChevronRight size={13} strokeWidth={1.8} aria-hidden="true" />

            <span aria-current="page" className="text-primary font-semibold">
              {breadcrumb || title}
            </span>
          </nav>

          {subtitle && (
            <p className="text-secondary-dark mb-3 flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.16em] uppercase sm:text-xs">
              <span
                aria-hidden="true"
                className="bg-secondary size-1.5 rounded-full"
              />

              {subtitle}
            </p>
          )}

          <h1 className="font-heading text-primary text-[clamp(30px,7vw,42px)] leading-[1.12] font-normal tracking-[-0.025em] sm:text-[44px] lg:text-[clamp(44px,4vw,60px)]">
            {title}

            {highlight && (
              <>
                {" "}
                <span className="text-secondary">{highlight}</span>
              </>
            )}
          </h1>

          <div
            aria-hidden="true"
            className="from-secondary-dark via-accent-light to-secondary-dark my-4 h-[3px] w-24 rounded-full bg-linear-to-r sm:w-28"
          />

          {description && (
            <p className="text-charcoal/80 max-w-[540px] font-sans text-[13px] leading-[1.8] sm:text-[15px] lg:text-[16px]">
              {description}
            </p>
          )}

          {features.length > 0 && (
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              {features.map((feature, index) => (
                <li
                  key={`${feature}-${index}`}
                  className="text-primary flex items-center gap-2 font-sans text-[11px] font-semibold sm:text-[12px]"
                >
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.7}
                    className="text-secondary-dark shrink-0"
                    aria-hidden="true"
                  />

                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
