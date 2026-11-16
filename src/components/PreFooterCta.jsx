import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, Play } from 'lucide-react';

export default function PreFooterCta({ onStartProject, onTalkToUs }) {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#120B1C] to-[#070912] border-t border-white/[0.1]">
      
      {/* Radiant multi-color ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-gradient-to-r from-cyan-500/18 via-purple-600/22 to-rose-500/18 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-rose-500/15 border border-white/[0.15] text-xs font-bold text-white uppercase tracking-wider mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Turn Vision Into Reality</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6">
          Your Idea Is the <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
            Next Project.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Let's build your software, market your business, and broadcast your live events to the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 bg-size-200 hover:bg-right transition-all duration-300 shadow-xl shadow-purple-600/35 hover:shadow-cyan-500/40 text-sm"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <a
            href="https://wa.me/919490644434"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-all text-sm shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp (9490644434)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
