"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const SLIDES = [
  { src: "/images/hero-playground.jpg", alt: "Montessori playground" },
  { src: "/images/hero-eating.jpg", alt: "Children having nutritious meals" },
  { src: "/images/hero-classroom.JPG", alt: "Montessori classroom learning" },
];

const INTERVAL_MS = 4000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cover bg-center pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-38 lg:pb-16"
      style={{
        backgroundImage: "url('/images/home/bg1.jpg')",
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f5]/92 via-[#fff9f5]/82 to-[#fff9f5]/95 z-0 pointer-events-none" />
      {/* Background blobs and gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Soft yellow/orange blob top right */}
        <div className="absolute -top-40 -right-40 w-[450px] h-[450px] rounded-full bg-[#fef08a]/35 blur-[80px]" />
        
        {/* Soft blue/teal blob top left */}
        <div className="absolute -top-10 -left-20 w-[400px] h-[400px] rounded-full bg-[#ccfbf1]/45 blur-[80px]" />
        
        {/* Soft pink/purple blob middle right */}
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#fbcfe8]/40 blur-[90px]" />
        
        {/* Soft lavender/blue blob bottom left */}
        <div className="absolute -bottom-20 -left-10 w-[450px] h-[450px] rounded-full bg-[#e0e7ff]/55 blur-[85px]" />
        
        {/* Radial background grid or glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff9f5]/20 to-[#fff9f5]" />

        {/* KIDS THEME SVG BACKGROUND ELEMENTS */}
        
        {/* Smiling Sun (Top Left) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="absolute top-12 left-6 sm:left-12 w-20 h-20 text-yellow-400/40 opacity-70"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="22" fill="currentColor" />
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d="M 50 12 L 50 2"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </svg>
        </motion.div>

        {/* Drifting Smiling Cloud (Top Middle/Right) */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-14 left-[40%] md:left-[45%] w-24 sm:w-32 h-16 text-blue-200/40 opacity-60"
        >
          <svg viewBox="0 0 120 80" className="w-full h-full" fill="currentColor">
            <path d="M30 60 Q 10 60 10 40 Q 10 20 30 25 Q 40 10 60 10 Q 80 10 85 25 Q 110 25 110 45 Q 110 60 90 60 Z" />
            <circle cx="45" cy="38" r="2.5" fill="#1e293b" opacity="0.5" />
            <circle cx="65" cy="38" r="2.5" fill="#1e293b" opacity="0.5" />
            <path d="M51 45 Q 55 49 59 45" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Paper Plane with Dashed Trail (Bottom Left) */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
          className="absolute bottom-16 left-[5%] w-40 h-20 text-slate-400/30 hidden sm:block"
        >
          <svg viewBox="0 0 200 100" className="w-full h-full" fill="none">
            <path d="M10 80 C 40 85, 80 75, 110 35 C 130 10, 160 5, 180 10" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" />
            <g transform="translate(180, 10) rotate(-10)">
              <polygon points="0,0 -16,5 -11,0 -16,-5" fill="currentColor" />
            </g>
          </svg>
        </motion.div>

        {/* Cute Floating Balloon (Bottom Middle-Right) */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-2, 4, -2] }}
          transition={{ repeat: Infinity, duration: 9.5, ease: "easeInOut" }}
          className="absolute bottom-24 left-[46%] w-10 h-16 text-[#ff6097]/30 opacity-60 hidden md:block"
        >
          <svg viewBox="0 0 50 100" className="w-full h-full" fill="currentColor">
            <ellipse cx="25" cy="30" rx="16" ry="22" />
            <polygon points="25,52 21,56 29,56" />
            <path d="M25 56 C 23 68, 27 78, 25 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Scattered Sparkles and Stars */}
        {/* Sparkle 1 */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute top-[28%] left-[22%] w-5 h-5 text-[#ff6097]/30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
        </motion.div>

        {/* Sparkle 2 */}
        <motion.div
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.8, 0.4, 0.8] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
          className="absolute top-[20%] left-[62%] w-4 h-4 text-[#3b82f6]/30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
        </motion.div>

        {/* Sparkle 3 */}
        <motion.div
          animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 3.8, delay: 0.5, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[38%] w-6 h-6 text-[#fbbf24]/30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] text-xs sm:text-sm font-bold text-blue-600 tracking-wide select-none">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
              Now enrolling · Anna Nagar, Chennai
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight leading-[1.1] md:leading-[1.05]">
              Where little minds <br className="hidden sm:inline" />
              <span className="inline-flex flex-row flex-nowrap whitespace-nowrap gap-[1.5px] sm:gap-[3px] font-black mr-2 select-none">
                <span className="text-[#2ec8b6]">s</span>
                <span className="text-[#a855f7]">h</span>
                <span className="text-[#3b82f6]">i</span>
                <span className="text-[#ff6097]">n</span>
                <span className="text-[#fbbf24]">e</span>
              </span>
              bright
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-bold max-w-xl leading-relaxed">
              Empowering young minds, one Montessori moment at a time.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {/* Enroll Now Button */}
              <Link
                href="#enroll"
                className="relative group inline-flex items-center justify-center px-8 py-3.5 bg-[#ff6097] text-white font-extrabold text-base sm:text-lg rounded-full border-[3px] border-slate-800 shadow-[0_6px_0_#1e293b] hover:translate-y-[2px] hover:shadow-[0_4px_0_#1e293b] active:translate-y-[6px] active:shadow-none transition-all duration-150 cursor-pointer select-none"
              >
                Enroll Now
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Our School Button */}
              <Link
                href="#about"
                className="relative group inline-flex items-center justify-center px-8 py-3.5 bg-[#3b82f6] text-white font-extrabold text-base sm:text-lg rounded-full border-[3px] border-slate-800 shadow-[0_6px_0_#1e293b] hover:translate-y-[2px] hover:shadow-[0_4px_0_#1e293b] active:translate-y-[6px] active:shadow-none transition-all duration-150 cursor-pointer select-none"
              >
                Our School
              </Link>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              <span className="px-5 py-2.5 bg-white rounded-full border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-extrabold shadow-[0_2px_4px_rgba(0,0,0,0.02)] select-none">
                Ages 2–6
              </span>
              <span className="px-5 py-2.5 bg-white rounded-full border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-extrabold shadow-[0_2px_4px_rgba(0,0,0,0.02)] select-none">
                Montessori
              </span>
              <span className="px-5 py-2.5 bg-white rounded-full border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-extrabold shadow-[0_2px_4px_rgba(0,0,0,0.02)] select-none">
                Anna Nagar
              </span>
            </div>
          </div>

          {/* Right Column - Glowing Slideshow Box */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[440px] aspect-square p-2">
              {/* Outer Vibrant Ambient Glow - Dynamic rotating/morphing blobs & orbiting stars */}
              <div className="absolute -inset-4 pointer-events-none select-none">
                {/* Pink glow blob */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 0.9, 1],
                    rotate: [0, 180, 360],
                    x: [0, 12, -12, 0],
                    y: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#ff6097] opacity-35 rounded-[3rem] blur-2xl"
                />
                {/* Yellow glow blob */}
                <motion.div
                  animate={{
                    scale: [1.1, 0.9, 1.15, 1.1],
                    rotate: [180, 360, 0, 180],
                    x: [0, -15, 15, 0],
                    y: [0, 12, -12, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#fbbf24] opacity-30 rounded-[3rem] blur-2xl"
                />
                {/* Blue glow blob */}
                <motion.div
                  animate={{
                    scale: [0.95, 1.1, 0.95, 0.95],
                    rotate: [360, 0, 180, 360],
                    x: [0, 10, -10, 0],
                    y: [0, -8, 8, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#3b82f6] opacity-30 rounded-[3rem] blur-2xl"
                />

                {/* Rotating hand-drawn style dashed orbit circle 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-15px] sm:inset-[-25px] rounded-full border-2 border-dashed border-[#a855f7]/25 z-0"
                />
                
                {/* Rotating opposite dashed orbit circle 2 */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-30px] sm:inset-[-45px] rounded-full border border-dashed border-[#2ec8b6]/20 z-0"
                />
                
                {/* Orbiting Star 1 (Yellow) */}
                <motion.div
                  animate={{
                    x: [0, 35, 0, -35, 0],
                    y: [0, -25, 35, -15, 0],
                    scale: [0.8, 1.25, 0.9, 1.1, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 left-[15%] w-6 h-6 text-yellow-400/50 z-10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                </motion.div>
                
                {/* Orbiting Star 2 (Pink) */}
                <motion.div
                  animate={{
                    x: [0, -45, 15, -10, 0],
                    y: [0, 25, -25, 15, 0],
                    scale: [1, 0.8, 1.2, 0.95, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[-10px] -right-4 w-7 h-7 text-[#ff6097]/40 z-10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                </motion.div>

                {/* Orbiting Star 3 (Teal) */}
                <motion.div
                  animate={{
                    x: [0, 20, -35, 15, 0],
                    y: [0, 40, -10, -25, 0],
                    scale: [0.9, 1.1, 0.85, 1.2, 0.9],
                    rotate: [120, 240, 360],
                  }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[45%] -left-8 w-5 h-5 text-[#2ec8b6]/45 z-10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                </motion.div>
              </div>

              {/* White Frame Container */}
              <div className="relative w-full h-full border-[10px] sm:border-[14px] border-white rounded-[2.25rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                
                {/* Slideshow Wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-[1.25rem]">
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={SLIDES[current].src}
                        alt={SLIDES[current].alt}
                        fill
                        priority={current === 0}
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Removed Ages 2-6 badge per user request */}

                {/* Overlapping Button: Sparkles (Manual Next slide control) */}
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next slide"
                  suppressHydrationWarning
                  className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-slate-800 active:scale-90 transition-all cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Sticker Outside Top-Left: Creative Play (Pink) */}
              <div className="absolute -top-3 -left-6 z-30 px-4 py-2 bg-[#ff6097] text-white font-extrabold text-xs sm:text-sm rounded-full border-2 border-white shadow-[0_4px_10px_rgba(255,96,151,0.3)] -rotate-6 select-none whitespace-nowrap">
                Creative play
              </div>

              {/* Sticker Outside Right: Montessori (Purple) */}
              <div className="absolute top-[42%] -right-8 z-30 px-4 py-2 bg-[#a855f7] text-white font-extrabold text-xs sm:text-sm rounded-full border-2 border-white shadow-[0_4px_10px_rgba(168,85,247,0.3)] rotate-6 select-none whitespace-nowrap">
                Montessori
              </div>

              {/* Sticker Outside Top-Right: Cute Smiley Face */}
              <div className="absolute -top-6 -right-6 z-30 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] select-none rotate-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Left Ear */}
                  <circle cx="12" cy="50" r="10" fill="#ffd56b" stroke="#1e293b" strokeWidth="4" />
                  {/* Right Ear */}
                  <circle cx="88" cy="50" r="10" fill="#ffd56b" stroke="#1e293b" strokeWidth="4" />
                  {/* Head/Face */}
                  <circle cx="50" cy="50" r="41" fill="#ffd56b" stroke="#1e293b" strokeWidth="4" />
                  
                  {/* Headband / Arch */}
                  <path d="M15 32 C 30 14, 70 14, 85 32" fill="none" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
                  <path d="M15 32 C 30 14, 70 14, 85 32" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Headband Stripes */}
                  {/* Pink stripe */}
                  <circle cx="28" cy="20" r="3.5" fill="#ff6097" />
                  {/* Yellow stripe */}
                  <circle cx="50" cy="15" r="3.5" fill="#fbbf24" />
                  {/* Teal stripe */}
                  <circle cx="72" cy="20" r="3.5" fill="#2ed8b6" />
                  
                  {/* Cheek pink blushes */}
                  <circle cx="28" cy="56" r="6" fill="#ff8ea3" opacity="0.8" />
                  <circle cx="72" cy="56" r="6" fill="#ff8ea3" opacity="0.8" />
                  
                  {/* Eyes */}
                  <circle cx="37" cy="46" r="4" fill="#1e293b" />
                  <circle cx="63" cy="46" r="4" fill="#1e293b" />
                  
                  {/* Cute Smile */}
                  <path d="M42 61 Q 50 69 58 61" fill="none" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

