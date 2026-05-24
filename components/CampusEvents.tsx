"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  CalendarDays, 
  ChevronDown, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Sun,
  Image as ImageIcon
} from "lucide-react";

// List of actual image names verified in the public/images/events folders
const eventImagesByYear: Record<string, { folder: string; files: string[] }> = {
  "2026": {
    folder: "2026",
    files: [
      "IMG_20260121_102619.jpg",
      "IMG-20260303-WA0007.jpg",
      "IMG-20260303-WA0016.jpg",
      "IMG-20260303-WA0018.jpg",
      "IMG-20260304-WA0216.jpg",
      "IMG-20260304-WA0234.jpg",
      "IMG-20260408-WA0003.jpg",
      "IMG-20260408-WA0077 (2).jpg",
      "IMG-20260410-WA0002 (1).jpg",
      "IMG-20260418-WA0021.jpg"
    ]
  },
  "2025": {
    folder: "2025",
    files: [
      "024A7137.JPG",
      "024A7178.JPG",
      "024A7179.JPG",
      "024A7184.JPG",
      "024A7251.JPG",
      "024A7256.JPG",
      "024A7260.JPG",
      "024A7270.JPG",
      "024A7295.JPG",
      "024A7398.JPG",
      "024A7462.JPG",
      "024A7472.JPG",
      "024A7492.JPG",
      "024A7506.JPG",
      "024A7517.JPG",
      "024A7588.JPG",
      "024A7595.JPG",
      "024A7616.JPG",
      "024A7620.JPG",
      "024A7707.JPG",
      "024A7728.JPG",
      "024A7749.JPG",
      "024A7777.JPG",
      "024A7780.JPG",
      "024A7787.JPG",
      "024A7798.JPG",
      "IMG-20250112-WA0028.jpg",
      "IMG-20250112-WA0229.jpg",
      "IMG-20250112-WA0243.jpg",
      "IMG-20250112-WA0245.jpg",
      "IMG-20250112-WA0248.jpg",
      "IMG-20250112-WA0251.jpg",
      "IMG-20250112-WA0262.jpg"
    ]
  },
  "2024": {
    folder: "2024",
    files: [
      "IMG-20240316-WA0005.jpg",
      "IMG-20240316-WA0031.jpg",
      "IMG-20240316-WA0040.jpg",
      "IMG-20240316-WA0041.jpg",
      "IMG-20240316-WA0042.jpg",
      "IMG-20240316-WA0045.jpg",
      "IMG-20240316-WA0054.jpg",
      "IMG-20240316-WA0057.jpg",
      "IMG-20240316-WA0061.jpg",
      "IMG-20240316-WA0062.jpg",
      "IMG-20240316-WA0063.jpg",
      "IMG-20240316-WA0066.jpg",
      "IMG-20240325-WA0075.jpg",
      "IMG-20240325-WA0076.jpg",
      "IMG-20240325-WA0077.jpg",
      "IMG-20240325-WA0078.jpg",
      "IMG-20240325-WA0079.jpg",
      "IMG-20240325-WA0080.jpg",
      "IMG-20240405-WA0042.jpg",
      "IMG-20240405-WA0044.jpg",
      "IMG-20240405-WA0056.jpg",
      "IMG-20240408-WA0074.jpg",
      "IMG-20240408-WA0077.jpg",
      "IMG-20240408-WA0100.jpg",
      "IMG-20240701-WA0099.jpg",
      "IMG-20240701-WA0132.jpg",
      "IMG-20240802-WA0050.jpg"
    ]
  },
  "2023": {
    folder: "2023",
    files: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.jpg",
      "21.JPG",
      "22.jpg",
      "23.jpg",
      "24.jpg",
      "25.jpg",
      "26.jpg",
      "27.jpg",
      "28.jpg"
    ]
  },
  "summercamp": {
    folder: "Summer camp",
    files: [
      "IMG-20260428-WA0006.jpg",
      "IMG-20260428-WA0007.jpg",
      "IMG-20260428-WA0008.jpg",
      "IMG-20260428-WA0009.jpg",
      "IMG-20260428-WA0010.jpg",
      "IMG-20260428-WA0012.jpg",
      "IMG-20260428-WA0013.jpg",
      "IMG-20260428-WA0014.jpg",
      "IMG-20260428-WA0015.jpg",
      "IMG-20260428-WA0017.jpg",
      "IMG-20260428-WA0018.jpg",
      "IMG-20260428-WA0019.jpg",
      "IMG-20260428-WA0021.jpg",
      "IMG-20260428-WA0023.jpg",
      "IMG-20260502-WA0016.jpg",
      "IMG-20260502-WA0017.jpg",
      "IMG-20260502-WA0018.jpg",
      "IMG-20260502-WA0019.jpg",
      "IMG-20260502-WA0020.jpg",
      "IMG-20260502-WA0024.jpg",
      "IMG-20260502-WA0025.jpg",
      "IMG-20260502-WA0031.jpg",
      "IMG-20260502-WA0033.jpg",
      "IMG-20260502-WA0035.jpg",
      "IMG-20260502-WA0036.jpg",
      "IMG-20260502-WA0037.jpg",
      "IMG-20260502-WA0038.jpg",
      "IMG-20260502-WA0039.jpg",
      "IMG-20260506-WA0014.jpg",
      "IMG-20260506-WA0015.jpg",
      "IMG-20260506-WA0020.jpg",
      "IMG-20260506-WA0021.jpg",
      "IMG-20260506-WA0022.jpg",
      "IMG-20260506-WA0023.jpg",
      "IMG-20260507-WA0003.jpg",
      "IMG-20260507-WA0004.jpg",
      "IMG-20260507-WA0005.jpg",
      "IMG-20260507-WA0006.jpg",
      "IMG-20260507-WA0007.jpg",
      "IMG-20260507-WA0019.jpg",
      "IMG-20260507-WA0023.jpg"
    ]
  }
};

