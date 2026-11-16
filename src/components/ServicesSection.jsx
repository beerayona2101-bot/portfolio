import React from 'react';
import DevServices from './DevServices';
import MarketingServices from './MarketingServices';
import MediaServices from './MediaServices';
import { Layers } from 'lucide-react';

export default function ServicesSection({ onStartProject }) {
  return (
    <section id="services" className="py-24 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What We Do
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From building your digital product to promoting your brand and broadcasting your events — NYKS MEDIA handles the complete digital journey.
          </p>
        </div>

        {/* Division 01 — Web & Mobile Application Development */}
        <DevServices onStartProject={onStartProject} />

        {/* Division 02 — Digital Marketing */}
        <MarketingServices onStartProject={onStartProject} />

        {/* Division 03 — YouTube Live & Event Media */}
        <MediaServices onStartProject={onStartProject} />

      </div>
    </section>
  );
}
