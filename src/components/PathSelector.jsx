import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Megaphone, Radio, Compass, Play } from 'lucide-react';

export default function PathSelector({ onSelectPath }) {
  const pathways = [
    {
      id: "product",
      title: "I Need a Digital Product",
      sub: "Website / Web App / Mobile App",
      desc: "Fast custom websites, management dashboards, ERP/CRM, and cross-platform mobile apps.",
      cta: "Explore Development →",
      target: "#tech-services",
      color: "border-cyan-500/40 hover:border-cyan-400/80 bg-gradient-to-b from-cyan-950/30 to-[#0A0E1A]",
      badgeColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
      buttonColor: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/30",
      icon: Code2
    },
    {
      id: "customers",
      title: "I Need More Customers",
      sub: "Marketing / Ads / Content",
      desc: "Targeted Meta Ads, Instagram growth, promotional posters, and high-engagement video reels.",
      cta: "Explore Marketing →",
      target: "#digital-services",
      color: "border-pink-500/40 hover:border-pink-400/80 bg-gradient-to-b from-pink-950/30 to-[#120812]",
      badgeColor: "text-pink-400 bg-pink-500/15 border-pink-500/30",
      buttonColor: "bg-gradient-to-r from-pink-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 shadow-pink-600/30",
      icon: Megaphone
    },
    {
      id: "event",
      title: "I Need My Event Live",
      sub: "YouTube Live / Event Media",
      desc: "4K live streaming, hardware ATEM switchers, cinema cameras, and studio sound for events.",
      cta: "Explore Event Media →",
      target: "#live-services",
      color: "border-red-500/40 hover:border-red-400/80 bg-gradient-to-b from-red-950/30 to-[#120608]",
      badgeColor: "text-red-400 bg-red-500/15 border-red-500/30",
      buttonColor: "bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 shadow-red-600/30",
      icon: Radio
    }
  ];

  const handleScroll = (target, title) => {
    if (onSelectPath) {
      onSelectPath(title);
    }
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#080B14] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-rose-500/15 border border-white/[0.15] text-xs font-bold text-white uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Pathway</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Are You Looking For?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
            Choose your current goal to see how NYKS MEDIA executes it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.id}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleScroll(path.target, path.title)}
                className={`group rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl ${path.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl border ${path.badgeColor} shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08]">
                      Pathway
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1.5 group-hover:text-white">
                    {path.title}
                  </h4>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {path.sub}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {path.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white transition-all shadow-lg ${path.buttonColor}`}>
                    <span>{path.cta}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
