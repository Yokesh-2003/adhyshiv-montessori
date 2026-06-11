"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        
        {/* Left Column: Title & Text content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
          
          {/* Overlay 3: Paper Airplane & Green Plus Doodle (Upper Right, absolute inside column container) */}
          <div className="absolute -top-20 right-4 sm:right-12 w-28 h-28 sm:w-36 sm:h-36 opacity-85 pointer-events-none z-0">
            <Image
              src="/images/about/overlay3.png"
              alt="Design Airplane Doodle"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-500 uppercase block mb-1">
              WELCOME TO ADHYSHIV
            </span>
            <h1 className="text-3xl font-extrabold text-blue-900 md:text-5xl lg:text-6xl font-display">
              About Us
            </h1>
            <div className="h-1.5 w-20 bg-amber-500 rounded-full mt-3" />
          </div>

          <div className="flex flex-col gap-6 text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed md:text-lg mt-4 relative z-10 text-justify">
            <p>
              Welcome to <strong className="font-extrabold text-blue-900">ADHYSHIV</strong> International Montessori, where we believe in nurturing young minds and fostering a lifelong love of learning through the time-tested Montessori approach. Our school is dedicated to providing a warm, supportive, and stimulating environment where children can flourish intellectually, emotionally, and socially. Founded on the principles established by Dr. Maria Montessori, our mission is to create a supportive, child-centered community where each child is encouraged to explore, discover, and develop at their own pace. Our experienced and certified Montessori educators are passionate about guiding children on their unique educational journeys, respecting their individuality, and promoting independence.
            </p>
            <p>
              At <strong className="font-extrabold text-blue-900">ADHYSHIV</strong> International Montessori, we offer a well-rounded curriculum that encompasses not only academics but also practical life skills, creativity, and a deep appreciation for the natural world. Our carefully prepared classrooms are equipped with Montessori materials that inspire hands-on learning and critical thinking. We understand that a child's early years are crucial in shaping their future, and our commitment to excellence ensures that your child receives the best possible foundation for a lifetime of success.
            </p>
          </div>
        </div>

        {/* Right Column: Logo & Quote */}
        <div className="lg:col-span-5 flex flex-col items-center gap-8 lg:pl-6 relative z-10">
          
          {/* Adhyshiv Dark Text Logo (overlay.png) */}
          <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[450px]">
            <div className="relative w-full aspect-[16/10] flex items-center justify-center z-10">
              <Image
                src="/images/about/overlay.png"
                alt="Adhyshiv International Montessori Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#1e40af] mt-2 text-center whitespace-nowrap">
              A world of Discovery
            </span>
          </div>

          {/* Book Doodle positioned BEHIND the entire Quote card */}
          <div className="absolute -right-4 -bottom-16 w-56 h-44 opacity-80 pointer-events-none z-0">
            <Image
              src="/images/about/overlay2.png"
              alt="Book Doodle Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Quote Box wrapper */}
          <div className="relative w-full max-w-[440px] bg-white/70 backdrop-blur-sm border border-[#e2e8f0]/80 p-6 sm:p-8 rounded-[2rem] shadow-md flex flex-col gap-4 z-10 overflow-hidden">
            {/* Logo text watermark inside Quote container */}
            <div className="absolute -right-10 -bottom-6 w-48 h-24 opacity-[0.06] pointer-events-none z-0 rotate-[-12deg]">
              <Image
                src="/images/about/overlay.png"
                alt="Adhyshiv Watermark"
                fill
                className="object-contain"
              />
            </div>

            {/* Styled Quote Mark Indicator */}
            <span className="text-[#1e40af]/10 text-7xl font-serif leading-none absolute -top-4 -left-2 select-none z-0">
              “
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#1e40af] italic leading-relaxed z-10 relative text-justify">
              “The care for the child should be governed, not by the desire to make them learn things, but by the endeavor to keep burning within them that light which is called intelligence.”
            </p>
            <p className="text-xs sm:text-sm font-bold text-amber-600 text-right z-10 relative">
              --- Dr. Maria Montessori
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
