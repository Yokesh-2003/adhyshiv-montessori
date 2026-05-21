"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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

  const navItems = NAV_ITEMS.filter((item) => !item.isCta);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8"
      >
        <motion.nav
          layout
          className={`flex min-h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/20 px-5 py-3 shadow-lg transition-all duration-500 sm:min-h-[4.5rem] sm:px-6 sm:py-3.5 lg:max-w-7xl lg:px-8 ${
            scrolled
              ? "bg-brand-dark/95 shadow-brand-dark/30 backdrop-blur-md"
              : "bg-brand/95 shadow-brand/25 backdrop-blur-md"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            className="flex shrink-0 items-center rounded-full transition-opacity hover:opacity-90"
            aria-label="Home"
          >
            <BrandLogo size={120} />
          </Link>

          <div className="hidden max-w-[calc(100%-8rem)] flex-1 items-center justify-center gap-0.5 overflow-x-auto scrollbar-none md:flex md:gap-0 xl:gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            <FeesPaymentButton className="ml-1" />
          </div>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </motion.nav>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
