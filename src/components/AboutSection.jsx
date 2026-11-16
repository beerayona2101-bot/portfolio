import React from 'react';
import { Code2, Megaphone, Radio, ArrowRight, Layers, Sparkles } from 'lucide-react';
import PillarsDiagram from './PillarsDiagram';
import AnimatedLogoShowcase from './AnimatedLogoShowcase';

export default function AboutSection({ onOpenContact }) {
  const pillars = [
    {
      title: "Technology",
      subtitle: "Web & Apps",
      desc: "Fast websites, custom management systems, and high-performance mobile apps.",
      icon: Code2,
      color: "text-sky-400",
      accentBg: "bg-sky-500/10",
      borderAccent: "hover:border-sky-500/40",
      targetId: "#tech-services"
    },
    {
      title: "Marketing",
      subtitle: "Ads & Content",
      desc: "Targeted Meta Ads, Instagram growth, dynamic video reels, and brand design.",
      icon: Megaphone,
      color: "text-rose-400",
      accentBg: "bg-rose-500/10",
      borderAccent: "hover:border-rose-500/40",
      targetId: "#digital-services"
    },
    {
      title: "Media",
      subtitle: "Live Broadcast",
      desc: "Professional multi-camera YouTube Live streaming for events and celebrations.",
      icon: Radio,
      color: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      borderAccent: "hover:border-emerald-500/40",
      targetId: "#live-services"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#080A10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & 3D Animated Logo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: About Text & Value Proposition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>About NYKS MEDIA</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              More Than a <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
                Media Company.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              NYKS MEDIA brings technology, marketing, and media together under one roof. We build your digital product, promote your brand to the right audience, and broadcast your key moments live to the world.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sky-400 font-bold">
                01. TECHNOLOGY
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-rose-400 font-bold">
                02. DIGITAL
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-emerald-400 font-bold">
                03. LIVE MEDIA
              </span>
            </div>
          </div>

          {/* Right: User's Official Logo with 3D Tilt & Glow Animation */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <AnimatedLogoShowcase />
          </div>

        </div>

        {/* 3 Simple Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 bg-[#0E111C] border border-white/[0.08] transition-all duration-300 ${pillar.borderAccent} hover:-translate-y-1 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${pillar.accentBg} ${pillar.color} border border-white/[0.06]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.desc}
                </p>

                <a
                  href={pillar.targetId}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Explore details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Clean Interactive Visual Diagram */}
        <div>
          <PillarsDiagram />
        </div>

      </div>
    </section>
  );
}
