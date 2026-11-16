import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Terminal
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
            {TECH_SERVICES.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            {TECH_SERVICES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {TECH_SERVICES.description}
          </p>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("Web & Mobile Application")}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-md shadow-sky-600/30"
          >
            <span>{TECH_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      {/* 3 Columns: Websites, Web Apps, Mobile Apps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {TECH_SERVICES.categories.map((cat, idx) => {
          const Icon = iconMap[cat.icon];
          const isSelected = activeTab === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`rounded-2xl p-6 transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'border-sky-500/50 bg-[#121626] shadow-lg shadow-sky-500/10'
                  : 'border-white/[0.08] bg-[#0E111C] hover:border-white/[0.18]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1">
                {cat.title}
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                {cat.description}
              </p>

              <div className="space-y-2">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Stack Chips */}
      <div className="rounded-xl p-5 bg-[#0B0D16] border border-white/[0.06]">
        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
          Technologies Used
        </div>
        <div className="flex flex-wrap gap-2">
          {TECH_SERVICES.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="font-semibold text-white">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
