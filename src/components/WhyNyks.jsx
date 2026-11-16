import React from 'react';
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
    <section className="py-20 bg-[#06080F] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Choose NYKS MEDIA
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Technology, marketing, and live media unified under one accountable brand.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_NYKS_FEATURES.map((item, idx) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#0E111C] border border-white/[0.08] hover:border-white/[0.18] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
