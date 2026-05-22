"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhyChooseSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      title: "Montessori Excellence",
      description:
        "Our educational core is firmly anchored in the esteemed Montessori pedagogy. This ensures your child receives a superior Montessori education that respects and honors their unique learning journey.",
      bgColor: "bg-blue-600",
      image: "/images/home/Montessori Excellence.png",
    },
    {
      title: "Nutritional Excellence",
      description:
        "Your child's well-being is paramount. We prioritize their health by providing wholesome, nutritious snacks that complement their educational experience. This holistic approach to nourishment underpins our commitment to your child's overall growth.",
      bgColor: "bg-yellow-500",
      image: "/images/home/Nutritional Excellence.png",
    },
    {
      title: "Independence",
      description:
        "Children are encouraged to choose their activities and work at their own pace. They learn to make decisions about what to work on, when, and for how long. This fosters a sense of responsibility and self-direction in their learning journey.",
      bgColor: "bg-pink-600",
      image: "/images/home/Independence.png",
    },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/bg1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f5]/90 via-[#fff9f5]/40 to-[#fff9f5]/90"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-pink-600 md:text-5xl">
              Why Choose AdhyShiv - USP'S
            </h2>
            <p className="text-lg text-gray-700 md:text-xl">
              At Adhyshiv International Montessori, our distinctiveness is rooted
              in these essential pillars
            </p>
          </div>

          {/* Cards Grid (Arrange in same line / 3 columns on both mobile and desktop) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                className={`group relative overflow-hidden rounded-xl sm:rounded-3xl border-2 sm:border-4 border-white/50 ${pillar.bgColor} p-2 sm:p-5 md:p-8 text-white shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer`}
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Background image on hover (PC) or click (Mobile) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeCard === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
                  }`}
                  style={{
                    backgroundImage: `url('${pillar.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Decorative top circle - hidden on hover (PC) or click (Mobile) */}
                  <div
                    className={`mb-3 sm:mb-6 flex justify-center transition-opacity duration-500 ${
                      activeCard === index ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"
                    }`}
                  >
                    <div className="relative h-10 w-10 sm:h-16 sm:w-16 md:h-24 md:w-24 overflow-hidden rounded-full border-2 sm:border-4 border-white/30 bg-white/20">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text wrapper with hover/click color overlays */}
                  <div
                    className={`rounded-lg sm:rounded-2xl bg-gradient-to-br from-white/20 to-white/10 p-2 sm:p-4 md:p-6 transition-all duration-500 ${
                      activeCard === index
                        ? "bg-black/30 from-transparent to-transparent"
                        : "md:group-hover:bg-black/30 md:group-hover:from-transparent md:group-hover:to-transparent"
                    }`}
                  >
                    {/* Title */}
                    <h3 className="mb-1 sm:mb-4 text-center text-[10px] sm:text-lg md:text-xl lg:text-2xl font-black leading-tight sm:leading-normal">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-center text-[8px] sm:text-xs md:text-sm lg:text-base leading-normal md:leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
