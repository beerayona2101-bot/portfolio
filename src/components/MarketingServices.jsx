import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Palette, 
  Video, 
  Target, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/servicesData';

export default function MarketingServices({ onStartProject }) {
  const iconMap = {
    Share2: Share2,
    Palette: Palette,
    Video: Video,
    Target: Target
  };

  return (
    <div id="digital-services" className="scroll-mt-24 pt-12 pb-16 border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            {DIGITAL_SERVICES.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            {DIGITAL_SERVICES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {DIGITAL_SERVICES.description}
          </p>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("Digital Marketing")}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-md shadow-rose-600/30"
          >
            <span>{DIGITAL_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      {/* 4 Cards: Social, Creative, Video, Meta Ads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DIGITAL_SERVICES.categories.map((cat, idx) => {
          const Icon = iconMap[cat.icon];

          return (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-[#0E111C] border border-white/[0.08] hover:border-rose-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <Icon className="w-4 h-4" />
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
