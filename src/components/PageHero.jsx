import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

function HeroVials({ vials }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto mt-5 h-[200px] w-full max-w-[300px] select-none sm:h-[240px] sm:max-w-[360px] lg:absolute lg:right-6 lg:-bottom-[35px] lg:mt-0 lg:h-[260px] lg:max-w-[380px] xl:right-10 xl:h-[290px] xl:max-w-[440px]"
    >
      {vials.slice(0, 3).map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`page-hero-vial page-hero-vial-${index + 1}`}
        >
          <div className="page-hero-vial-float relative h-full w-full">
            <Image
              src={src}
              alt=""
              fill
              priority
              sizes="(max-width: 639px) 110px, (max-width: 1023px) 140px, 190px"
              className="object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PageHero({
  title,
  highlight,
  description,
  features = [],
  breadcrumb,
  subtitle,
  mobileImage,
  desktopImage,
  vials = [],
}) {
  const hasVials = vials.length > 0;

  return (
    <header
      className={`border-primary/10 bg-primary-dark relative isolate flex items-start overflow-hidden border-b px-4 pt-28 sm:px-6 sm:pt-32 lg:items-center lg:px-8 lg:pt-36 lg:pb-12 ${
        hasVials
          ? "min-h-[580px] pb-4 sm:min-h-[620px] lg:min-h-[max(420px,28vw)]"
          : "min-h-[580px] pb-60 sm:min-h-[380px] sm:pb-10 md:min-h-[400px] lg:min-h-[max(380px,28vw)]"
      }`}
    >
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

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          className={
            hasVials ? "relative z-10 max-w-2xl lg:w-[55%]" : "max-w-2xl"
          }
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 font-sans text-[12px] text-white/80"
          >
            <Link
              href="/"
              className="hover:text-accent-light transition-colors duration-300"
            >
              Home
            </Link>

            <ChevronRight
              size={13}
              strokeWidth={1.8}
              aria-hidden="true"
              className="text-white/60"
            />

            <span
              aria-current="page"
              className="text-accent-light font-semibold"
            >
              {breadcrumb || title}
            </span>
          </nav>

          {subtitle && (
            <p className="text-accent-light mb-3 flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.16em] uppercase sm:text-xs">
              <span
                aria-hidden="true"
                className="bg-accent-light size-1.5 rounded-full"
              />

              {subtitle}
            </p>
          )}

          <h1 className="section-heading text-white!">
            {title}

            {highlight && (
              <>
                {" "}
                <span className="bg-linear-to-b from-[#FFF0BD] via-[#E8BC65] to-[#C9953D] bg-clip-text text-transparent">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          <div
            aria-hidden="true"
            className="from-secondary-dark via-accent-light to-secondary-dark my-4 h-[3px] w-24 rounded-full bg-linear-to-r sm:w-28"
          />

          {description && (
            <p className="max-w-[540px] font-sans text-[13px] leading-[1.8] font-medium text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-[15px] lg:text-[16px]">
              {description}
            </p>
          )}

          {features.length > 0 && (
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              {features.map((feature, index) => (
                <li
                  key={`${feature}-${index}`}
                  className="flex items-center gap-2 font-sans text-[11px] font-semibold text-white sm:text-[12px]"
                >
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.7}
                    className="text-accent-light shrink-0"
                    aria-hidden="true"
                  />

                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {hasVials && <HeroVials vials={vials} />}
      </div>
    </header>
  );
}
