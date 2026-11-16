import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Sparkles, Code2, Megaphone, Radio, ShieldCheck } from 'lucide-react';

export default function AboutModal({ isOpen, onClose, onStartProject }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0D101C] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/[0.15] text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Animated Official Logo */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#121626] to-[#0A0D16] border-b border-white/[0.08] relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* Animated Logo Emblem */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-2xl bg-[#0B0D16] border border-white/[0.1] shadow-2xl p-2 group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-purple-500/25 to-amber-500/20 rounded-2xl blur-lg animate-pulse-glow" />
              <img 
                src="/nyks-logo.png" 
                alt="NYKS MEDIA Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-md"
              />
            </motion.div>

            {/* Header Text */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>About NYKS MEDIA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                We Build. Market. Broadcast.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300">
                Technology & creative media company based in Hyderabad, India.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs text-slate-300">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-sky-400 uppercase mb-1">
                Our Mission
              </div>
              <p>
                To provide businesses with reliable software, high-impact marketing, and pristine event streaming under one roof.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-emerald-400 uppercase mb-1">
                Our Vision
              </div>
              <p>
                To be the most dependable digital and media partner for businesses across India and worldwide.
              </p>
            </div>
          </div>

          {/* 3 Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-sky-500/20">
              <Code2 className="w-4 h-4 text-sky-400 mb-1.5" />
              <div className="font-bold text-white text-xs">TECHNOLOGY</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Websites, ERP/CRM & Mobile Apps.</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-rose-500/20">
              <Megaphone className="w-4 h-4 text-rose-400 mb-1.5" />
              <div className="font-bold text-white text-xs">DIGITAL</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Meta Ads, Social Media & Video Reels.</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20">
              <Radio className="w-4 h-4 text-emerald-400 mb-1.5" />
              <div className="font-bold text-white text-xs">LIVE MEDIA</div>
              <div className="text-[11px] text-slate-400 mt-0.5">4K YouTube Live & Event Production.</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-slate-400 text-[11px]">
            Operating from Hyderabad, India • Available for projects nationwide
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090B12] border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              if (onStartProject) onStartProject();
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors"
          >
            Start Your Project →
          </button>
        </div>

      </div>
    </div>
  );
}
