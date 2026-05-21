import Image from "next/image";

export default function FounderAboutSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage: "url('/images/home/bg2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            {/* Left Section */}
            <div className="space-y-12">
              {/* Founder Section */}
              <div>
                <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-yellow-500 md:text-2xl">
                  OUR FOUNDER ...
                </h3>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="shrink-0">
                    <div className="relative h-64 w-56 overflow-hidden rounded-3xl border-4 border-white bg-white/20 shadow-lg">
                      <Image
                        src="/images/home/FOUNDER.png"
                        alt="Founder"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="mb-2 text-lg font-bold text-gray-800">
                      Meet Our Founder: A Visionary Educator
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Our founder, having passed a visionary Montessori educator is a primary Montessori educator & a visionary in the field of
                      education. She has been immensely passionate about giving her students the best educational experience for the children led her
                      to pursue a comprehensive Montessori teacher training course. Today, her dream of creating a thriving Montessori school is a
                      reality, making us a beacon of Montessori excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* About Us Section */}
              <div>
                <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-yellow-500 md:text-2xl">
                  ABOUT US ...
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  At AdhyShiv International Montessori, we offer a well-curated curriculum that encourages a strong foundation in practical life skills, creativity, and a deep appreciation for the natural world. Our carefully prepared classrooms are designed to provide a stimulating learning environment, fostering independence and critical thinking.
                </p>
              </div>
            </div>

            {/* Right Section - Images */}
            <div className="relative space-y-6">
              {/* Main Image */}
              <div className="relative h-80 overflow-hidden rounded-3xl border-4 border-white/50 shadow-lg">
                <Image
                  src="/images/home/aboutus.png"
                  alt="About us"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote Box */}
              <div className="rounded-3xl bg-pink-600 p-6 text-center text-white shadow-lg">
                <p className="text-sm font-bold leading-relaxed md:text-base">
                  "Children are not set by their values from them learn things, but by the endeavor to keep learning what he calls 'intelligence.'"
                </p>
                <p className="mt-3 text-xs font-semibold">- Dr. Maria Montessori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
