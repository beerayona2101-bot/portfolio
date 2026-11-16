import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS } from '../data/processData';
import { CheckCircle2, GitCommit } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-[#080A12] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            <GitCommit className="w-3.5 h-3.5 text-sky-400" />
            <span>Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            A clear 6-step roadmap from initial concept to launch and growth.
          </p>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  isActive
                    ? 'border-sky-500/50 bg-[#12172A] shadow-md'
                    : 'bg-[#0B0E18] border-white/[0.06] hover:border-white/[0.14]'
                }`}
              >
                <div className={`text-[11px] font-mono font-bold mb-0.5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`}>
                  {step.step}
                </div>
                <div className="text-xs font-bold text-white">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#0E121E] border border-white/[0.08] shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-bold">
                STAGE {PROCESS_STEPS[activeStep].step} • {PROCESS_STEPS[activeStep].subtitle}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {PROCESS_STEPS[activeStep].title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-slate-300"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white shadow-sm"
              >
                Next →
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            {PROCESS_STEPS[activeStep].desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
              <span 
                key={dIdx} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
