"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  UserRound,
  ShoppingBag,
  Sparkles,
  FlaskConical,
  ChevronRight,
  Gift,
  Tag,
  Clock3,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import HeaderSearch from "./HeaderSearch";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "COA", href: "/coa" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Partner Program", href: "/partner-program" },
  { name: "Track Order", href: "/track-order" },
];

import Marquee from "react-fast-marquee";

function AnnouncementBar() {
  const announcements = [
    {
      icon: Sparkles,
      label: "EARLY BLACK FRIDAY SALE",
      highlight: true,
    },
    {
      icon: Gift,
      label: "BUY ONE, GET ONE FREE",
      description: "ON SELECT ITEMS",
    },
    {
      icon: Tag,
      label: "35% OFF",
      description: "THE REST OF THE SITE",
    },
    {
      icon: Clock3,
      label: "SALE ENDS",
      description: "MON, NOV 30 AT 11:59 PM PST",
    },
  ];

  return (
    <div className="bg-primary relative isolate w-full overflow-hidden py-3 text-white">
      <div
        aria-hidden="true"
        className="from-primary-dark/50 to-primary-light/40 pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent"
      />

      <div className="relative z-10">
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
          className="overflow-hidden"
        >
          <div className="flex items-center">
            {announcements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <div className="flex items-center gap-2.5 px-6 sm:gap-3 sm:px-9">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="flex items-center gap-2.5 whitespace-nowrap">
                      <span
                        className={`text-[10px] tracking-[0.07em] text-white sm:text-[11px] ${
                          item.highlight
                            ? "font-heading"
                            : "font-sans font-bold"
                        }`}
                      >
                        {item.label}
                      </span>

                      {item.description && (
                        <span className="font-sans text-[10px] font-medium tracking-[0.035em] text-white/70 sm:text-[11px]">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex items-center gap-3 px-2"
                  >
                    <span className="h-px w-5 bg-white/20 sm:w-8" />

                    <span className="h-1.5 w-1.5 rotate-45 border border-white/50 bg-white/20" />

                    <span className="h-px w-5 bg-white/20 sm:w-8" />
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

function MobileSidebar({ open, onClose, pathname }) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${
        open ? "visible" : "invisible delay-300"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`bg-primary/60 absolute inset-0 backdrop-blur-[3px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
        inert={!open}
        className={`border-primary/10 absolute inset-y-0 right-0 flex w-[min(360px,90vw)] flex-col border-l bg-white shadow-[-20px_0_60px_rgba(17,21,35,0.15)] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-primary/10 flex items-center justify-between border-b px-5 py-4">
          <Link href="/" onClick={onClose} aria-label="Voltera Sciences home">
            <Image
              src="/assets-v/voltera-black.png"
              alt="Voltera Sciences"
              width={160}
              height={55}
              className="h-11 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="border-primary/10 bg-primary/5 text-primary hover:bg-primary flex size-10 items-center justify-center rounded-full border transition-colors duration-300 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav
          aria-label="Sidebar navigation"
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <p className="text-primary mb-4 px-3 font-sans text-[10px] font-bold tracking-[0.18em] uppercase">
            Explore Voltera
          </p>

          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-center justify-between rounded-lg border px-4 py-3.5 font-sans text-[14px] font-semibold transition-all duration-300 ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "hover:border-primary/10 hover:bg-primary/5 hover:text-primary border-transparent text-black"
                  }`}
                >
                  {link.name}

                  <ChevronRight
                    size={17}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${
                      active ? "text-white" : "text-primary/50"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="border-primary/10 mt-7 border-t pt-6">
            <p className="text-primary mb-4 px-3 font-sans text-[10px] font-bold tracking-[0.18em] uppercase">
              Your Account
            </p>

            <Link
              href="/account"
              onClick={onClose}
              className="group hover:border-primary/10 hover:bg-primary/5 hover:text-primary flex items-center gap-3 rounded-lg border border-transparent px-4 py-3.5 font-sans text-[14px] font-semibold text-black transition-all duration-300"
            >
              <span className="bg-primary/5 text-primary flex size-9 items-center justify-center rounded-lg">
                <UserRound size={19} />
              </span>
              My Account
              <ChevronRight
                size={17}
                className="text-primary/50 ml-auto transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </nav>

        <div className="border-primary/10 bg-primary border-t px-5 py-5 text-white">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
              <FlaskConical size={17} className="text-white" />
            </div>

            <div>
              <p className="font-sans text-[12px] font-bold text-white">
                Research Use Only
              </p>

              <p className="mt-1.5 font-sans text-[11px] leading-relaxed text-white/75">
                For laboratory and in-vitro research use only. Not for human or
                animal consumption.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { openCart, itemCount, hydrated } = useCart();

  const cartCount = hydrated ? itemCount : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-primary/10 bg-white/95 shadow-[0_8px_30px_rgba(17,21,35,0.08)] backdrop-blur-xl"
            : "border-primary/10 bg-white shadow-none"
        }`}
      >
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 transition-[padding] duration-300 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10 ${
            scrolled ? "py-1" : "py-2"
          }`}
        >
          <Link
            href="/"
            aria-label="Voltera Sciences home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/assets-v/voltera-black.png"
              alt="Voltera Sciences"
              width={200}
              height={65}
              priority
              className={`w-auto origin-left object-contain transition-[height] duration-300 ${
                scrolled ? "h-12" : "h-14"
              }`}
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-7 lg:flex xl:gap-10"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative font-sans text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    active ? "text-primary" : "hover:text-primary text-black"
                  }`}
                >
                  {link.name}

                  <span
                    className={`bg-primary absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-0.5 sm:gap-1">
            <button
              type="button"
              data-header-search-trigger
              onClick={() => {
                setSearchOpen((current) => !current);
                setMenuOpen(false);
              }}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="header-search"
              className="text-primary hover:bg-primary/5 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 sm:h-11 sm:w-11"
            >
              {searchOpen ? <X size={21} /> : <Search size={21} />}
            </button>

            <Link
              href="/account"
              aria-label="My account"
              className="text-primary hover:bg-primary/5 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 sm:h-11 sm:w-11"
            >
              <UserRound size={21} />
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open shopping cart, ${cartCount} items`}
              className="text-primary hover:bg-primary/5 relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 sm:h-11 sm:w-11"
            >
              <ShoppingBag size={21} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="bg-primary absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 font-sans text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(true);
                setSearchOpen(false);
              }}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="text-primary hover:bg-primary/5 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 sm:h-11 sm:w-11 lg:hidden"
            >
              <Menu size={24} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
