"use client";

import Image from "next/image";
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

        {/* Cards Grid (Arrange in same line / 3 columns on both mobile and desktop) */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6 w-full">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full flex flex-col overflow-hidden rounded-xl sm:rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-20 sm:h-40 md:h-60 w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-1 p-2 sm:p-4 md:p-6">
                <h3 className="text-[10px] sm:text-base md:text-lg font-black text-blue-800 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 sm:mt-3 text-[8px] sm:text-xs md:text-sm text-gray-500 leading-normal line-clamp-2 sm:line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-2 sm:mt-5 pt-1 sm:pt-4 border-t border-gray-50">
                  <button className="text-[9px] sm:text-xs md:text-sm font-black text-blue-600 hover:text-blue-800 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
