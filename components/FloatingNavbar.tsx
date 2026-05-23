"use client";

import { motion } from "framer-motion";
import { Menu, Search, ChevronDown, Mail, Phone, Clock } from "lucide-react";
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
      className="group relative shrink-0 whitespace-nowrap px-1.5 py-1 text-xs font-bold text-blue-900 transition-colors duration-300 hover:text-purple-600 md:px-2 lg:px-2.5 lg:text-sm"
    >
      {label}
      <span className="absolute -bottom-0.5 left-2 right-2 h-0.5 origin-left scale-x-0 rounded-full bg-purple-600 transition-transform duration-300 ease-out group-hover:scale-x-100 lg:left-2.5 lg:right-2.5" />
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
        className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 shadow-md flex flex-col bg-gradient-to-r from-white/95 via-purple-50/95 to-purple-100/90 border-b border-purple-100/50 backdrop-blur-md"
      >
        {/* Top Info Header (Transparent bg, inherited panel styling) */}
        <div className="hidden md:flex w-full items-center justify-center bg-transparent px-6 py-2.5 sm:px-8 md:px-12 lg:px-16 text-xs text-slate-600 font-bold select-none">
          <div className="flex items-center gap-8">
            <a href="mailto:Info@adhyshiv.com" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <Mail className="h-3.5 w-3.5 text-purple-500" />
              <span>Info@adhyshiv.com</span>
            </a>
            <a href="tel:+917871111111" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <Phone className="h-3.5 w-3.5 text-purple-500" />
              <span>+91 78711 11111</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-purple-500" />
              <span>Mon - Fri 08:30 - 16:00</span>
            </div>
          </div>
        </div>

        {/* Main Navbar container - single row, transparent bg */}
        <motion.nav
          layout
          className="flex h-20 items-center justify-between gap-4 px-6 py-2 sm:px-8 md:px-12 lg:px-16 bg-transparent"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo on the left */}
          <Link
            href="#home"
            className="flex shrink-0 items-center transition-opacity hover:opacity-90 relative z-20"
            aria-label="Home"
          >
            <BrandLogo size={135} className="w-[90px] md:w-[135px] h-[90px] md:h-[135px] md:-my-8" />
          </Link>

          {/* Navigation Links centered on desktop */}
          <div className="hidden flex-grow items-center justify-center gap-1.5 overflow-visible md:flex lg:gap-3">
            {navItems.map((item) => {
              if (item.dropdownItems) {
                return (
                  <div key={item.label} className="group relative py-2 shrink-0">
                    <button
                      suppressHydrationWarning
                      className="flex items-center gap-1.5 px-1.5 py-1 text-xs font-bold text-blue-900 transition-colors duration-300 hover:text-purple-600 md:px-2 lg:px-2.5 lg:text-sm"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-blue-900 group-hover:text-purple-600" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 hidden group-hover:block w-40 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 z-50">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-xl px-3.5 py-2.5 text-xs font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
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

          {/* Search Bar & Fees Payment Button on desktop */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <form onSubmit={handleSearchSubmit} className="relative w-44 lg:w-48">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                suppressHydrationWarning
                className="w-full rounded-full bg-white/80 border border-purple-200/60 py-2 pl-9 pr-4 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none transition-all shadow-sm focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-200/50"
              />
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            </form>
            <FeesPaymentButton />
          </div>

          {/* Mobile Layout (Logo left, Button & Hamburger menu right) */}
          <div className="flex items-center gap-3 md:hidden">
            <FeesPaymentButton />
            <button
              type="button"
              suppressHydrationWarning
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-colors hover:bg-purple-200"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
