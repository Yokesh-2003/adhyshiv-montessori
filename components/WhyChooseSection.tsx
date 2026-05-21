import Image from "next/image";

export default function WhyChooseSection() {
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
      className="relative w-full bg-cover bg-center py-20 md:py-32"
      style={{
        backgroundImage: "url('/images/home/bg1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

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

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border-4 border-white/50 ${pillar.bgColor} p-8 text-white shadow-lg transition-all duration-500 hover:scale-105`}
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url('${pillar.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Decorative top circle - hidden on hover */}
                  <div className="mb-6 flex justify-center opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/30 bg-white/20">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text - visible initially on colored background, dark bg appears on hover */}
                  <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 transition-all duration-500 group-hover:bg-black/30 group-hover:from-transparent group-hover:to-transparent">
                    {/* Title */}
                    <h3 className="mb-4 text-center text-2xl font-bold">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-center text-sm leading-relaxed md:text-base">
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
