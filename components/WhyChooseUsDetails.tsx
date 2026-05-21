"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function WhyChooseUsDetails() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-cover bg-center py-20 md:py-28"
      style={{
        backgroundImage: "url('/images/home/bg4.png')",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase">
                Why Choose Us ••••••
              </span>
              
              {/* Vision */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[#1e40af] md:text-2xl mb-3">
                  Vision
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed md:text-base">
                  At the core of our vision resides the authentic Montessori experience,
                  wherein children embark on a profound journey of self-discovery and
                  academic growth. Our unwavering commitment is to nurture and
                  empower confident, socially responsible individuals who become pillars of
                  our community.
                </p>
              </div>

              {/* Mission */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1e40af] md:text-2xl mb-3">
                  Mission
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed md:text-base">
                  Driven by a commitment to excellence, our mission is to deliver an
                  esteemed Montessori education program. This program is meticulously
                  overseen by certified Montessori professionals and enriched through the
                  utilization of the highest quality educational materials.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1e40af] md:text-2xl mb-4">
                  Values
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {valuesList.map((value, i) => (
                    <motion.li
                      key={value}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-gray-600 md:text-base"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e40af]/10 text-[#1e40af]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{value}</span>
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
