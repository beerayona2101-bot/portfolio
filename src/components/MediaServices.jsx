import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, 
  ArrowRight, 
  Signal, 
  CheckCircle2, 
  Play, 
  Youtube, 
  Radio, 
  Volume2 
} from 'lucide-react';
import { LIVE_SERVICES } from '../data/servicesData';

export default function MediaServices({ onStartProject }) {
  const [activeCamera, setActiveCamera] = useState("CAM 1 — Stage Master");

  const cameraAngles = [
    { id: "cam1", label: "CAM 1 — Stage", res: "4K 60fps" },
    { id: "cam2", label: "CAM 2 — Speaker", res: "4K 60fps" },
    { id: "cam3", label: "CAM 3 — Audience", res: "1080p" },
    { id: "slides", label: "SLIDES — Keynote", res: "1080p" }
  ];

  return (
    <div id="live-services" className="scroll-mt-24 pt-14 pb-20 border-t border-white/[0.08]">
      
      {/* Header with YouTube Red & Live Glow */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>{LIVE_SERVICES.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            YouTube Live & Event Media
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Broadcast-quality multi-camera live streaming for celebrations, weddings, and corporate summits.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("YouTube Live & Event Media")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all shadow-xl shadow-red-600/30"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{LIVE_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Switcher Deck & Highlights */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E0F14] via-[#12080D] to-[#0A0608] border border-red-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-600 text-white font-mono text-xs font-bold shadow-lg shadow-red-600/50">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                LIVE BROADCAST
              </span>

              <div className="flex items-end gap-1 h-5 px-2.5 py-1 rounded bg-black/60 border border-red-500/30">
                <span className="w-1 bg-red-500 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-rose-400 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-amber-400 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar"></span>
              </div>
            </div>

            <div className="text-xs text-slate-200 font-mono flex items-center gap-1.5">
              <Signal className="w-4 h-4 text-emerald-400" />
              <span>4K / 60FPS • ATEM MULTI-CAM</span>
            </div>
          </div>

          <h4 className="text-xl font-bold text-white mb-2">
            Broadcast-Grade Multi-Camera Setup
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Hardware video switchers, wireless audio mixing, and multi-SIM bonded internet guaranteeing zero stream drops and crystal clarity on YouTube.
          </p>

          {/* Interactive Vision Switcher Simulation */}
          <div className="p-4 rounded-2xl bg-[#090406] border border-white/[0.08] mb-6">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Interactive Switcher Preview</span>
              <span className="text-red-400 font-bold">{activeCamera}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cameraAngles.map((cam) => {
                const isLive = activeCamera === cam.label;
                return (
                  <button
                    key={cam.id}
                    onClick={() => setActiveCamera(cam.label)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isLive 
                        ? 'bg-red-900/50 border-red-500 text-white shadow-lg shadow-red-500/30' 
                        : 'bg-white/[0.03] border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                      <span>{cam.id.toUpperCase()}</span>
                      {isLive && <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />}
                    </div>
                    <div className="text-xs font-bold truncate">
                      {cam.label.split('—')[1] || cam.label}
                    </div>
                    <div className="text-[10px] opacity-75">{cam.res}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Colorful Highlight Cards */}
          <div className="grid grid-cols-2 gap-3">
            {LIVE_SERVICES.productionHighlights.map((hl, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
                <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>{hl.title}</span>
                </div>
                <div className="text-[11px] text-slate-300">{hl.detail}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Coverage Scope with Colorful Accent */}
        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1A0E18] to-[#0E0610] border border-purple-500/30 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" />
              <span>Event Coverage</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">
              Events We Broadcast Live
            </h4>

            <div className="space-y-2.5">
              {LIVE_SERVICES.servicesList.map((svc, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                      <span>{svc.name}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 pl-4">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onStartProject("YouTube Live Streaming")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-red-600/30 via-purple-600/30 to-rose-600/30 hover:from-red-600/40 hover:to-purple-600/40 text-white border border-red-500/40 text-xs font-bold transition-all shadow-lg"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              <span>Book Your Event Stream Date</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>

    </div>
  );
}