const categories = [
  { id: "2026", label: "2026", icon: CalendarDays },
  { id: "2025", label: "2025", icon: CalendarDays },
  { id: "2024", label: "2024", icon: CalendarDays },
  { id: "2023", label: "2023", icon: CalendarDays },
  { id: "summercamp", label: "Summer Camp", icon: Sun }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

function PremiumCalendarIcon() {
  return (
    <svg 
      viewBox="0 0 48 48" 
      className="w-11 h-11" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="calHeaderGrad" x1="0" y1="0" x2="48" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="calBodyGrad" x1="0" y1="0" x2="0" y2="48">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
        <linearGradient id="accentSunGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      
      {/* Outer shadow card */}
      <rect x="5" y="9" width="38" height="34" rx="6" fill="url(#calBodyGrad)" stroke="#dbeafe" strokeWidth="2" />
      
      {/* Header section (blue bar) */}
      <path d="M5 15 C5 11.6863 7.68629 9 11 9 H37 C40.3137 9 43 11.6863 43 15 V19 H5 V15Z" fill="url(#calHeaderGrad)" />
      
      {/* Binder rings/hooks */}
      <rect x="12" y="4" width="4" height="8" rx="2" fill="#93c5fd" />
      <rect x="32" y="4" width="4" height="8" rx="2" fill="#93c5fd" />
      
      {/* Grid of dots representing dates */}
      {/* Row 1 */}
      <circle cx="13" cy="25" r="2" fill="#93c5fd" />
      <circle cx="20" cy="25" r="2" fill="#93c5fd" />
      <circle cx="27" cy="25" r="2" fill="#93c5fd" />
      <circle cx="34" cy="25" r="2" fill="#93c5fd" />
      
      {/* Row 2 */}
      <circle cx="13" cy="32" r="2" fill="#93c5fd" />
      <circle cx="20" cy="32" r="2" fill="#93c5fd" />
      <circle cx="27" cy="32" r="2" fill="#93c5fd" />
      
      {/* Dynamic cute highlighted date (sun/star) on bottom right */}
      <g transform="translate(30, 28) scale(0.8)">
        {/* Cute star or sun shape representing a special event */}
        <circle cx="6" cy="6" r="5" fill="url(#accentSunGrad)" />
        <path d="M6 1 L7.5 4.5 L11 4.5 L8 6.5 L9.5 10 L6 8 L2.5 10 L4 6.5 L1 4.5 L4.5 4.5 Z" fill="#ff6097" />
      </g>
      
      {/* Binder wire details inside rings */}
      <path d="M14 4 V8" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 4 V8" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function CampusEvents() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset visible images on year change
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedYear]);

  // Disable body scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const activeCategory = categories.find(cat => cat.id === selectedYear) || categories[0];
  const activeImages = eventImagesByYear[selectedYear] || { folder: "2026", files: [] };
  const displayedFiles = activeImages.files.slice(0, visibleCount);
  const hasMore = activeImages.files.length > visibleCount;

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % activeImages.files.length);
    }
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + activeImages.files.length) % activeImages.files.length);
    }
  };

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-20">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-blue-200/20 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-amber-100/30 blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-pink-100/20 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="relative flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
        {/* Playful overlay image decoration */}
        <div className="absolute -top-16 left-0 md:-left-16 w-32 h-32 opacity-80 pointer-events-none select-none z-0 hidden sm:block">
          <Image
            src="/images/about/overlay2.png"
            alt="Events Overlay Illustration"
            fill
            className="object-contain"
          />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-18 h-18 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center border-2 border-white shadow-[0_8px_30px_rgba(30,64,175,0.15)] relative z-10 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <PremiumCalendarIcon />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs sm:text-sm font-black tracking-[0.2em] text-blue-600 uppercase"
        >
          Our Campus Life
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight"
        >
          Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed mt-2"
        >
          Cherish the dynamic moments, celebrations, and learning milestones that shape our playful and empowering school journey.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 bg-amber-500 rounded-full mt-4"
        />
      </div>

      {/* Year Dropdown Filter & Description Text */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-stone-200/50 relative z-40">
        <div className="flex items-center gap-3">
          <ImageIcon className="w-5 h-5 text-blue-600" />
          <span className="text-slate-700 font-bold text-sm sm:text-base">
            Showing <strong className="text-blue-900">{activeImages.files.length}</strong> moments in <strong className="text-blue-900">{activeCategory.label}</strong>
          </span>
        </div>

        {/* Custom Styled Dropdown */}
        <div className="relative w-64" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm text-left font-bold text-slate-800 hover:border-blue-400 hover:shadow-md transition-all duration-300 z-10"
          >
            <div className="flex items-center gap-2.5">
              <activeCategory.icon className="w-4 h-4 text-blue-600" />
              <span>{activeCategory.label}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-2 w-full bg-white border border-stone-200/80 rounded-2xl shadow-xl overflow-hidden z-50 p-1.5"
              >
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = cat.id === selectedYear;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedYear(cat.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-left transition-colors duration-200 ${
                        isSelected 
                          ? "bg-blue-50 text-blue-900" 
                          : "text-slate-600 hover:bg-stone-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                      <span>{cat.label}</span>
                      {isSelected && (
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-auto animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedYear} // key forces re-mount anims on category change
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8"
      >
        {displayedFiles.map((file, index) => (
          <motion.div
            key={file}
            variants={itemVariants}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-[2rem] bg-white p-3 border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(30,64,175,0.08)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] bg-slate-50 border border-slate-100">
              <Image
                src={`/images/events/${activeImages.folder}/${file}`}
                alt={`${activeCategory.label} Event - ${file}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Images Fallback */}
      {activeImages.files.length === 0 && (
        <div className="w-full text-center py-20 bg-white/60 backdrop-blur-md rounded-3xl border border-stone-200/60">
          <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-700">No moments found</h3>
          <p className="text-slate-500 text-sm mt-1">We will be uploading event pictures for this category very soon!</p>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="px-8 py-3.5 rounded-full border border-blue-200 bg-white text-blue-700 font-bold hover:bg-blue-50/50 hover:border-blue-400 hover:shadow-md transition-all duration-300"
          >
            Load More Moments
          </button>
        </div>
      )}

    </div>

      {/* Lightbox / Slideshow Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Close trigger background */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setLightboxIndex(null)} />

            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10 pointer-events-none">
              <span className="bg-slate-900/65 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                {activeCategory.label} • {lightboxIndex + 1} / {activeImages.files.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-slate-900/65 flex items-center justify-center hover:bg-slate-800 transition-colors pointer-events-auto shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Navigation Controls */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Viewer Frame */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl h-[65vh] sm:h-[80vh] overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 shadow-2xl flex items-center justify-center"
            >
              <Image
                src={`/images/events/${activeImages.folder}/${activeImages.files[lightboxIndex]}`}
                alt="Event Lightbox Enlarged"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
