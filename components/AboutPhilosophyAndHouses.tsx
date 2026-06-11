"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Eye, Heart, HelpCircle, Sun } from "lucide-react";

export default function AboutPhilosophyAndHouses() {
  const pillars = [
    {
      title: "The Absorbent Mind",
      description: "A ray that curves inward or glows intensely, representing how the child effortlessly soaks up their environment like a sponge.",
      color: "from-amber-400 to-yellow-500",
      accentColor: "#f59e0b",
      bgLight: "bg-amber-50/50",
      icon: Sparkles,
      // Curved inward ray pointing down-right
      path: "M 100 40 C 85 45, 80 65, 94 76 C 90 65, 92 50, 100 40 Z"
    },
    {
      title: "Freedom",
      description: "An expansive, outward-reaching ray that signifies the liberty to choose work and move within a structured environment.",
      color: "from-blue-400 to-blue-500",
      accentColor: "#3b82f6",
      bgLight: "bg-blue-50/50",
      icon: Compass,
      // Long expansive ray shooting top-right
      path: "M 124 76 C 150 55, 175 40, 195 30 C 170 52, 145 74, 124 76 Z"
    },
    {
      title: "Hand of Intelligence",
      description: "A ray that ends in a subtle, refined point or curve, emphasizing that 'what the hand does, the mind remembers.'",
      color: "from-pink-400 to-pink-500",
      accentColor: "#ec4899",
      bgLight: "bg-pink-50/50",
      icon: Eye,
      // Ray ending in point pointing bottom-right
      path: "M 130 100 C 158 106, 182 118, 195 130 C 172 122, 148 110, 130 100 Z"
    },
    {
      title: "Respect for the Child",
      description: "A steady, grounded ray that represents the deep honoring of the child’s individual pace and dignity.",
      color: "from-emerald-400 to-emerald-500",
      accentColor: "#10b981",
      bgLight: "bg-emerald-50/50",
      icon: Heart,
      // Steady grounded vertical ray pointing down
      path: "M 100 130 C 100 160, 100 182, 100 195 C 96 175, 96 155, 100 130 Z"
    },
    {
      title: "The Prepared Environment",
      description: "A wide, encompassing ray that acts as a boundary or 'embrace' for the others, symbolizing the curated space where learning happens.",
      color: "from-violet-400 to-violet-500",
      accentColor: "#8b5cf6",
      bgLight: "bg-violet-50/50",
      icon: HelpCircle,
      // Wide crescent-like embrace on the left
      path: "M 55 100 C 55 58, 80 44, 96 38 C 76 48, 68 76, 68 100 C 68 124, 76 152, 96 162 C 80 156, 55 142, 55 100 Z"
    },
  ];

  const houses = [
    {
      name: "DAFFODILS",
      slogan: "The House of New Beginnings",
      symbolism: "Daffodils symbolize hope, joy, creativity, energy, and fresh beginnings. Just like the cheerful bloom of a daffodil, this house celebrates the excitement of first steps, new discoveries, and endless possibilities. As many children begin their educational journey at Adhyshiv, the Daffodil House reflects the wonder, curiosity, and enthusiasm that accompany every new beginning.",
      values: ["Hope", "Joy", "Creativity", "Energy"],
      image: "/images/about/DAFFODILS.png",
      themeColor: "#f59e0b", // Amber/Yellow
      bgGradient: "from-amber-500/10 via-transparent to-transparent",
      borderColor: "border-amber-200/60",
      textMuted: "text-amber-800",
      pillBg: "bg-amber-100/70 text-amber-900 border-amber-200",
      icon: "🌼"
    },
    {
      name: "TULIPS",
      slogan: "The House of Confidence & Renewal",
      symbolism: "Tulips symbolize abundance, confidence, growth, and renewal. This house encourages children to believe in themselves, embrace challenges, and continuously grow into the best version of themselves. Like tulips that bloom beautifully season after season, children learn that every day is an opportunity to learn, improve, and flourish.",
      values: ["Confidence", "Growth", "Renewal", "Positivity"],
      image: "/images/about/TULIPS.png",
      themeColor: "#ec4899", // Pink
      bgGradient: "from-pink-500/10 via-transparent to-transparent",
      borderColor: "border-pink-200/60",
      textMuted: "text-pink-800",
      pillBg: "bg-pink-100/70 text-pink-900 border-pink-200",
      icon: "🌷"
    },
    {
      name: "ORCHIDS",
      slogan: "The House of Courage & Uniqueness",
      symbolism: "Orchids are known for their beauty, rarity, resilience, and strength. This house celebrates individuality, courage, joy, and the confidence to stand out while remaining kind and respectful. Every child is unique, and Orchid House encourages children to embrace their strengths, talents, and authentic selves.",
      values: ["Courage", "Strength", "Joy", "Uniqueness"],
      image: "/images/about/ORCHIDS.png",
      themeColor: "#8b5cf6", // Purple/Violet
      bgGradient: "from-violet-500/10 via-transparent to-transparent",
      borderColor: "border-violet-200/60",
      textMuted: "text-violet-800",
      pillBg: "bg-violet-100/70 text-violet-900 border-violet-200",
      icon: "🌺"
    },
    {
      name: "BLUEBELLS",
      slogan: "The House of Calm & Compassion",
      symbolism: "Bluebells symbolize humility, openness, constancy, calmness, and enduring care for others. This house inspires children to build meaningful relationships, show empathy, and approach life with kindness and grace. Like a peaceful field of bluebells, this house reflects harmony, balance, and a deep sense of belonging.",
      values: ["Humility", "Openness", "Calmness", "Compassion"],
      image: "/images/about/BLUEBELLS.png",
      themeColor: "#3b82f6", // Blue
      bgGradient: "from-blue-500/10 via-transparent to-transparent",
      borderColor: "border-blue-200/60",
      textMuted: "text-blue-800",
      pillBg: "bg-blue-100/70 text-blue-900 border-blue-200",
      icon: "🔔"
    }
  ];

  const [activeHouse, setActiveHouse] = useState(0);
  const [houseRotation, setHouseRotation] = useState(0);

  const handleHouseChange = (newStep: number) => {
    const currentStepInCycle = ((-houseRotation / 90) % 4 + 4) % 4;
    let diff = newStep - currentStepInCycle;
    
    if (diff > 2) diff -= 4;
    if (diff < -2) diff += 4;
    
    setHouseRotation((prev) => prev - diff * 90);
    setActiveHouse(newStep);
  };

  const handleHouseNext = () => {
    handleHouseChange((activeHouse + 1) % 4);
  };

  const handleHousePrev = () => {
    handleHouseChange((activeHouse - 1 + 4) % 4);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleHouseChange((activeHouse + 1) % 4);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeHouse, houseRotation]);

  return (
    <div className="w-full flex flex-col gap-24 py-16 sm:py-24 relative overflow-hidden">
      
      {/* 1. Montessori Philosophy Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="flex flex-col gap-6 text-left">
          <div className="text-center md:text-left">
            <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
              Core Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 font-display tracking-tight leading-tight mt-2">
              Montessori Philosophy
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mt-2 font-display">
              Follow the Child
            </h3>
            <div className="h-1 w-24 bg-amber-500 rounded-full mt-3 mx-auto md:mx-0" />
          </div>

          <div className="flex flex-col gap-5 text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed md:text-lg text-justify mt-4">
            <p className="font-bold text-blue-950 text-center md:text-left">
              Maria Montessori believed that children naturally want to learn.
            </p>
            <p>
              When given freedom within a carefully prepared environment, children develop remarkable focus, independence, self-discipline, and a lifelong love for knowledge.
            </p>
            <p>
              Our classrooms are thoughtfully designed to encourage exploration, movement, hands-on learning, and meaningful experiences that help children build both academic and life skills.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Five Pillars of the Adhyshiv Sun (Logo Breakdown) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 border-t border-stone-200/50 pt-20">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
            Visual Metaphor
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight">
            The Five Pillars of the Adhyshiv Sun
          </h2>
          <div className="h-1 w-24 bg-amber-500 rounded-full mt-2" />
          <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed text-justify sm:text-center">
            A beautiful and evocative vision for a logo. By aligning the "rays" of the sun with the core pillars of Montessori, we create a visual metaphor for growth, enlightenment, and the natural unfolding of a child's potential. Here is a breakdown of how those five pillars conceptually represent our logo's design:
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start mt-12">
          {/* Left: Pillars Grid (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex gap-4 p-5 sm:p-6 rounded-[2rem] border border-stone-200/40 shadow-sm ${p.bgLight} transition-all duration-300 hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                    <IconComp className="h-5 w-5 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="text-base sm:text-lg font-black text-blue-950 font-display">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed text-justify">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Design Concepts & Tagline (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden text-left border border-blue-800">
              
              {/* Radial gradient background accent */}
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-amber-500/15 filter blur-3xl pointer-events-none" />

              <span className="text-xs font-black tracking-widest text-amber-500 uppercase block mb-1">
                DESIGN CONCEPTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mb-6">
                Design Concepts for Our Logo
              </h3>

              <div className="flex flex-col gap-6">
                {/* Concept 1 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0 font-black text-sm">
                    1
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-extrabold text-amber-300 text-sm sm:text-base">
                      The "Encompassing" Circle
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed text-justify">
                      The sun’s center represents the child, with the five rays (arms) reaching out to touch the "pillars" which form a protective circular border around the name.
                    </p>
                  </div>
                </div>

                {/* Concept 2 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0 font-black text-sm">
                    2
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-extrabold text-amber-300 text-sm sm:text-base">
                      The Upward Growth
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed text-justify">
                      Position the rays as a rising sun, suggesting a new dawn of education and the bright future of the students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline Showcase */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center text-center">
                <Sun className="h-6 w-6 text-amber-400 animate-spin-slow mb-3" />
                <p className="text-lg sm:text-xl font-serif italic font-medium text-amber-100 tracking-wide">
                  "Illuminating the path, honoring the child."
                </p>
              </div>
            </div>

            {/* Visual Logo Emblem Display */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#fffcf9] border-2 border-amber-500/15 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-6 shadow-[0_15px_35px_rgba(245,158,11,0.05)] relative overflow-hidden"
            >
              {/* Decorative background accent */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/5 rounded-full filter blur-xl pointer-events-none" />
              
              <div className="relative w-full max-w-[260px] aspect-[16/10] bg-white/60 p-4 rounded-3xl border border-stone-200/50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center">
                <Image
                  src="/images/about/overlay.png"
                  alt="Adhyshiv Full Logo"
                  width={220}
                  height={130}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1 font-display">
                  Official Logo Emblem
                </span>
                <p className="text-xs text-slate-500 font-bold leading-relaxed max-w-[220px] mx-auto">
                  The visual signature of Adhyshiv International Montessori
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Four Houses Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 border-t border-stone-200/50 pt-20">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
            Four Houses, One Community
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight">
            Our Houses
          </h2>
          <div className="h-1 w-24 bg-amber-500 rounded-full mt-2" />
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed font-semibold italic text-justify sm:text-center">
            "Like flowers in a garden, every child blooms differently. Our four houses celebrate the unique qualities that help children grow into confident, compassionate, and capable individuals."
          </p>
        </div>

        {/* Step Indicator Line (Process Line) */}
        <div className="w-full max-w-3xl mx-auto mb-16 px-4 relative">
          <div className="absolute top-1/2 left-4 right-4 h-[3px] bg-stone-200/70 -translate-y-1/2 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-4 h-[3px] bg-amber-500 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeHouse / (houses.length - 1)) * 96}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          <div className="relative flex justify-between z-10">
            {houses.map((house, idx) => {
              const isActive = idx === activeHouse;
              const isCompleted = idx <= activeHouse;
              return (
                <button
                  key={idx}
                  onClick={() => handleHouseChange(idx)}
                  className="flex flex-col items-center gap-3 focus:outline-none group cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.45)] scale-110"
                        : isCompleted
                        ? "border-blue-900 text-white"
                        : "bg-white border-stone-300 text-stone-400 group-hover:border-stone-400"
                    }`}
                    style={{
                      backgroundColor: isActive ? house.themeColor : isCompleted ? '#1e3a8a' : '#ffffff',
                      borderColor: isActive ? house.themeColor : isCompleted ? '#1e3a8a' : '#d1d5db'
                    }}
                  >
                    <span className="text-xs sm:text-sm font-black">{idx + 1}</span>
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-black tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? "text-amber-600" : "text-[#4a3540]/60 group-hover:text-[#4a3540]"
                    }`}
                    style={{ color: isActive ? house.themeColor : '' }}
                  >
                    {house.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center mt-12">
          
          {/* Left Column: Rotating Wheel Carousel */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            
            {/* Left navigation arrow */}
            <button
              onClick={handleHousePrev}
              className="absolute left-0 sm:left-4 z-20 w-12 h-12 bg-white/80 hover:bg-white text-blue-900 border border-stone-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Previous house"
            >
              <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Central Rotating Wheel */}
            <div className="relative w-72 h-72 sm:w-[26rem] sm:h-[26rem] flex items-center justify-center">
              
              {/* Outer decorative orbit ring */}
              <div className="absolute inset-[-20px] rounded-full border border-stone-200/50 -z-10" />

              {/* Main rotating dial container */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-dashed border-amber-500/20 flex items-center justify-center z-10"
                animate={{ rotate: houseRotation }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Dial Center Core */}
                <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/80 border border-stone-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center pointer-events-none">
                  <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-amber-50/50 border border-amber-200/30 flex items-center justify-center">
                    <span className="text-amber-500/40 text-2xl font-serif">✿</span>
                  </div>
                </div>

                {/* 4 Nodes placed around the wheel circumference */}
                {houses.map((house, idx) => {
                  const isNodeActive = idx === activeHouse;
                  
                  let wrapperClass = "";
                  if (idx === 0) wrapperClass = "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20";
                  if (idx === 1) wrapperClass = "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20";
                  if (idx === 2) wrapperClass = "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20";
                  if (idx === 3) wrapperClass = "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20";

                  return (
                    <div key={idx} className={wrapperClass}>
                      <motion.button
                        onClick={() => handleHouseChange(idx)}
                        className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center cursor-pointer group focus:outline-none relative animate-none"
                        animate={{ rotate: -houseRotation }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {isNodeActive && (
                          <span 
                            className="absolute inset-[-4px] rounded-full border-2 animate-ping opacity-30" 
                            style={{ borderColor: house.themeColor }}
                          />
                        )}
                        <div className="transition-all duration-300 w-full h-full flex items-center justify-center overflow-hidden">
                          {/* Flower Image */}
                          <Image
                            src={house.image}
                            alt={house.name}
                            width={64}
                            height={64}
                            className="object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply"
                          />
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={handleHouseNext}
              className="absolute right-0 sm:right-4 z-20 w-12 h-12 bg-white/80 hover:bg-white text-blue-900 border border-stone-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Next house"
            >
              <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Right Column: Narrative Detail Card */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHouse}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#faf7f4] border p-6 sm:p-8 rounded-[2rem] shadow-sm flex flex-col gap-5 min-h-[380px] transition-colors duration-500"
                style={{ borderColor: `${houses[activeHouse].themeColor}20` }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span 
                      className="text-xs font-bold tracking-[0.2em] uppercase block mb-1 font-display"
                      style={{ color: houses[activeHouse].themeColor }}
                    >
                      {houses[activeHouse].slogan}
                    </span>
                    <h3 
                      className="text-3xl font-black font-display"
                      style={{ color: houses[activeHouse].themeColor }}
                    >
                      {houses[activeHouse].name}
                    </h3>
                    <div 
                      className="h-1 w-16 rounded-full mt-2.5" 
                      style={{ backgroundColor: houses[activeHouse].themeColor }}
                    />
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center select-none shrink-0">
                    <Image
                      src={houses[activeHouse].image}
                      alt={houses[activeHouse].name}
                      width={64}
                      height={64}
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>

                <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify flex-grow">
                  {houses[activeHouse].symbolism}
                </p>

                {/* Values Footer inside the Card */}
                <div className="border-t border-stone-200/50 pt-4 mt-auto">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2 font-display">
                    Values
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {houses[activeHouse].values.map((val) => (
                      <span 
                        key={val}
                        className={`text-xs font-extrabold px-3 py-1 rounded-full border ${houses[activeHouse].pillBg}`}
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
