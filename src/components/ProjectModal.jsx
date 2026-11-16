import React from 'react';
import { X, CheckCircle2, ArrowRight, Cpu, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose, onStartSimilar }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0D101C] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/[0.15] text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D101C] via-[#0D101C]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-2.5 py-0.5 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.15] text-[10px] font-semibold text-white mb-1.5 inline-block">
              {project.division} • {project.categoryLabel}
            </span>
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content - Crisp 1-line points */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          
          <p className="text-xs text-slate-300">
            {project.shortDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Problem */}
            <div className="p-3.5 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-rose-400 uppercase mb-1">
                Challenge
              </div>
              <p className="text-xs text-slate-300">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-3.5 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-sky-400 uppercase mb-1">
                Solution
              </div>
              <p className="text-xs text-slate-300">
                {project.solution}
              </p>
            </div>

            {/* Tech */}
            <div className="p-3.5 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-indigo-400 uppercase mb-1">
                Stack
              </div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="p-3.5 rounded-xl bg-[#121626] border border-white/[0.06]">
              <div className="text-[11px] font-bold text-emerald-400 uppercase mb-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Result
              </div>
              <p className="text-xs text-slate-300">
                {project.result}
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090B12] border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              if (onStartSimilar) onStartSimilar(project.title);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors"
          >
            Build Similar Project →
          </button>
        </div>

      </div>
    </div>
  );
}
