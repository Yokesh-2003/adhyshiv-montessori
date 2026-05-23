"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  { title: "Practical Life",        image: "/images/home/Practical Life.png" },
  { title: "Sensorial Exploration", image: "/images/home/Sensorial Exploration.png" },
  { title: "Mathematical Mastery",  image: "/images/home/Mathematical Mastery.png" },
  { title: "Language Enrichment",   image: "/images/home/Language Enrichment.png" },
  { title: "Cultural Exploration",  image: "/images/home/Cultural Exploration.png" },
];

export default function ProgramsSection() {
  return (
    <section
      id="programmes"
      aria-label="Our Programs"
      className="relative w-full overflow-hidden py-24 md:py-32 [clip-path:inset(0)]"
    >
      {/* Stationary fixed background (works on PC and Mobile) */}
      <div
        style={{
          backgroundImage: "url('/images/home/bg3.png')",
        }}
        className="fixed inset-0 bg-cover bg-center z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-base font-semibold text-sunny md:text-lg"
          >
            Primary programme ( 2– 6 yrs )
          </motion.p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center rounded-[2.5rem] bg-white p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-[1.8rem] bg-gray-50">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-full pt-4 text-center">
                <p className="text-sm font-extrabold tracking-tight text-pink-600 md:text-base">
                  {program.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
