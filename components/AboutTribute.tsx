"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutTribute() {
  return (
    <section className="w-full bg-[#fffbf8] border-b border-stone-200/40 py-16 sm:py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Editorial Tribute Letter */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left relative lg:border-r lg:border-stone-200/40 lg:pr-12">
            
            {/* Paper airplane doodle watermark floating behind text */}
            <div className="absolute top-20 right-10 w-28 h-28 opacity-[0.08] pointer-events-none z-0">
              <Image
                src="/images/about/overlay.png"
                alt="Doodle Plane"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
                OUR INSPIRATION
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight">
                Maria Montessori...
              </h2>
              <div className="h-1 w-24 bg-amber-500 rounded-full mt-2" />
            </div>

            {/* Redesigned Letter Card container */}
            <div className="relative z-10 flex flex-col gap-6 mt-6 bg-[#faf7f4] border border-amber-500/15 p-6 sm:p-8 rounded-[2rem] shadow-sm">
              <p className="text-blue-900 font-sans font-bold text-base sm:text-lg">
                Dear Dr. Maria Montessori,
              </p>
              
              <div className="flex flex-col gap-6 text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed md:text-lg text-justify">
                <p className="inline-block">
                  <span className="float-left text-5xl font-extrabold text-blue-900 mr-3 mt-1 leading-none font-display">
                    W
                  </span>
                  ith deep appreciation and admiration, we express our heartfelt gratitude for your groundbreaking contributions to the world of education. Your Montessori method has transformed the way we understand and nurture the potential of every child. Your unwavering dedication to creating environments where learning is a joyous exploration has touched the lives of countless students, educators, and parents.
                </p>
                <p>
                  Your vision, compassion, and commitment have left an indelible mark on the world, inspiring generations to embrace a more child-centric and holistic approach to learning. Your legacy is a beacon of hope and a testament to the power of innovative thinking.
                </p>
                <p>
                  Thank you, Dr. Maria Montessori, for your enduring impact on education and for your profound influence on the lives of countless individuals. Your work continues to shape the future, and we are profoundly grateful for your remarkable contributions.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-1 text-left border-t border-amber-200/50 pt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4a3540]/60 italic">
                  Sincerely,
                </span>
                <span className="text-base sm:text-lg font-extrabold text-amber-600 tracking-wide font-display">
                  AdhyShiv International
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Redesigned Elegant Offset Frame Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:pl-4 pt-12 lg:pt-28">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] z-10">
              
              {/* Dashed Orbital Paths in the Background (centered behind image) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-[-20] overflow-visible hidden md:block opacity-[0.75]">
                <motion.div 
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                  {/* Concentric orbits */}
                  <div className="absolute w-[650px] h-[650px] rounded-full border-[3px] border-dashed border-amber-500/30" />
                  <div className="absolute w-[480px] h-[480px] rounded-full border-[3px] border-dashed border-blue-900/25" />
                  <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-dashed border-amber-500/35" />
                  
                  {/* Floating nodes/circles on the orbits */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  <div className="absolute bottom-1/4 right-0 w-3.5 h-3.5 rounded-full bg-[#1e40af] shadow-[0_0_12px_rgba(30,64,175,0.4)]" />
                  <div className="absolute top-1/3 left-6 w-3.5 h-3.5 rounded-full bg-amber-600/70" />
                </motion.div>
              </div>

              {/* Decorative offset gold/amber background board */}
              <div className="absolute inset-0 bg-amber-500/10 border-2 border-amber-500/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10" />
              
              {/* Picture frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-amber-200 shadow-xl bg-white">
                <Image
                  src="/images/about/Maria Montessori.jpg"
                  alt="Dr. Maria Montessori"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
