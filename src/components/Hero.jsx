import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Megaphone, 
  Radio, 
  Play, 
  TrendingUp, 
  Layers, 
  Signal, 
  Sparkles,
  ChevronRight,
  Tv,
  Smartphone
} from 'lucide-react';
import { CORE_DIVISIONS } from '../data/servicesData';

function DivisionCard({ division, index, onScrollTo }) {
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

  const borderGlowMap = {
    tech: "hover:border-cyan-400/60 hover:shadow-cyan-500/25",
    digital: "hover:border-pink-500/60 hover:shadow-pink-500/25",
    live: "hover:border-red-500/60 hover:shadow-red-500/30"
  };

  const bgGradientMap = {
    tech: "from-cyan-500/10 via-[#0E1528] to-[#0A0D18]",
    digital: "from-pink-500/10 via-[#180E1C] to-[#0A0D18]",
    live: "from-red-500/10 via-[#1A0E12] to-[#0A0D18]"
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => onScrollTo(division.linkTarget)}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group cursor-pointer relative rounded-2xl p-6 bg-gradient-to-b ${bgGradientMap[division.id]} border border-white/[0.12] transition-all duration-300 shadow-xl ${borderGlowMap[division.id]} overflow-hidden`}
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(320px circle at ${x}px ${y}px, ${division.color}25, transparent 70%)`
          )
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white/[0.08] text-white border border-white/[0.1]">
            0{index + 1} • {division.tag}
          </span>
          <div 
            className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.1] group-hover:scale-110 transition-transform shadow-md"
            style={{ color: division.color }}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white flex items-center justify-between">
          <span>{division.title}</span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 group-hover:text-white transition-all opacity-0 group-hover:opacity-100" />
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {division.shortDesc}
        </p>

        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-300 group-hover:text-white transition-colors flex items-center gap-1.5">
            <span>Explore Division</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span 
            className="w-2.5 h-2.5 rounded-full shadow-lg"
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header & Visual Presentation */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          
          {/* Top 3-Pillar Vibrant Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-rose-500/15 border border-white/[0.15] backdrop-blur-xl text-xs text-white shadow-lg mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-md shadow-red-500"></span>
            <span className="font-bold text-cyan-300">Technology</span>
            <span className="text-slate-500">•</span>
            <span className="font-bold text-pink-300">Marketing</span>
            <span className="text-slate-500">•</span>
            <span className="font-bold text-rose-300">YouTube & Live Media</span>
          </div>

          {/* Dynamic 3-Tone Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Build.
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Market.
            </span>{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Broadcast.
            </span>
          </h1>

          {/* Crisp, Bold One-Liner */}
          <p className="text-base sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            NYKS MEDIA combines custom software engineering, high-performing digital marketing, and professional YouTube Live event broadcasting.
          </p>

          {/* Call to Actions with Vibrant Gradients */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-500 bg-size-200 hover:bg-right transition-all duration-300 shadow-xl shadow-purple-600/35 hover:shadow-cyan-500/40 text-sm"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('#live-services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 transition-all text-sm shadow-lg shadow-red-600/20"
            >
              <Play className="w-4 h-4 text-red-400 fill-red-400" />
              <span>Explore YouTube Live</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Interactive 3D Showcase Hub (YouTube Player, App Console, Ad Analytics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Web & App Dev Interactive Preview */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0C1527] to-[#080E1B] border border-cyan-500/30 shadow-xl hover:border-cyan-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                APP DEV LAB
              </span>
            </div>

            <div className="bg-[#050912] rounded-xl p-3.5 border border-white/[0.06] font-mono text-[11px] text-slate-300 mb-4 space-y-1">
              <div className="text-cyan-400 flex items-center justify-between">
                <span>const app = new NyksApp();</span>
                <span className="text-emerald-400 text-[10px]">● Online</span>
              </div>
              <div className="text-purple-300">app.deploy(&#123; speed: "sub-second" &#125;);</div>
              <div className="text-slate-400">// React, Vite, Flutter & Cloud</div>
            </div>

            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-1 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">Custom ERP</span>
              <span className="px-2 py-1 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20">Mobile Apps</span>
              <span className="px-2 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/20">Modern Web</span>
            </div>
          </div>

          {/* Card 2: Digital Marketing Growth Preview */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1C0E1B] to-[#100812] border border-pink-500/30 shadow-xl hover:border-pink-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-pink-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Meta Ad Growth</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/15 text-pink-300 border border-pink-500/30">
                +280% ROI
              </span>
            </div>

            <div className="bg-[#0D050E] rounded-xl p-3.5 border border-white/[0.06] mb-4">
              <div className="flex items-end justify-between gap-1 h-14 pt-2">
                <div className="w-1/5 bg-pink-500/30 rounded-t h-[40%]" />
                <div className="w-1/5 bg-pink-500/50 rounded-t h-[65%]" />
                <div className="w-1/5 bg-purple-500/60 rounded-t h-[80%]" />
                <div className="w-1/5 bg-rose-500/80 rounded-t h-[95%]" />
                <div className="w-1/5 bg-gradient-to-t from-pink-500 to-amber-400 rounded-t h-[100%] shadow-lg shadow-pink-500/40" />
              </div>
              <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-1">
                <span>Reach</span>
                <span>Clicks</span>
                <span>Leads</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-1 rounded bg-pink-500/15 text-pink-300 border border-pink-500/20">Instagram Growth</span>
              <span className="px-2 py-1 rounded bg-rose-500/15 text-rose-300 border border-rose-500/20">Video Reels</span>
              <span className="px-2 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20">Meta Funnels</span>
            </div>
          </div>

          {/* Card 3: YouTube Live Broadcast Player Preview */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1E0C0F] to-[#120608] border border-red-500/35 shadow-xl hover:border-red-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-red-400">YOUTUBE LIVE</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                4K 60FPS
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-[#0A0405] border border-red-500/20 p-4 mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-red-400" />
                  <span>ATEM Multi-Cam Deck</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Zero Packet Loss • Studio Audio
                </div>
              </div>

              {/* Dynamic Sound Equalizer */}
              <div className="flex items-end gap-1 h-6">
                <span className="w-1 bg-red-500 rounded-full equalizer-bar" />
                <span className="w-1 bg-red-400 rounded-full equalizer-bar" />
                <span className="w-1 bg-amber-400 rounded-full equalizer-bar" />
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <span className="px-2 py-1 rounded bg-red-500/15 text-red-300 border border-red-500/20">Weddings Live</span>
              <span className="px-2 py-1 rounded bg-orange-500/15 text-orange-300 border border-orange-500/20">Concerts</span>
              <span className="px-2 py-1 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20">Corporate Summits</span>
            </div>
          </div>

        </div>

        {/* 3 Core Divisions Indicator Cards */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_DIVISIONS.map((division, idx) => (
              <DivisionCard 
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
