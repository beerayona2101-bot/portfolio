import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function PreFooterCta({ onStartProject, onTalkToUs }) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#080A12] via-[#0C0F1A] to-[#06070A] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Get Started</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Your Idea Is the <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            Next Project.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8">
          Turn your idea into something people can see, use and remember.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 bg-size-200 hover:bg-right transition-all shadow-lg text-xs"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onTalkToUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] transition-all text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Talk to Us</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
