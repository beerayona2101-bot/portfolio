import React from 'react';
import { motion } from 'framer-motion';
import { WHY_NYKS_FEATURES } from '../data/processData';
import { Layers, Target, Cpu, Sparkles, Sliders, ShieldCheck, CheckCircle } from 'lucide-react';

export default function WhyNyks() {
  const iconMap = {
    Layers: Layers,
    Target: Target,
    Cpu: Cpu,
    Sparkles: Sparkles,
    Sliders: Sliders,
    ShieldCheck: ShieldCheck
  };

  return (
    <section className="py-24 bg-[#080B14] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-rose-500/15 border border-white/[0.15] text-xs font-bold text-white uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Businesses Choose NYKS MEDIA
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Technology, marketing, and live media unified under one accountable brand.
          </p>
        </div>

        {/* 6 Clean Colorful Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_NYKS_FEATURES.map((item, idx) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl p-7 bg-gradient-to-b from-[#11172A] to-[#0A0E1A] border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/[0.1] shadow-lg"
                      style={{ color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Standard</span>
                  <span 
                    className="font-bold text-sm"
                    style={{ color: item.color }}
                  >
                    ✓ Guaranteed
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
