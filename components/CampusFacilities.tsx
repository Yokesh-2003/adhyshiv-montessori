"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  BookOpen, 
  Smile, 
  Sprout, 
  Apple, 
  Box, 
  Activity 
} from "lucide-react";

const facilities = [
  {
    title: "Library",
    description: "Explore a world of books and imagination in our inviting library.",
    image: "/images/Facilities/Library.png",
    accent: "text-purple-500 bg-purple-50 border-purple-100",
    icon: BookOpen,
    tag: "Creative & Quiet",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.22)] hover:border-purple-200",
    textGrad: "from-purple-600 to-indigo-600",
    bgHover: "hover:bg-purple-50/10",
  },
  {
    title: "Play Area",
    description: "Our safe and fun play area encourages active learning and social interaction.",
    image: "/images/Facilities/Play Area.png",
    accent: "text-pink-500 bg-pink-50 border-pink-100",
    icon: Smile,
    tag: "Fun & Active",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(244,114,182,0.22)] hover:border-pink-200",
    textGrad: "from-pink-600 to-rose-600",
    bgHover: "hover:bg-pink-50/10",
  },
  {
    title: "Terrace Farming",
    description: "Terrace Farming: Fun Learning, Green Growing, Playful Kids, Eco Adventure!",
    image: "/images/Facilities/Terrace Farming.png",
    accent: "text-emerald-500 bg-emerald-50 border-emerald-100",
    icon: Sprout,
    tag: "Nature & Science",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.22)] hover:border-emerald-200",
    textGrad: "from-emerald-600 to-teal-600",
    bgHover: "hover:bg-emerald-50/10",
  },
  {
    title: "Snack",
    description: "Nutritious snacks keep your child energized and ready to learn.",
    image: "/images/Facilities/Snack.png",
    accent: "text-amber-500 bg-amber-50 border-amber-100",
    icon: Apple,
    tag: "Nutrition & Health",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(245,158,11,0.22)] hover:border-amber-200",
    textGrad: "from-amber-600 to-orange-600",
    bgHover: "hover:bg-amber-50/10",
  },
  {
    title: "Montessori Material",
    description: "Our classrooms are equipped with Montessori materials for hands-on, independent learning.",
    image: "/images/Facilities/Montessori Material.png",
    accent: "text-violet-500 bg-violet-50 border-violet-100",
    icon: Box,
    tag: "Hands-on Learning",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(139,92,246,0.22)] hover:border-violet-200",
    textGrad: "from-violet-600 to-purple-600",
    bgHover: "hover:bg-violet-50/10",
  },
  {
    title: "Jungle Gym",
    description: "Jungle Gym Adventure: Fun, Climbing, Swinging, Playful Kids, Outdoor Excitement!",
    image: "/images/Facilities/Jungle Gym.png",
    accent: "text-blue-500 bg-blue-50 border-blue-100",
    icon: Activity,
    tag: "Physical Growth",
    shadowColor: "hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.22)] hover:border-blue-200",
    textGrad: "from-blue-600 to-sky-600",
    bgHover: "hover:bg-blue-50/10",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

function PremiumSchoolIcon() {
  return (
    <svg 
      viewBox="0 0 48 48" 
      className="w-11 h-11" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mainWallGrad" x1="0" y1="0" x2="0" y2="48">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="48" y2="0">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      
      {/* Decorative inner circle */}
      <circle cx="24" cy="24" r="21" fill="#fdfaff" stroke="#f5eeff" strokeWidth="1" />
      
      {/* Left wing roof */}
      <path d="M8 26 L14 20 L20 26 Z" fill="#fbbf24" />
      {/* Right wing roof */}
      <path d="M28 26 L34 20 L40 26 Z" fill="#fbbf24" />
      
      {/* Left wing wall */}
      <rect x="9" y="26" width="10" height="12" rx="2" fill="url(#mainWallGrad)" />
      {/* Right wing wall */}
      <rect x="29" y="26" width="10" height="12" rx="2" fill="url(#mainWallGrad)" />
      
      {/* Main center school wall */}
      <rect x="16" y="20" width="16" height="18" rx="3" fill="url(#mainWallGrad)" />
      
      {/* Main triangular roof */}
      <path d="M12 20 L24 8 L36 20 Z" fill="url(#roofGrad)" />
      
      {/* Front door */}
      <path d="M21 38 V32 C21 30.3431 22.3431 29 24 29 C25.6569 29 27 30.3431 27 32 V38" fill="#ffffff" />
      
      {/* Center circle window / clock */}
      <circle cx="24" cy="16" r="3" fill="#ffffff" />
      <circle cx="24" cy="16" r="1.5" fill="#7c3aed" />
      
      {/* Small flag on top */}
      <line x1="24" y1="8" x2="24" y2="3" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 3 L30 5.5 L24 8 Z" fill="#ff6097" />
    </svg>
  );
}

export default function CampusFacilities() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-purple-200/20 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-amber-100/30 blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-teal-100/20 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      
      {/* Section Header */}
      <div className="relative flex flex-col items-center text-center gap-4 mb-20 max-w-2xl mx-auto">
        {/* Playful overlay image decoration instead of dotted lines */}
        <div className="absolute -top-16 left-0 md:-left-16 w-32 h-32 opacity-80 pointer-events-none select-none z-0 hidden sm:block">
          <Image
            src="/images/Facilities/overlay.png"
            alt="Header Overlay Illustration"
            fill
            className="object-contain"
          />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-18 h-18 rounded-full bg-gradient-to-tr from-purple-100 to-purple-50 flex items-center justify-center border-2 border-white shadow-[0_8px_30px_rgba(124,58,237,0.15)] relative z-10 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <PremiumSchoolIcon />
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-black tracking-[0.2em] text-purple-600 uppercase"
        >
          Our Spaces
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 font-display tracking-tight leading-none"
        >
          Our Facilities
        </motion.h1>
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg sm:text-xl font-bold text-amber-500 mt-1"
        >
          Fun and Study Together
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed mt-2"
        >
          "An engaging blend of fun and study, creating a dynamic and enjoyable learning experience for curious young minds."
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 bg-amber-500 rounded-full mt-4"
        />
      </div>

      {/* Facilities Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
      >
        {facilities.map((facility) => (
          <motion.div
            key={facility.title}
            variants={cardVariants}
            className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-stone-200/50 bg-white p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent ${facility.shadowColor} ${facility.bgHover}`}
          >
            {/* Image Container with Zoom effect */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] bg-slate-100 border border-slate-50">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                sizes="(max-w-768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-60" />
              
              {/* Dynamic Wavy Divider at bottom of Image Container */}
              <div className="absolute bottom-0 left-0 right-0 h-6 text-white z-10">
                <svg viewBox="0 0 1440 320" className="w-full h-full fill-current preserve-3d" preserveAspectRatio="none">
                  <path d="M0,224 C288,272 576,144 864,176 C1152,208 1440,272 1440,272 L1440,320 L0,320 Z" />
                </svg>
              </div>

              {/* Floating Tag Badge (Top-Left) */}
              <div className="absolute top-4 left-4 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-sm">
                <span className="text-[9px] font-black tracking-wider uppercase text-slate-700">
                  {facility.tag}
                </span>
              </div>

              {/* Styled Icon Overlay (Top-Right) */}
              <div className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl border backdrop-blur-md shadow-sm transition-transform duration-300 group-hover:scale-110 ${facility.accent}`}>
                <facility.icon className="h-5 w-5" />
              </div>
            </div>

            {/* Content Details */}
            <div className="relative flex flex-col flex-grow px-4 py-5 mt-4 rounded-[1.8rem] border border-dashed border-slate-200/80 bg-slate-50/40 group-hover:bg-white/80 group-hover:border-purple-200/60 transition-colors duration-500 overflow-hidden">
              {/* Faint Background Icon Watermark */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 opacity-[0.03] text-slate-800 pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0">
                <facility.icon className="w-full h-full stroke-[1.5]" />
              </div>

              <h3 className={`relative z-10 text-xl sm:text-2xl font-black font-display tracking-tight bg-gradient-to-r ${facility.textGrad} bg-clip-text text-transparent mb-3`}>
                {facility.title}
              </h3>
              <p className="relative z-10 text-slate-600 font-semibold text-xs sm:text-sm leading-relaxed text-justify flex-grow">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
