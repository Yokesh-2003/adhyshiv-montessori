"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutLogoStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const stages = [
    {
      id: 0,
      label: "Beginning",
      title: "The Sun",
      subtitle: "STAGE 01 / 04",
      description: "Representing the warmth, light, and energy that fuels the initial spark of learning. Every child's journey starts with the dawn of curiosity and discovery, warmed by guidance and care. The sun represents the vibrant potential within each individual.",
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/images/about/sun.png"
            alt="The Sun"
            fill
            className="object-contain"
          />
        </div>
      ),
      largeIcon: (
        <div className="relative w-36 h-36 drop-shadow-md mx-auto">
          <Image
            src="/images/about/sun.png"
            alt="The Sun"
            fill
            className="object-contain"
          />
        </div>
      )
    },
    {
      id: 1,
      label: "Dream Big",
      title: "The Moon",
      subtitle: "STAGE 02 / 04",
      description: "Symbolizing the reflective, calm, and limitless space of dreams. We encourage children to look at the night sky and dream without boundaries, building confidence, patience, and deep focus in their endeavors.",
      icon: (
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/images/about/moon.png"
            alt="The Moon"
            fill
            className="object-cover"
          />
        </div>
      ),
      largeIcon: (
        <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md mx-auto">
          <Image
            src="/images/about/moon.png"
            alt="The Moon"
            fill
            className="object-cover"
          />
        </div>
      )
    },
    {
      id: 2,
      label: "AdhyShiv",
      title: "The Shiv Emblem",
      subtitle: "STAGE 03 / 04",
      description: "The integration of Sun rays and Moon crescent—combining day and night, energy and reflection. The traditional crown of looping rays above the cradled crescent forms the spiritual signature of AdhyShiv, balancing passion with serenity.",
      icon: (
        <div className="relative w-12 h-12">
          <Image
            src="/images/about/shiv-logo.png"
            alt="The Shiv Emblem"
            fill
            className="object-contain"
          />
        </div>
      ),
      largeIcon: (
        <div className="relative w-36 h-36 drop-shadow-md mx-auto">
          <Image
            src="/images/about/shiv-logo.png"
            alt="The Shiv Emblem"
            fill
            className="object-contain"
          />
        </div>
      )
    },
    {
      id: 3,
      label: "Our Identity",
      title: "AdhyShiv Montessori",
      subtitle: "STAGE 04 / 04",
      description: "Our complete institutional logo. By overlaying the AdhyShiv symbol onto our official wordmark, we represent a unified commitment to authentic Montessori pedagogy, child advocacy, and premium early childhood development.",
      icon: (
        <div className="relative w-16 h-10">
          <Image
            src="/images/about/overlay.png"
            alt="AdhyShiv Logo Symbol"
            fill
            className="object-contain"
          />
        </div>
      ),
      largeIcon: (
        <div className="relative w-full max-w-[280px] aspect-[16/10] mx-auto filter drop-shadow-md bg-white/40 p-4 rounded-2xl border border-stone-200/50">
          <Image
            src="/images/about/overlay.png"
            alt="AdhyShiv Full Logo"
            fill
            className="object-contain p-2"
          />
        </div>
      )
    }
  ];

  const handleStepChange = (newStep: number) => {
    // Find the shortest rotation difference inside the 4-stage cycle
    const currentStepInCycle = ((-rotationAngle / 90) % 4 + 4) % 4;
    let diff = newStep - currentStepInCycle;
    
    // Shortest path logic:
    if (diff > 2) diff -= 4;
    if (diff < -2) diff += 4;
    
    setRotationAngle((prev) => prev - diff * 90);
    setActiveStep(newStep);
  };

  const handleNext = () => {
    handleStepChange((activeStep + 1) % 4);
  };

  const handlePrev = () => {
    handleStepChange((activeStep - 1 + 4) % 4);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleStepChange((activeStep + 1) % 4);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeStep, rotationAngle]);

  const dialRotation = rotationAngle;

  return (
    <section className="w-full bg-[#fffcf8] border-b border-stone-200/40 py-16 sm:py-24 relative overflow-hidden">
      
      {/* Decorative background grid element */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
           style={{
             backgroundImage: "radial-gradient(#f59e0b 2px, transparent 2px)",
             backgroundSize: "24px 24px"
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
            OUR INITIAL SPARK
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight">
            Our Logo Story
          </h2>
          <div className="h-1 w-24 bg-amber-500 rounded-full mt-2" />
        </div>

        {/* Step Indicator Line (Process Line) */}
        <div className="w-full max-w-3xl mx-auto mb-16 px-4 relative">
          <div className="absolute top-1/2 left-4 right-4 h-[3px] bg-stone-200/70 -translate-y-1/2 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-4 h-[3px] bg-amber-500 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (stages.length - 1)) * 96}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          <div className="relative flex justify-between z-10">
            {stages.map((stage) => {
              const isActive = stage.id === activeStep;
              const isCompleted = stage.id <= activeStep;
              return (
                <button
                  suppressHydrationWarning
                  key={stage.id}
                  onClick={() => handleStepChange(stage.id)}
                  className="flex flex-col items-center gap-3 focus:outline-none group cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.45)] scale-110"
                        : isCompleted
                        ? "bg-blue-900 border-blue-900 text-white"
                        : "bg-white border-stone-300 text-stone-400 group-hover:border-stone-400"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-black">{stage.id + 1}</span>
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-black tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? "text-amber-600" : "text-[#4a3540]/60 group-hover:text-[#4a3540]"
                    }`}
                  >
                    {stage.label}
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
              suppressHydrationWarning
              onClick={handlePrev}
              className="absolute left-0 sm:left-4 z-20 w-12 h-12 bg-white/80 hover:bg-white text-blue-900 border border-stone-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Previous logo stage"
            >
              <svg className="w-6 h-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Central Rotating Wheel (Ferris Wheel design) */}
            <div className="relative w-72 h-72 sm:w-[26rem] sm:h-[26rem] flex items-center justify-center">
              
              {/* Outer decorative orbit ring */}
              <div className="absolute inset-[-20px] rounded-full border border-stone-200/50 -z-10" />

              {/* Main rotating dial container */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-dashed border-amber-500/20 flex items-center justify-center z-10"
                animate={{ rotate: dialRotation }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Dial Center Core */}
                <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/80 border border-stone-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] flex items-center justify-center pointer-events-none">
                  <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-amber-50/50 border border-amber-200/30 flex items-center justify-center">
                    <span className="text-amber-500/40 text-2xl font-serif">O</span>
                  </div>
                </div>

                {/* 4 Nodes placed around the wheel circumference (Ferris Wheel upright nodes) */}
                {stages.map((stage) => {
                  const isNodeActive = stage.id === activeStep;
                  
                  // Coordinate wrapper classes for static positioning
                  let wrapperClass = "";
                  if (stage.id === 0) wrapperClass = "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20";
                  if (stage.id === 1) wrapperClass = "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20";
                  if (stage.id === 2) wrapperClass = "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20";
                  if (stage.id === 3) wrapperClass = "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20";

                  return (
                    <div key={stage.id} className={wrapperClass}>
                      <motion.button
                        suppressHydrationWarning
                        onClick={() => handleStepChange(stage.id)}
                        className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center p-2.5 cursor-pointer group focus:outline-none relative"
                        animate={{ rotate: -dialRotation }} // Keep icons upright!
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {/* Active highlighted ring */}
                        {isNodeActive && (
                          <span className="absolute inset-[-4px] rounded-full border-2 border-amber-500 animate-ping opacity-30" />
                        )}
                        <div className={`transition-all duration-300 w-full h-full flex items-center justify-center rounded-full ${
                          isNodeActive ? "scale-110 bg-amber-50/30" : "opacity-60 group-hover:opacity-100 group-hover:scale-105"
                        }`}>
                          {stage.icon}
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right navigation arrow */}
            <button
              suppressHydrationWarning
              onClick={handleNext}
              className="absolute right-0 sm:right-4 z-20 w-12 h-12 bg-white/80 hover:bg-white text-blue-900 border border-stone-200 rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Next logo stage"
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
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#faf7f4] border border-amber-500/10 p-6 sm:p-8 rounded-[2rem] shadow-sm flex flex-col gap-5 min-h-[300px]"
              >
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase block mb-1">
                    {stages[activeStep].subtitle}
                  </span>
                  <h3 className="text-3xl font-black text-blue-900 font-display">
                    {stages[activeStep].title}
                  </h3>
                  <div className="h-1 w-16 bg-amber-500 rounded-full mt-2.5" />
                </div>

                <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify">
                  {stages[activeStep].description}
                </p>

                {/* Medium-format dynamic rendering of the active graphic */}
                <div className="mt-4 pt-4 border-t border-amber-200/30 flex items-center justify-center min-h-[140px]">
                  {stages[activeStep].largeIcon}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
