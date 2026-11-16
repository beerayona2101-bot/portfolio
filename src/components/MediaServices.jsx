import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, 
  ArrowRight, 
  Signal, 
  CheckCircle2 
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
    <div id="live-services" className="scroll-mt-24 pt-12 pb-16 border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            {LIVE_SERVICES.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            {LIVE_SERVICES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {LIVE_SERVICES.description}
          </p>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("YouTube Live & Event Media")}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/30"
          >
            <span>{LIVE_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Switcher Deck & Highlights */}
        <div className="lg:col-span-7 rounded-2xl p-6 bg-[#0E111C] border border-white/[0.08]">
          
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600 text-white font-mono text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                LIVE
              </span>
              <div className="flex items-end gap-1 h-4 px-2 py-0.5 rounded bg-black/40 border border-white/[0.08]">
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar"></span>
                <span className="w-1 bg-emerald-400 rounded-full equalizer-bar"></span>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
              <Signal className="w-3.5 h-3.5 text-emerald-400" />
              <span>4K / 60FPS • ATEM MULTI-CAM</span>
            </div>
          </div>

          <h4 className="text-lg font-bold text-white mb-2">
            Multi-Camera Broadcast Setup
          </h4>
          <p className="text-xs text-slate-400 mb-5">
            Hardware video switchers, wireless audio mixing, and bonded internet for zero stream drops.
          </p>

          {/* Simple Switcher Deck Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {cameraAngles.map((cam) => {
              const isLive = activeCamera === cam.label;
              return (
                <button
                  key={cam.id}
                  onClick={() => setActiveCamera(cam.label)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    isLive 
                      ? 'bg-red-950/40 border-red-500/60 shadow-sm' 
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 mb-0.5">
                    <span>{cam.id.toUpperCase()}</span>
                    {isLive && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />}
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {cam.label.split('—')[1] || cam.label}
                  </div>
                  <div className="text-[10px] text-slate-400">{cam.res}</div>
                </button>
              );
            })}
          </div>

          {/* 4 Crisp Highlight Chips */}
          <div className="grid grid-cols-2 gap-2">
            {LIVE_SERVICES.productionHighlights.map((hl, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-xs font-bold text-white">{hl.title}</div>
                <div className="text-[11px] text-slate-400">{hl.detail}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Coverage Scope */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-[#0E111C] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Coverage
            </div>
            <h4 className="text-base font-bold text-white mb-4">
              Events We Stream
            </h4>

            <div className="space-y-2">
              {LIVE_SERVICES.servicesList.map((svc, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{svc.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 pl-3.5 mt-0.5">
                    {svc.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/[0.06]">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onStartProject("YouTube Live Streaming")}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all"
            >
              <span>Book Event Stream Date</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>

    </div>
  );
}
