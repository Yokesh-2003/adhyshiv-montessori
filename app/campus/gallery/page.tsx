"use client";

import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <>
      <FloatingNavbar />
      <main
        className="relative min-h-screen pt-48 md:pt-52 pb-24 w-full overflow-hidden bg-[#fff9f5]"
        style={{
          backgroundImage: "radial-gradient(rgba(226, 232, 240, 0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Hero Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-900 border border-blue-100 shadow-sm"
            >
              <ImageIcon className="w-8 h-8" />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base font-black tracking-[0.2em] text-[#1e40af] uppercase"
            >
              OUR CAMPUS
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 font-display tracking-tight leading-tight"
            >
              Campus Gallery
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-amber-500 rounded-full mt-2"
            />
          </div>

          {/* Placeholder Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-stone-200/60 p-8 sm:p-12 rounded-[2.5rem] shadow-sm text-center flex flex-col items-center gap-6"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-blue-900 font-display">
              Moments & Memories
            </h2>
            <p className="text-[#4a3540] font-sans text-sm sm:text-base leading-relaxed max-w-xl">
              A visual chronicle of daily life, hands-on learning experiences, and special milestones at Adhyshiv. We are curating our album collection and will upload our high-resolution photo galleries here shortly.
            </p>
            <div className="h-12 w-[1px] bg-amber-500/30" />
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
              Adhyshiv International Montessori
            </span>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
