"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Clock, School } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "STUDENTS",
      value: "2,100+",
      icon: Users,
      iconColor: "text-blue-500 bg-blue-50",
      bgGradient: "from-[#f0f7ff] to-[#e0efff] border-blue-100/40",
    },
    {
      label: "EDUCATORS",
      value: "200+",
      icon: GraduationCap,
      iconColor: "text-amber-500 bg-amber-50",
      bgGradient: "from-[#fffbf0] to-[#fef5d6] border-amber-100/40",
    },
    {
      label: "YEARS",
      value: "10+",
      icon: Clock,
      iconColor: "text-emerald-500 bg-emerald-50",
      bgGradient: "from-[#f0fdf4] to-[#dcfce7] border-emerald-100/40",
    },
    {
      label: "CAMPUSES",
      value: "2",
      icon: School,
      iconColor: "text-purple-500 bg-purple-50",
      bgGradient: "from-[#faf5ff] to-[#f3e8ff] border-purple-100/40",
    },
  ];

  return (
    <section className="relative w-full bg-[#fff9f5] pt-0 pb-8 md:pb-12 select-none">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col items-start p-5 sm:p-6 rounded-[2rem] bg-gradient-to-br ${stat.bgGradient} border-2 border-white/65 shadow-[0_12px_24px_rgba(0,0,0,0.02)]`}
              >
                {/* Top Row: Icon and Label */}
                <div className="flex items-center gap-3 w-full">
                  <div className={`p-2.5 rounded-full ${stat.iconColor} shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0`}>
                    <IconComponent className="h-5 w-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-500/80">
                    {stat.label}
                  </span>
                </div>

                {/* Bottom Row: Big Number */}
                <div className="mt-4 sm:mt-5">
                  <span className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-none">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
