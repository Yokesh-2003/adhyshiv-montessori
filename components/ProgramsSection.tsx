"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Eye,
  Calculator,
  Languages,
  Compass,
  Search,
  Leaf,
  Fingerprint,
  MessageSquare,
  FlaskConical,
  Binary,
  Globe,
  Lightbulb,
  Award,
  Puzzle,
  Cpu
} from "lucide-react";

const primaryModules = [
  { title: "Practical Life", icon: Sparkles, color: "text-amber-500 bg-amber-50 border-amber-100" },
  { title: "Sensorial Exploration", icon: Eye, color: "text-pink-500 bg-pink-50 border-pink-100" },
  { title: "Mathematical Mastery", icon: Calculator, color: "text-blue-500 bg-blue-50 border-blue-100" },
  { title: "Language Enrichment", icon: Languages, color: "text-purple-500 bg-purple-50 border-purple-100" },
  { title: "Cultural Exploration", icon: Compass, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { title: "Observation Skills", icon: Search, color: "text-indigo-500 bg-indigo-50 border-indigo-100" },
  { title: "Curiosity about Living Things", icon: Leaf, color: "text-teal-500 bg-teal-50 border-teal-100" },
  { title: "Fine Motor Skills", icon: Fingerprint, color: "text-rose-500 bg-rose-50 border-rose-100" },
];

const elementaryModules = [
  { title: "Advanced Language & Communication", icon: MessageSquare, color: "text-purple-500 bg-purple-50 border-purple-100" },
  { title: "Scientific Inquiry", icon: FlaskConical, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { title: "Mathematical Reasoning", icon: Binary, color: "text-blue-500 bg-blue-50 border-blue-100" },
  { title: "Global Studies & Culture", icon: Globe, color: "text-amber-500 bg-amber-50 border-amber-100" },
  { title: "Creativity & Innovation", icon: Lightbulb, color: "text-yellow-500 bg-yellow-50 border-yellow-100" },
  { title: "Leadership & Life Skills", icon: Award, color: "text-rose-500 bg-rose-50 border-rose-100" },
  { title: "Problem-solving Abilities", icon: Puzzle, color: "text-indigo-500 bg-indigo-50 border-indigo-100" },
  { title: "Future-ready Competencies", icon: Cpu, color: "text-sky-500 bg-sky-50 border-sky-100" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ProgramsSection() {
  return (
    <section
      id="programmes"
      aria-label="Our Programs"
      className="relative w-full overflow-hidden py-24 md:py-32 [clip-path:inset(0)]"
    >
      {/* Stationary fixed background (locked to viewport height) */}
      <div
        style={{
          backgroundImage: "url('/images/home/bg3.png')",
        }}
        className="fixed top-0 left-0 w-screen h-[100lvh] bg-cover bg-center z-0 pointer-events-none"
      />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sunny text-xs font-black uppercase tracking-widest mb-4"
          >
            What Parents Notice Most
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-sunny font-display tracking-tight mb-4"
          >
            Our Programmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sunny text-base sm:text-lg font-semibold"
          >
            A carefully crafted journey supporting children's natural stages of development and learning.
          </motion.p>
        </div>

        {/* 1. PRIMARY PROGRAMME (2-6 YEARS) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-8 md:p-12 lg:p-14"
        >
          {/* Showcase Image Column */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
            <Image
              src="/images/home/primary_programme.png"
              alt="Primary Programme (2-6 Years)"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-sunny text-xs font-black uppercase tracking-widest block mb-1">Ages 2 – 6 Years</span>
              <h3 className="text-2xl font-black tracking-tight">Primary Programme</h3>
            </div>
          </div>

          {/* Module Cards Grid Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-sunny font-display tracking-tight mb-2">
                Primary Programme
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-semibold leading-relaxed">
                Fostering independence, self-motivation, and foundational cognitive abilities in a child-centered sensory environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {primaryModules.map((module, i) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={module.title}
                    variants={cardVariants}
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-[1.8rem] border border-stone-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center border font-bold ${module.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 text-sm sm:text-base font-bold tracking-tight">
                      {module.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 2. ELEMENTARY PROGRAMME (6+ YEARS) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-8 md:p-12 lg:p-14"
        >
          {/* Module Cards Grid Column (Comes first on desktop for alternating layout) */}
          <div className="lg:col-span-7 lg:order-1 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-sunny font-display tracking-tight mb-2">
                Elementary Programme
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-semibold leading-relaxed">
                Nurturing collaborative problem-solving, advanced academic enquiry, leadership skills, and global consciousness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {elementaryModules.map((module, i) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={module.title}
                    variants={cardVariants}
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-[1.8rem] border border-stone-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center border font-bold ${module.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 text-sm sm:text-base font-bold tracking-tight">
                      {module.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Showcase Image Column (Comes second on desktop) */}
          <div className="lg:col-span-5 lg:order-2 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
            <Image
              src="/images/home/elementary_programme.png"
              alt="Elementary Programme (6+ Years)"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-sunny text-xs font-black uppercase tracking-widest block mb-1">Ages 6+ Years</span>
              <h3 className="text-2xl font-black tracking-tight">Elementary Programme</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
