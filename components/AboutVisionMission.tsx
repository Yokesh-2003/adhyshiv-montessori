"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const valuesList = [
  "Child-Centric Excellence",
  "Montessori Philosophy",
  "Curiosity and Exploration",
  "Independence",
  "Empathy",
  "Social Justice",
  "Holistic Development",
  "Community Empowerment",
  "Quality Education",
];

export default function AboutVisionMission() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative mt-16 sm:mt-20 border-t border-stone-200/60 pt-10 overflow-hidden">
      
      {/* 3D Glass Sphere Left */}
      <motion.div
        className="absolute -left-12 -top-10 rounded-full border border-white/50 backdrop-blur-[2px] shadow-[inset_10px_-10px_30px_rgba(255,255,255,0.5),_10px_15px_30px_rgba(0,0,0,0.06)] pointer-events-none z-0 hidden md:block"
        style={{
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.05) 50%, rgba(30,64,175,0.12) 100%)"
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.04, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 3D Glass Sphere Right */}
      <motion.div
        className="absolute -right-16 -bottom-12 rounded-full border border-white/50 backdrop-blur-[2px] shadow-[inset_10px_-10px_30px_rgba(255,255,255,0.5),_10px_15px_30px_rgba(0,0,0,0.06)] pointer-events-none z-0 hidden md:block"
        style={{
          width: "140px",
          height: "140px",
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.05) 50%, rgba(245,158,11,0.12) 100%)"
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="grid gap-12 md:grid-cols-3 relative z-10">
        
        {/* Vision Column */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e40af] font-display">
            Vision
          </h3>
          <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify mt-2">
            At the core of our vision resides the authentic Montessori experience, wherein children embark on a profound journey of self-discovery and academic growth. Our unwavering commitment is to nurture and empower confident, socially responsible individuals who become pillars of our community.
          </p>
        </div>

        {/* Mission Column */}
        <div className="flex flex-col gap-4 text-left md:border-l md:border-stone-200/60 md:pl-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e40af] font-display">
            Mission
          </h3>
          <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed text-justify mt-2">
            Driven by a commitment to excellence, our mission is to deliver an esteemed Montessori education program. This program is meticulously overseen by certified Montessori professionals and enriched through the utilization of the highest quality educational materials.
          </p>
        </div>

        {/* Values Column */}
        <div className="flex flex-col gap-4 text-left md:border-l md:border-stone-200/60 md:pl-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e40af] font-display">
            Values
          </h3>
          <ul className="flex flex-col gap-2.5 mt-2">
            {valuesList.map((value) => (
              <li key={value} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold">
                <Check className="h-5 w-5 shrink-0 text-[#1e40af] stroke-[3]" />
                <span className="text-amber-500">{value}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
