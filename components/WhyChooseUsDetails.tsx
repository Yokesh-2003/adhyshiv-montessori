"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const gainsList = [
  "Confidence to express themselves",
  "Independence in everyday tasks",
  "Strong concentration skills",
  "Love for learning",
  "Respect for self and others",
  "Problem-solving abilities",
  "Emotional resilience",
  "Leadership qualities",
  "Communication",
  "Creativity",
  "Collaboration",
];

export default function WhyChooseUsDetails() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-cover bg-center pt-12 pb-20 md:pt-16 md:pb-28"
      style={{
        backgroundImage: "url('/images/home/bg4.png')",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              {/* Our Impact */}
              <div>
                <span className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase block mb-1">
                  Our Impact
                </span>
                <h2 className="text-3xl font-bold text-[#1e40af] md:text-4xl tracking-tight">
                  What Children Gain
                </h2>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1 mb-6">
                  Skills that matter for TOMORROW
                </p>
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {gainsList.map((gain, i) => (
                    <motion.li
                      key={gain}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-gray-600 md:text-base"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[#1e40af]/10 text-[#1e40af]">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[3]" />
                      </span>
                      <span>{gain}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Overlayer Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              <Image
                src="/images/home/overlayer.png"
                alt="Montessori learning illustration"
                fill
                unoptimized
                className="object-contain"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
