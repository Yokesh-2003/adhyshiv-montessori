"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="w-full bg-[#fff8f3] border-y border-stone-200/40 py-16 sm:py-24 mt-16 sm:mt-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Portrait cutout compartment & Vision Realized callout */}
          <div className="lg:col-span-5 flex flex-col items-center lg:border-r lg:border-stone-200/40 lg:pr-12 pb-8 lg:pb-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] aspect-[4/5] z-10">
              
              {/* Dashed Orbital Paths centered directly behind the image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-[-10] overflow-visible hidden md:block opacity-[0.75]">
                <motion.div 
                  className="relative w-full h-full flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                  {/* Outer dashed orbit */}
                  <div className="absolute w-[650px] h-[650px] rounded-full border-[3px] border-dashed border-amber-500/30" />
                  {/* Middle dashed orbit */}
                  <div className="absolute w-[480px] h-[480px] rounded-full border-[3px] border-dashed border-blue-900/25" />
                  {/* Inner dashed orbit */}
                  <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-dashed border-amber-500/35" />
                  
                  {/* Floating nodes/circles on the orbits */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                  <div className="absolute bottom-1/4 right-0 w-3.5 h-3.5 rounded-full bg-[#1e40af] shadow-[0_0_12px_rgba(30,64,175,0.4)]" />
                </motion.div>
              </div>

              <Image
                src="/images/about/founder.png"
                alt="Founder of AdhyShiv"
                fill
                className="object-contain filter drop-shadow-md hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            {/* Occupying the space below the image with Milestone 5 (A Vision Realized) */}
            <div className="relative mt-8 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] bg-white/70 backdrop-blur-sm border border-amber-200 p-5 rounded-2xl shadow-sm flex flex-col gap-3 z-10 overflow-hidden text-left">
              <div className="absolute -right-6 -bottom-6 w-24 h-16 opacity-[0.04] pointer-events-none z-0">
                <Image
                  src="/images/about/overlay.png"
                  alt="Adhyshiv Watermark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#1e40af]/15 text-5xl font-serif leading-none absolute top-2 left-2 select-none z-0">
                “
              </span>
              <p className="text-sm font-semibold text-[#1e40af] italic leading-relaxed z-10 relative pl-4 text-justify">
                "Today, her dream of creating a thriving Montessori school is a reality, making us a beacon of Montessori excellence."
              </p>
              <p className="text-xs font-bold text-amber-600 text-right z-10 relative">
                — A Vision Realized
              </p>
            </div>
          </div>

          {/* Right Column: Bio compartment */}
          <div className="lg:col-span-7 flex flex-col text-left lg:pl-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase">
                MEET OUR LEADERSHIP
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight">
                Founder of AdhyShiv
              </h2>
              <div className="h-1 w-24 bg-amber-500 rounded-full mt-2" />
            </div>

            {/* Featured Highlight Block: The Origin */}
            <div className="relative bg-amber-500/[0.03] border-l-4 border-amber-500 p-6 rounded-r-2xl mt-8 z-10">
              <span className="absolute -top-3 left-4 px-3 py-0.5 bg-amber-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                01 / THE ORIGIN
              </span>
              <p className="text-blue-900 font-sans font-medium text-base sm:text-lg leading-relaxed text-justify">
                Our founder's journey from a concerned parent to a visionary Montessori educator is a testament to the transformative power of Montessori education. Her commitment to providing the best educational experience for her children led her to pursue a comprehensive Montessori teacher training course. In 2016, she successfully concluded her primary training with IMC (International Montessori Council). Following this, she dedicated three years to her craft by contributing her expertise to a renowned Montessori school, where her passion for Montessori education began to flourish.
              </p>
            </div>

            {/* Typographic Asymmetric Sub-Grid */}
            <div className="grid gap-8 md:grid-cols-2 mt-8 z-10">
              
              {/* Milestone 2 */}
              <div className="border-t border-stone-200/80 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-600">02 /</span>
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Elementary Focus</h4>
                </div>
                <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify">
                  Driven by her unwavering commitment to advancing Montessori principles for older children, she undertook further studies and attained elementary training. Gaining a profound understanding of this stage of education, she then ventured into the realm of elementary schools, accumulating a year of invaluable experience.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="border-t border-stone-200/80 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-600">03 /</span>
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Social Mission</h4>
                </div>
                <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify">
                  However, her calling extended beyond the confines of traditional education. She aspired to make Montessori education accessible to unreachable children, particularly in government and corporation schools. With a noble mission at heart, she embarked on the journey of setting up Montessori classrooms in these establishments and imparting authentic Montessori training to the educators.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="md:col-span-2 border-t border-stone-200/80 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-600">04 /</span>
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Dedication & Reach</h4>
                </div>
                <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify">
                  This dedication to a noble cause exemplifies her unyielding commitment to spreading the benefits of Montessori education to the unreachable.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
