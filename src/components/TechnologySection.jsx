import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/techData';
import { Cpu, Code2, Megaphone, Radio } from 'lucide-react';

export default function TechnologySection() {
  const [selectedCat, setSelectedCat] = useState("all");

  const iconMap = {
    dev: Code2,
    marketing: Megaphone,
    media: Radio
  };

  const filteredCategories = selectedCat === "all" 
    ? TECH_CATEGORIES 
    : TECH_CATEGORIES.filter(c => c.id === selectedCat);

  return (
    <section className="py-20 bg-[#06080F] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technology</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology That Powers Your Ideas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Curated frameworks, creative workflows, and broadcast gear.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0F1322] border border-white/[0.08]">
            <button
              onClick={() => setSelectedCat("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCat === "all" ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Stack
            </button>
            {TECH_CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCat === c.id ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Badges Grid */}
        <div className="space-y-6">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.id];

            return (
              <div 
                key={cat.id}
                className="rounded-2xl p-6 bg-[#0E121E] border border-white/[0.08]"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                  <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  <h3 className="text-sm font-bold text-white">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{cat.description}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {cat.items.map((tech, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-[9px] font-mono text-slate-500 uppercase">
                          {tech.badge}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white truncate">
                        {tech.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {tech.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
