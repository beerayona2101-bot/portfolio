import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Palette, 
  Video, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Instagram,
  Facebook
} from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/servicesData';

export default function MarketingServices({ onStartProject }) {
  const iconMap = {
    Share2: Share2,
    Palette: Palette,
    Video: Video,
    Target: Target
  };

  return (
    <div id="digital-services" className="scroll-mt-24 pt-14 pb-18 border-t border-white/[0.08]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-xs font-bold text-pink-400 uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{DIGITAL_SERVICES.badge}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            {DIGITAL_SERVICES.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {DIGITAL_SERVICES.description}
          </p>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartProject("Digital Marketing")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 transition-all shadow-xl shadow-pink-600/30"
          >
            <span>{DIGITAL_SERVICES.ctaText}</span>
          </motion.button>
        </div>
      </div>

      {/* 4 Cards: Social, Creative, Video, Meta Ads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {DIGITAL_SERVICES.categories.map((cat, idx) => {
          const Icon = iconMap[cat.icon];

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="rounded-3xl p-6 bg-gradient-to-b from-[#1C0E1C] via-[#140814] to-[#0A050A] border border-white/[0.1] hover:border-pink-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-pink-500/15 text-pink-400 border border-pink-500/30 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1.5">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-300 mb-5">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-pink-400 font-semibold">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Meta Advertising & Social Channels Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#200B1A] via-[#140714] to-[#0B040B] border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-500 text-white shadow-lg shrink-0">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Official Social Profiles: @NYKS_MEDIA_DIGITAL
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Follow our daily marketing insights, reels production, and promotional campaign releases.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="https://www.instagram.com/nyks_media_digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/nyks_media_digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg"
          >
            <Facebook className="w-4 h-4" />
            <span>Facebook</span>
          </a>
        </div>
      </div>

    </div>
  );
}
