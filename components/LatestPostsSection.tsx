"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Fostering a Love for Nature: Montessori and Environmental Education",
    excerpt: "In this blog, delve into how Montessori education aligns with principles of environmental sustainability and...",
    image: "/images/home/blog3.png",
  },
  {
    id: 2,
    title: "The Power of Play: How Montessori Encourages Learning Through Fun",
    excerpt: "This blog can explore the importance of play in the Montessori method. Discuss how structured...",
    image: "/images/home/blog1.png",
  },
  {
    id: 3,
    title: "Montessori and Child Development: A Perfect Pair",
    excerpt: "Explore the connection between Montessori methods and key child development milestones. See how...",
    image: "/images/home/blog2.png",
  },
];

export default function LatestPostsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden"
      style={{
        backgroundColor: "#fff",
        backgroundImage: `
          linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Decorative Overlay Illustration (top right) */}
      <div className="absolute top-4 right-4 md:top-8 md:right-12 z-10 w-[140px] h-[140px] md:w-[220px] md:h-[200px] pointer-events-none opacity-90">
        <Image
          src="/images/home/overlay2.png"
          alt="Overlay illustration"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-20">
        {/* Header */}
        <div className="mb-12 text-left">
          <span className="text-sm font-extrabold tracking-[0.25em] text-sunny uppercase">
            OUR BLOG ••••••••
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl lg:text-5xl">
            Latest Posts
          </h2>
        </div>

        {/* Carousel Slider Controls Container */}
        <div className="relative flex items-center gap-4">
          {/* Navigation Arrow Indicators */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous Post"
            className="absolute left-[-16px] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg border border-gray-200 transition-all hover:scale-105 hover:bg-gray-50 active:scale-95 md:left-[-24px]"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>

          {/* Cards Grid */}
          <div 
            ref={scrollRef}
            className="w-full flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-blue-800 leading-snug line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-5 pt-4 border-t border-gray-50">
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Next Post"
            className="absolute right-[-16px] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg border border-gray-200 transition-all hover:scale-105 hover:bg-gray-50 active:scale-95 md:right-[-24px]"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
