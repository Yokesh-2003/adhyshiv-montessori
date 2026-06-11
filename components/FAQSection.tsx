"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Montessori?",
    answer: "Montessori is a child-centered educational approach focused on self-directed activity, hands-on learning, and collaborative play. Children make creative choices in their learning, while the classroom and the highly trained teacher offer age-appropriate activities to guide the process.",
  },
  {
    question: "Benefits of Montessori Education",
    answer: "Montessori education fosters independence, self-discipline, critical thinking, and a lifelong love of learning. It respects each child’s unique developmental pace, building strong cognitive, social, emotional, and physical skills.",
  },
  {
    question: "How Montessori differs from traditional education",
    answer: "Unlike traditional teacher-led instruction with fixed lesson plans, Montessori classrooms emphasize active, self-paced learning. Students choose their work from carefully prepared materials and learn individually or in small groups rather than sitting in rows listening to a lecture.",
  },
  {
    question: "Self-learning concept",
    answer: "The self-learning concept relies on a child's natural curiosity and internal drive to explore. Specially designed Montessori materials are self-correcting, allowing children to learn from their own mistakes and gain confidence without needing constant adult approval or grading.",
  },
  {
    question: "Mixed-age classrooms",
    answer: "Mixed-age classrooms (typically spanning a 3-year range, e.g., 2 to 6 years) mirror real-world communities. Older children reinforce their learning and develop leadership skills by mentoring, while younger children learn through observation and feel encouraged by older peers.",
  },
  {
    question: "Role of the educator",
    answer: "In a Montessori classroom, the educator acts as a guide or facilitator rather than a lecturer. They meticulously prepare the classroom environment, observe each child's interests and developmental stage, and introduce new materials and lessons when the child is ready.",
  },
  {
    question: "Learning through exploration",
    answer: "Children learn best by doing. Montessori encourages children to touch, move, manipulate, and explore real-world objects. This physical exploration builds deep concrete understanding of abstract concepts like mathematics, geometry, and language.",
  },
  {
    question: "Sensorial learning",
    answer: "Sensorial learning involves training and refining the child's five senses (sight, touch, hearing, taste, smell). Through specialized materials, children learn to classify, order, and describe sensory characteristics like size, shape, color, texture, sound, and weight.",
  },
  {
    question: "Freedom with responsibility",
    answer: "Within a structured environment, children have the freedom to choose their tasks, move around, and work at their own pace. However, this freedom is paired with the responsibility to respect the classroom rules, handle materials carefully, and clean up after themselves.",
  },
  {
    question: "What is the difference between Waldorf and Montessori education?",
    answer: "Both Waldorf and Montessori are child-centered educational approaches that respect each child's unique development. However, they differ in how learning is introduced and experienced.\n\nMontessori education emphasizes independence, self-directed learning, and hands-on exploration using specially designed learning materials. Children are encouraged to choose activities, work at their own pace, and develop practical life skills, concentration, and problem-solving abilities.\n\nWaldorf education places a stronger emphasis on imagination, storytelling, artistic expression, and teacher-guided learning experiences. Technology and formal academics are often introduced later, with a focus on creativity, rhythm, and holistic development.\n\nAt Adhyshiv International Montessori School, we follow the Montessori philosophy of \"Help me do it myself,\" empowering children to become confident, curious, independent learners while nurturing their social, emotional, and academic growth."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const renderCard = (item: FAQItem, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className="w-full bg-white border border-slate-100/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      >
        <button
          onClick={() => toggleIndex(index)}
          className="w-full flex items-center justify-between p-5 text-left select-none cursor-pointer"
          aria-expanded={isOpen}
          suppressHydrationWarning
        >
          <span className="text-sm sm:text-base md:text-lg font-black text-blue-900 pr-4 leading-snug">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 text-slate-400"
          >
            <ChevronDown className="h-5 w-5 stroke-[2.5]" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 border-t border-slate-50 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-bold whitespace-pre-line text-justify">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden"
      style={{
        backgroundColor: "#fff9f5",
        backgroundImage: `
          linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-xs sm:text-sm font-black tracking-wider uppercase border border-pink-100 shadow-sm">
            Common Questions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-900 md:text-4xl lg:text-5xl">
            Montessori Method FAQ
          </h2>
        </div>

        {/* Desktop Layout - Independent Columns */}
        <div className="hidden lg:flex flex-row gap-6 items-start">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            {faqData.map((item, index) => {
              if (index % 2 !== 0) return null;
              return renderCard(item, index);
            })}
          </div>
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            {faqData.map((item, index) => {
              if (index % 2 === 0) return null;
              return renderCard(item, index);
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Single Column Flow */}
        <div className="flex lg:hidden flex-col gap-4">
          {faqData.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
}
