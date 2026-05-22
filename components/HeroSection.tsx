"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/images/hero-playground.jpg", alt: "Montessori playground" },
  { src: "/images/hero-eating.png", alt: "Children having nutritious meals" },
  { src: "/images/hero-classroom.png", alt: "Montessori classroom learning" },
];

const INTERVAL_MS = 4000;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "12%"],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:h-screen md:min-h-[100dvh] overflow-hidden"
      aria-label="Hero"
    >
      {/* Slideshow */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-full w-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              fill
              priority={current === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* Full glass gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(124,58,237,0.25) 0%, rgba(168,85,247,0.15) 40%, rgba(255,249,245,0.35) 100%)",
        }}
      />

    </section>
  );
}

