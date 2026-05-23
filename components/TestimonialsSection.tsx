"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Gowresh Naidu",
    date: "2 years ago",
    initials: "GN",
    avatarBg: "bg-blue-600",
    text: "Had visited the school yesterday and met the founder of the school. She explained the Montessori way of education and I was very impressed.",
  },
  {
    name: "harikrishna loganathan",
    date: "2 years ago",
    initials: "hl",
    avatarBg: "bg-orange-500",
    text: "A unique school with well qualified teachers and beautiful ambience.",
  },
  {
    name: "Thirulok",
    date: "2 years ago",
    initials: "T",
    avatarBg: "bg-teal-700",
    text: "An upcoming authentic Montessori school with a good vision.",
  },
  {
    name: "Naveen RK",
    date: "2 years ago",
    initials: "NR",
    avatarBg: "bg-purple-600",
    text: "Their way of teaching is unique and interactive.",
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [startIndex]);

  // Get active 3 testimonials to display on desktop, wrapping around
  const activeTestimonials = [];
  for (let i = 0; i < 3; i++) {
    activeTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <section className="relative w-full bg-sunny pt-10 pb-20 md:pt-14 overflow-visible">
      {/* Background animations wrapper to prevent horizontal scrolling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* 3D-style animated background shapes */}
        <motion.div
          className="absolute left-[5%] top-[20%] h-24 w-24 rounded-full bg-orange-400/35 pointer-events-none"
          style={{ filter: "blur(2px)" }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[8%] top-[15%] h-32 w-32 rounded-full border-4 border-dashed border-brand-dark/25 pointer-events-none"
          animate={{
            rotate: [0, 360],
            y: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute left-[35%] bottom-[5%] h-16 w-16 rounded-full bg-blue-500/30 pointer-events-none"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dotted connecting trail */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M -50 150 C 300 50, 500 350, 900 150 C 1200 50, 1300 250, 1500 200"
              stroke="#7c3aed"
              strokeWidth="4"
              strokeDasharray="12 12"
              fill="none"
            />
          </svg>
        </div>

        {/* Floating Paper Plane */}
        <motion.div
          className="absolute right-[25%] bottom-[12%] h-10 w-10 text-brand-dark/20 pointer-events-none"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </motion.div>

        {/* Pulsing Hand-drawn Star */}
        <motion.div
          className="absolute left-[18%] bottom-[18%] h-8 w-8 text-orange-500/35 pointer-events-none"
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 35, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        </motion.div>

        {/* Floating letter 'A' */}
        <motion.div
          className="absolute right-[45%] top-[8%] text-3xl font-extrabold text-brand-dark/20 select-none pointer-events-none"
          style={{ fontFamily: "var(--font-family-display), ui-serif, serif" }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          A
        </motion.div>

        {/* Floating number '3' */}
        <motion.div
          className="absolute left-[45%] top-[6%] text-3xl font-extrabold text-orange-600/20 select-none pointer-events-none"
          style={{ fontFamily: "var(--font-family-display), ui-serif, serif" }}
          animate={{
            y: [0, 12, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          3
        </motion.div>
      </div>

      {/* Cloud-like top shape */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] w-full overflow-hidden leading-none z-[5]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[40px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C120,110 240,110 360,80 C480,50 600,20 720,30 C840,40 960,110 1080,110 C1200,110 1320,60 1440,20 L1440,120 L0,120 Z"
            fill="currentColor"
            className="text-sunny"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-sm font-bold tracking-[0.25em] text-brand-dark/80 uppercase">
            Testimonials ••••••
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
            What People Says
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            suppressHydrationWarning
            className="absolute left-0 z-20 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="w-full overflow-hidden md:overflow-visible px-10 md:px-14 pt-10 pb-6">
            {/* Mobile View: Single active review with slide animation */}
            <div className="flex md:hidden w-full justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[startIndex].name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="relative flex flex-col items-center justify-between rounded-3xl bg-white p-5 shadow-xl pt-11 min-h-[240px] w-full"
                >
                  {/* Avatar badge at top */}
                  <div className="absolute top-0 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-md bg-white">
                    <div className={`flex h-full w-full items-center justify-center rounded-full ${testimonials[startIndex].avatarBg} text-white font-extrabold uppercase text-sm`}>
                      {testimonials[startIndex].initials}
                    </div>
                    {/* Tiny Google logo watermark */}
                    <div className="absolute -bottom-1 -right-1 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                      <svg viewBox="0 0 24 24" className="h-3 w-3">
                        <path
                          fill="#EA4335"
                          d="M12.24 10.285V14.4h6.887c-.648 2.433-2.76 4.114-5.647 4.114-3.417 0-6.19-2.77-6.19-6.19 0-3.42 2.773-6.19 6.19-6.19 1.56 0 2.973.58 4.062 1.524l3.076-3.076C18.665 2.062 15.617 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.48 0 11.832-5.32 11.832-12.24 0-.7-.076-1.385-.213-1.955H12.24z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Header metadata */}
                  <div className="flex flex-col items-center text-center mt-1">
                    <h3 className="font-extrabold text-sm text-gray-800 leading-tight">
                      {testimonials[startIndex].name}
                    </h3>
                    <span className="text-[10px] text-gray-400 mt-0.5 font-medium">
                      {testimonials[startIndex].date}
                    </span>

                    {/* Stars + Verified Review Badge */}
                    <div className="mt-1.5 flex items-center justify-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1e40af] text-white">
                        <svg viewBox="0 0 24 24" fill="none" className="h-2 w-2 stroke-white stroke-[3.5]">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Review Text Box */}
                  <div className="flex-1 flex items-center justify-center px-1 py-2 my-auto">
                    <p className="text-xs text-gray-600 leading-relaxed font-semibold line-clamp-3 text-center">
                      "{testimonials[startIndex].text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop View: Carousel showing 3 active reviews */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {activeTestimonials.map((item, index) => {
                  return (
                    <motion.div
                      key={item.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="relative flex flex-col items-center justify-between rounded-3xl bg-white p-5 shadow-xl pt-11 h-[240px] w-full shrink-0"
                    >
                      {/* Avatar badge at top */}
                      <div className="absolute top-0 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-md bg-white">
                        <div className={`flex h-full w-full items-center justify-center rounded-full ${item.avatarBg} text-white font-extrabold uppercase text-sm`}>
                          {item.initials}
                        </div>
                        {/* Tiny Google logo watermark */}
                        <div className="absolute -bottom-1 -right-1 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                          <svg viewBox="0 0 24 24" className="h-3 w-3">
                            <path
                              fill="#EA4335"
                              d="M12.24 10.285V14.4h6.887c-.648 2.433-2.76 4.114-5.647 4.114-3.417 0-6.19-2.77-6.19-6.19 0-3.42 2.773-6.19 6.19-6.19 1.56 0 2.973.58 4.062 1.524l3.076-3.076C18.665 2.062 15.617 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.48 0 11.832-5.32 11.832-12.24 0-.7-.076-1.385-.213-1.955H12.24z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Header metadata */}
                      <div className="flex flex-col items-center text-center mt-1">
                        <h3 className="font-extrabold text-sm text-gray-800 leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] text-gray-400 mt-0.5 font-medium">
                          {item.date}
                        </span>

                        {/* Stars + Verified Review Badge */}
                        <div className="mt-1.5 flex items-center justify-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="ml-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1e40af] text-white">
                            <svg viewBox="0 0 24 24" fill="none" className="h-2 w-2 stroke-white stroke-[3.5]">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Review Text Box */}
                      <div className="flex-1 flex items-center justify-center px-1 py-2 my-auto">
                        <p className="text-xs text-gray-600 leading-relaxed font-semibold line-clamp-3 text-center">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            suppressHydrationWarning
            className="absolute right-0 z-20 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
          </button>

        </div>
      </div>
    </section>
  );
}
