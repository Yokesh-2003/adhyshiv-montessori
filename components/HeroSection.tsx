"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "12%"],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src="/images/hero-playground.jpg"
          alt="Montessori playground"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>
    </section>
  );
}
