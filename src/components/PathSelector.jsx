import React from 'react';
import { ArrowRight, Code2, Megaphone, Radio, Compass } from 'lucide-react';

export default function PathSelector({ onSelectPath }) {
  const pathways = [
    {
      id: "product",
      title: "I Need a Digital Product",
      sub: "Website / Web App / Mobile App",
      desc: "Fast custom websites, management dashboards, ERP/CRM, and cross-platform mobile apps.",
      cta: "Explore Development →",
      target: "#tech-services",
      color: "border-sky-500/30 hover:border-sky-500/60 bg-sky-500/5",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      buttonColor: "bg-sky-600 hover:bg-sky-500",
      icon: Code2
    },
    {
      id: "customers",
      title: "I Need More Customers",
      sub: "Marketing / Ads / Content",
      desc: "Targeted Meta Ads, Instagram growth, promotional posters, and high-engagement video reels.",
      cta: "Explore Marketing →",
      target: "#digital-services",
      color: "border-rose-500/30 hover:border-rose-500/60 bg-rose-500/5",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      buttonColor: "bg-rose-600 hover:bg-rose-500",
      icon: Megaphone
    },
    {
      id: "event",
      title: "I Need My Event Live",
      sub: "YouTube Live / Event Media",
      desc: "4K live streaming, hardware ATEM switchers, cinema cameras, and studio sound for events.",
      cta: "Explore Event Media →",
      target: "#live-services",
      color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      buttonColor: "bg-emerald-600 hover:bg-emerald-500",
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
    <section className="py-16 bg-[#080910] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>Choose Your Need</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What Are You Looking For?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Select your goal to find the right NYKS service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                onClick={() => handleScroll(path.target, path.title)}
                className={`group rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg ${path.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${path.badgeColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Quick Path
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-white">
                    {path.title}
                  </h4>

                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {path.sub}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {path.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08]">
                  <span className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${path.buttonColor}`}>
                    <span>{path.cta}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
