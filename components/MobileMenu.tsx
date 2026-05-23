"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav-items";
import BrandLogo from "./BrandLogo";
import FeesPaymentButton from "./FeesPaymentButton";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems = NAV_ITEMS.filter((item) => !item.isCta);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-4 right-4 top-[8rem] z-50 max-h-[calc(100vh-9.5rem)] overflow-y-auto rounded-3xl border border-purple-100/50 bg-gradient-to-br from-white/98 via-purple-50/98 to-purple-100/95 p-6 shadow-2xl shadow-purple-900/10 md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="mb-6 flex items-center justify-between">
              <BrandLogo size={48} />
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-colors hover:bg-purple-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                if (item.dropdownItems) {
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                      className="flex flex-col"
                    >
                      <span className="block px-4 pt-3 pb-1 text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest">
                        {item.label}
                      </span>
                      <ul className="flex flex-col gap-1 pl-4 border-l-2 border-purple-100 ml-4 mb-2">
                        {item.dropdownItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={onClose}
                              className="block rounded-xl px-4 py-2.5 text-[0.875rem] font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  );
                }
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-xl px-4 py-3 text-[0.9375rem] font-bold text-blue-900 transition-colors hover:bg-purple-50 hover:text-purple-700"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
