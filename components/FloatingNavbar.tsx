"use client";

import { motion } from "framer-motion";
import { Menu, Search, Calendar, Images, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav-items";
import BrandLogo from "./BrandLogo";
import FeesPaymentButton from "./FeesPaymentButton";
import MobileMenu from "./MobileMenu";

function NavLink({
  label,
  href,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative shrink-0 whitespace-nowrap px-1.5 py-1 text-xs font-medium text-white/95 transition-colors duration-300 hover:text-white md:px-2 lg:px-2.5 lg:text-sm"
    >
      {label}
      <span className="absolute -bottom-0.5 left-2 right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 lg:left-2.5 lg:right-2.5" />
    </Link>
  );
}

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const navItems = NAV_ITEMS.filter((item) => !item.isCta);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 flex flex-col w-full transition-all duration-500 shadow-md ${
          scrolled
            ? "bg-brand-dark/95 shadow-brand-dark/20 backdrop-blur-md"
            : "bg-brand/95 shadow-brand/20 backdrop-blur-md"
        }`}
      >
        {/* Top Header with centered Logo and Search Bar */}
        <div className="flex w-full items-center justify-between border-b border-white/10 px-5 py-2 sm:px-8 md:px-12 lg:px-16">
          {/* Left Side: School Calendar & School Album */}
          <div className="hidden md:flex items-center gap-6 w-60 lg:w-[280px] shrink-0">
            <Link
              href="#calendar"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Calendar className="h-6 w-6 shrink-0 text-sunny transition-transform duration-200 group-hover:scale-105" />
              <span className="text-[10px] font-extrabold tracking-wider text-white/85 transition-colors group-hover:text-white uppercase">
                School Calendar
              </span>
            </Link>
            <Link
              href="#album"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Images className="h-6 w-6 shrink-0 text-sunny transition-transform duration-200 group-hover:scale-105" />
              <span className="text-[10px] font-extrabold tracking-wider text-white/85 transition-colors group-hover:text-white uppercase">
                School Album
              </span>
            </Link>
          </div>

          {/* Logo centered */}
          <Link
            href="#home"
            className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            aria-label="Home"
          >
            <BrandLogo size={120} />
          </Link>

          {/* Right Search Bar on desktop */}
          <div className="hidden md:flex w-60 lg:w-64 shrink-0 justify-end items-center">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                suppressHydrationWarning
                className="w-full rounded-full bg-white py-2.5 pl-10 pr-4 text-xs font-bold tracking-wide text-gray-800 placeholder-gray-400 outline-none transition-all shadow-[0_4px_0_#cbd5e1,0_6px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_0_#cbd5e1,0_8px_18px_rgba(0,0,0,0.15)] focus:translate-y-[3px] focus:shadow-[0_1px_0_#cbd5e1,0_3px_8px_rgba(0,0,0,0.1)]"
              />
              <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            </form>
          </div>

          {/* Mobile search button on the right */}
          <div className="flex md:hidden w-10 justify-end items-center">
            <button
              type="button"
              suppressHydrationWarning
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Navigation Bar Row */}
        <motion.nav
          layout
          className="flex min-h-[3.25rem] w-full items-center justify-between gap-4 px-6 py-1.5 sm:min-h-[3.5rem] sm:px-8 md:px-12 lg:px-16"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Left spacer for desktop to balance right button and center the links */}
          <div className="hidden md:block md:w-40 md:shrink-0" />

          {/* Navigation Links centered on desktop (fixed overflow clipping dropdown) */}
          <div className="hidden flex-grow items-center justify-center gap-1.5 overflow-visible md:flex lg:gap-3">
            {navItems.map((item) => {
              if (item.dropdownItems) {
                return (
                  <div key={item.label} className="group relative py-2 shrink-0">
                    <button className="flex items-center gap-1.5 px-1.5 py-1 text-xs font-semibold text-white/95 transition-colors duration-300 hover:text-white md:px-2 lg:px-2.5 lg:text-sm">
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/90" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 hidden group-hover:block w-40 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 z-50">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-xl px-3.5 py-2.5 text-xs font-bold text-gray-700 hover:bg-brand-light hover:text-brand-dark transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return <NavLink key={item.href} {...item} />;
            })}
          </div>

          {/* Fees Payment Button on desktop */}
          <div className="hidden md:flex md:w-40 md:shrink-0 justify-end">
            <FeesPaymentButton />
          </div>

          {/* Mobile Layout */}
          <div className="flex w-full items-center justify-between md:hidden">
            <button
              type="button"
              suppressHydrationWarning
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
            <FeesPaymentButton />
          </div>
        </motion.nav>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
