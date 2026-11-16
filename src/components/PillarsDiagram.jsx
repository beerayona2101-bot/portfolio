import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Megaphone, Radio, ArrowRight, Zap } from 'lucide-react';

export default function PillarsDiagram() {
  const [activeNode, setActiveNode] = useState("tech");

  const nodes = [
    {
      id: "tech",
      num: "01",
      title: "TECHNOLOGY",
      sub: "Build Your Product",
      items: ["Websites & Portals", "Custom ERP / CRM", "Mobile Applications", "Cloud Backend & APIs"],
      color: "#38BDF8",
      gradient: "from-sky-500/15 to-indigo-600/5",
      accentBorder: "border-sky-500/50",
      textColor: "text-sky-400",
      icon: Code2
    },
    {
      id: "marketing",
      num: "02",
      title: "DIGITAL MARKETING",
      sub: "Reach & Convert",
      items: ["Targeted Meta Ads", "Instagram & LinkedIn Growth", "Creative Posters", "Video Reels & Shorts"],
      color: "#F43F5E",
      gradient: "from-rose-500/15 to-amber-600/5",
      accentBorder: "border-rose-500/50",
      textColor: "text-rose-400",
      icon: Megaphone
    },
    {
      id: "live",
      num: "03",
      title: "EVENT MEDIA",
      sub: "Broadcast Live",
      items: ["4K YouTube Live", "Multi-Camera Setups", "ATEM Video Switchers", "Pro Wireless Audio"],
      color: "#10B981",
      gradient: "from-emerald-500/15 to-teal-600/5",
      accentBorder: "border-emerald-500/50",
      textColor: "text-emerald-400",
      icon: Radio
    }
  ];

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-[#0C0F1A] border border-white/[0.08] shadow-xl">
      
      {/* Top clean bar */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
        <div>
          <h3 className="text-lg font-bold text-white">
            The Complete Digital Flow
          </h3>
          <p className="text-xs text-slate-400">
            One team guiding your idea from code to audience and broadcast.
          </p>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] text-[11px] text-slate-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Idea → Build → Market → Broadcast</span>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;

          return (
            <motion.div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              whileHover={{ y: -3 }}
              className={`rounded-xl p-5 cursor-pointer transition-all duration-200 border ${
                isSelected 
                  ? `bg-gradient-to-b ${node.gradient} ${node.accentBorder} shadow-lg` 
                  : 'bg-[#101422] border-white/[0.06] hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold tracking-wider uppercase ${node.textColor}`}>
                  {node.num} • {node.title}
                </span>
                <Icon className={`w-4 h-4 ${node.textColor}`} />
              </div>

              <h4 className="text-sm font-bold text-white mb-3">
                {node.sub}
              </h4>

              <ul className="space-y-1.5">
                {node.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: node.color }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
