"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingWidgets() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initialize scroll progress immediately on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Scroll to Top Button - Left side of WhatsApp, visible only above 25% scroll */}
      <AnimatePresence>
        {scrollProgress >= 25 && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6097] to-[#fbbf24] text-white shadow-[0_8px_20px_rgba(255,96,151,0.35)] hover:shadow-[0_12px_24px_rgba(255,96,151,0.5)] transition-shadow border-2 border-white focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button - Right side, always visible */}
      <motion.a
        href="https://wa.me/917871111111"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_24px_rgba(37,211,102,0.45)] transition-shadow border-2 border-white focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.588 1.455 5.416 1.456 5.416 0 9.823-4.38 9.826-9.761.002-2.605-1.009-5.054-2.847-6.894C17.202 2.114 14.757.988 12.01.988c-5.42 0-9.828 4.383-9.831 9.765a9.697 9.697 0 0 0 1.491 5.176L2.68 21.55l5.967-1.564zM17.486 15c-.287-.144-1.695-.837-1.957-.933-.263-.096-.454-.144-.645.144-.191.288-.741.933-.908 1.123-.167.192-.334.216-.621.072a8.887 8.887 0 0 1-2.454-1.513 9.78 9.78 0 0 1-1.697-2.112c-.167-.288-.018-.444.125-.586.129-.127.287-.335.43-.503.144-.168.191-.288.287-.48.096-.191.048-.36-.024-.503-.072-.144-.645-1.553-.884-2.128-.233-.56-.47-.482-.645-.491l-.55-.007c-.191 0-.501.072-.764.36-.263.288-1.002.982-1.002 2.399 0 1.416 1.028 2.788 1.171 2.98 1.123 1.528 2.454 2.658 4.2 3.328 1.746.67 1.746.447 2.062.416.316-.031 1.696-.693 1.935-1.365.239-.672.239-1.248.167-1.366-.072-.119-.263-.191-.55-.335z" />
        </svg>
      </motion.a>
    </div>
  );
}
