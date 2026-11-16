import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';
import { TECH_SERVICES } from '../data/servicesData';

export default function DevServices({ onStartProject }) {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = {
    Globe: Globe,
    LayoutDashboard: LayoutDashboard,
    Smartphone: Smartphone
  };

  return (
    <div id="tech-services" className="scroll-mt-24 pt-12 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>{TECH_SERVICES.badge}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            {TECH_SERVICES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {TECH_SERVICES.description}
          </p>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("Web & Mobile Application")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-xl shadow-cyan-600/30"
          >
            <span>{TECH_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      {/* 3 Columns: Websites, Web Apps, Mobile Apps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {TECH_SERVICES.categories.map((cat, idx) => {
          const Icon = iconMap[cat.icon];
          const isSelected = activeTab === idx;

          return (
            <motion.div
              key={idx}
              onClick={() => setActiveTab(idx)}
              whileHover={{ y: -5 }}
              className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? 'border-cyan-400/60 bg-gradient-to-b from-[#101D38] via-[#0C1528] to-[#070D18] shadow-2xl shadow-cyan-500/20'
                  : 'border-white/[0.1] bg-gradient-to-b from-[#0D1526] to-[#080D1A] hover:border-cyan-500/40'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1.5">
                {cat.title}
              </h4>
              <p className="text-xs text-slate-300 mb-5">
                {cat.description}
              </p>

              <div className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tech Stack Chips with Colorful Highlights */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0C1527] via-[#09101E] to-[#080E1B] border border-cyan-500/20 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Production Technologies</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">100% Scalable & Modern</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {TECH_SERVICES.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all text-xs font-medium text-slate-200 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-slate-400">({tech.category})</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
