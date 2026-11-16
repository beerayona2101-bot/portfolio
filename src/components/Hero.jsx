import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Megaphone, Radio, ChevronRight } from 'lucide-react';
import { CORE_DIVISIONS } from '../data/servicesData';

function SpotlightIndicatorCard({ division, index, onScrollTo }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const iconMap = {
    Code2: Code2,
    Megaphone: Megaphone,
    Radio: Radio
  };
  const Icon = iconMap[division.icon];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onScrollTo(division.linkTarget)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group cursor-pointer relative rounded-2xl p-6 bg-[#0C0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 shadow-xl ${division.borderClass}`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(280px circle at ${x}px ${y}px, ${division.color}22, transparent 70%)`
          )
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.06]">
            {division.number} • {division.tag}
          </span>
          <div 
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform"
            style={{ color: division.color }}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
          <span>{division.title}</span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all opacity-0 group-hover:opacity-100" />
        </h3>

        <p className="text-xs text-slate-400 mb-4 line-clamp-2">
          {division.shortDesc}
        </p>

        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: division.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero({ onStartProject }) {
  const handleScrollTo = (target) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple & Punchy Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Status Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium tracking-wide">Technology • Marketing • Media</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Hyderabad, India</span>
            </div>
          </div>

          {/* Main Hero Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Build. Market. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Broadcast.
            </span>
          </h1>

          {/* 1 Short Supporting Line */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-normal">
            Web & Mobile Apps, Digital Marketing, and YouTube Live Event Media — unified under one team.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 bg-size-200 hover:bg-right transition-all shadow-lg shadow-indigo-600/30 text-sm"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('#portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all text-sm"
            >
              <span>View Our Work</span>
            </motion.button>
          </div>
        </div>

        {/* 3 Core Services Indicator Cards */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CORE_DIVISIONS.map((division, idx) => (
              <SpotlightIndicatorCard 
                key={division.id} 
                division={division} 
                index={idx}
                onScrollTo={handleScrollTo} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
