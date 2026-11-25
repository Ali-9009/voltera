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
  FlaskConical,
  ChevronRight,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import HeaderSearch from "./HeaderSearch";
import AnnouncementBar from "./AnnouncementBar";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "COA", href: "/coa" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Partner Program", href: "/partner-program" },
  { name: "Track Order", href: "/track-order" },
];

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50 h-0 w-full">
        <div className="px-3 pt-3 sm:px-5 lg:px-7">
          <div
            className={`border-primary/10 relative mx-auto w-full rounded-full border bg-white shadow-[0_10px_35px_rgba(3,13,39,0.12)] transition-[max-width,box-shadow] duration-500 ease-in-out ${
              scrolled
                ? "max-w-6xl shadow-[0_14px_45px_rgba(3,13,39,0.18)]"
                : "max-w-7xl"
            }`}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
              <Link
                href="/"
                aria-label="Voltera Sciences home"
                className="flex min-w-0 items-center"
              >
                <Image
                  src="/assets-v/voltera-black.png"
                  alt="Voltera Sciences"
                  width={200}
                  height={65}
                  priority
                  className="h-11 w-auto max-w-[125px] object-contain sm:max-w-48"
                />
              </Link>

              <nav
                aria-label="Main navigation"
                className="border-primary/[0.06] hidden items-center justify-center gap-1 rounded-full border bg-[#F5F7FB] px-3 py-1.5 lg:flex xl:gap-2 xl:px-5"
              >
                {navLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full px-3 py-2 font-sans text-[12px] font-medium whitespace-nowrap transition-colors duration-300 xl:px-4 xl:text-[13px] ${
                        active
                          ? "text-secondary-dark bg-white shadow-sm"
                          : "text-primary hover:text-secondary-dark hover:bg-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center justify-end gap-1 sm:gap-2">
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
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:size-10 ${
                    searchOpen
                      ? "border-secondary/40 text-secondary-dark bg-[#FFF5E4]"
                      : "border-primary/10 text-primary hover:border-secondary/40 hover:text-secondary-dark bg-[#F5F7FB] hover:bg-[#FFF5E4]"
                  }`}
                >
                  {searchOpen ? (
                    <X size={19} strokeWidth={1.8} />
                  ) : (
                    <Search size={19} strokeWidth={1.8} />
                  )}
                </button>

                <Link
                  href="/account"
                  aria-label="My account"
                  className="border-primary/10 text-primary hover:border-secondary/40 hover:text-secondary-dark flex size-9 shrink-0 items-center justify-center rounded-full border bg-[#F5F7FB] transition-colors duration-300 hover:bg-[#FFF5E4] sm:size-10"
                >
                  <UserRound size={19} strokeWidth={1.8} />
                </Link>

                <button
                  type="button"
                  onClick={openCart}
                  aria-label={`Open shopping cart, ${cartCount} items`}
                  className="border-primary/10 text-primary hover:border-secondary/40 hover:text-secondary-dark relative flex size-9 shrink-0 items-center justify-center rounded-full border bg-[#F5F7FB] transition-colors duration-300 hover:bg-[#FFF5E4] sm:size-10"
                >
                  <ShoppingBag size={19} strokeWidth={1.8} />

                  {cartCount > 0 && (
                    <span className="bg-secondary absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 font-sans text-[10px] font-bold text-white">
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
                  className="border-primary/10 text-primary hover:border-secondary/40 hover:text-secondary-dark flex size-9 shrink-0 items-center justify-center rounded-full border bg-[#F5F7FB] transition-colors duration-300 hover:bg-[#FFF5E4] sm:size-10 lg:hidden"
                >
                  <Menu size={21} strokeWidth={1.8} />
                </button>
              </div>
            </div>
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
